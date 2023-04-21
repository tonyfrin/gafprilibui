"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriSites = useGafpriSites;
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
  siteName: 'SITE_NAME',
  validSiteName: 'VALID_SITE_NAME',
  siteDocumentIndex: 'SITE_DOCUMENT_NAME',
  validSiteDocumentIndex: 'VALID_SITE_DOCUMENT_INDEX',
  siteDocumentIndexDefault: 'SITE_DOCUMENT_INDEX_DEFAULT',
  document: 'DOCUMENT',
  validDocument: 'VALID_DOCUMENT',
  address1: 'ADDRESS_1',
  validAddress1: 'VALID_ADDRESS_1',
  address2: 'ADDRESS_2',
  validAddress2: 'VALID_ADDRESS_2',
  city: 'CITY',
  validCity: 'VALID_CITY',
  cityOptions: 'CITY_OPTIONS',
  cityDefault: 'CITY_DEFOULT',
  stateCountry: 'STATE_COUNTRY',
  validStateCountry: 'VALID_STATE_COUNTRY',
  stateCountryOptions: 'STATE_COUNTRY_OPTIONS',
  stateCountryDefault: 'STATE_COUNTRY_DEFAULT',
  country: 'COUNTRY',
  validCountry: 'VALID_COUNTRY',
  countryDefault: 'COUNTRY_DEFAULT',
  postcode: 'POSTCODE',
  validPostcode: 'VALID_POSTCODE',
  phone: 'PHONE',
  validPhone: 'VALID_PHONE',
  email: 'EMAIL',
  validEmail: 'VALID_EMAIL'
};
var reducerObject = (_reducerObject = {}, (0, _defineProperty2["default"])(_reducerObject, actionTypes.siteName, function (state, payload) {
  if (typeof payload === 'string') {
    return _objectSpread(_objectSpread({}, state), {}, {
      siteName: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.validSiteName, function (state, payload) {
  if (typeof payload === 'boolean') {
    return _objectSpread(_objectSpread({}, state), {}, {
      validSiteName: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.siteDocumentIndex, function (state, payload) {
  if (typeof payload === 'string') {
    return _objectSpread(_objectSpread({}, state), {}, {
      siteDocumentIndex: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.validSiteDocumentIndex, function (state, payload) {
  if (typeof payload === 'boolean') {
    return _objectSpread(_objectSpread({}, state), {}, {
      validSiteDocumentIndex: payload
    });
  }
  return state;
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.siteDocumentIndexDefault, function (state, payload) {
  if ((0, _helpers.isSelectDefault)(payload)) {
    return _objectSpread(_objectSpread({}, state), {}, {
      siteDocumentIndexDefault: payload
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
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.validDocument, function (state, payload) {
  if (typeof payload === 'boolean') {
    return _objectSpread(_objectSpread({}, state), {}, {
      validDocument: payload
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
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.validAddress1, function (state, payload) {
  if (typeof payload === 'boolean') {
    return _objectSpread(_objectSpread({}, state), {}, {
      validAddress1: payload
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
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.validAddress2, function (state, payload) {
  if (typeof payload === 'boolean') {
    return _objectSpread(_objectSpread({}, state), {}, {
      validAddress2: payload
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
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.validCity, function (state, payload) {
  if (typeof payload === 'boolean') {
    return _objectSpread(_objectSpread({}, state), {}, {
      validCity: payload
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
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.validStateCountry, function (state, payload) {
  if (typeof payload === 'boolean') {
    return _objectSpread(_objectSpread({}, state), {}, {
      validStateCountry: payload
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
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.validCountry, function (state, payload) {
  if (typeof payload === 'boolean') {
    return _objectSpread(_objectSpread({}, state), {}, {
      validCountry: payload
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
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.validPostcode, function (state, payload) {
  if (typeof payload === 'boolean') {
    return _objectSpread(_objectSpread({}, state), {}, {
      validPostcode: payload
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
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.validPhone, function (state, payload) {
  if (typeof payload === 'boolean') {
    return _objectSpread(_objectSpread({}, state), {}, {
      validPhone: payload
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
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.validEmail, function (state, payload) {
  if (typeof payload === 'boolean') {
    return _objectSpread(_objectSpread({}, state), {}, {
      validEmail: payload
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
    siteName: '',
    validSiteName: false,
    siteDocumentIndex: '',
    validSiteDocumentIndex: false,
    siteDocumentIndexOptions: [{
      label: 'J',
      value: 'J'
    }, {
      label: 'V',
      value: 'V'
    }, {
      label: 'G',
      value: 'G'
    }, {
      label: 'No Aplica',
      value: 'null'
    }],
    siteDocumentIndexDefault: {
      label: 'Elija el tipo de Documento',
      value: ''
    },
    document: '',
    validDocument: false,
    address1: '',
    validAddress1: false,
    address2: '',
    validAddress2: true,
    city: '',
    validCity: false,
    cityOptions: [],
    cityDefault: {
      label: 'Elija la Ciudad',
      value: ''
    },
    stateCountry: '',
    validStateCountry: false,
    stateCountryOptions: [],
    stateCountryDefault: {
      label: 'Elija el Estado',
      value: ''
    },
    country: '',
    validCountry: false,
    countryOptions: optionsCountry,
    countryDefault: {
      label: 'Elija el país',
      value: ''
    },
    postcode: '',
    validPostcode: true,
    phone: '',
    validPhone: true,
    email: '',
    validEmail: true
  };
};
function useGafpriSites() {
  var _React$useReducer = _react["default"].useReducer(reducer, initialState()),
    _React$useReducer2 = (0, _slicedToArray2["default"])(_React$useReducer, 2),
    state = _React$useReducer2[0],
    dispatch = _React$useReducer2[1];
  var siteName = state.siteName,
    validSiteName = state.validSiteName,
    siteDocumentIndex = state.siteDocumentIndex,
    validSiteDocumentIndex = state.validSiteDocumentIndex,
    siteDocumentIndexOptions = state.siteDocumentIndexOptions,
    siteDocumentIndexDefault = state.siteDocumentIndexDefault,
    document = state.document,
    validDocument = state.validDocument,
    address1 = state.address1,
    validAddress1 = state.validAddress1,
    address2 = state.address2,
    validAddress2 = state.validAddress2,
    city = state.city,
    validCity = state.validCity,
    cityOptions = state.cityOptions,
    cityDefault = state.cityDefault,
    stateCountry = state.stateCountry,
    validStateCountry = state.validStateCountry,
    stateCountryOptions = state.stateCountryOptions,
    stateCountryDefault = state.stateCountryDefault,
    country = state.country,
    validCountry = state.validCountry,
    countryOptions = state.countryOptions,
    countryDefault = state.countryDefault,
    postcode = state.postcode,
    validPostcode = state.validPostcode,
    phone = state.phone,
    validPhone = state.validPhone,
    email = state.email,
    validEmail = state.validEmail;

  /**
   * SITES
   *
   *
   */

  // Setear valores de sitio
  var setSiteName = function setSiteName(value) {
    return dispatch({
      type: actionTypes.siteName,
      payload: value
    });
  };
  var setValidSiteName = function setValidSiteName(value) {
    return dispatch({
      type: actionTypes.validSiteName,
      payload: value
    });
  };
  var setSiteDocumentIndex = function setSiteDocumentIndex(value) {
    return dispatch({
      type: actionTypes.siteDocumentIndex,
      payload: value
    });
  };
  var setValidSiteDocumentIndex = function setValidSiteDocumentIndex(value) {
    return dispatch({
      type: actionTypes.validSiteDocumentIndex,
      payload: value
    });
  };
  var setSiteDocumentIndexDefault = function setSiteDocumentIndexDefault(value) {
    return dispatch({
      type: actionTypes.siteDocumentIndexDefault,
      payload: value
    });
  };
  var setDocument = function setDocument(value) {
    return dispatch({
      type: actionTypes.document,
      payload: value
    });
  };
  var setValidDocument = function setValidDocument(value) {
    return dispatch({
      type: actionTypes.validDocument,
      payload: value
    });
  };
  var setAddress1 = function setAddress1(value) {
    return dispatch({
      type: actionTypes.address1,
      payload: value
    });
  };
  var setValidAddress1 = function setValidAddress1(value) {
    return dispatch({
      type: actionTypes.validAddress1,
      payload: value
    });
  };
  var setAddress2 = function setAddress2(value) {
    return dispatch({
      type: actionTypes.address2,
      payload: value
    });
  };
  var setValidAddress2 = function setValidAddress2(value) {
    return dispatch({
      type: actionTypes.validAddress2,
      payload: value
    });
  };
  var setCity = function setCity(value) {
    return dispatch({
      type: actionTypes.city,
      payload: value
    });
  };
  var setValidCity = function setValidCity(value) {
    return dispatch({
      type: actionTypes.validCity,
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
  var setValidStateCountry = function setValidStateCountry(value) {
    return dispatch({
      type: actionTypes.validStateCountry,
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
  var setValidCountry = function setValidCountry(value) {
    return dispatch({
      type: actionTypes.validCountry,
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
  var setValidPostcode = function setValidPostcode(value) {
    return dispatch({
      type: actionTypes.validPostcode,
      payload: value
    });
  };
  var setPhone = function setPhone(value) {
    return dispatch({
      type: actionTypes.phone,
      payload: value
    });
  };
  var setValidPhone = function setValidPhone(value) {
    return dispatch({
      type: actionTypes.validPhone,
      payload: value
    });
  };
  var setEmail = function setEmail(value) {
    return dispatch({
      type: actionTypes.email,
      payload: value
    });
  };
  var setValidEmail = function setValidEmail(value) {
    return dispatch({
      type: actionTypes.validEmail,
      payload: value
    });
  };

  // Funciones de Validacion
  var validationButtonNext = function validationButtonNext() {
    if (validSiteName && validSiteDocumentIndex && validDocument && validAddress1 && validAddress2 && validCity && validStateCountry && validCountry && validPostcode && validPhone && validEmail) {
      (0, _helpers.removeClass)('buttonNextInfoSite', 'gs-disabled');
    } else {
      (0, _helpers.addClass)('buttonNextInfoSite', 'gs-disabled');
    }
  };
  var validationSiteName = function validationSiteName(value) {
    return (0, _helpers.validationInputName)({
      name: value,
      inputId: 'siteName',
      setValid: setValidSiteName
    });
  };
  var validationSiteDocumentIndex = function validationSiteDocumentIndex(value) {
    var validation = (0, _helpers.validationSelect)(value, 'siteDocumentIndex', 'gs-input-alert');
    setValidSiteDocumentIndex(validation);
    validationButtonNext();
    return validation;
  };
  var validationDocument = function validationDocument(value) {
    var valid = (0, _helpers.validationInput)(value, /^\d{1,12}(-\d{1,12})?$/, 'siteDocument', 'gs-input-alert', true);
    setValidDocument(valid);
    validationButtonNext();
    return valid;
  };
  var validationAddress1 = function validationAddress1(value) {
    var valid = (0, _helpers.validationInput)(value, /^[a-zA-Z0-9]+[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_#'()\-.,\s]+$/, 'address1', 'gs-input-alert', true);
    setValidAddress1(valid);
    validationButtonNext();
    return valid;
  };
  var validationAddress2 = function validationAddress2(value) {
    var valid = (0, _helpers.validationInput)(value, /^[a-zA-Z0-9]+[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_#'()\-.,\s]+$/, 'address2', 'gs-input-alert');
    setValidAddress2(valid);
    validationButtonNext();
    return valid;
  };
  var validationCity = function validationCity(value) {
    var validation = (0, _helpers.validationSelect)(value, 'citySite', 'gs-input-alert');
    setValidCity(validation);
    validationButtonNext();
    return validation;
  };
  var validationStateCountry = function validationStateCountry(value) {
    var validation = (0, _helpers.validationSelect)(value, 'stateCountrySite', 'gs-input-alert');
    setValidStateCountry(validation);
    validationButtonNext();
    return validation;
  };
  var validationCountry = function validationCountry(value) {
    var validation = (0, _helpers.validationSelect)(value, 'countrySite', 'gs-input-alert');
    setValidCountry(validation);
    validationButtonNext();
    return validation;
  };
  var validationPostcode = function validationPostcode(value) {
    var valid = (0, _helpers.validationInput)(value, /^[a-zA-Z0-9]+[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_#()\-.\s]+$/, 'postcodeSite', 'gs-input-alert');
    setValidPostcode(valid);
    validationButtonNext();
    return valid;
  };
  var validationPhone = function validationPhone(value) {
    var valid = (0, _helpers.validationInput)(value, /^[0-9]{10,20}/, 'phoneSite', 'gs-input-alert');
    setValidPhone(valid);
    validationButtonNext();
    return valid;
  };
  var validationEmail = function validationEmail(value) {
    var valid = (0, _helpers.validationInput)(value, /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/, 'emailSite', 'gs-input-alert');
    setValidEmail(valid);
    validationButtonNext();
    return valid;
  };

  // Funciones de cambios
  var changeSiteName = function changeSiteName(value) {
    var name = (0, _helpers.toTitleCase)(value);
    (0, _helpers.changeInputText)({
      value: name,
      validation: validationSiteName,
      setValue: setSiteName
    });
  };
  var changeSiteDocumentIndex = function changeSiteDocumentIndex(options) {
    (0, _helpers.changeSelect)({
      newValue: options,
      validation: validationSiteDocumentIndex,
      setDefault: setSiteDocumentIndexDefault,
      setValue: setSiteDocumentIndex
    });
  };
  var changeDocument = function changeDocument(newDocument) {
    (0, _helpers.changeInputText)({
      value: newDocument,
      validation: validationDocument,
      setValue: setDocument
    });
  };
  var changeAddres1 = function changeAddres1(value) {
    var address = (0, _helpers.toTitleCase)(value);
    (0, _helpers.changeInputText)({
      value: address,
      validation: validationAddress1,
      setValue: setAddress1
    });
  };
  var changeAddres2 = function changeAddres2(value) {
    var address = (0, _helpers.toTitleCase)(value);
    (0, _helpers.changeInputText)({
      value: address,
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
      label: 'Elija el Estado',
      value: ''
    });
    setStateCountry('');
    setStateCountryOptions(newValueState);
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
      label: 'Elija la ciudad',
      value: ''
    });
    setCity('');
    setCityOptions(newValueCity);
  }, [country, stateCountry]);
  var changeCountry = function changeCountry(options) {
    changeStateCountryOptions();
    (0, _helpers.changeSelect)({
      newValue: options,
      validation: validationCountry,
      setDefault: setCountryDefault,
      setValue: setCountry
    });
  };
  var changePostcode = function changePostcode(newPostcode) {
    (0, _helpers.changeInputText)({
      value: newPostcode,
      validation: validationPostcode,
      setValue: setPostcode
    });
  };
  var changePhone = function changePhone(newPhone) {
    (0, _helpers.changeInputText)({
      value: newPhone,
      validation: validationPhone,
      setValue: setPhone
    });
  };
  var changeEmail = function changeEmail(inputValue) {
    var newEmail = inputValue.toLocaleLowerCase();
    (0, _helpers.changeInputText)({
      value: newEmail,
      validation: validationEmail,
      setValue: setEmail
    });
  };

  // Efects
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
    siteName: siteName,
    validSiteName: validSiteName,
    siteDocumentIndex: siteDocumentIndex,
    validSiteDocumentIndex: validSiteDocumentIndex,
    siteDocumentIndexOptions: siteDocumentIndexOptions,
    siteDocumentIndexDefault: siteDocumentIndexDefault,
    document: document,
    validDocument: validDocument,
    address1: address1,
    validAddress1: validAddress1,
    address2: address2,
    validAddress2: validAddress2,
    city: city,
    validCity: validCity,
    cityOptions: cityOptions,
    cityDefault: cityDefault,
    stateCountry: stateCountry,
    validStateCountry: validStateCountry,
    stateCountryOptions: stateCountryOptions,
    stateCountryDefault: stateCountryDefault,
    country: country,
    validCountry: validCountry,
    countryOptions: countryOptions,
    countryDefault: countryDefault,
    postcode: postcode,
    validPostcode: validPostcode,
    phone: phone,
    validPhone: validPhone,
    email: email,
    validEmail: validEmail
  };
  var actions = {
    changeSiteName: changeSiteName,
    validationSiteName: validationSiteName,
    changeSiteDocumentIndex: changeSiteDocumentIndex,
    validationSiteDocumentIndex: validationSiteDocumentIndex,
    changeDocument: changeDocument,
    validationDocument: validationDocument,
    changeAddres1: changeAddres1,
    validationAddress1: validationAddress1,
    changeAddres2: changeAddres2,
    validationAddress2: validationAddress2,
    changeCity: changeCity,
    validationCity: validationCity,
    changeStateCountry: changeStateCountry,
    validationStateCountry: validationStateCountry,
    changeCountry: changeCountry,
    validationCountry: validationCountry,
    changePostcode: changePostcode,
    validationPostcode: validationPostcode,
    changePhone: changePhone,
    validationPhone: validationPhone,
    changeEmail: changeEmail,
    validationEmail: validationEmail,
    validationButtonNext: validationButtonNext
  };
  return {
    states: states,
    actions: actions
  };
}