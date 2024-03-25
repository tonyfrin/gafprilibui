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
        type: useAttributes.states.type,
        note: useAttributes.states.note,
        paymentMethod: useAttributes.useGeneralPaymentMethods.states.arrayPaymentMethod
      };
      (0, _helpers.gafpriFetch)({
        initMethod: 'POST',
        initRoute: _constants.PAYMENT_ORDER_ROUTE,
        initCredentials: payload,
        initToken: {
          token: token
        },
        functionFetching: usePages.actions.onFetching,
        functionSuccess: useOrder.pages.actions.onOrderList,
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