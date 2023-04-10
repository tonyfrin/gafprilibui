"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriUser = useGafpriUser;
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
  name: 'NAME',
  nameValid: 'NAME_VALID',
  lastName: 'LAST_NAME',
  lastNameValid: 'LAST_NAME_VALID',
  role: 'ROLE',
  roleValid: 'ROLE_VALID',
  documentIndex: 'DOCUMENT_INDEX',
  documentIndexValid: 'DOCUMENT_INDEX_VALID',
  documentIndexOptions: 'DOCUMENT_INDEX_OPTIONS',
  documentIndexDefault: 'DOCUMENT_INDEX_DEFAULT',
  document: 'DOCUMENT',
  documentValid: 'DOCUMENT_VALID',
  address1: 'ADDRESS_1',
  address1Valid: 'ADDRESS_1_VALID',
  address2: 'ADDRESS_2',
  address2Valid: 'ADDRESS_2_VALID',
  city: 'CITY',
  cityValid: 'CITY_VALID',
  cityOptions: 'CITY_OPTIONS',
  cityDefault: 'CITY_DEFAULT',
  stateCountry: 'STATE_COUNTRY',
  stateCountryValid: 'STATE_COUNTRY_VALID',
  stateCountryOptions: 'STATE_COUNTRY_OPTIONS',
  stateCountryDefault: 'STATE_COUNTRY_DEFAULT',
  country: 'COUNTRY',
  countryValid: 'COUNTRY_VALID',
  countryDefault: 'COUNTREY_DEFAULT',
  postcode: 'POSTCODE',
  postcodeValid: 'POSTCODE_VALID',
  email: 'EMAIL',
  emailValid: 'EMAIL_VALID',
  phone: 'PHONE',
  phoneValid: 'PHONE_VALID',
  password: 'PASSWORD',
  passwordValid: 'PASSWORD_VALID'
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
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.lastName, function (state, payload) {
  if (typeof payload === 'string') {
    return _objectSpread(_objectSpread({}, state), {}, {
      lastName: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.lastNameValid, function (state, payload) {
  if (typeof payload === 'boolean') {
    return _objectSpread(_objectSpread({}, state), {}, {
      lastNameValid: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.role, function (state, payload) {
  if (typeof payload === 'string') {
    return _objectSpread(_objectSpread({}, state), {}, {
      role: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.roleValid, function (state, payload) {
  if (typeof payload === 'boolean') {
    return _objectSpread(_objectSpread({}, state), {}, {
      roleValid: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.documentIndex, function (state, payload) {
  if (typeof payload === 'string') {
    return _objectSpread(_objectSpread({}, state), {}, {
      documentIndex: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.documentIndexValid, function (state, payload) {
  if (typeof payload === 'boolean') {
    return _objectSpread(_objectSpread({}, state), {}, {
      documentIndexValid: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.documentIndexOptions, function (state, payload) {
  if ((0, _helpers.isSelectDefaultArray)(payload)) {
    return _objectSpread(_objectSpread({}, state), {}, {
      documentIndexOptions: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.documentIndexDefault, function (state, payload) {
  if ((0, _helpers.isSelectDefault)(payload)) {
    return _objectSpread(_objectSpread({}, state), {}, {
      documentIndexDefault: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.document, function (state, payload) {
  if (typeof payload === 'string') {
    return _objectSpread(_objectSpread({}, state), {}, {
      document: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.documentValid, function (state, payload) {
  if (typeof payload === 'boolean') {
    return _objectSpread(_objectSpread({}, state), {}, {
      documentValid: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.address1, function (state, payload) {
  if (typeof payload === 'string') {
    return _objectSpread(_objectSpread({}, state), {}, {
      address1: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.address1Valid, function (state, payload) {
  if (typeof payload === 'boolean') {
    return _objectSpread(_objectSpread({}, state), {}, {
      address1Valid: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.address2, function (state, payload) {
  if (typeof payload === 'string') {
    return _objectSpread(_objectSpread({}, state), {}, {
      address2: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.address2Valid, function (state, payload) {
  if (typeof payload === 'boolean') {
    return _objectSpread(_objectSpread({}, state), {}, {
      address2Valid: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.city, function (state, payload) {
  if (typeof payload === 'string') {
    return _objectSpread(_objectSpread({}, state), {}, {
      city: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.cityValid, function (state, payload) {
  if (typeof payload === 'boolean') {
    return _objectSpread(_objectSpread({}, state), {}, {
      cityValid: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.cityOptions, function (state, payload) {
  if ((0, _helpers.isSelectDefaultArray)(payload)) {
    return _objectSpread(_objectSpread({}, state), {}, {
      cityOptions: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.cityDefault, function (state, payload) {
  if ((0, _helpers.isSelectDefault)(payload)) {
    return _objectSpread(_objectSpread({}, state), {}, {
      cityDefault: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.stateCountry, function (state, payload) {
  if (typeof payload === 'string') {
    return _objectSpread(_objectSpread({}, state), {}, {
      stateCountry: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.stateCountryValid, function (state, payload) {
  if (typeof payload === 'boolean') {
    return _objectSpread(_objectSpread({}, state), {}, {
      stateCountryValid: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.stateCountryOptions, function (state, payload) {
  if ((0, _helpers.isSelectDefaultArray)(payload)) {
    return _objectSpread(_objectSpread({}, state), {}, {
      stateCountryOptions: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.stateCountryDefault, function (state, payload) {
  if ((0, _helpers.isSelectDefault)(payload)) {
    return _objectSpread(_objectSpread({}, state), {}, {
      stateCountryDefault: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.country, function (state, payload) {
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
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.postcode, function (state, payload) {
  if (typeof payload === 'string') {
    return _objectSpread(_objectSpread({}, state), {}, {
      postcode: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.postcodeValid, function (state, payload) {
  if (typeof payload === 'boolean') {
    return _objectSpread(_objectSpread({}, state), {}, {
      postcodeValid: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.email, function (state, payload) {
  if (typeof payload === 'string') {
    return _objectSpread(_objectSpread({}, state), {}, {
      email: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.emailValid, function (state, payload) {
  if (typeof payload === 'boolean') {
    return _objectSpread(_objectSpread({}, state), {}, {
      emailValid: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.phone, function (state, payload) {
  if (typeof payload === 'string') {
    return _objectSpread(_objectSpread({}, state), {}, {
      phone: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.phoneValid, function (state, payload) {
  if (typeof payload === 'boolean') {
    return _objectSpread(_objectSpread({}, state), {}, {
      phoneValid: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.password, function (state, payload) {
  if (typeof payload === 'string') {
    return _objectSpread(_objectSpread({}, state), {}, {
      password: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.passwordValid, function (state, payload) {
  if (typeof payload === 'boolean') {
    return _objectSpread(_objectSpread({}, state), {}, {
      passwordValid: payload
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
    name: '',
    nameValid: false,
    lastName: '',
    lastNameValid: false,
    role: '',
    roleValid: false,
    documentIndex: '',
    documentIndexValid: false,
    documentIndexOptions: [],
    documentIndexDefault: {
      label: 'Tipo de Documento',
      value: ''
    },
    document: '',
    documentValid: false,
    address1: '',
    address1Valid: false,
    address2: '',
    address2Valid: true,
    city: '',
    cityValid: false,
    cityOptions: [],
    cityDefault: {
      label: 'Ciudad',
      value: ''
    },
    stateCountry: '',
    stateCountryValid: false,
    stateCountryOptions: [],
    stateCountryDefault: {
      label: 'Estado',
      value: ''
    },
    country: '',
    countryValid: false,
    countryOptions: optionsCountry,
    countryDefault: {
      label: 'País',
      value: ''
    },
    postcode: '',
    postcodeValid: true,
    email: '',
    emailValid: false,
    phone: '',
    phoneValid: false,
    password: '',
    passwordValid: false
  };
};
function useGafpriUser() {
  var _React$useReducer = _react["default"].useReducer(reducer, initialState()),
    _React$useReducer2 = (0, _slicedToArray2["default"])(_React$useReducer, 2),
    state = _React$useReducer2[0],
    dispatch = _React$useReducer2[1];
  var name = state.name,
    nameValid = state.nameValid,
    lastName = state.lastName,
    lastNameValid = state.lastNameValid,
    role = state.role,
    roleValid = state.roleValid,
    documentIndex = state.documentIndex,
    documentIndexValid = state.documentIndexValid,
    documentIndexOptions = state.documentIndexOptions,
    documentIndexDefault = state.documentIndexDefault,
    document = state.document,
    documentValid = state.documentValid,
    address1 = state.address1,
    address1Valid = state.address1Valid,
    address2 = state.address2,
    address2Valid = state.address2Valid,
    city = state.city,
    cityValid = state.cityValid,
    cityOptions = state.cityOptions,
    cityDefault = state.cityDefault,
    stateCountry = state.stateCountry,
    stateCountryValid = state.stateCountryValid,
    stateCountryOptions = state.stateCountryOptions,
    stateCountryDefault = state.stateCountryDefault,
    country = state.country,
    countryValid = state.countryValid,
    countryOptions = state.countryOptions,
    countryDefault = state.countryDefault,
    postcode = state.postcode,
    postcodeValid = state.postcodeValid,
    email = state.email,
    emailValid = state.emailValid,
    phone = state.phone,
    phoneValid = state.phoneValid,
    password = state.password,
    passwordValid = state.passwordValid;

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
  var setLastName = function setLastName(value) {
    return dispatch({
      type: actionTypes.lastName,
      payload: value
    });
  };
  var setLastNameValid = function setLastNameValid(value) {
    return dispatch({
      type: actionTypes.lastNameValid,
      payload: value
    });
  };
  var setRole = function setRole(value) {
    return dispatch({
      type: actionTypes.role,
      payload: value
    });
  };
  var setRoleValid = function setRoleValid(value) {
    return dispatch({
      type: actionTypes.roleValid,
      payload: value
    });
  };
  var setDocumentIndex = function setDocumentIndex(value) {
    return dispatch({
      type: actionTypes.documentIndex,
      payload: value
    });
  };
  var setDocumentIndexValid = function setDocumentIndexValid(value) {
    return dispatch({
      type: actionTypes.documentIndexValid,
      payload: value
    });
  };
  var setDocumentIndexOptions = function setDocumentIndexOptions(value) {
    return dispatch({
      type: actionTypes.documentIndexOptions,
      payload: value
    });
  };
  var setDocumentIndexDefault = function setDocumentIndexDefault(value) {
    return dispatch({
      type: actionTypes.documentIndexDefault,
      payload: value
    });
  };
  var setDocument = function setDocument(value) {
    return dispatch({
      type: actionTypes.document,
      payload: value
    });
  };
  var setDocumentValid = function setDocumentValid(value) {
    return dispatch({
      type: actionTypes.documentValid,
      payload: value
    });
  };
  var setAddress1 = function setAddress1(value) {
    return dispatch({
      type: actionTypes.address1,
      payload: value
    });
  };
  var setAddress1Valid = function setAddress1Valid(value) {
    return dispatch({
      type: actionTypes.address1Valid,
      payload: value
    });
  };
  var setAddress2 = function setAddress2(value) {
    return dispatch({
      type: actionTypes.address2,
      payload: value
    });
  };
  var setAddress2Valid = function setAddress2Valid(value) {
    return dispatch({
      type: actionTypes.address2Valid,
      payload: value
    });
  };
  var setCity = function setCity(value) {
    return dispatch({
      type: actionTypes.city,
      payload: value
    });
  };
  var setCityValid = function setCityValid(value) {
    return dispatch({
      type: actionTypes.cityValid,
      payload: value
    });
  };
  var setCityOptions = function setCityOptions(value) {
    return dispatch({
      type: actionTypes.cityOptions,
      payload: value
    });
  };
  var setCityDefault = function setCityDefault(value) {
    return dispatch({
      type: actionTypes.cityDefault,
      payload: value
    });
  };
  var setStateCountry = function setStateCountry(value) {
    return dispatch({
      type: actionTypes.stateCountry,
      payload: value
    });
  };
  var setStateCountryValid = function setStateCountryValid(value) {
    return dispatch({
      type: actionTypes.stateCountryValid,
      payload: value
    });
  };
  var setStateCountryOptions = function setStateCountryOptions(value) {
    return dispatch({
      type: actionTypes.stateCountryOptions,
      payload: value
    });
  };
  var setStateCountryDefault = function setStateCountryDefault(value) {
    return dispatch({
      type: actionTypes.stateCountryDefault,
      payload: value
    });
  };
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
  var setPostcode = function setPostcode(value) {
    return dispatch({
      type: actionTypes.postcode,
      payload: value
    });
  };
  var setPostcodeValid = function setPostcodeValid(value) {
    return dispatch({
      type: actionTypes.postcodeValid,
      payload: value
    });
  };
  var setEmail = function setEmail(value) {
    return dispatch({
      type: actionTypes.email,
      payload: value
    });
  };
  var setEmailValid = function setEmailValid(value) {
    return dispatch({
      type: actionTypes.emailValid,
      payload: value
    });
  };
  var setPhone = function setPhone(value) {
    return dispatch({
      type: actionTypes.phone,
      payload: value
    });
  };
  var setPhoneValid = function setPhoneValid(value) {
    return dispatch({
      type: actionTypes.phoneValid,
      payload: value
    });
  };
  var setPassword = function setPassword(value) {
    return dispatch({
      type: actionTypes.password,
      payload: value
    });
  };
  var setPasswordValid = function setPasswordValid(value) {
    return dispatch({
      type: actionTypes.passwordValid,
      payload: value
    });
  };

  // Funciones de Validacion
  var validationName = function validationName(value) {
    return (0, _helpers.validationInputName)({
      name: value,
      inputId: 'nameUser',
      setValid: setNameValid
    });
  };
  var validationLastName = function validationLastName(value) {
    return (0, _helpers.validationInputName)({
      name: value,
      inputId: 'lastNameUser',
      setValid: setLastNameValid
    });
  };
  var validationRole = function validationRole(value) {
    return (0, _helpers.validationInputName)({
      name: value,
      inputId: 'roleUser',
      setValid: setRoleValid
    });
  };
  var validationDocumentIndex = function validationDocumentIndex(value) {
    var validation = (0, _helpers.validationSelect)(value, 'typeDocumentUser', 'gs-input-alert');
    setDocumentIndexValid(validation);
    return validation;
  };
  var validationDocument = function validationDocument(value) {
    var valid = (0, _helpers.validationInput)(value, /^\d{1,12}(-\d{1,12})?$/, 'documentUser', 'gs-input-alert', true);
    setDocumentValid(valid);
    return valid;
  };
  var validationAddress1 = function validationAddress1(newValue) {
    return (0, _helpers.validationInputAddress)({
      value: newValue,
      inputId: 'address1User',
      setValid: setAddress1Valid
    });
  };
  var validationAddress2 = function validationAddress2(newValue) {
    return (0, _helpers.validationInputAddress)({
      value: newValue,
      inputId: 'address2User',
      setValid: setAddress2Valid
    });
  };
  var validationCity = function validationCity(value) {
    var validation = (0, _helpers.validationSelect)(value, 'cityUser', 'gs-input-alert');
    setCityValid(validation);
    return validation;
  };
  var validationStateCountry = function validationStateCountry(value) {
    var validation = (0, _helpers.validationSelect)(value, 'stateCountryUser', 'gs-input-alert');
    setStateCountryValid(validation);
    return validation;
  };
  var validationCountry = function validationCountry(value) {
    var validation = (0, _helpers.validationSelect)(value, 'countryUser', 'gs-input-alert');
    setCountryValid(validation);
    return validation;
  };
  var validationPostcode = function validationPostcode(newValue) {
    return (0, _helpers.validationInputPostcode)({
      value: newValue,
      inputId: 'postcodeUser',
      setValid: setPostcodeValid
    });
  };
  var validationEmail = function validationEmail(newValue) {
    return (0, _helpers.validationInputEmail)({
      value: newValue,
      inputId: 'emailUser',
      setValid: setEmailValid
    });
  };
  var validationPhone = function validationPhone(newValue) {
    return (0, _helpers.validationInputPhone)({
      value: newValue,
      inputId: 'phoneUser',
      setValid: setPhoneValid
    });
  };
  var validationPassword = function validationPassword(newValue) {
    return (0, _helpers.validationInputPassword)({
      value: newValue,
      inputId: 'passwordUser',
      setValid: setPasswordValid
    });
  };
  var validationButtonNext = function validationButtonNext() {
    if (nameValid && lastNameValid && roleValid && documentIndexValid && documentValid && address1Valid && address2Valid && cityValid && stateCountryValid && countryValid && postcodeValid && emailValid && phoneValid && passwordValid) {
      (0, _helpers.removeClass)('buttonNextUser', 'gs-disabled');
    } else {
      (0, _helpers.addClass)('buttonNextUser', 'gs-disabled');
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
  var changeLastName = function changeLastName(value) {
    var newLastName = (0, _helpers.toTitleCase)(value);
    (0, _helpers.changeInputText)({
      value: newLastName,
      validation: validationLastName,
      setValue: setLastName
    });
  };
  var changeRole = function changeRole(value) {
    var newRole = (0, _helpers.toTitleCase)(value);
    (0, _helpers.changeInputText)({
      value: newRole,
      validation: validationRole,
      setValue: setRole
    });
  };
  var changeDocumentIndex = function changeDocumentIndex(options) {
    (0, _helpers.changeSelect)({
      newValue: options,
      validation: validationDocumentIndex,
      setDefault: setDocumentIndexDefault,
      setValue: setDocumentIndex
    });
  };
  var changeDocument = function changeDocument(newValue) {
    (0, _helpers.changeInputText)({
      value: newValue,
      validation: validationDocument,
      setValue: setDocument
    });
  };
  var changeAddress1 = function changeAddress1(value) {
    var newValue = (0, _helpers.toTitleCase)(value);
    (0, _helpers.changeInputText)({
      value: newValue,
      validation: validationAddress1,
      setValue: setAddress1
    });
  };
  var changeAddress2 = function changeAddress2(value) {
    var newValue = (0, _helpers.toTitleCase)(value);
    (0, _helpers.changeInputText)({
      value: newValue,
      validation: validationAddress2,
      setValue: setAddress2
    });
  };
  var changeCity = function changeCity(options) {
    (0, _helpers.changeSelect)({
      newValue: options,
      validation: validationCity,
      setDefault: setCityDefault,
      setValue: setCity
    });
  };
  var changeStateCountry = function changeStateCountry(options) {
    (0, _helpers.changeSelect)({
      newValue: options,
      validation: validationStateCountry,
      setDefault: setStateCountryDefault,
      setValue: setStateCountry
    });
  };
  var changeCountry = function changeCountry(options) {
    (0, _helpers.changeSelect)({
      newValue: options,
      validation: validationCountry,
      setDefault: setCountryDefault,
      setValue: setCountry
    });
  };
  var changePostcode = function changePostcode(newValue) {
    (0, _helpers.changeInputText)({
      value: newValue,
      validation: validationPostcode,
      setValue: setPostcode
    });
  };
  var changeEmail = function changeEmail(newValue) {
    var newEmail = newValue.toLocaleLowerCase();
    (0, _helpers.changeInputText)({
      value: newEmail,
      validation: validationEmail,
      setValue: setEmail
    });
  };
  var changePhone = function changePhone(newValue) {
    (0, _helpers.changeInputText)({
      value: newValue,
      validation: validationPhone,
      setValue: setPhone
    });
  };
  var changePassword = function changePassword(newValue) {
    (0, _helpers.changeInputText)({
      value: newValue,
      validation: validationPassword,
      setValue: setPassword
    });
  };
  var changeDocumentIndexOptions = _react["default"].useCallback(function () {
    var newValue = [];
    if (country && _Constans.DocumentsIndex[country] && _Constans.DocumentsIndex[country].length > 0) {
      _Constans.DocumentsIndex[country].forEach(function (item) {
        newValue.push({
          value: item.value,
          label: item.label
        });
      });
    }
    setDocumentIndexDefault({
      label: 'Tipo Documento',
      value: ''
    });
    setDocumentIndex('');
    setDocumentIndexOptions(newValue);
  }, [country]);
  var changeCityOptions = _react["default"].useCallback(function () {
    var newValueCity = [];
    if (_Constans.Cities[0][country]) {
      if (Array.isArray(_Constans.Cities[0][country][0][stateCountry])) {
        _Constans.Cities[0][country][0][stateCountry].forEach(function (item) {
          Object.keys(item).forEach(function (key) {
            newValueCity.push({
              value: item[key],
              label: item[key]
            });
          });
        });
      }
    }
    setCityDefault({
      label: 'Ciudad',
      value: ''
    });
    setCity('');
    setCityOptions(newValueCity);
  }, [country, stateCountry]);
  var changeStateCountryOptions = _react["default"].useCallback(function () {
    var newValueState = [];
    if (country && _Constans.StatesCountries[0][country].length > 0) {
      _Constans.StatesCountries[0][country].forEach(function (item) {
        Object.keys(item).forEach(function (key) {
          newValueState.push({
            value: key,
            label: item[key]
          });
        });
      });
    }
    setStateCountryDefault({
      label: 'Estado',
      value: ''
    });
    setStateCountry('');
    setStateCountryOptions(newValueState);
  }, [country]);

  /**
   * EFFECT
   *
   *
   */

  _react["default"].useEffect(function () {
    changeDocumentIndexOptions();
  }, [changeDocumentIndexOptions]);
  _react["default"].useEffect(function () {
    changeStateCountryOptions();
  }, [changeStateCountryOptions]);
  _react["default"].useEffect(function () {
    changeCityOptions();
  }, [changeCityOptions]);

  /**
   * Export
   *
   *
   */
  var states = {
    name: name,
    nameValid: nameValid,
    lastName: lastName,
    lastNameValid: lastNameValid,
    role: role,
    roleValid: roleValid,
    documentIndex: documentIndex,
    documentIndexValid: documentIndexValid,
    documentIndexOptions: documentIndexOptions,
    documentIndexDefault: documentIndexDefault,
    document: document,
    documentValid: documentValid,
    address1: address1,
    address1Valid: address1Valid,
    address2: address2,
    address2Valid: address2Valid,
    city: city,
    cityValid: cityValid,
    cityOptions: cityOptions,
    cityDefault: cityDefault,
    stateCountry: stateCountry,
    stateCountryValid: stateCountryValid,
    stateCountryOptions: stateCountryOptions,
    stateCountryDefault: stateCountryDefault,
    country: country,
    countryValid: countryValid,
    countryOptions: countryOptions,
    countryDefault: countryDefault,
    postcode: postcode,
    postcodeValid: postcodeValid,
    email: email,
    emailValid: emailValid,
    phone: phone,
    phoneValid: phoneValid,
    password: password,
    passwordValid: passwordValid
  };
  var actions = {
    changeName: changeName,
    validationName: validationName,
    changeLastName: changeLastName,
    validationLastName: validationLastName,
    changeRole: changeRole,
    validationRole: validationRole,
    changeDocumentIndex: changeDocumentIndex,
    validationDocumentIndex: validationDocumentIndex,
    changeDocumentIndexOptions: changeDocumentIndexOptions,
    changeDocument: changeDocument,
    validationDocument: validationDocument,
    changeAddress1: changeAddress1,
    validationAddress1: validationAddress1,
    changeAddress2: changeAddress2,
    validationAddress2: validationAddress2,
    changeCity: changeCity,
    validationCity: validationCity,
    changeCityOptions: changeCityOptions,
    changeStateCountry: changeStateCountry,
    validationStateCountry: validationStateCountry,
    changeStateCountryOptions: changeStateCountryOptions,
    changeCountry: changeCountry,
    validationCountry: validationCountry,
    changePostcode: changePostcode,
    validationPostcode: validationPostcode,
    changeEmail: changeEmail,
    validationEmail: validationEmail,
    changePhone: changePhone,
    validationPhone: validationPhone,
    changePassword: changePassword,
    validationPassword: validationPassword,
    validationButtonNext: validationButtonNext
  };
  return {
    states: states,
    actions: actions
  };
}