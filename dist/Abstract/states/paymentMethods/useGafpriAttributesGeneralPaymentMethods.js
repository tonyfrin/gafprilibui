"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriAttributesGeneralPaymentMethods = useGafpriAttributesGeneralPaymentMethods;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _useGafpriAttributesPaymentMethods = require("./useGafpriAttributesPaymentMethods");
var _cashRegister = require("../cashRegister");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function useGafpriAttributesGeneralPaymentMethods() {
  var _useState = (0, _react.useState)([]),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    arrayPaymentMethod = _useState2[0],
    setArrayPaymentMethod = _useState2[1];
  var usePaymentMethods = (0, _useGafpriAttributesPaymentMethods.useGafpriAttributesPaymentMethods)();
  var useCashTransactions = (0, _cashRegister.useGafpriAttributesCashTransactions)();
  var _useState3 = (0, _react.useState)(0),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    totalPaymentMethod = _useState4[0],
    setTotalPaymentMethod = _useState4[1];
  var _useState5 = (0, _react.useState)(0),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    totalMethods = _useState6[0],
    setTotalMethods = _useState6[1];
  var infoReset = function infoReset() {
    usePaymentMethods.actions.infoReset();
    useCashTransactions.actions.infoReset();
    setArrayPaymentMethod([]);
  };
  var addCashTransaction = function addCashTransaction() {
    setArrayPaymentMethod([_objectSpread(_objectSpread({}, arrayPaymentMethod), {}, {
      paymentMethod: usePaymentMethods.states,
      cashTransactions: useCashTransactions.states
    })]);
    usePaymentMethods.actions.infoReset();
    useCashTransactions.actions.infoReset();
  };
  var deletePaymentMethod = function deletePaymentMethod(index) {
    var newArray = (0, _toConsumableArray2["default"])(arrayPaymentMethod);
    if (index >= 0 && index < newArray.length) {
      var updatedArray = [].concat((0, _toConsumableArray2["default"])(newArray.slice(0, index)), (0, _toConsumableArray2["default"])(newArray.slice(index + 1)));
      setArrayPaymentMethod(updatedArray);
    } else {
      console.error('Índice fuera de los límites del array'); // eslint-disable-line no-console
    }
  };
  var emptyPaymentMethodArray = function emptyPaymentMethodArray() {
    setArrayPaymentMethod([]);
  };
  var calculateTotalPaymentMethod = function calculateTotalPaymentMethod() {
    return arrayPaymentMethod.reduce(function (acc, item) {
      var newSubTotal = parseFloat("".concat(item.paymentMethod.change));
      return acc + newSubTotal;
    }, 0);
  };
  var calculateTotalCashTransactions = function calculateTotalCashTransactions() {
    return arrayPaymentMethod.reduce(function (acc, item) {
      if (!item.cashTransactions) return acc;
      var newSubTotal = parseFloat("".concat(item.cashTransactions.change));
      return acc + newSubTotal;
    }, 0);
  };
  var calculateTotalMethods = function calculateTotalMethods() {
    var totalCashTransactions = calculateTotalCashTransactions();
    var total = totalCashTransactions;
    return total;
  };
  var calculateTotal = function calculateTotal() {
    var newTotalPaymentMethod = calculateTotalPaymentMethod();
    var newTotalMethods = calculateTotalMethods();
    setTotalPaymentMethod(newTotalPaymentMethod);
    setTotalMethods(newTotalMethods);
  };
  _react["default"].useEffect(function () {
    calculateTotal();
  }, [arrayPaymentMethod]); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * Export
   *
   *
   */
  var states = {
    arrayPaymentMethod: arrayPaymentMethod,
    totalPaymentMethod: totalPaymentMethod,
    totalMethods: totalMethods
  };
  var actions = {
    infoReset: infoReset,
    addCashTransaction: addCashTransaction,
    emptyPaymentMethodArray: emptyPaymentMethodArray,
    deletePaymentMethod: deletePaymentMethod
  };
  return {
    states: states,
    actions: actions,
    usePaymentMethods: usePaymentMethods,
    useCashTransactions: useCashTransactions
  };
}