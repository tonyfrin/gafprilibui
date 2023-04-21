"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriSitesConfig = useGafpriSitesConfig;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _helpers = require("../helpers");
var _reducerObject;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var actionTypes = {
  currency: 'CURRENCY',
  currencyValid: 'CURRENCY_VALID',
  currencyDefault: 'CURRENCY_DEFAULT',
  currencyLocation: 'CURRENCY_LOCATION',
  currencyLocationValid: 'CURRENCY_LOCATION_VALID',
  currencyLocationDefault: 'CURRENCY_LOCATION_DEFAULT',
  thousandsSeparator: 'THOUSANDS_SEPARATOR',
  decimalSeparator: 'DECIMAL_SEPARATOR',
  separatorValid: 'SEPARATOR_VALID',
  separatorDefault: 'SEPARATOR_DEFAULT',
  decimalNumbers: 'DECIMAL_NUMBERS',
  decimalNumbersValid: 'DECIMAL_NUMBERS_VALID',
  decimalNumbersDefault: 'DECIMAL_NUMBERS_DEFAULT',
  taxes: 'TAXES',
  taxesValid: 'TAXES_VALID',
  taxesDefault: 'TAXES_DEFAULT',
  host: 'HOST',
  hostValid: 'HOST_VALID'
};
var reducerObject = (_reducerObject = {}, (0, _defineProperty2["default"])(_reducerObject, actionTypes.currency, function (state, payload) {
  if (typeof payload === 'string') {
    return _objectSpread(_objectSpread({}, state), {}, {
      currency: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.currencyValid, function (state, payload) {
  if (typeof payload === 'boolean') {
    return _objectSpread(_objectSpread({}, state), {}, {
      currencyValid: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.currencyDefault, function (state, payload) {
  if ((0, _helpers.isSelectDefault)(payload)) {
    return _objectSpread(_objectSpread({}, state), {}, {
      currencyDefault: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.currencyLocation, function (state, payload) {
  if (typeof payload === 'string') {
    return _objectSpread(_objectSpread({}, state), {}, {
      currencyLocation: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.currencyLocationValid, function (state, payload) {
  if (typeof payload === 'boolean') {
    return _objectSpread(_objectSpread({}, state), {}, {
      currencyLocationValid: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.currencyLocationDefault, function (state, payload) {
  if ((0, _helpers.isSelectDefault)(payload)) {
    return _objectSpread(_objectSpread({}, state), {}, {
      currencyLocationDefault: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.thousandsSeparator, function (state, payload) {
  if (typeof payload === 'string') {
    return _objectSpread(_objectSpread({}, state), {}, {
      thousandsSeparator: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.decimalSeparator, function (state, payload) {
  if (typeof payload === 'string') {
    return _objectSpread(_objectSpread({}, state), {}, {
      decimalSeparator: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.separatorValid, function (state, payload) {
  if (typeof payload === 'boolean') {
    return _objectSpread(_objectSpread({}, state), {}, {
      separatorValid: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.separatorDefault, function (state, payload) {
  if ((0, _helpers.isSelectDefault)(payload)) {
    return _objectSpread(_objectSpread({}, state), {}, {
      separatorDefault: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.decimalNumbers, function (state, payload) {
  if (typeof payload === 'string') {
    return _objectSpread(_objectSpread({}, state), {}, {
      decimalNumbers: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.decimalNumbersValid, function (state, payload) {
  if (typeof payload === 'boolean') {
    return _objectSpread(_objectSpread({}, state), {}, {
      decimalNumbersValid: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.decimalNumbersDefault, function (state, payload) {
  if ((0, _helpers.isSelectDefault)(payload)) {
    return _objectSpread(_objectSpread({}, state), {}, {
      decimalNumbersDefault: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.taxes, function (state, payload) {
  if (typeof payload === 'string') {
    return _objectSpread(_objectSpread({}, state), {}, {
      taxes: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.taxesValid, function (state, payload) {
  if (typeof payload === 'boolean') {
    return _objectSpread(_objectSpread({}, state), {}, {
      taxesValid: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.taxesDefault, function (state, payload) {
  if ((0, _helpers.isSelectDefault)(payload)) {
    return _objectSpread(_objectSpread({}, state), {}, {
      taxesDefault: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.host, function (state, payload) {
  if (typeof payload === 'string') {
    return _objectSpread(_objectSpread({}, state), {}, {
      host: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.hostValid, function (state, payload) {
  if (typeof payload === 'boolean') {
    return _objectSpread(_objectSpread({}, state), {}, {
      hostValid: payload
    });
  }
  return state;
}), _reducerObject);
var reducer = function reducer(state, action) {
  return reducerObject[action.type](state, action.payload) || state;
};
var initialState = function initialState() {
  return {
    currency: '',
    currencyValid: false,
    currencyOptions: [{
      label: 'Seleccionada',
      value: '1'
    }],
    currencyDefault: {
      label: 'Selecciona tipo de moneda',
      value: ''
    },
    currencyLocation: '',
    currencyLocationValid: false,
    currencyLocationOptions: [{
      label: 'Izquierda',
      value: 'left'
    }, {
      label: 'Derecha',
      value: 'right'
    }],
    currencyLocationDefault: {
      label: 'Selecciona la posición de la moneda',
      value: ''
    },
    thousandsSeparator: '',
    decimalSeparator: '',
    separatorValid: false,
    separatorOptions: [{
      label: 'Miles: " . "    Decimal: " , "',
      value: '.'
    }, {
      label: 'Miles: " , "    Decimal: " . "',
      value: ','
    }],
    separatorDefault: {
      label: 'Selecciona los separadores',
      value: ''
    },
    decimalNumbers: '',
    decimalNumbersValid: false,
    decimalNumbersOptions: [{
      label: '0',
      value: '0'
    }, {
      label: '2',
      value: '2'
    }],
    decimalNumbersDefault: {
      label: 'Selecciona el número de decimales',
      value: ''
    },
    taxes: '',
    taxesValid: false,
    taxesOptions: [{
      label: 'Si trabaja con impuestos',
      value: 'true'
    }, {
      label: 'No trabaja con impuestos',
      value: 'false'
    }],
    taxesDefault: {
      label: 'Selecciona los impuestos',
      value: ''
    },
    host: '',
    hostValid: false
  };
};
function useGafpriSitesConfig() {
  var _React$useReducer = _react["default"].useReducer(reducer, initialState()),
    _React$useReducer2 = (0, _slicedToArray2["default"])(_React$useReducer, 2),
    state = _React$useReducer2[0],
    dispatch = _React$useReducer2[1];
  var currency = state.currency,
    currencyValid = state.currencyValid,
    currencyOptions = state.currencyOptions,
    currencyDefault = state.currencyDefault,
    currencyLocation = state.currencyLocation,
    currencyLocationValid = state.currencyLocationValid,
    currencyLocationOptions = state.currencyLocationOptions,
    currencyLocationDefault = state.currencyLocationDefault,
    thousandsSeparator = state.thousandsSeparator,
    decimalSeparator = state.decimalSeparator,
    separatorValid = state.separatorValid,
    separatorOptions = state.separatorOptions,
    separatorDefault = state.separatorDefault,
    decimalNumbers = state.decimalNumbers,
    decimalNumbersValid = state.decimalNumbersValid,
    decimalNumbersOptions = state.decimalNumbersOptions,
    decimalNumbersDefault = state.decimalNumbersDefault,
    taxes = state.taxes,
    taxesValid = state.taxesValid,
    taxesOptions = state.taxesOptions,
    taxesDefault = state.taxesDefault,
    host = state.host,
    hostValid = state.hostValid;

  /**
   * SITES
   *
   *
   */

  // Setear valores de sitio
  var setCurrency = function setCurrency(value) {
    return dispatch({
      type: actionTypes.currency,
      payload: value
    });
  };
  var setCurrencyValid = function setCurrencyValid(value) {
    return dispatch({
      type: actionTypes.currencyValid,
      payload: value
    });
  };
  var setCurrencyDefault = function setCurrencyDefault(value) {
    return dispatch({
      type: actionTypes.currencyDefault,
      payload: value
    });
  };
  var setCurrencyLocation = function setCurrencyLocation(value) {
    return dispatch({
      type: actionTypes.currencyLocation,
      payload: value
    });
  };
  var setCurrencyLocationValid = function setCurrencyLocationValid(value) {
    return dispatch({
      type: actionTypes.currencyLocationValid,
      payload: value
    });
  };
  var setCurrencyLocationDefault = function setCurrencyLocationDefault(value) {
    return dispatch({
      type: actionTypes.currencyLocationDefault,
      payload: value
    });
  };
  var setThousandsSeparator = function setThousandsSeparator(value) {
    return dispatch({
      type: actionTypes.thousandsSeparator,
      payload: value
    });
  };
  var setDecimalSeparator = function setDecimalSeparator(value) {
    return dispatch({
      type: actionTypes.decimalSeparator,
      payload: value
    });
  };
  var setSeparatorValid = function setSeparatorValid(value) {
    return dispatch({
      type: actionTypes.separatorValid,
      payload: value
    });
  };
  var setSeparatorDefault = function setSeparatorDefault(value) {
    return dispatch({
      type: actionTypes.separatorDefault,
      payload: value
    });
  };
  var setSeparator = function setSeparator(value) {
    if (value === '.') {
      setThousandsSeparator('.');
      setDecimalSeparator(',');
    } else if (value === ',') {
      setThousandsSeparator(',');
      setDecimalSeparator('.');
    }
  };
  var setDecimalNumbers = function setDecimalNumbers(value) {
    return dispatch({
      type: actionTypes.decimalNumbers,
      payload: value
    });
  };
  var setDecimalNumbersValid = function setDecimalNumbersValid(value) {
    return dispatch({
      type: actionTypes.decimalNumbersValid,
      payload: value
    });
  };
  var setDecimalNumbersDefault = function setDecimalNumbersDefault(value) {
    return dispatch({
      type: actionTypes.decimalNumbersDefault,
      payload: value
    });
  };
  var setTaxes = function setTaxes(value) {
    return dispatch({
      type: actionTypes.taxes,
      payload: value
    });
  };
  var setTaxesValid = function setTaxesValid(value) {
    return dispatch({
      type: actionTypes.taxesValid,
      payload: value
    });
  };
  var setTaxesDefault = function setTaxesDefault(value) {
    return dispatch({
      type: actionTypes.taxesDefault,
      payload: value
    });
  };
  var setHost = function setHost(value) {
    return dispatch({
      type: actionTypes.host,
      payload: value
    });
  };
  var setHostValid = function setHostValid(value) {
    return dispatch({
      type: actionTypes.hostValid,
      payload: value
    });
  };

  // Funciones de Validacion
  var validationCurrency = function validationCurrency(value) {
    var validation = (0, _helpers.validationSelect)(value, 'currencySite', 'gs-input-alert');
    setCurrencyValid(validation);
    return validation;
  };
  var validationCurrencyLocation = function validationCurrencyLocation(value) {
    var validation = (0, _helpers.validationSelect)(value, 'currencyLocationSite', 'gs-input-alert');
    setCurrencyLocationValid(validation);
    return validation;
  };
  var validationSeparator = function validationSeparator(value) {
    var validation = (0, _helpers.validationSelect)(value, 'separatorSite', 'gs-input-alert');
    setSeparatorValid(validation);
    return validation;
  };
  var validationDecimalNumbers = function validationDecimalNumbers(value) {
    var validation = (0, _helpers.validationSelect)(value, 'decimalNumbersSite', 'gs-input-alert');
    setDecimalNumbersValid(validation);
    return validation;
  };
  var validationTaxes = function validationTaxes(value) {
    var validation = (0, _helpers.validationSelect)(value, 'taxesSite', 'gs-input-alert');
    setTaxesValid(validation);
    return validation;
  };
  var validationHost = function validationHost(name) {
    var valid = (0, _helpers.validationInput)(name, /^[-a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_,.&:/'\-\s]+$/, 'hostSite', 'gs-input-alert', true);
    setHostValid(valid);
    return valid;
  };
  var validationButtonNext = function validationButtonNext() {
    if (currencyValid && currencyLocationValid && separatorValid && decimalNumbersValid && taxesValid && hostValid) {
      (0, _helpers.removeClass)('buttonNextConfigSite', 'gs-disabled');
    } else {
      (0, _helpers.addClass)('buttonNextConfigSite', 'gs-disabled');
    }
  };

  // Funciones de cambios

  var changeCurrency = function changeCurrency(options) {
    (0, _helpers.changeSelect)({
      newValue: options,
      validation: validationCurrency,
      setDefault: setCurrencyDefault,
      setValue: setCurrency
    });
  };
  var changeCurrencyLocation = function changeCurrencyLocation(options) {
    (0, _helpers.changeSelect)({
      newValue: options,
      validation: validationCurrencyLocation,
      setDefault: setCurrencyLocationDefault,
      setValue: setCurrencyLocation
    });
  };
  var changeSeparator = function changeSeparator(options) {
    (0, _helpers.changeSelect)({
      newValue: options,
      validation: validationSeparator,
      setDefault: setSeparatorDefault,
      setValue: setSeparator
    });
  };
  var changeDecimalNumbers = function changeDecimalNumbers(options) {
    (0, _helpers.changeSelect)({
      newValue: options,
      validation: validationDecimalNumbers,
      setDefault: setDecimalNumbersDefault,
      setValue: setDecimalNumbers
    });
  };
  var changeTaxes = function changeTaxes(options) {
    (0, _helpers.changeSelect)({
      newValue: options,
      validation: validationTaxes,
      setDefault: setTaxesDefault,
      setValue: setTaxes
    });
  };
  var changeHost = function changeHost(value) {
    var NewHost = value.toLocaleLowerCase();
    (0, _helpers.changeInputText)({
      value: NewHost,
      validation: validationHost,
      setValue: setHost
    });
  };

  /**
   * Export
   *
   *
   */
  var states = {
    currency: currency,
    currencyValid: currencyValid,
    currencyOptions: currencyOptions,
    currencyDefault: currencyDefault,
    currencyLocation: currencyLocation,
    currencyLocationValid: currencyLocationValid,
    currencyLocationOptions: currencyLocationOptions,
    currencyLocationDefault: currencyLocationDefault,
    thousandsSeparator: thousandsSeparator,
    decimalSeparator: decimalSeparator,
    separatorValid: separatorValid,
    separatorOptions: separatorOptions,
    separatorDefault: separatorDefault,
    decimalNumbers: decimalNumbers,
    decimalNumbersValid: decimalNumbersValid,
    decimalNumbersOptions: decimalNumbersOptions,
    decimalNumbersDefault: decimalNumbersDefault,
    taxes: taxes,
    taxesValid: taxesValid,
    taxesOptions: taxesOptions,
    taxesDefault: taxesDefault,
    host: host,
    hostValid: hostValid
  };
  var actions = {
    changeCurrency: changeCurrency,
    validationCurrency: validationCurrency,
    changeCurrencyLocation: changeCurrencyLocation,
    validationCurrencyLocation: validationCurrencyLocation,
    changeSeparator: changeSeparator,
    validationSeparator: validationSeparator,
    changeDecimalNumbers: changeDecimalNumbers,
    validationDecimalNumbers: validationDecimalNumbers,
    changeTaxes: changeTaxes,
    validationTaxes: validationTaxes,
    changeHost: changeHost,
    validationHost: validationHost,
    validationButtonNext: validationButtonNext
  };
  return {
    states: states,
    actions: actions
  };
}