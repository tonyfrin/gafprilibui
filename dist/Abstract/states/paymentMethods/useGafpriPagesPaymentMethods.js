"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriPagesPaymentMethods = useGafpriPagesPaymentMethods;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
function useGafpriPagesPaymentMethods() {
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    isFetching = _useState2[0],
    setIsFetching = _useState2[1];
  var _useState3 = (0, _react.useState)(true),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    isCash = _useState4[0],
    setIsCash = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    isTransfer = _useState6[0],
    setIsTransfer = _useState6[1];
  var onFetching = function onFetching() {
    setIsFetching(true);
    setIsCash(false);
    setIsTransfer(false);
  };
  var onCash = function onCash() {
    setIsFetching(false);
    setIsCash(true);
    setIsTransfer(false);
  };
  var onTransfer = function onTransfer() {
    setIsFetching(false);
    setIsCash(false);
    setIsTransfer(true);
  };

  /**
   * Export
   *
   *
   */
  var states = {
    isFetching: isFetching,
    isCash: isCash,
    isTransfer: isTransfer
  };
  var actions = {
    onFetching: onFetching,
    onCash: onCash,
    onTransfer: onTransfer
  };
  return {
    states: states,
    actions: actions
  };
}