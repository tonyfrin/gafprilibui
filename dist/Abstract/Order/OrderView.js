"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderView = void 0;
var _react = _interopRequireDefault(require("react"));
var _Form = require("../Form");
var _Header = require("../Header");
var _Sections = require("../Sections");
var OrderView = exports.OrderView = function OrderView(_ref) {
  var useOrder = _ref.useOrder,
    sitesOptions = _ref.sitesOptions,
    logoPdf = _ref.logoPdf,
    returnFunction = _ref.returnFunction,
    images = _ref.images;
  var order = useOrder.data.actions.getById(useOrder.attributes.states.currentId);
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
  }), order.payment && /*#__PURE__*/_react["default"].createElement(_Sections.PaymentOrderSections, {
    payments: order.payment,
    siteOptions: sitesOptions,
    images: images
  })));
};