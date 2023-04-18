"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = exports.GsSelect = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _reactSelect = _interopRequireDefault(require("react-select"));
var _Containers = require("../Containers");
var _templateObject, _templateObject2;
var InputStyles = function InputStyles(styles) {
  var _styles$media750Style, _styles$media400Style, _styles$media300Style;
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", ";\n  border: ", ";\n  padding: ", ";\n  text-align: ", ";\n  outline: ", ";\n  border-radius: ", ";\n  background-color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  color: ", ";\n  box-sizing: border-box;\n\n  ::placeholder {\n    font-weight: 300;\n    color: #8d8d8d;\n  }\n\n  @media (max-width: 750px) {\n    font-size: ", ";\n  }\n\n  @media (max-width: 400px) {\n    font-size: ", ";\n  }\n\n  @media (max-width: 300px) {\n    font-size: ", ";\n  }\n"])), styles.width || '100%', styles.border || '2px solid #eaeaea', styles.padding || '8px 19px', styles.textAlign || 'left', styles.outline || 0, styles.borderRadius || '6px', styles.backgroundColor || '#fff', styles.fontSize || '15px', styles.fontWeight || 300, styles.color || '#8D8D8D', ((_styles$media750Style = styles.media750Style) === null || _styles$media750Style === void 0 ? void 0 : _styles$media750Style.fontSize) || '12px', ((_styles$media400Style = styles.media400Style) === null || _styles$media400Style === void 0 ? void 0 : _styles$media400Style.fontSize) || '10px', ((_styles$media300Style = styles.media300Style) === null || _styles$media300Style === void 0 ? void 0 : _styles$media300Style.fontSize) || '8px');
};
var Input = function Input(_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    _ref$inputClass = _ref.inputClass,
    inputClass = _ref$inputClass === void 0 ? '' : _ref$inputClass,
    _ref$inputProps = _ref.inputProps,
    inputProps = _ref$inputProps === void 0 ? {} : _ref$inputProps,
    _ref$containerStyles = _ref.containerStyles,
    containerStyles = _ref$containerStyles === void 0 ? {} : _ref$containerStyles,
    _ref$containerClass = _ref.containerClass,
    containerClass = _ref$containerClass === void 0 ? '' : _ref$containerClass;
  return /*#__PURE__*/_react["default"].createElement(_Containers.ContainerInput, {
    styles: containerStyles,
    containerClass: containerClass
  }, /*#__PURE__*/_react["default"].createElement("input", (0, _extends2["default"])({
    className: (0, _css.cx)(InputStyles(styles), inputClass),
    autoComplete: "off"
  }, inputProps)));
};
exports.Input = Input;
var SelectStyles = function SelectStyles(styles) {
  var _styles$media600Style, _styles$media600Style2, _styles$media400Style2, _styles$media400Style3;
  return (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  color: ", ";\n  font-family: ", ";\n\n  ::placeholder {\n    font-weight: 300;\n    color: #8d8d8d;\n  }\n\n  @media (max-width: 600px) {\n    width: ", ";\n    font-size: ", ";\n  }\n\n  @media (max-width: 400px) {\n    width: ", ";\n    font-size: ", ";\n  }\n"])), styles.width || '100%', styles.fontSize || '15px', styles.fontWeight || '300', styles.color || '#8D8D8D', styles.fontFamily || 'var(--font-main)', ((_styles$media600Style = styles.media600Style) === null || _styles$media600Style === void 0 ? void 0 : _styles$media600Style.width) || '106%', ((_styles$media600Style2 = styles.media600Style) === null || _styles$media600Style2 === void 0 ? void 0 : _styles$media600Style2.fontSize) || '12px', ((_styles$media400Style2 = styles.media400Style) === null || _styles$media400Style2 === void 0 ? void 0 : _styles$media400Style2.width) || '108%', ((_styles$media400Style3 = styles.media400Style) === null || _styles$media400Style3 === void 0 ? void 0 : _styles$media400Style3.fontSize) || '10px');
};
var GsSelect = function GsSelect(_ref2) {
  var _ref2$styles = _ref2.styles,
    styles = _ref2$styles === void 0 ? {} : _ref2$styles,
    _ref2$Class = _ref2.Class,
    Class = _ref2$Class === void 0 ? '' : _ref2$Class,
    options = _ref2.options,
    id = _ref2.id,
    onChange = _ref2.onChange,
    placeholder = _ref2.placeholder,
    _ref2$containerStyles = _ref2.containerStyles,
    containerStyles = _ref2$containerStyles === void 0 ? {} : _ref2$containerStyles,
    _ref2$containerClass = _ref2.containerClass,
    containerClass = _ref2$containerClass === void 0 ? '' : _ref2$containerClass,
    defaultValue = _ref2.defaultValue;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerInput, {
    styles: containerStyles,
    containerClass: containerClass
  }, /*#__PURE__*/_react["default"].createElement(_reactSelect["default"], {
    className: (0, _css.cx)(SelectStyles(styles), Class),
    options: options,
    id: id ? id : undefined,
    onChange: onChange,
    placeholder: placeholder ? placeholder : undefined,
    defaultValue: defaultValue
  })));
};
exports.GsSelect = GsSelect;