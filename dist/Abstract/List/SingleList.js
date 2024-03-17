"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleList = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Pagination = require("../Pagination");
var _Table = require("../Table");
var _templateObject;
var defaultBreakContainerStyle = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  transition: all 1s ease 0s;\n  background: transparent;\n  font-size: 100%;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: top;\n  border-spacing: 0;\n  border-collapse: collapse;\n"])));
var SingleList = exports.SingleList = function SingleList(_ref) {
  var items = _ref.items,
    headers = _ref.headers,
    propsPagination = _ref.propsPagination,
    _ref$breakContainerSt = _ref.breakContainerStyle,
    breakContainerStyle = _ref$breakContainerSt === void 0 ? defaultBreakContainerStyle : _ref$breakContainerSt;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(breakContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Table.SingleTable, {
    headers: headers,
    data: items
  }), /*#__PURE__*/_react["default"].createElement(_Pagination.Pagination, propsPagination));
};