"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SiteConfig = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _index = require("./../index");
var SiteConfig = function SiteConfig(_ref) {
  var useSitesConfig = _ref.useSitesConfig;
  var _React$useState = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    InputCurrency = _React$useState2[0],
    setInputCurrency = _React$useState2[1];
  var _React$useState3 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    InputCurrencyLocation = _React$useState4[0],
    setInputCurrencyLocation = _React$useState4[1];
  var _React$useState5 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    InputSeparator = _React$useState6[0],
    setInputSeparator = _React$useState6[1];
  var _React$useState7 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
    InputDecimalNumbers = _React$useState8[0],
    setInputDecimalNumbers = _React$useState8[1];
  var _React$useState9 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState10 = (0, _slicedToArray2["default"])(_React$useState9, 2),
    InputTaxes = _React$useState10[0],
    setInputTaxes = _React$useState10[1];
  _react["default"].useEffect(function () {
    setInputCurrency(function () {
      return /*#__PURE__*/_react["default"].createElement(_index.GsSelect, {
        id: "currencySite",
        onChange: function onChange(event) {
          return useSitesConfig.actions.changeCurrency(event);
        },
        options: useSitesConfig.states.currencyOptions,
        defaultValue: useSitesConfig.states.currencyDefault,
        styles: {
          width: '90%'
        }
      });
    });
    setInputCurrencyLocation(function () {
      return /*#__PURE__*/_react["default"].createElement(_index.GsSelect, {
        id: "currencyLocationSite",
        onChange: function onChange(event) {
          return useSitesConfig.actions.changeCurrencyLocation(event);
        },
        options: useSitesConfig.states.currencyLocationOptions,
        defaultValue: useSitesConfig.states.currencyLocationDefault,
        styles: {
          width: '90%'
        }
      });
    });
    setInputSeparator(function () {
      return /*#__PURE__*/_react["default"].createElement(_index.GsSelect, {
        id: "separatorSite",
        onChange: function onChange(event) {
          return useSitesConfig.actions.changeSeparator(event);
        },
        options: useSitesConfig.states.separatorOptions,
        defaultValue: useSitesConfig.states.separatorDefault,
        styles: {
          width: '90%'
        }
      });
    });
    setInputDecimalNumbers(function () {
      return /*#__PURE__*/_react["default"].createElement(_index.GsSelect, {
        id: "decimalNumbersSite",
        onChange: function onChange(event) {
          return useSitesConfig.actions.changeDecimalNumbers(event);
        },
        options: useSitesConfig.states.decimalNumbersOptions,
        defaultValue: useSitesConfig.states.decimalNumbersDefault,
        styles: {
          width: '90%'
        }
      });
    });
    setInputTaxes(function () {
      return /*#__PURE__*/_react["default"].createElement(_index.GsSelect, {
        id: "taxesSite",
        onChange: function onChange(event) {
          return useSitesConfig.actions.changeTaxes(event);
        },
        options: useSitesConfig.states.taxesOptions,
        defaultValue: useSitesConfig.states.taxesDefault,
        styles: {
          width: '90%'
        }
      });
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  _react["default"].useEffect(function () {
    useSitesConfig.actions.validationCurrency(useSitesConfig.states.currency);
    useSitesConfig.actions.validationCurrencyLocation(useSitesConfig.states.currencyLocation);
    useSitesConfig.actions.validationSeparator(useSitesConfig.states.thousandsSeparator);
    useSitesConfig.actions.validationSeparator(useSitesConfig.states.decimalSeparator);
    useSitesConfig.actions.validationDecimalNumbers(useSitesConfig.states.decimalNumbers);
    useSitesConfig.actions.validationTaxes(useSitesConfig.states.taxes);
    useSitesConfig.actions.validationHost(useSitesConfig.states.host);
  }, [InputCurrency, InputCurrencyLocation, InputDecimalNumbers, InputSeparator, InputTaxes]);
  _react["default"].useEffect(function () {
    useSitesConfig.actions.validationButtonNext();
  }, [useSitesConfig.states.currencyValid, useSitesConfig.states.currencyLocationValid, useSitesConfig.states.separatorValid, useSitesConfig.states.decimalNumbersValid, useSitesConfig.states.taxesValid, useSitesConfig.states.hostValid]); // eslint-disable-line react-hooks/exhaustive-deps

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_index.ContainerForm, null, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_index.ContainerButton, {
    styles: {
      width: '96.5%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputCurrency, InputCurrencyLocation)), /*#__PURE__*/_react["default"].createElement(_index.ContainerButton, {
    styles: {
      width: '96.5%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputSeparator, InputDecimalNumbers)), /*#__PURE__*/_react["default"].createElement(_index.ContainerButton, {
    styles: {
      width: '96.5%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputTaxes, /*#__PURE__*/_react["default"].createElement(_index.Input, {
    inputProps: {
      placeholder: 'Host',
      type: 'text',
      id: 'hostSite',
      onKeyUp: function onKeyUp(event) {
        return useSitesConfig.actions.changeHost(event.target.value);
      },
      defaultValue: useSitesConfig.states.host
    },
    styles: {
      padding: '10px 19px',
      width: '90%'
    }
  }))))));
};
exports.SiteConfig = SiteConfig;