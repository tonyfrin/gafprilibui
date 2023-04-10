"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Background1 = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _templateObject;
var Background1Styles = function Background1Styles(image) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  background-image: url(", ");\n  background-size: 190vh;\n  background-repeat: no-repeat;\n  min-height: 100vh;\n"])), image);
};
var Background1 = function Background1(_ref) {
  var children = _ref.children,
    image = _ref.image;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: Background1Styles(image)
  }, children);
};
exports.Background1 = Background1;