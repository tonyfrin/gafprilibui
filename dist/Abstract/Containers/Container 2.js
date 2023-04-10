"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContainerInput = exports.ContainerGlobo = exports.ContainerForm = exports.ContainerButton = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
var RowStyles = function RowStyles() {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n"])));
};
var ContainerInputStyles = function ContainerInputStyles(styles) {
  return (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", ";\n  margin: ", ";\n"])), styles.width || '91.66667%', styles.margin || '10px 0px');
};
var ContainerInput = function ContainerInput(_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    _ref$containerClass = _ref.containerClass,
    containerClass = _ref$containerClass === void 0 ? '' : _ref$containerClass,
    children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(ContainerInputStyles(styles), containerClass)
  }, children);
};
exports.ContainerInput = ContainerInput;
var ContainerFormStyles = function ContainerFormStyles(styles) {
  return (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", ";\n  margin: ", ";\n"])), styles.width || '90%', styles.margin || 'auto');
};
var ContainerForm = function ContainerForm(_ref2) {
  var _ref2$styles = _ref2.styles,
    styles = _ref2$styles === void 0 ? {} : _ref2$styles,
    _ref2$containerClass = _ref2.containerClass,
    containerClass = _ref2$containerClass === void 0 ? '' : _ref2$containerClass,
    children = _ref2.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(ContainerFormStyles(styles), containerClass)
  }, children);
};
exports.ContainerForm = ContainerForm;
var ContainerGloboStyles = function ContainerGloboStyles(styles) {
  return (0, _css.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", ";\n"])), styles.width || '50%');
};
var ContainerGlobo = function ContainerGlobo(_ref3) {
  var _ref3$styles = _ref3.styles,
    styles = _ref3$styles === void 0 ? {} : _ref3$styles,
    _ref3$containerClass = _ref3.containerClass,
    containerClass = _ref3$containerClass === void 0 ? '' : _ref3$containerClass,
    children = _ref3.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(ContainerGloboStyles(styles), containerClass)
  }, children);
};
exports.ContainerGlobo = ContainerGlobo;
var ContainerButtonStyles = function ContainerButtonStyles(styles) {
  return (0, _css.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", ";\n  display: ", ";\n  justify-content: ", ";\n"])), styles.width || '50%', styles.display || 'flex', styles.justifyContent || 'space-around');
};
var ContainerButton = function ContainerButton(_ref4) {
  var _ref4$styles = _ref4.styles,
    styles = _ref4$styles === void 0 ? {} : _ref4$styles,
    _ref4$Class = _ref4.Class,
    Class = _ref4$Class === void 0 ? '' : _ref4$Class,
    children = _ref4.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(ContainerButtonStyles(styles), Class)
  }, children);
};
exports.ContainerButton = ContainerButton;