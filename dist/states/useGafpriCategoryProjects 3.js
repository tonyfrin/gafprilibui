"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriCategoryProjects = useGafpriCategoryProjects;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _helpers = require("../helpers");
var _reducerObject;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var actionTypes = {
  name: 'NAME',
  nameValid: 'NAME_VALID',
  description: 'LAST_NAME',
  descriptionValid: 'LAST_NAME_VALID'
};
var reducerObject = (_reducerObject = {}, (0, _defineProperty2["default"])(_reducerObject, actionTypes.name, function (state, payload) {
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
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.description, function (state, payload) {
  if (typeof payload === 'string') {
    return _objectSpread(_objectSpread({}, state), {}, {
      description: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.descriptionValid, function (state, payload) {
  if (typeof payload === 'boolean') {
    return _objectSpread(_objectSpread({}, state), {}, {
      descriptionValid: payload
    });
  }
  return state;
}), _reducerObject);
var reducer = function reducer(state, action) {
  var handler = reducerObject[action.type];
  return handler(state, action.payload);
};
var initialState = function initialState() {
  return {
    name: '',
    nameValid: false,
    description: '',
    descriptionValid: false
  };
};
function useGafpriCategoryProjects(_ref) {
  var type = _ref.type;
  var _React$useReducer = _react["default"].useReducer(reducer, initialState()),
    _React$useReducer2 = (0, _slicedToArray2["default"])(_React$useReducer, 2),
    state = _React$useReducer2[0],
    dispatch = _React$useReducer2[1];
  var name = state.name,
    nameValid = state.nameValid,
    description = state.description,
    descriptionValid = state.descriptionValid;

  /**
   * EFFECT
   *
   *
   */

  // Setear valores de sitio
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
  var setDescription = function setDescription(value) {
    return dispatch({
      type: actionTypes.description,
      payload: value
    });
  };
  var setDescriptionValid = function setDescriptionValid(value) {
    return dispatch({
      type: actionTypes.descriptionValid,
      payload: value
    });
  };

  // Funciones de Validacion
  var validationName = function validationName(value) {
    return (0, _helpers.validationInputName)({
      name: value,
      inputId: "name".concat(type),
      setValid: setNameValid
    });
  };
  var validationDescription = function validationDescription(value) {
    return (0, _helpers.validationInputName)({
      name: value,
      inputId: "description".concat(type),
      setValid: setDescriptionValid
    });
  };
  var validationButtonNext = function validationButtonNext() {
    if (nameValid && description) {
      (0, _helpers.removeClass)("buttonNext".concat(type), 'gs-disabled');
    } else {
      (0, _helpers.addClass)("buttonNext".concat(type), 'gs-disabled');
    }
  };

  // Funciones de cambios
  var changeName = function changeName(value) {
    var newName = (0, _helpers.toTitleCase)(value);
    (0, _helpers.changeInputText)({
      value: newName,
      validation: validationName,
      setValue: setName
    });
  };
  var changeDescription = function changeDescription(value) {
    var newLastName = (0, _helpers.toTitleCase)(value);
    (0, _helpers.changeInputText)({
      value: newLastName,
      validation: validationDescription,
      setValue: setDescription
    });
  };

  /**
   * Export
   *
   *
   */
  var states = {
    name: name,
    nameValid: nameValid,
    description: description,
    descriptionValid: descriptionValid
  };
  var actions = {
    changeName: changeName,
    validationName: validationName,
    changeDescription: changeDescription,
    validationDescription: validationDescription,
    validationButtonNext: validationButtonNext
  };
  return {
    states: states,
    actions: actions
  };
}