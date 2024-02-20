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
var _Entity = require("../Entity");
var _Products = require("../Products");
var _excluded = ["className"];
var _templateObject;
var budgetStylesContainer = function budgetStylesContainer(stayles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  padding-top: 60px;\n  padding-bottom: 50px;\n  ", "\n  background-repeat: ", ";\n  background-size: ", ";\n  ", "\n"])), stayles.backgroundImage && "background-image: url(".concat(stayles.backgroundImage, ");"), stayles.backgroundRepeat || 'no-repeat', stayles.backgroundSize || '345vh', stayles.custom || '');
};
var Budget = function Budget(_ref) {
  var use = _ref.use,
    useEntity = _ref.useEntity,
    _ref$containerStyles = _ref.containerStyles,
    containerStyles = _ref$containerStyles === void 0 ? {} : _ref$containerStyles,
    _ref$containerProps = _ref.containerProps,
    containerProps = _ref$containerProps === void 0 ? {} : _ref$containerProps,
    itemsMenu = _ref.itemsMenu,
    usePagesMain = _ref.usePagesMain,
    sitesOptions = _ref.sitesOptions,
    useProducts = _ref.useProducts,
    menuEntity = _ref.menuEntity;
  var containerClassName = containerProps.className,
    restContainerProps = (0, _objectWithoutProperties2["default"])(containerProps, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _css.cx)(budgetStylesContainer(containerStyles), containerClassName)
  }, restContainerProps), /*#__PURE__*/_react["default"].createElement(_Abstract.HeaderMenu, {
    items: itemsMenu
  }), use.pages.states.isFetching && /*#__PURE__*/_react["default"].createElement(_Loading.Loading, null), use.pages.states.isInit && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "init",
    isVisible: use.pages.states.isInit
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.BudgetInit, {
    useEntity: useEntity,
    useBudget: use,
    usePagesMain: usePagesMain
  })), use.pages.states.isAddEntity && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "addEntity",
    isVisible: use.pages.states.isAddEntity
  }, /*#__PURE__*/_react["default"].createElement(_Entity.EntityBudget, {
    use: useEntity,
    useBudget: use,
    menu: menuEntity
  })), use.pages.states.isSales && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "sales",
    isVisible: use.pages.states.isSales
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.BudgetModule, {
    useBudget: use,
    sitesOptions: sitesOptions,
    useProducts: useProducts
  })), use.pages.states.isEntitySearch && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "entitySearch",
    isVisible: use.pages.states.isEntitySearch
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.EntityBudgetSearch, {
    use: useEntity,
    useBudget: use
  })), use.pages.states.isProductSearch && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "productySearch",
    isVisible: use.pages.states.isProductSearch
  }, /*#__PURE__*/_react["default"].createElement(_Products.ProductBudget, {
    useProduct: useProducts,
    useBudget: use,
    sitesOptions: sitesOptions
  }))));
};
exports.Budget = Budget;