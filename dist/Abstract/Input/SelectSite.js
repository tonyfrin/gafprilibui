"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectSite = void 0;
var _react = _interopRequireDefault(require("react"));
var _Constans = require("../../Constans");
var _Input = require("./Input");
var SelectSite = function SelectSite(_ref) {
  var changeSite = _ref.changeSite,
    props = _ref.props;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.GsSelect, {
    styles: props === null || props === void 0 ? void 0 : props.styles,
    Class: props === null || props === void 0 ? void 0 : props.Class,
    options: props.options,
    id: _Constans.SITE_INPUT,
    onChange: changeSite,
    placeholder: props === null || props === void 0 ? void 0 : props.placeholder,
    containerStyles: props === null || props === void 0 ? void 0 : props.containerStyles,
    containerClass: props === null || props === void 0 ? void 0 : props.containerClass,
    defaultValue: props === null || props === void 0 ? void 0 : props.defaultValue,
    title: props === null || props === void 0 ? void 0 : props.title
  }));
};
exports.SelectSite = SelectSite;