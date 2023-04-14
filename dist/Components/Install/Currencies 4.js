"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Curriencies = void 0;
var _react = _interopRequireDefault(require("react"));
var _Abstract = require("../../Abstract");
var Curriencies = function Curriencies(_ref) {
  var actions = _ref.actions,
    useCurrency = _ref.useCurrency;
  _react["default"].useEffect(function () {
    useCurrency.actions.validationCurrencyValue(useCurrency.states.currenciesDefault.value);
    useCurrency.actions.validationButtonCurrency(useCurrency.states.validationCurrency);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Abstract.Step, {
    step: "1",
    title: "Tipo de Moneda Principal",
    buttonNextTitle: "Siguiente",
    buttonNextProps: {
      onClick: actions.nextCurrency,
      id: 'nextCurrency'
    }
  }), /*#__PURE__*/_react["default"].createElement(_Abstract.ContainerForm, null, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Abstract.GsSelect, {
    id: "currencyName",
    onChange: function onChange(event) {
      return useCurrency.actions.currencyChange(event);
    },
    options: useCurrency.states.currenciesOptions,
    defaultValue: useCurrency.states.currenciesDefault
  }))));
};
exports.Curriencies = Curriencies;