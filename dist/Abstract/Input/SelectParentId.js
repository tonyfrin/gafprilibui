"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectParentId = void 0;
var _react = _interopRequireDefault(require("react"));
var _Constans = require("../../Constans");
var _Input = require("./Input");
var SelectParentId = function SelectParentId(_ref) {
  var changeParentId = _ref.changeParentId,
    props = _ref.props;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.GsSelect, {
    styles: props === null || props === void 0 ? void 0 : props.styles,
    Class: props === null || props === void 0 ? void 0 : props.Class,
    options: props.options,
    id: _Constans.PARENT_ID_INPUT,
    onChange: changeParentId,
    placeholder: props === null || props === void 0 ? void 0 : props.placeholder,
    containerStyles: props === null || props === void 0 ? void 0 : props.containerStyles,
    containerClass: props === null || props === void 0 ? void 0 : props.containerClass,
    defaultValue: props === null || props === void 0 ? void 0 : props.defaultValue,
    title: props === null || props === void 0 ? void 0 : props.title
  }));
};
exports.SelectParentId = SelectParentId;