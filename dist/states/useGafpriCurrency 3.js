"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriCurrency = useGafpriCurrency;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _helpers = require("../helpers");
var _reducerObject;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var actionTypes = {
  currencyName: 'CURRENCY_NAME',
  currencySymbol: 'CURRENCY_SYMBOL',
  currenciesDefault: 'CURRENCY_DEFAULT',
  validationCurrency: 'VALIDATION_CURRENCY',
  buttonCurrency: 'BUTTON_CURRENCY'
};
var reducerObject = (_reducerObject = {}, (0, _defineProperty2["default"])(_reducerObject, actionTypes.currencyName, function (state, payload) {
  if (typeof payload === 'string') {
    return _objectSpread(_objectSpread({}, state), {}, {
      currencyName: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.currencySymbol, function (state, payload) {
  if (typeof payload === 'string') {
    return _objectSpread(_objectSpread({}, state), {}, {
      currencySymbol: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.currenciesDefault, function (state, payload) {
  if ((0, _typeof2["default"])(payload) === 'object') {
    return _objectSpread(_objectSpread({}, state), {}, {
      currenciesDefault: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.validationCurrency, function (state, payload) {
  if (typeof payload === 'boolean') {
    return _objectSpread(_objectSpread({}, state), {}, {
      validationCurrency: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.buttonCurrency, function (state, payload) {
  if (typeof payload === 'boolean') {
    return _objectSpread(_objectSpread({}, state), {}, {
      buttonCurrency: payload
    });
  }
  return state;
}), _reducerObject);
var reducer = function reducer(state, action) {
  var handler = reducerObject[action.type];
  if (handler && action.payload !== undefined) {
    return handler(state, action.payload);
  }
  return state;
};
var initialState = function initialState() {
  return {
    currencyName: '',
    currencySymbol: '',
    currenciesDefault: {
      value: '',
      label: 'Seleccione tipo de Moneda'
    },
    currenciesOptions: [{
      label: 'Dólares Americanos',
      value: 'usd'
    }, {
      label: 'Bolívares',
      value: 'bsd'
    }, {
      label: 'Euros',
      value: 'eur'
    }],
    validationCurrency: false,
    buttonCurrency: false
  };
};
function useGafpriCurrency() {
  var _React$useReducer = _react["default"].useReducer(reducer, initialState()),
    _React$useReducer2 = (0, _slicedToArray2["default"])(_React$useReducer, 2),
    state = _React$useReducer2[0],
    dispatch = _React$useReducer2[1];
  var currencyName = state.currencyName,
    currencySymbol = state.currencySymbol,
    currenciesDefault = state.currenciesDefault,
    currenciesOptions = state.currenciesOptions,
    validationCurrency = state.validationCurrency,
    buttonCurrency = state.buttonCurrency;

  /**
   * CURRENCY
   *
   *
   */

  // setear los valores de la Currencies
  var setCurrenciesName = function setCurrenciesName(value) {
    return dispatch({
      type: actionTypes.currencyName,
      payload: value
    });
  };
  var setCurrenciesSymbol = function setCurrenciesSymbol(value) {
    return dispatch({
      type: actionTypes.currencySymbol,
      payload: value
    });
  };
  var setCurrenciesDefault = function setCurrenciesDefault(value) {
    return dispatch({
      type: actionTypes.currenciesDefault,
      payload: value
    });
  };
  var setValidationCurrency = function setValidationCurrency(value) {
    return dispatch({
      type: actionTypes.validationCurrency,
      payload: value
    });
  };
  var setButtonCurrency = function setButtonCurrency(value) {
    return dispatch({
      type: actionTypes.buttonCurrency,
      payload: value
    });
  };

  // Funciones de validations
  var validationButtonCurrency = function validationButtonCurrency(value) {
    if (value) {
      (0, _helpers.removeClass)('nextCurrency', 'gs-disabled');
    } else {
      (0, _helpers.addClass)('nextCurrency', 'gs-disabled');
    }
    setButtonCurrency(value);
  };
  var validationCurrencyValue = function validationCurrencyValue(value) {
    var validation = (0, _helpers.validationSelect)(value, 'currencyName', 'gs-input-alert');
    setValidationCurrency(validation);
    validationButtonCurrency(validation);
  };

  // Funciones de cambio

  var currencyChange = function currencyChange(newValue) {
    var name = '';
    var symbol = '';
    var defaultValue = {
      value: '',
      label: 'Seleccione tipo de Moneda'
    };
    if (newValue !== null && newValue !== void 0 && newValue.value && newValue.value === 'usd') {
      name = 'Dólares Américanos';
      symbol = '$';
      defaultValue = {
        value: 'usd',
        label: name
      };
    } else if (newValue !== null && newValue !== void 0 && newValue.value && newValue.value === 'bsd') {
      name = 'Bolívares';
      symbol = 'BsD';
      defaultValue = {
        value: 'bsd',
        label: name
      };
    } else if (newValue !== null && newValue !== void 0 && newValue.value && newValue.value === 'eur') {
      name = 'Euro';
      symbol = '€';
      defaultValue = {
        value: 'eur',
        label: name
      };
    }
    setCurrenciesName(name);
    setCurrenciesSymbol(symbol);
    setCurrenciesDefault(defaultValue);
    validationCurrencyValue(symbol);
  };

  /**
   * Export
   *
   *
   */
  var states = {
    currencyName: currencyName,
    currencySymbol: currencySymbol,
    currenciesDefault: currenciesDefault,
    currenciesOptions: currenciesOptions,
    validationCurrency: validationCurrency,
    buttonCurrency: buttonCurrency
  };
  var actions = {
    currencyChange: currencyChange,
    validationCurrencyValue: validationCurrencyValue,
    validationButtonCurrency: validationButtonCurrency
  };
  return {
    states: states,
    actions: actions
  };
}