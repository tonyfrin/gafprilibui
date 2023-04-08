"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogoContainer = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireWildcard(require("react"));
var _css = require("@emotion/css");
var _excluded = ["image", "sectionClass", "divClass", "imgClass"];
var _templateObject, _templateObject2, _templateObject3;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var sectionStyles = function sectionStyles() {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  margin: 0;\n  padding: 1em;\n"])));
};
var containerStyles = function containerStyles() {
  return (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  margin: 0 auto;\n  text-align: center;\n"])));
};
var imgStayle = function imgStayle() {
  return (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 10px;\n  max-width: 150px;\n\n  @media (max-width: 600px) {\n    margin-top: 5px;\n    max-width: 130px;\n  }\n\n  @media (max-width: 300px) {\n    max-width: 120px;\n  }\n"])));
};
var LogoContainer = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var image = props.image,
    _props$sectionClass = props.sectionClass,
    sectionClass = _props$sectionClass === void 0 ? '' : _props$sectionClass,
    _props$divClass = props.divClass,
    divClass = _props$divClass === void 0 ? '' : _props$divClass,
    _props$imgClass = props.imgClass,
    imgClass = _props$imgClass === void 0 ? '' : _props$imgClass,
    imgProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return /*#__PURE__*/_react["default"].createElement("section", {
    className: (0, _css.cx)(sectionStyles(), sectionClass)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(containerStyles(), divClass)
  }, /*#__PURE__*/_react["default"].createElement("img", (0, _extends2["default"])({
    src: image
  }, imgProps, {
    className: (0, _css.cx)(imgStayle(), imgClass),
    ref: ref,
    alt: "logo",
    role: "logo"
  }))));
});
exports.LogoContainer = LogoContainer;