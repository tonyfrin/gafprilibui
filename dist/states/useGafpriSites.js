"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriSites = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _helpers = require("../helpers");
var _Constans = require("../Constans");
var _Context = require("../Context");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var useGafpriSites = function useGafpriSites(_ref) {
  var _useCurrencies$states, _sites$data;
  var useCurrencies = _ref.useCurrencies;
  // Define los estados necesarios para los atributos de Site
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    isReady = _useState2[0],
    setIsReady = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    isFetching = _useState4[0],
    setIsFetching = _useState4[1];
  var _useState5 = (0, _react.useState)(true),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    isInit = _useState6[0],
    setIsInit = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    isAdd = _useState8[0],
    setIsAdd = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    isUpdate = _useState10[0],
    setIsUpdate = _useState10[1];
  var _useState11 = (0, _react.useState)(''),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    name = _useState12[0],
    setName = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    nameValid = _useState14[0],
    setNameValid = _useState14[1];
  var _useState15 = (0, _react.useState)(''),
    _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
    documentIndex = _useState16[0],
    setDocumentIndex = _useState16[1];
  var _useState17 = (0, _react.useState)(false),
    _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
    documentIndexValid = _useState18[0],
    setDocumentIndexValid = _useState18[1];
  var _useState19 = (0, _react.useState)({
      value: '',
      label: 'Elija el tipo de Documento'
    }),
    _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
    documentIndexDefault = _useState20[0],
    setDocumentIndexDefault = _useState20[1];
  var documentIndexOptions = [{
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
  }];
  var _useState21 = (0, _react.useState)(''),
    _useState22 = (0, _slicedToArray2["default"])(_useState21, 2),
    documentNumber = _useState22[0],
    setDocumentNumber = _useState22[1];
  var _useState23 = (0, _react.useState)(false),
    _useState24 = (0, _slicedToArray2["default"])(_useState23, 2),
    documentNumberValid = _useState24[0],
    setDocumentNumberValid = _useState24[1];
  var _useState25 = (0, _react.useState)(''),
    _useState26 = (0, _slicedToArray2["default"])(_useState25, 2),
    address1 = _useState26[0],
    setAddress1 = _useState26[1];
  var _useState27 = (0, _react.useState)(false),
    _useState28 = (0, _slicedToArray2["default"])(_useState27, 2),
    address1Valid = _useState28[0],
    setAddress1Valid = _useState28[1];
  var _useState29 = (0, _react.useState)(''),
    _useState30 = (0, _slicedToArray2["default"])(_useState29, 2),
    address2 = _useState30[0],
    setAddress2 = _useState30[1];
  var _useState31 = (0, _react.useState)(true),
    _useState32 = (0, _slicedToArray2["default"])(_useState31, 2),
    address2Valid = _useState32[0],
    setAddress2Valid = _useState32[1];
  var _useState33 = (0, _react.useState)(''),
    _useState34 = (0, _slicedToArray2["default"])(_useState33, 2),
    city = _useState34[0],
    setCity = _useState34[1];
  var _useState35 = (0, _react.useState)(false),
    _useState36 = (0, _slicedToArray2["default"])(_useState35, 2),
    cityValid = _useState36[0],
    setCityValid = _useState36[1];
  var _useState37 = (0, _react.useState)({
      value: '',
      label: 'Elija la ciudad'
    }),
    _useState38 = (0, _slicedToArray2["default"])(_useState37, 2),
    cityDefault = _useState38[0],
    setCityDefault = _useState38[1];
  var _useState39 = (0, _react.useState)([]),
    _useState40 = (0, _slicedToArray2["default"])(_useState39, 2),
    cityOptions = _useState40[0],
    setCityOptions = _useState40[1];
  var _useState41 = (0, _react.useState)(''),
    _useState42 = (0, _slicedToArray2["default"])(_useState41, 2),
    state = _useState42[0],
    setStateCountry = _useState42[1];
  var _useState43 = (0, _react.useState)(false),
    _useState44 = (0, _slicedToArray2["default"])(_useState43, 2),
    stateCountryValid = _useState44[0],
    setStateCountryValid = _useState44[1];
  var _useState45 = (0, _react.useState)({
      value: '',
      label: 'Elija el Estado'
    }),
    _useState46 = (0, _slicedToArray2["default"])(_useState45, 2),
    stateCountryDefault = _useState46[0],
    setStateCountryDefault = _useState46[1];
  var _useState47 = (0, _react.useState)([]),
    _useState48 = (0, _slicedToArray2["default"])(_useState47, 2),
    stateCountryOptions = _useState48[0],
    setStateCountryOptions = _useState48[1];
  var _useState49 = (0, _react.useState)(''),
    _useState50 = (0, _slicedToArray2["default"])(_useState49, 2),
    country = _useState50[0],
    setCountry = _useState50[1];
  var _useState51 = (0, _react.useState)(false),
    _useState52 = (0, _slicedToArray2["default"])(_useState51, 2),
    countryValid = _useState52[0],
    setCountryValid = _useState52[1];
  var _useState53 = (0, _react.useState)({
      value: '',
      label: 'Elija el Pais'
    }),
    _useState54 = (0, _slicedToArray2["default"])(_useState53, 2),
    countryDefault = _useState54[0],
    setCountryDefault = _useState54[1];
  var countryOptions = [];
  _Constans.Countries.forEach(function (item) {
    Object.keys(item).forEach(function (key) {
      countryOptions.push({
        value: key,
        label: item[key]
      });
    });
  });
  var _useState55 = (0, _react.useState)(''),
    _useState56 = (0, _slicedToArray2["default"])(_useState55, 2),
    postCode = _useState56[0],
    setPostCode = _useState56[1];
  var _useState57 = (0, _react.useState)(true),
    _useState58 = (0, _slicedToArray2["default"])(_useState57, 2),
    postCodeValid = _useState58[0],
    setPostCodeValid = _useState58[1];
  var _useState59 = (0, _react.useState)(''),
    _useState60 = (0, _slicedToArray2["default"])(_useState59, 2),
    email = _useState60[0],
    setEmail = _useState60[1];
  var _useState61 = (0, _react.useState)(false),
    _useState62 = (0, _slicedToArray2["default"])(_useState61, 2),
    emailValid = _useState62[0],
    setEmailValid = _useState62[1];
  var _useState63 = (0, _react.useState)(''),
    _useState64 = (0, _slicedToArray2["default"])(_useState63, 2),
    phone = _useState64[0],
    setPhone = _useState64[1];
  var _useState65 = (0, _react.useState)(false),
    _useState66 = (0, _slicedToArray2["default"])(_useState65, 2),
    phoneValid = _useState66[0],
    setPhoneValid = _useState66[1];
  var _useState67 = (0, _react.useState)(0),
    _useState68 = (0, _slicedToArray2["default"])(_useState67, 2),
    currenciesId = _useState68[0],
    setCurrenciesId = _useState68[1];
  var _useState69 = (0, _react.useState)(false),
    _useState70 = (0, _slicedToArray2["default"])(_useState69, 2),
    currenciesIdValid = _useState70[0],
    setCurrenciesIdValid = _useState70[1];
  var _useState71 = (0, _react.useState)({
      value: '',
      label: 'Elija la moneda del Sitio'
    }),
    _useState72 = (0, _slicedToArray2["default"])(_useState71, 2),
    currenciesIdDefault = _useState72[0],
    setCurrenciesIdDefault = _useState72[1];
  var currenciesIdOptions = ((_useCurrencies$states = useCurrencies.states.currencies.data.items) === null || _useCurrencies$states === void 0 ? void 0 : _useCurrencies$states.map(function (item) {
    return {
      label: "".concat(item.name, " ").concat(item.symbol),
      value: "".concat(item.id)
    };
  })) || [];
  var _useState73 = (0, _react.useState)(''),
    _useState74 = (0, _slicedToArray2["default"])(_useState73, 2),
    currencyLocation = _useState74[0],
    setCurrencyLocation = _useState74[1];
  var _useState75 = (0, _react.useState)(false),
    _useState76 = (0, _slicedToArray2["default"])(_useState75, 2),
    currencyLocationValid = _useState76[0],
    setCurrencyLocationValid = _useState76[1];
  var _useState77 = (0, _react.useState)({
      value: '',
      label: 'Elija la ubicación del símbolo de la moneda'
    }),
    _useState78 = (0, _slicedToArray2["default"])(_useState77, 2),
    currencyLocationDefault = _useState78[0],
    setCurrencyLocationDefault = _useState78[1];
  var currencyLocationOptions = [{
    label: 'Izquierda',
    value: 'left'
  }, {
    label: 'Derecha',
    value: 'right'
  }];
  var _useState79 = (0, _react.useState)(''),
    _useState80 = (0, _slicedToArray2["default"])(_useState79, 2),
    thousandsSeparator = _useState80[0],
    setThousandsSeparator = _useState80[1];
  var _useState81 = (0, _react.useState)(''),
    _useState82 = (0, _slicedToArray2["default"])(_useState81, 2),
    decimalSeparator = _useState82[0],
    setDecimalSeparator = _useState82[1];
  var _useState83 = (0, _react.useState)(false),
    _useState84 = (0, _slicedToArray2["default"])(_useState83, 2),
    separatorValid = _useState84[0],
    setSeparatorValid = _useState84[1];
  var _useState85 = (0, _react.useState)({
      value: '',
      label: 'Selecciona los separadores de la moneda'
    }),
    _useState86 = (0, _slicedToArray2["default"])(_useState85, 2),
    separatorDefault = _useState86[0],
    setSeparatorDefault = _useState86[1];
  var separatorOptions = [{
    label: 'Miles: " . "    Decimal: " , "',
    value: '.'
  }, {
    label: 'Miles: " , "    Decimal: " . "',
    value: ','
  }];
  var setSeparator = function setSeparator(value) {
    if (value === '.') {
      setThousandsSeparator('.');
      setDecimalSeparator(',');
    } else if (value === ',') {
      setThousandsSeparator(',');
      setDecimalSeparator('.');
    }
  };
  var _useState87 = (0, _react.useState)(0),
    _useState88 = (0, _slicedToArray2["default"])(_useState87, 2),
    decimalNumbers = _useState88[0],
    setDecimalNumbers = _useState88[1];
  var _useState89 = (0, _react.useState)(false),
    _useState90 = (0, _slicedToArray2["default"])(_useState89, 2),
    decimalNumbersValid = _useState90[0],
    setDecimalNumbersValid = _useState90[1];
  var _useState91 = (0, _react.useState)({
      value: '',
      label: 'Selecciona el número de decimales'
    }),
    _useState92 = (0, _slicedToArray2["default"])(_useState91, 2),
    decimalNumbersDefault = _useState92[0],
    setDecimalNumbersDefault = _useState92[1];
  var decimalNumbersOptions = [{
    label: '0',
    value: '0'
  }, {
    label: '2',
    value: '2'
  }];
  var _useState93 = (0, _react.useState)(false),
    _useState94 = (0, _slicedToArray2["default"])(_useState93, 2),
    taxes = _useState94[0],
    setTaxes = _useState94[1];
  var _useState95 = (0, _react.useState)(false),
    _useState96 = (0, _slicedToArray2["default"])(_useState95, 2),
    taxesValid = _useState96[0],
    setTaxesValid = _useState96[1];
  var _useState97 = (0, _react.useState)({
      value: '',
      label: 'Selecciona la opción para los impuestos'
    }),
    _useState98 = (0, _slicedToArray2["default"])(_useState97, 2),
    taxesDefault = _useState98[0],
    setTaxesDefault = _useState98[1];
  var taxesOptions = [{
    label: 'Si trabaja con impuestos',
    value: 'true'
  }, {
    label: 'No trabaja con impuestos',
    value: 'false'
  }];
  var _useState99 = (0, _react.useState)(''),
    _useState100 = (0, _slicedToArray2["default"])(_useState99, 2),
    host = _useState100[0],
    setHost = _useState100[1];
  var _useState101 = (0, _react.useState)(false),
    _useState102 = (0, _slicedToArray2["default"])(_useState101, 2),
    hostValid = _useState102[0],
    setHostValid = _useState102[1];
  var _useState103 = (0, _react.useState)({
      data: {
        items: (0, _Context.getItem)('GS_SITES_V2', null)
      }
    }),
    _useState104 = (0, _slicedToArray2["default"])(_useState103, 2),
    sites = _useState104[0],
    setSites = _useState104[1];
  var _useState105 = (0, _react.useState)([]),
    _useState106 = (0, _slicedToArray2["default"])(_useState105, 2),
    error = _useState106[0],
    setError = _useState106[1];
  var _useState107 = (0, _react.useState)(0),
    _useState108 = (0, _slicedToArray2["default"])(_useState107, 2),
    siteId = _useState108[0],
    setSiteId = _useState108[1];
  var _useState109 = (0, _react.useState)('asc'),
    _useState110 = (0, _slicedToArray2["default"])(_useState109, 2),
    orderList = _useState110[0],
    setOrderList = _useState110[1];
  var _useState111 = (0, _react.useState)(''),
    _useState112 = (0, _slicedToArray2["default"])(_useState111, 2),
    searchTerm = _useState112[0],
    setSearchTerm = _useState112[1];
  var _useState113 = (0, _react.useState)(1),
    _useState114 = (0, _slicedToArray2["default"])(_useState113, 2),
    currentPage = _useState114[0],
    setCurrentPage = _useState114[1];
  var itemsPerPage = 6;
  var infoReset = function infoReset() {
    setName('');
    setNameValid(false);
    setDocumentIndex('');
    setDocumentIndexValid(false);
    setDocumentIndexDefault({
      value: '',
      label: 'Elija el tipo de Documento'
    });
    setDocumentNumber('');
    setDocumentNumberValid(false);
    setAddress1('');
    setAddress1Valid(false);
    setAddress2('');
    setAddress2Valid(true);
    setCity('');
    setCityValid(false);
    setStateCountry('');
    setStateCountryValid(false);
    setCountry('');
    setCountryValid(false);
    setPostCode('');
    setPostCodeValid(true);
    setEmail('');
    setEmailValid(false);
    setPhone('');
    setPhoneValid(false);
    setCurrenciesId(0);
    setCurrenciesIdValid(false);
    setCurrenciesIdDefault({
      value: '',
      label: 'Elija la moneda del Sitio'
    });
    setCurrencyLocation('');
    setCurrencyLocationValid(false);
    setCurrencyLocationDefault({
      value: '',
      label: 'Elija la ubicación del símbolo de la moneda'
    });
    setThousandsSeparator('');
    setDecimalSeparator('');
    setSeparatorValid(false);
    setSeparatorDefault({
      value: '',
      label: 'Selecciona los separadores de la moneda'
    });
    setDecimalNumbers(0);
    setDecimalNumbersValid(false);
    setDecimalNumbersDefault({
      value: '',
      label: 'Selecciona el número de decimales'
    });
    setTaxes(false);
    setTaxesValid(false);
    setTaxesDefault({
      value: '',
      label: 'Selecciona la opción para los impuestos'
    });
    setHost('');
    setHostValid(false);
    setError([]);
  };

  // Funciones de paginas
  var onFetching = function onFetching() {
    setIsFetching(true);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
  };
  var onInit = function onInit() {
    setIsFetching(false);
    setIsInit(true);
    setIsAdd(false);
    setIsUpdate(false);
  };
  var onAdd = function onAdd() {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(true);
    setIsUpdate(false);
  };
  var onUpdate = function onUpdate() {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(true);
  };
  var onIsReady = function onIsReady() {
    setIsReady(true);
  };
  var notReady = function notReady() {
    setIsReady(false);
  };
  var goUpdate = function goUpdate(id) {
    infoReset();
    setSiteId(id);
    onUpdate();
  };
  var goAdd = function goAdd() {
    infoReset();
    onAdd();
  };

  // Funciones de Validacion
  var validationButtonNext = function validationButtonNext() {
    if (nameValid && documentIndexValid && documentNumberValid && address1Valid && address2Valid && cityValid && stateCountryValid && postCodeValid && countryValid && emailValid && phoneValid && currenciesIdValid && currencyLocationValid && separatorValid && decimalNumbersValid && taxesValid && hostValid) {
      (0, _helpers.removeClass)('buttonNext', 'gs-disabled');
    } else {
      (0, _helpers.addClass)('buttonNext', 'gs-disabled');
    }
  };
  var validationName = function validationName(value) {
    return (0, _helpers.validationInputName)({
      name: value,
      inputId: 'siteName',
      setValid: setNameValid
    });
  };
  var validationDocumentIndex = function validationDocumentIndex(value) {
    var validation = (0, _helpers.validationSelect)(value, 'documentIndex', 'gs-input-alert');
    setDocumentIndexValid(validation);
    return validation;
  };
  var validationDocumentNumber = function validationDocumentNumber(value) {
    var valid = (0, _helpers.validationInput)(value, /^\d{1,12}(-\d{1,12})?$/, 'documentNumber', 'gs-input-alert', true);
    setDocumentNumberValid(valid);
    return valid;
  };
  var validationAddress1 = function validationAddress1(value) {
    var valid = (0, _helpers.validationInput)(value, /^[a-zA-Z0-9]+[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_#'()\-.,\s]+$/, 'address1', 'gs-input-alert', true);
    setAddress1Valid(valid);
    return valid;
  };
  var validationAddress2 = function validationAddress2(value) {
    var valid = (0, _helpers.validationInput)(value, /^[a-zA-Z0-9]+[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_#'()\-.,\s]+$/, 'address2', 'gs-input-alert');
    setAddress2Valid(valid);
    return valid;
  };
  var validationCity = function validationCity(value) {
    var validation = (0, _helpers.validationSelect)(value, 'citySite', 'gs-input-alert');
    setCityValid(validation);
    return validation;
  };
  var validationStateCountry = function validationStateCountry(value) {
    var validation = (0, _helpers.validationSelect)(value, 'stateCountrySite', 'gs-input-alert');
    setStateCountryValid(validation);
    return validation;
  };
  var validationCountry = function validationCountry(value) {
    var validation = (0, _helpers.validationSelect)(value, 'countrySite', 'gs-input-alert');
    setCountryValid(validation);
    return validation;
  };
  var validationPostCode = function validationPostCode(value) {
    var valid = (0, _helpers.validationInput)(value, /^[a-zA-Z0-9]+[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_#()\-.\s]+$/, 'postCodeSite', 'gs-input-alert');
    setPostCodeValid(valid);
    return valid;
  };
  var validationEmail = function validationEmail(value) {
    var valid = (0, _helpers.validationInput)(value, /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/, 'emailSite', 'gs-input-alert', true);
    setEmailValid(valid);
    return valid;
  };
  var validationPhone = function validationPhone(value) {
    var valid = (0, _helpers.validationInput)(value, /^[0-9]{10,20}/, 'phoneSite', 'gs-input-alert', true);
    setPhoneValid(valid);
    return valid;
  };
  var validationCurrenciesId = function validationCurrenciesId(value) {
    var validation = (0, _helpers.validationSelect)(value, 'currencySite', 'gs-input-alert');
    setCurrenciesIdValid(validation);
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
  var validationHost = function validationHost(value) {
    var valid = (0, _helpers.validationInput)(value, /^[-a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_,.&:/'\-\s]+$/, 'hostSite', 'gs-input-alert', true);
    setHostValid(valid);
    return valid;
  };

  // Funciones de cambios
  var changeName = function changeName(value) {
    var newValue = (0, _helpers.toTitleCase)(value);
    (0, _helpers.changeInputText)({
      value: newValue,
      validation: validationName,
      setValue: setName
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
  var changeDocumentNumber = function changeDocumentNumber(newDocument) {
    (0, _helpers.changeInputText)({
      value: newDocument,
      validation: validationDocumentNumber,
      setValue: setDocumentNumber
    });
  };
  var changeAddress1 = function changeAddress1(value) {
    var address = (0, _helpers.toTitleCase)(value);
    (0, _helpers.changeInputText)({
      value: address,
      validation: validationAddress1,
      setValue: setAddress1
    });
  };
  var changeAddress2 = function changeAddress2(value) {
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
  var changeCityOptions = _react["default"].useCallback(function () {
    var newValueCity = [];
    if (_Constans.Cities[0][country]) {
      if (Array.isArray(_Constans.Cities[0][country][0][state])) {
        _Constans.Cities[0][country][0][state].forEach(function (item) {
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
  }, [country, state]);
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
  var changeCountry = function changeCountry(options) {
    changeStateCountryOptions();
    (0, _helpers.changeSelect)({
      newValue: options,
      validation: validationCountry,
      setDefault: setCountryDefault,
      setValue: setCountry
    });
  };
  var changePostCode = function changePostCode(newPostCode) {
    (0, _helpers.changeInputText)({
      value: newPostCode,
      validation: validationPostCode,
      setValue: setPostCode
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
  var changePhone = function changePhone(newPhone) {
    (0, _helpers.changeInputText)({
      value: newPhone,
      validation: validationPhone,
      setValue: setPhone
    });
  };
  var changeCurrenciesId = function changeCurrenciesId(options) {
    var value = options ? parseInt(options.value, 10) : 0;
    var label = (options === null || options === void 0 ? void 0 : options.label) || '';
    var newOptions = {
      value: value,
      label: label
    };
    (0, _helpers.changeSelect)({
      newValue: newOptions,
      validation: validationCurrenciesId,
      setDefault: setCurrenciesIdDefault,
      setValue: setCurrenciesId
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
    var value = options ? parseInt(options.value, 10) : 0;
    var label = (options === null || options === void 0 ? void 0 : options.label) || '';
    var newOptions = {
      value: value,
      label: label
    };
    (0, _helpers.changeSelect)({
      newValue: newOptions,
      validation: validationDecimalNumbers,
      setDefault: setDecimalNumbersDefault,
      setValue: setDecimalNumbers
    });
  };
  var changeTaxes = function changeTaxes(options) {
    var value = options && options.value === 'true';
    var label = (options === null || options === void 0 ? void 0 : options.label) || '';
    var newOptions = {
      value: value,
      label: label
    };
    (0, _helpers.changeSelect)({
      newValue: newOptions,
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

  // Manejo de la data en DB
  var getLastItem = (_sites$data = sites.data) !== null && _sites$data !== void 0 && _sites$data.items ? sites.data.items.sort(function (a, b) {
    return new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime();
  })[0] : null;
  var setDataStorage = function setDataStorage(newData) {
    (0, _Context.saveItem)('GS_SITES_V2', newData.data.items);
  };
  var setData = function setData(newData) {
    setSites(newData);
    setDataStorage(newData);
  };
  var onSites = function onSites(newData) {
    setData(newData);
    onIsReady();
  };
  var getSites = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var _sites$data$items;
      var lastEntryDateAndCount, lastDate, count;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _helpers.getLastEntryDateAndCount)('sites');
          case 2:
            lastEntryDateAndCount = _context.sent;
            lastDate = (getLastItem === null || getLastItem === void 0 ? void 0 : getLastItem.modifiedAt) || null;
            count = ((_sites$data$items = sites.data.items) === null || _sites$data$items === void 0 ? void 0 : _sites$data$items.length) || 0;
            if (sites.data.items === null || "".concat(lastEntryDateAndCount === null || lastEntryDateAndCount === void 0 ? void 0 : lastEntryDateAndCount.date) !== "".concat(lastDate) || "".concat(lastEntryDateAndCount === null || lastEntryDateAndCount === void 0 ? void 0 : lastEntryDateAndCount.count) !== "".concat(count)) {
              (0, _helpers.gafpriFetch)({
                initMethod: 'GET',
                initApi: 'http://localhost:4000',
                initRoute: 'api/v1/sites',
                functionFetching: notReady,
                functionSuccess: onSites
              });
            } else {
              onIsReady();
            }
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getSites() {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleNewSite = function handleNewSite(newItem) {
    setSites(function (prevState) {
      var newData = {
        data: {
          items: [].concat((0, _toConsumableArray2["default"])(prevState.data.items || []), [newItem])
        }
      };
      setDataStorage(newData);
      return newData;
    });
  };
  var handleUpdatedSite = function handleUpdatedSite(itemUpdate) {
    setSites(function (prevState) {
      var _prevState$data$items;
      var updatedItems = ((_prevState$data$items = prevState.data.items) === null || _prevState$data$items === void 0 ? void 0 : _prevState$data$items.map(function (item) {
        return item.id === itemUpdate.id ? itemUpdate : item;
      })) || [];
      var newData = {
        data: {
          items: updatedItems
        }
      };
      setDataStorage(newData);
      return newData;
    });
  };
  var handleDeletedSite = function handleDeletedSite(_ref3) {
    var itemId = _ref3.itemId;
    setSites(function (prevState) {
      var _prevState$data$items2;
      var filteredItems = ((_prevState$data$items2 = prevState.data.items) === null || _prevState$data$items2 === void 0 ? void 0 : _prevState$data$items2.filter(function (item) {
        return "".concat(item.id) !== "".concat(itemId);
      })) || [];
      var newData = {
        data: {
          items: filteredItems
        }
      };
      setDataStorage(newData);
      return newData;
    });
  };
  var returnInit = function returnInit() {
    infoReset();
    onInit();
  };
  var newError = function newError(newErrorValue) {
    if ((0, _helpers.isErrorResponse)(newErrorValue)) {
      setError([newErrorValue.message]);
      onAdd();
    } else if ((0, _helpers.isCustomErrorResponse)(newErrorValue)) {
      var errorMessage = newErrorValue.errors.map(function (item) {
        return item.message;
      });
      setError(errorMessage);
      onAdd();
    } else {
      setError(["".concat(newErrorValue)]);
      onAdd();
    }
    setTimeout(function () {
      setError([]);
    }, 5000);
  };
  var newErrorUpdate = function newErrorUpdate(newErrorValue) {
    if ((0, _helpers.isErrorResponse)(newErrorValue)) {
      setError([newErrorValue.message]);
      onUpdate();
    } else if ((0, _helpers.isCustomErrorResponse)(newErrorValue)) {
      var errorMessage = newErrorValue.errors.map(function (item) {
        return item.message;
      });
      setError(errorMessage);
      onUpdate();
    } else {
      setError(["".concat(newErrorValue)]);
      onUpdate();
    }
    setTimeout(function () {
      setError([]);
    }, 5000);
  };
  var newErrorDelete = function newErrorDelete(newErrorValue) {
    if ((0, _helpers.isErrorResponse)(newErrorValue)) {
      setError([newErrorValue.message]);
      onInit();
    } else if ((0, _helpers.isCustomErrorResponse)(newErrorValue)) {
      var errorMessage = newErrorValue.errors.map(function (item) {
        return item.message;
      });
      setError(errorMessage);
      onInit();
    } else {
      setError(["".concat(newErrorValue)]);
      onInit();
    }
    setTimeout(function () {
      setError([]);
    }, 5000);
  };
  var add = function add() {
    if (nameValid && documentIndexValid && documentNumberValid && address1Valid && address2Valid && cityValid && stateCountryValid && postCodeValid && countryValid && emailValid && phoneValid && currenciesIdValid && currencyLocationValid && separatorValid && decimalNumbersValid && taxesValid && hostValid) {
      var payload = {
        name: name,
        documentIndex: documentIndex,
        documentNumber: documentNumber,
        address1: address1,
        city: city,
        state: state,
        country: country,
        email: email,
        phone: phone,
        currenciesId: currenciesId,
        currencyLocation: currencyLocation,
        thousandsSeparator: thousandsSeparator,
        decimalSeparator: decimalSeparator,
        decimalNumbers: decimalNumbers,
        taxes: taxes,
        host: host
      };
      var updatedPayload = _objectSpread(_objectSpread(_objectSpread({}, payload), postCode ? {
        postCode: postCode
      } : {}), address2 ? {
        address2: address2
      } : {});
      (0, _helpers.gafpriFetch)({
        initMethod: 'POST',
        initApi: 'http://localhost:4000',
        initRoute: 'api/v1/sites',
        initCredentials: updatedPayload,
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newError
      });
    }
  };
  function getById(id) {
    var _sites$data$items2;
    return ((_sites$data$items2 = sites.data.items) === null || _sites$data$items2 === void 0 ? void 0 : _sites$data$items2.find(function (item) {
      return "".concat(item.id) === "".concat(id);
    })) || null;
  }
  function getMainSite() {
    if (sites.data.items) {
      return sites.data.items[0];
    }
    return null;
  }
  var update = function update() {
    if (nameValid && documentIndexValid && documentNumberValid && address1Valid && address2Valid && cityValid && stateCountryValid && postCodeValid && countryValid && emailValid && phoneValid && currenciesIdValid && currencyLocationValid && separatorValid && decimalNumbersValid && taxesValid && hostValid) {
      var payload = {
        name: name,
        documentIndex: documentIndex,
        documentNumber: documentNumber,
        address1: address1,
        city: city,
        state: state,
        country: country,
        email: email,
        phone: phone,
        currenciesId: currenciesId,
        currencyLocation: currencyLocation,
        thousandsSeparator: thousandsSeparator,
        decimalSeparator: decimalSeparator,
        decimalNumbers: decimalNumbers,
        taxes: taxes,
        host: host
      };
      var updatedPayload = _objectSpread(_objectSpread(_objectSpread({}, payload), postCode ? {
        postCode: postCode
      } : {}), address2 ? {
        address2: address2
      } : {});
      (0, _helpers.gafpriFetch)({
        initMethod: 'PATCH',
        initApi: 'http://localhost:4000',
        initRoute: "api/v1/sites/".concat(siteId),
        initCredentials: updatedPayload,
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newErrorUpdate
      });
    }
  };
  var deleteSites = function deleteSites(id) {
    (0, _helpers.gafpriFetch)({
      initMethod: 'DELETE',
      initApi: 'http://localhost:4000',
      initRoute: "api/v1/sites/".concat(id),
      functionFetching: onFetching,
      functionSuccess: returnInit,
      functionError: newErrorDelete
    });
  };
  function sortByName(items, order) {
    if (items) {
      return items.slice().sort(function (a, b) {
        var comparison = a.name.localeCompare(b.name, undefined, {
          sensitivity: 'base'
        });
        return order === 'asc' ? comparison : -comparison;
      });
    }
    return null;
  }
  var filterByName = function filterByName(search) {
    if (sites.data.items) {
      return sites.data.items.filter(function (item) {
        return item.name.toLowerCase().includes(search.toLowerCase());
      });
    }
    return null;
  };
  var getPaginated = function getPaginated(items, page, itemPerPage) {
    var startIndex = (page - 1) * itemPerPage;
    var endIndex = startIndex + itemPerPage;
    if (items) {
      return items.slice(startIndex, endIndex);
    }
    return null;
  };

  // Efects
  _react["default"].useEffect(function () {
    getSites();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  _react["default"].useEffect(function () {
    setCurrentPage(1);
  }, [searchTerm]);
  var states = {
    isReady: isReady,
    isFetching: isFetching,
    isAdd: isAdd,
    isInit: isInit,
    isUpdate: isUpdate,
    name: name,
    nameValid: nameValid,
    documentIndex: documentIndex,
    documentIndexValid: documentIndexValid,
    documentIndexDefault: documentIndexDefault,
    documentIndexOptions: documentIndexOptions,
    documentNumber: documentNumber,
    documentNumberValid: documentNumberValid,
    address1: address1,
    address1Valid: address1Valid,
    address2: address2,
    address2Valid: address2Valid,
    city: city,
    cityValid: cityValid,
    cityDefault: cityDefault,
    cityOptions: cityOptions,
    state: state,
    stateCountryValid: stateCountryValid,
    stateCountryDefault: stateCountryDefault,
    stateCountryOptions: stateCountryOptions,
    country: country,
    countryValid: countryValid,
    countryDefault: countryDefault,
    countryOptions: countryOptions,
    postCode: postCode,
    postCodeValid: postCodeValid,
    email: email,
    emailValid: emailValid,
    phone: phone,
    phoneValid: phoneValid,
    currenciesId: currenciesId,
    currenciesIdValid: currenciesIdValid,
    currenciesIdDefault: currenciesIdDefault,
    currenciesIdOptions: currenciesIdOptions,
    currencyLocation: currencyLocation,
    currencyLocationValid: currencyLocationValid,
    currencyLocationDefault: currencyLocationDefault,
    currencyLocationOptions: currencyLocationOptions,
    thousandsSeparator: thousandsSeparator,
    decimalSeparator: decimalSeparator,
    separatorValid: separatorValid,
    separatorDefault: separatorDefault,
    separatorOptions: separatorOptions,
    decimalNumbers: decimalNumbers,
    decimalNumbersValid: decimalNumbersValid,
    decimalNumbersDefault: decimalNumbersDefault,
    decimalNumbersOptions: decimalNumbersOptions,
    taxes: taxes,
    taxesValid: taxesValid,
    taxesDefault: taxesDefault,
    taxesOptions: taxesOptions,
    host: host,
    hostValid: hostValid,
    sites: sites,
    error: error,
    orderList: orderList,
    searchTerm: searchTerm,
    currentPage: currentPage,
    itemsPerPage: itemsPerPage,
    siteId: siteId
  };

  // Define las acciones necesarias para los atributos de Site
  var actions = {
    onFetching: onFetching,
    onInit: onInit,
    returnInit: returnInit,
    onAdd: onAdd,
    goAdd: goAdd,
    onUpdate: onUpdate,
    changeName: changeName,
    changeDocumentIndex: changeDocumentIndex,
    changeDocumentNumber: changeDocumentNumber,
    changeAddress1: changeAddress1,
    changeAddress2: changeAddress2,
    changeCity: changeCity,
    changeCityOptions: changeCityOptions,
    changeStateCountry: changeStateCountry,
    setStateCountryDefault: setStateCountryDefault,
    setStateCountry: setStateCountry,
    changeCountry: changeCountry,
    setCountryDefault: setCountryDefault,
    changeStateCountryOptions: changeStateCountryOptions,
    setCountry: setCountry,
    changePostCode: changePostCode,
    changeEmail: changeEmail,
    changePhone: changePhone,
    changeCurrenciesId: changeCurrenciesId,
    changeCurrencyLocation: changeCurrencyLocation,
    changeSeparator: changeSeparator,
    changeDecimalNumbers: changeDecimalNumbers,
    changeTaxes: changeTaxes,
    changeHost: changeHost,
    validationButtonNext: validationButtonNext,
    setIsReady: setIsReady,
    add: add,
    update: update,
    getById: getById,
    getMainSite: getMainSite,
    goUpdate: goUpdate,
    sortByName: sortByName,
    setOrderList: setOrderList,
    setSearchTerm: setSearchTerm,
    filterByName: filterByName,
    setCurrentPage: setCurrentPage,
    getPaginated: getPaginated,
    deleteSites: deleteSites,
    handleNewSite: handleNewSite,
    handleDeletedSite: handleDeletedSite,
    handleUpdatedSite: handleUpdatedSite,
    validationName: validationName,
    validationDocumentIndex: validationDocumentIndex,
    validationDocumentNumber: validationDocumentNumber,
    validationAddress1: validationAddress1,
    validationAddress2: validationAddress2,
    validationCity: validationCity,
    validationStateCountry: validationStateCountry,
    validationCountry: validationCountry,
    validationPostCode: validationPostCode,
    validationEmail: validationEmail,
    validationPhone: validationPhone,
    validationCurrenciesId: validationCurrenciesId,
    validationCurrencyLocation: validationCurrencyLocation,
    validationSeparator: validationSeparator,
    validationDecimalNumbers: validationDecimalNumbers,
    validationTaxes: validationTaxes,
    validationHost: validationHost
  };
  return {
    states: states,
    actions: actions
  };
};
exports.useGafpriSites = useGafpriSites;