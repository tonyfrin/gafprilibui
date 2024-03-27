"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentOrderSections = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _helpers = require("../../helpers");
var _Table = require("../Table");
var _Button = require("../Button");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var orderStylesMainContainer = function orderStylesMainContainer() {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n"])));
};
var orderStylesContainer = function orderStylesContainer() {
  return (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: #fff;\n  padding: 10px 40px;\n  width: 90%;\n  border-radius: 10px;\n  height: auto;\n  margin: 0;\n"])));
};
var creditHeaderLineContainerStyles = function creditHeaderLineContainerStyles() {
  return (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: #eaeaea;\n  margin: 1%;\n  border-radius: 5px;\n  padding: 1%;\n  display: flex;\n  font-size: 12px;\n"])));
};
var creditHeaderLineColStyles = function creditHeaderLineColStyles(width, custom) {
  return (0, _css.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  text-align: center;\n  width: ", ";\n  margin: auto 0px;\n  ", ";\n"])), width, custom || '');
};
var PaymentOrderSections = exports.PaymentOrderSections = function PaymentOrderSections(_ref) {
  var payments = _ref.payments,
    siteOptions = _ref.siteOptions,
    images = _ref.images;
  var items = payments.paymentMethod.map(function (item, index) {
    var title = item.methodType === 'bank' ? 'Banco' : item.methodType === 'credit' ? 'Crédito' : item.methodType === 'cash' ? 'Efectivo' : '';
    item.methodType === 'single' && item.paymentType === 'discount' ? 'Descuento' : item.methodType === 'single' && item.paymentType === 'surplus' ? 'Sobrante' : '';
    var number = item.number || '';
    return [/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _css.cx)(creditHeaderLineContainerStyles())
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: (0, _css.cx)(creditHeaderLineColStyles('16.66666666%'))
    }, title), images && /*#__PURE__*/_react["default"].createElement("span", {
      className: (0, _css.cx)(creditHeaderLineColStyles('50%'))
    }, /*#__PURE__*/_react["default"].createElement(_Button.CircleButton, {
      image: images.zelle
    })), /*#__PURE__*/_react["default"].createElement("span", {
      className: (0, _css.cx)(creditHeaderLineColStyles('50%'))
    }, number), /*#__PURE__*/_react["default"].createElement("span", {
      className: (0, _css.cx)(creditHeaderLineColStyles('25%'))
    }, (0, _helpers.decimalFormatPriceConverter)(item.change || 0, siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL || '', siteOptions.CURRENCY_LOCATION))))];
  });
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(orderStylesMainContainer())
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(orderStylesContainer())
  }, /*#__PURE__*/_react["default"].createElement(_Table.SingleBodyTable, {
    data: items
  }))));
};