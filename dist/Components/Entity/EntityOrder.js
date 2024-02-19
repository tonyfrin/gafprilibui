"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EntityOrder = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Loading = require("../Loading");
var _Abstract = require("../../Abstract");
var _excluded = ["className"];
var _templateObject;
var entityOrderStylesContainer = function entityOrderStylesContainer(stayles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), stayles.custom || '');
};
var EntityOrder = function EntityOrder(_ref) {
  var use = _ref.use,
    useOrder = _ref.useOrder,
    _ref$containerStyles = _ref.containerStyles,
    containerStyles = _ref$containerStyles === void 0 ? {} : _ref$containerStyles,
    _ref$containerProps = _ref.containerProps,
    containerProps = _ref$containerProps === void 0 ? {} : _ref$containerProps,
    menu = _ref.menu;
  var containerClassName = containerProps.className,
    restContainerProps = (0, _objectWithoutProperties2["default"])(containerProps, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _css.cx)(entityOrderStylesContainer(containerStyles), containerClassName)
  }, restContainerProps), use.pages.states.isFetching && /*#__PURE__*/_react["default"].createElement(_Loading.Loading, null), use.pages.states.isInit && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "init",
    isVisible: use.pages.states.isInit
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.EntityOrderInit, {
    useEntity: use,
    useOrder: useOrder,
    menu: menu
  })), use.pages.states.isAdd && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "add",
    isVisible: use.pages.states.isAdd
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.EntityAddForm, {
    modelFormContainerProps: {
      styles: {
        height: '100%',
        padding: '40px 40px 0px 40px'
      }
    },
    use: use,
    formType: use.attributes.states.formType,
    propsPhoto: {
      imageStyle: "\n                    width: 100%;\n                    max-width: 150px;\n                    max-height: 150px;\n                    object-fit: cover;\n                    border: 1px solid #ebebeb;\n                    margin: auto;\n                    border-radius: 100%;\n                  "
    }
  }))));
};
exports.EntityOrder = EntityOrder;