"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SalesReturn = void 0;
var _react = _interopRequireDefault(require("react"));
var _Form = require("../Form");
var _Header = require("../Header");
var _Sections = require("../Sections");
var SalesReturn = exports.SalesReturn = function SalesReturn(_ref) {
  var use = _ref.use,
    sitesOptions = _ref.sitesOptions;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Form.ModelForm, {
    titles: {
      title1: 'Modulo de devolución de pedido',
      title2: 'elegir productos'
    },
    handleActions: function handleActions() {
      return console.log('handleActions');
    },
    buttonTitles: {
      mainButton: '',
      returnButton: ''
    },
    error: use.error.states.error,
    boxProps: {
      styles: {
        height: '100%',
        padding: '10px'
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Header.ModuleHeader, null, /*#__PURE__*/_react["default"].createElement(_Form.EntityFormOrderReturnInfoHeader, {
    useOrderReturn: use
  }), /*#__PURE__*/_react["default"].createElement(_Form.OrderReturnFormInfoHeader, {
    useOrderReturn: use,
    siteOptions: sitesOptions
  })))), /*#__PURE__*/_react["default"].createElement(_Sections.CartOrderReturnSections, {
    useOrderReturn: use,
    sitesOptions: sitesOptions
  }));
};