"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpensesCashRegister = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _Loading = require("../Loading");
var _Abstract = require("../../Abstract");
var _Entity = require("../Entity");
var _constants = require("../../constants");
var _excluded = ["className"];
var ExpensesCashRegister = exports.ExpensesCashRegister = function ExpensesCashRegister(_ref) {
  var use = _ref.use,
    useEntity = _ref.useEntity,
    useCurrencies = _ref.useCurrencies,
    returnInitModule = _ref.returnInitModule,
    _ref$containerProps = _ref.containerProps,
    containerProps = _ref$containerProps === void 0 ? {} : _ref$containerProps,
    sitesOptions = _ref.sitesOptions,
    menuEntity = _ref.menuEntity;
  var containerClassName = containerProps.className,
    restContainerProps = (0, _objectWithoutProperties2["default"])(containerProps, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, use.pages.states.isFetching && /*#__PURE__*/_react["default"].createElement(_Loading.Loading, {
    mainStyles: {
      custom: 'height: 100vh;'
    }
  }), use.pages.states.isInit && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "init",
    isVisible: use.pages.states.isInit
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.ExpensesInit, {
    useEntity: useEntity,
    useExpenses: use,
    returnInitModule: returnInitModule
  })), use.pages.states.isAddEntity && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "addEntity",
    isVisible: use.pages.states.isAddEntity
  }, /*#__PURE__*/_react["default"].createElement(_Entity.EntityExpenses, {
    use: useEntity,
    useExpenses: use,
    menu: menuEntity
  })), use.pages.states.isExpensesForm && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "ExpensesCrForm",
    isVisible: use.pages.states.isExpensesForm
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Abstract.ExpensesForm, {
    use: use,
    siteOptions: sitesOptions,
    useCurrencies: useCurrencies
  }))), use.pages.states.isEntitySearch && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "entitySearch",
    isVisible: use.pages.states.isEntitySearch
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.EntityExpensesSearch, {
    use: useEntity,
    useExpenses: use
  })), use.pages.states.isPaymentCrForm && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "PaymentCrForm",
    isVisible: use.pages.states.isPaymentCrForm
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.CashForm, {
    useError: use.error,
    siteOptions: sitesOptions,
    useCurrencies: useCurrencies,
    usePayment: use.attributes.usePayment,
    currentPaymentInfo: {
      currencyId: use.attributes.states.currencyId,
      validationCurrencyId: use.attributes.actions.validationCurrencyId,
      currencyIdValid: use.attributes.states.currencyIdValid,
      validationButtonNext: use.attributes.actions.validationButtonNextPaymentCr,
      changeCurrencyId: use.attributes.actions.changeCurrencyId,
      currencyIdDefault: use.attributes.states.currencyIdDefault,
      currencyIdOptions: use.attributes.states.currencyIdOptions,
      returnInit: use.pages.actions.onExpensesForm,
      buttonNextId: "".concat(_constants.EXPENSES_ROUTE, "-2"),
      add: function add() {
        return console.log(use.attributes);
      }
    }
  })));
};