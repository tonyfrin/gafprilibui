"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriAttributesPayment = useGafpriAttributesPayment;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _paymentMethods = require("../paymentMethods");
var _Validations = require("../../../Validations");
function useGafpriAttributesPayment(_ref) {
  var currencies = _ref.currencies,
    useBankType = _ref.useBankType;
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    type = _useState2[0],
    setType = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    total = _useState4[0],
    setTotal = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    note = _useState6[0],
    setNote = _useState6[1];
  var useGeneralPaymentMethods = (0, _paymentMethods.useGafpriAttributesGeneralPaymentMethods)({
    currencies: currencies,
    useBankType: useBankType
  });
  var infoReset = function infoReset() {
    setType('');
    setTotal('');
    setNote('');
    useGeneralPaymentMethods.actions.infoReset();
  };
  var validationButtonNextPaymentCash = function validationButtonNextPaymentCash() {
    return (0, _Validations.generalValidationButtonNext)({
      validations: [useGeneralPaymentMethods.states.currenciesIdValid, parseFloat(total) > 0, useGeneralPaymentMethods.useCashTransactions.states.change > 0, useGeneralPaymentMethods.usePaymentMethods.states.change > 0],
      inputId: 'cash'
    });
  };

  /**
   * Export
   *
   *
   */
  var states = {
    type: type,
    total: total,
    note: note
  };
  var actions = {
    infoReset: infoReset,
    setType: setType,
    setTotal: setTotal,
    setNote: setNote,
    validationButtonNextPaymentCash: validationButtonNextPaymentCash
  };
  return {
    states: states,
    actions: actions,
    useGeneralPaymentMethods: useGeneralPaymentMethods
  };
}