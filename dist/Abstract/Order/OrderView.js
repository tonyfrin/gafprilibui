"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderView = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Form = require("../Form");
var _Header = require("../Header");
var _Sections = require("../Sections");
var _templateObject;
var containerPaymentsStyles = function containerPaymentsStyles() {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n"])));
};
var OrderView = exports.OrderView = function OrderView(_ref) {
  var _order$payment, _order$payment2;
  var useOrder = _ref.useOrder,
    sitesOptions = _ref.sitesOptions,
    logoPdf = _ref.logoPdf,
    returnFunction = _ref.returnFunction,
    images = _ref.images;
  var order = useOrder.data.actions.getById(useOrder.attributes.states.currentId);
  if (!order) return null;
  var deposit = ((_order$payment = order.payment) === null || _order$payment === void 0 ? void 0 : _order$payment.paymentMethods.filter(function (item) {
    return item.type === 'deposit';
  })) || [];
  var debit = ((_order$payment2 = order.payment) === null || _order$payment2 === void 0 ? void 0 : _order$payment2.paymentMethods.filter(function (item) {
    return item.type === 'debit';
  })) || [];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, order && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Form.ModelForm, {
    titles: {
      title1: 'Modulo de Ventas',
      title2: 'Vista de pedido'
    },
    handleActions: function handleActions() {
      return console.log('handleActions');
    },
    buttonTitles: {
      mainButton: '',
      returnButton: ''
    },
    error: useOrder.error.states.error,
    boxProps: {
      styles: {
        height: '100%',
        padding: '10px'
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Header.ModuleHeader, null, /*#__PURE__*/_react["default"].createElement(_Form.EntityOrderViewFormInfoHeader, {
    order: order,
    returnFunction: returnFunction
  }), /*#__PURE__*/_react["default"].createElement(_Form.OrderViewFormInfoHeader, {
    order: order,
    siteOptions: sitesOptions,
    logoPdf: logoPdf
  })))), /*#__PURE__*/_react["default"].createElement(_Sections.CartOrderViewSections, {
    order: order,
    sitesOptions: sitesOptions
  }), order.payment && /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(containerPaymentsStyles())
  }, /*#__PURE__*/_react["default"].createElement(_Sections.PaymentOrderSections, {
    payments: deposit,
    siteOptions: sitesOptions,
    images: images
  }), /*#__PURE__*/_react["default"].createElement(_Sections.PaymentOrderSections, {
    payments: debit,
    siteOptions: sitesOptions,
    images: images
  }))));
};