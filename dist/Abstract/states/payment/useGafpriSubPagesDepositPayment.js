"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriSubPagesDepositPayment = useGafpriSubPagesDepositPayment;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
function useGafpriSubPagesDepositPayment(_ref) {
  var useOrder = _ref.useOrder;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    isFetching = _useState2[0],
    setIsFetching = _useState2[1];
  var _useState3 = (0, _react.useState)(true),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    isOrder = _useState4[0],
    setIsOrder = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    isOrderView = _useState6[0],
    setIsOrderView = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    isCredits = _useState8[0],
    setIsCredits = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    isPayment = _useState10[0],
    setIsPayment = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    modalPage = _useState12[0],
    setModalPage = _useState12[1];
  var onFetching = function onFetching() {
    setIsFetching(true);
    setIsOrder(false);
    setIsOrderView(false);
    setIsCredits(false);
    setIsPayment(false);
    setModalPage(false);
  };
  var onOrder = function onOrder() {
    setIsFetching(false);
    setIsOrder(true);
    setIsOrderView(false);
    setIsCredits(false);
    setIsPayment(false);
    setModalPage(false);
  };
  var onOrderView = function onOrderView() {
    setIsFetching(false);
    setIsOrder(false);
    setIsOrderView(true);
    setIsCredits(false);
    setIsPayment(false);
    setModalPage(false);
  };
  var onCredits = function onCredits() {
    setIsFetching(false);
    setIsOrder(false);
    setIsCredits(true);
    setIsPayment(false);
    setModalPage(false);
  };
  var onPayment = function onPayment() {
    setIsFetching(false);
    setIsOrder(false);
    setIsCredits(false);
    setIsPayment(true);
    setModalPage(false);
  };
  var goOrderView = function goOrderView(id) {
    useOrder.attributes.actions.setCurrentId(id);
    onOrderView();
  };
  var openModalPage = function openModalPage() {
    setModalPage(true);
  };
  var closeModalPage = function closeModalPage() {
    setModalPage(false);
  };

  /**
   * Export
   *
   *
   */
  var states = {
    isFetching: isFetching,
    isOrder: isOrder,
    isOrderView: isOrderView,
    isCredits: isCredits,
    isPayment: isPayment,
    modalPage: modalPage
  };
  var actions = {
    onFetching: onFetching,
    onOrder: onOrder,
    onOrderView: onOrderView,
    goOrderView: goOrderView,
    onCredits: onCredits,
    onPayment: onPayment,
    openModalPage: openModalPage,
    closeModalPage: closeModalPage
  };
  return {
    states: states,
    actions: actions
  };
}