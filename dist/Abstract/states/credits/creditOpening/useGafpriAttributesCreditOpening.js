"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriAttributesCreditOpening = useGafpriAttributesCreditOpening;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
function useGafpriAttributesCreditOpening() {
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    entityId = _useState2[0],
    setEntityId = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    authorizedLogin = _useState4[0],
    setAuthorizedLogin = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    authorizedPassword = _useState6[0],
    setAuthorizedPassword = _useState6[1];
  var _useState7 = (0, _react.useState)(0),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    amount = _useState8[0],
    setAmount = _useState8[1];
  var infoReset = function infoReset() {
    setEntityId(0);
    setAuthorizedLogin('');
    setAuthorizedPassword('');
    setAmount(0);
  };

  /**
   * Export
   *
   *
   */
  var states = {
    entityId: entityId,
    authorizedLogin: authorizedLogin,
    authorizedPassword: authorizedPassword,
    amount: amount
  };
  var actions = {
    infoReset: infoReset,
    setEntityId: setEntityId,
    setAuthorizedLogin: setAuthorizedLogin,
    setAuthorizedPassword: setAuthorizedPassword,
    setAmount: setAmount
  };
  return {
    states: states,
    actions: actions
  };
}