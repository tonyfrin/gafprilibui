"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonNext = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _Constans = require("../../Constans");
var _Button = require("./Button");
var ButtonNext = function ButtonNext(_ref) {
  var title = _ref.title,
    props = _ref.props;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button.Button, (0, _extends2["default"])({
    title: title,
    buttonProps: {
      id: _Constans.BUTTON_NEXT_INPUT,
      type: 'submit'
    }
  }, props)));
};
exports.ButtonNext = ButtonNext;