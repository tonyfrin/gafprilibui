"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Budget = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Loading = require("../Loading");
var _Abstract = require("../../Abstract");
var _excluded = ["className"];
var _templateObject;
var budgetStylesContainer = function budgetStylesContainer(stayles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  padding-top: 60px;\n  padding-bottom: 50px;\n  ", "\n  background-repeat: ", ";\n  background-size: ", ";\n  ", "\n"])), stayles.backgroundImage && "background-image: url(".concat(stayles.backgroundImage, ");"), stayles.backgroundRepeat || 'no-repeat', stayles.backgroundSize || '345vh', stayles.custom || '');
};
var Budget = exports.Budget = function Budget(_ref) {
  var use = _ref.use,
    useEntity = _ref.useEntity,
    _ref$containerStyles = _ref.containerStyles,
    containerStyles = _ref$containerStyles === void 0 ? {} : _ref$containerStyles,
    _ref$containerProps = _ref.containerProps,
    containerProps = _ref$containerProps === void 0 ? {} : _ref$containerProps,
    itemsMenu = _ref.itemsMenu,
    logoPdf = _ref.logoPdf,
    usePagesMain = _ref.usePagesMain,
    sitesOptions = _ref.sitesOptions,
    menu = _ref.menu,
    useProducts = _ref.useProducts,
    menuEntity = _ref.menuEntity,
    uploadBudget = _ref.uploadBudget,
    uploadBudgetOnlyProducts = _ref.uploadBudgetOnlyProducts;
  var containerClassName = containerProps.className,
    restContainerProps = (0, _objectWithoutProperties2["default"])(containerProps, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _css.cx)(budgetStylesContainer(containerStyles), containerClassName)
  }, restContainerProps), /*#__PURE__*/_react["default"].createElement(_Abstract.HeaderMenu, {
    items: itemsMenu
  }), true && /*#__PURE__*/_react["default"].createElement(_Loading.Loading, null)));
};