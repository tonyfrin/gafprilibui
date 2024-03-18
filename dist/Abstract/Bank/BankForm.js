"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BankForm = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Components = require("../../Components");
var _Header = require("../Header");
var _Table = require("../Table");
var _helpers = require("../../helpers");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
var bodyMainContainerStyle = function bodyMainContainerStyle() {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  margin-top: 10px;\n"])));
};
var bodyContainerStyle = function bodyContainerStyle() {
  return (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: center;\n  width: 95%;\n"])));
};
var leftMainBodyContainerStyle = function leftMainBodyContainerStyle() {
  return (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 60%;\n  display: block;\n"])));
};
var rigthMainBodyContainerStyle = function rigthMainBodyContainerStyle() {
  return (0, _css.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 40%;\n  display: block;\n"])));
};
var leftBodyContainerStyle = function leftBodyContainerStyle() {
  return (0, _css.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n"])));
};
var rightBodyContainerStyle = function rightBodyContainerStyle() {
  return (0, _css.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])([""])));
};
var expensesContainerStyle = function expensesContainerStyle() {
  return (0, _css.css)(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: rgba(255, 255, 255, 0.75);\n  border-radius: 10px;\n  margin: 1em 0.5em;\n  width: 95%;\n  height: auto;\n"])));
};
var conciliatedContainerStyle = function conciliatedContainerStyle() {
  return (0, _css.css)(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n  background: linear-gradient(\n    to bottom,\n    rgb(77, 174, 205, 0.75),\n    rgb(96, 100, 124, 0.55)\n  );\n  border-radius: 10px;\n  margin: 1em 0.5em;\n  color: #fff;\n  height: auto;\n  padding: 20px;\n"])));
};
var expensesBodyContainerStyle = function expensesBodyContainerStyle() {
  return (0, _css.css)(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 90%;\n  margin: auto;\n  padding: 10px 0px;\n"])));
};
var BankForm = exports.BankForm = function BankForm(_ref) {
  var use = _ref.use,
    siteOptions = _ref.siteOptions,
    useCurrencies = _ref.useCurrencies,
    entityMenu = _ref.entityMenu;
  var current = use.data.actions.getById(use.attributes.states.currentId);
  if (!current) return /*#__PURE__*/_react["default"].createElement(_Components.Loading, null);
  var transactions = current.bankTransactions;
  var currency = useCurrencies.actions.getById(current.currenciesId);
  if (!currency) return /*#__PURE__*/_react["default"].createElement(_Components.Loading, null);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Header.BankHeader, {
    error: use.error.states.error,
    name: current.name,
    bankName: current.bankName,
    account: current.account,
    balance: (0, _helpers.decimalFormatPriceConverter)(current.balanceChange || 0, siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL, siteOptions.CURRENCY_LOCATION)
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(bodyMainContainerStyle())
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(bodyContainerStyle())
  }, /*#__PURE__*/_react["default"].createElement(_Table.BankTransationsTable, {
    use: use,
    siteOptions: siteOptions,
    transactions: transactions,
    title: "Transacciones",
    currentPage: use.paginations.states.currentPage,
    setCurrentPage: use.paginations.actions.setCurrentPage,
    bankCurrency: currency
  }))));
};