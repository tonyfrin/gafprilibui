"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriAttributesCashPM = useGafpriAttributesCashPM;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
function useGafpriAttributesCashPM() {
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    type = _useState2[0],
    setType = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    currenciesId = _useState4[0],
    setCurrenciesId = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    amount = _useState6[0],
    setAmount = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    change = _useState8[0],
    setChange = _useState8[1];
  var _useState9 = (0, _react.useState)(''),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    note = _useState10[0],
    setNote = _useState10[1];
  var infoReset = function infoReset() {
    setType('');
    setAmount('');
    setChange('');
    setCurrenciesId('');
    setNote('');
  };

  /**
   * Export
   *
   *
   */
  var states = {
    type: type,
    amount: amount,
    change: change,
    currenciesId: currenciesId,
    note: note
  };
  var actions = {
    infoReset: infoReset,
    setType: setType,
    setAmount: setAmount,
    setChange: setChange,
    setCurrenciesId: setCurrenciesId,
    setNote: setNote
  };
  return {
    states: states,
    actions: actions
  };
}