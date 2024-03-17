"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriApiPaymentTransferBank = void 0;
var _constants = require("../../../../constants");
var _helpers = require("../../../../helpers");
var useGafpriApiPaymentTransferBank = exports.useGafpriApiPaymentTransferBank = function useGafpriApiPaymentTransferBank(_ref) {
  var usePages = _ref.usePages,
    useAttributes = _ref.useAttributes,
    useError = _ref.useError,
    token = _ref.token;
  var newError = function newError(newErrorValue) {
    useError.actions.newError({
      newErrorValue: newErrorValue,
      functionAction: usePages.actions.returnInit
    });
  };
  var add = function add() {
    if (parseFloat(useAttributes.usePayment.states.total) > 0 && token) {
      var payload = {
        total: parseFloat(useAttributes.usePayment.states.total),
        note: useAttributes.usePayment.states.note,
        posts: {
          visibility: 'public'
        },
        paymentMethods: useAttributes.usePayment.useGeneralPaymentMethods.states.arrayPaymentMethod
      };
      (0, _helpers.gafpriFetch)({
        initMethod: 'POST',
        initRoute: _constants.PAYMENT_TRANSFER_BANK_ROUTE,
        initCredentials: payload,
        initToken: {
          token: token
        },
        functionFetching: usePages.actions.onFetching,
        functionSuccess: usePages.actions.returnInit,
        functionError: newError
      });
    }
  };

  // Define las acciones necesarias para los atributos de Site
  var actions = {
    newError: newError,
    add: add
  };
  return {
    actions: actions
  };
};