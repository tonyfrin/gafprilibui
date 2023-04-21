"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriTypeDocument = useGafpriTypeDocument;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _helpers = require("../helpers");
var _Constans = require("../Constans");
var _reducerObject;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var optionsCountry = [];
_Constans.Countries.forEach(function (item) {
  Object.keys(item).forEach(function (key) {
    optionsCountry.push({
      value: key,
      label: item[key]
    });
  });
});
var actionTypes = {
  country: 'COUNTRY',
  countryValid: 'COUNTRY_VALID',
  countryDefault: 'COUNTREY_DEFAULT',
  name: 'NAME',
  nameValid: 'NAME_VALID'
};
var reducerObject = (_reducerObject = {}, (0, _defineProperty2["default"])(_reducerObject, actionTypes.country, function (state, payload) {
  if (typeof payload === 'string') {
    return _objectSpread(_objectSpread({}, state), {}, {
      country: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.countryValid, function (state, payload) {
  if (typeof payload === 'boolean') {
    return _objectSpread(_objectSpread({}, state), {}, {
      countryValid: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.countryDefault, function (state, payload) {
  if ((0, _helpers.isSelectDefault)(payload)) {
    return _objectSpread(_objectSpread({}, state), {}, {
      countryDefault: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.name, function (state, payload) {
  if (typeof payload === 'string') {
    return _objectSpread(_objectSpread({}, state), {}, {
      name: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.nameValid, function (state, payload) {
  if (typeof payload === 'boolean') {
    return _objectSpread(_objectSpread({}, state), {}, {
      nameValid: payload
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
    country: '',
    countryValid: false,
    countryOptions: optionsCountry,
    countryDefault: {
      label: 'Seleccione el país del documento',
      value: ''
    },
    name: '',
    nameValid: false
  };
};
function useGafpriTypeDocument() {
  var _React$useReducer = _react["default"].useReducer(reducer, initialState()),
    _React$useReducer2 = (0, _slicedToArray2["default"])(_React$useReducer, 2),
    state = _React$useReducer2[0],
    dispatch = _React$useReducer2[1];
  var country = state.country,
    countryValid = state.countryValid,
    countryOptions = state.countryOptions,
    countryDefault = state.countryDefault,
    name = state.name,
    nameValid = state.nameValid;

  /**
   * SITES
   *
   *
   */

  // Setear valores de sitio
  var setCountry = function setCountry(value) {
    return dispatch({
      type: actionTypes.country,
      payload: value
    });
  };
  var setCountryValid = function setCountryValid(value) {
    return dispatch({
      type: actionTypes.countryValid,
      payload: value
    });
  };
  var setCountryDefault = function setCountryDefault(value) {
    return dispatch({
      type: actionTypes.countryDefault,
      payload: value
    });
  };
  var setName = function setName(value) {
    return dispatch({
      type: actionTypes.name,
      payload: value
    });
  };
  var setNameValid = function setNameValid(value) {
    return dispatch({
      type: actionTypes.nameValid,
      payload: value
    });
  };

  // Funciones de Validacion
  var validationCountry = function validationCountry(value) {
    var validation = (0, _helpers.validationSelect)(value, 'countryTypeDocument', 'gs-input-alert');
    setCountryValid(validation);
    return validation;
  };
  var validationName = function validationName(value) {
    var valid = (0, _helpers.validationInput)(value, /^[-a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_,.&'\-\s]+$/, 'nameTypeDocument', 'gs-input-alert', true);
    setNameValid(valid);
    return valid;
  };
  var validationButtonNext = function validationButtonNext() {
    if (countryValid && nameValid) {
      (0, _helpers.removeClass)('buttonNextTypeDocument', 'gs-disabled');
    } else {
      (0, _helpers.addClass)('buttonNextTypeDocument', 'gs-disabled');
    }
  };

  // Funciones de cambios

  var changeCountry = function changeCountry(options) {
    (0, _helpers.changeSelect)({
      newValue: options,
      validation: validationCountry,
      setDefault: setCountryDefault,
      setValue: setCountry
    });
  };
  var changeName = function changeName(value) {
    var newName = value.toLocaleUpperCase();
    (0, _helpers.changeInputText)({
      value: newName,
      validation: validationName,
      setValue: setName
    });
  };

  /**
   * Export
   *
   *
   */
  var states = {
    country: country,
    countryValid: countryValid,
    countryOptions: countryOptions,
    countryDefault: countryDefault,
    name: name,
    nameValid: nameValid
  };
  var actions = {
    changeCountry: changeCountry,
    validationCountry: validationCountry,
    changeName: changeName,
    validationName: validationName,
    validationButtonNext: validationButtonNext
  };
  return {
    states: states,
    actions: actions
  };
}