"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriApiPayment = void 0;
var _helpers = require("../../../helpers");
var _constants = require("../../../constants");
var useGafpriApiPayment = exports.useGafpriApiPayment = function useGafpriApiPayment(_ref) {
  var usePages = _ref.usePages,
    useOrder = _ref.useOrder,
    useAttributes = _ref.useAttributes,
    useError = _ref.useError,
    token = _ref.token;
  var returnOrderPayment = function returnOrderPayment() {
    usePages.actions.onDeposit();
    useOrder.pages.actions.onOrderPayment();
  };
  var fetchingOrderPayment = function fetchingOrderPayment() {
    usePages.actions.onFetching();
    useOrder.pages.actions.onFetching();
  };
  var successOrderPayment = function successOrderPayment() {
    useAttributes.actions.infoReset();
    useOrder.attributes.actions.infoReset();
    usePages.actions.onDeposit();
    useOrder.pages.actions.onOrderList();
  };
  var newErrorOrderPayment = function newErrorOrderPayment(newErrorValue) {
    useError.actions.newError({
      newErrorValue: newErrorValue,
      functionAction: returnOrderPayment
    });
  };
  var addOrderPayment = function addOrderPayment() {
    if (useOrder.attributes.states.currentId > 0 && token) {
      var payload = {
        orderPostsId: useOrder.attributes.states.currentId,
        total: useAttributes.states.total,
        note: useAttributes.states.note,
        paymentMethods: useAttributes.useGeneralPaymentMethods.states.arrayPaymentMethod,
        posts: {
          visibility: 'public'
        }
      };
      (0, _helpers.gafpriFetch)({
        initMethod: 'POST',
        initRoute: _constants.PAYMENT_ORDER_ROUTE,
        initCredentials: payload,
        initToken: {
          token: token
        },
        functionFetching: fetchingOrderPayment,
        functionSuccess: successOrderPayment,
        functionError: newErrorOrderPayment
      });
    }
  };

  // Define las acciones necesarias para los atributos de Site
  var actions = {
    addOrderPayment: addOrderPayment
  };
  return {
    actions: actions
  };
};