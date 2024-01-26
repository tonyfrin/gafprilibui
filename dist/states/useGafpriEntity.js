"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriEntity = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _helpers = require("../helpers");
var _Validations = require("../Validations");
var _Changes = require("../Changes");
var _Context = require("../Context");
var _Constans = require("../Constans");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var useGafpriEntity = function useGafpriEntity(_ref) {
  var _useTypeDocumentId$st, _useTypeDocumentId$st2, _entities$data;
  var useTypeDocumentId = _ref.useTypeDocumentId,
    useError = _ref.useError,
    token = _ref.token;
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
  var _useState11 = (0, _react.useState)(false),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    isView = _useState12[0],
    setIsView = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    isAddAddress = _useState14[0],
    setIsAddAddress = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
    isAddDocument = _useState16[0],
    setIsAddDocument = _useState16[1];
  var _useState17 = (0, _react.useState)(true),
    _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
    isReset = _useState18[0],
    setIsReset = _useState18[1];
  var _useState19 = (0, _react.useState)('personal'),
    _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
    formType = _useState20[0],
    setFormType = _useState20[1];
  var _useState21 = (0, _react.useState)(''),
    _useState22 = (0, _slicedToArray2["default"])(_useState21, 2),
    name = _useState22[0],
    setName = _useState22[1];
  var _useState23 = (0, _react.useState)(false),
    _useState24 = (0, _slicedToArray2["default"])(_useState23, 2),
    nameValid = _useState24[0],
    setNameValid = _useState24[1];
  var _useState25 = (0, _react.useState)(''),
    _useState26 = (0, _slicedToArray2["default"])(_useState25, 2),
    lastName = _useState26[0],
    setLastName = _useState26[1];
  var _useState27 = (0, _react.useState)(true),
    _useState28 = (0, _slicedToArray2["default"])(_useState27, 2),
    lastNameValid = _useState28[0],
    setLastNameValid = _useState28[1];
  var _useState29 = (0, _react.useState)(null),
    _useState30 = (0, _slicedToArray2["default"])(_useState29, 2),
    typeDocumentIdId = _useState30[0],
    setTypeDocumentIdId = _useState30[1];
  var _useState31 = (0, _react.useState)(false),
    _useState32 = (0, _slicedToArray2["default"])(_useState31, 2),
    typeDocumentIdIdValid = _useState32[0],
    setTypeDocumentIdIdValid = _useState32[1];
  var _useState33 = (0, _react.useState)({
      value: '',
      label: 'Elija el tipo de Documento'
    }),
    _useState34 = (0, _slicedToArray2["default"])(_useState33, 2),
    typeDocumentIdIdDefault = _useState34[0],
    setTypeDocumentIdIdDefault = _useState34[1];
  var typeDocumentIdIdOptions = ((_useTypeDocumentId$st = useTypeDocumentId.states.typeDocumentId.data) === null || _useTypeDocumentId$st === void 0 ? void 0 : (_useTypeDocumentId$st2 = _useTypeDocumentId$st.items) === null || _useTypeDocumentId$st2 === void 0 ? void 0 : _useTypeDocumentId$st2.map(function (item) {
    var countryName = _Constans.Countries[0][item.country];
    var label = "".concat(item.name, " (").concat(countryName, ")");
    return {
      value: "".concat(item.id),
      label: label
    };
  })) || [];
  var _useState35 = (0, _react.useState)(''),
    _useState36 = (0, _slicedToArray2["default"])(_useState35, 2),
    index = _useState36[0],
    setIndex = _useState36[1];
  var _useState37 = (0, _react.useState)(false),
    _useState38 = (0, _slicedToArray2["default"])(_useState37, 2),
    indexValid = _useState38[0],
    setIndexValid = _useState38[1];
  var _useState39 = (0, _react.useState)({
      value: '',
      label: 'Elija el tipo de Documento'
    }),
    _useState40 = (0, _slicedToArray2["default"])(_useState39, 2),
    indexDefault = _useState40[0],
    setIndexDefault = _useState40[1];
  var indexOptions = [{
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
  var _useState41 = (0, _react.useState)(''),
    _useState42 = (0, _slicedToArray2["default"])(_useState41, 2),
    digit = _useState42[0],
    setDigit = _useState42[1];
  var _useState43 = (0, _react.useState)(false),
    _useState44 = (0, _slicedToArray2["default"])(_useState43, 2),
    digitValid = _useState44[0],
    setDigitValid = _useState44[1];
  var _useState45 = (0, _react.useState)('bill'),
    _useState46 = (0, _slicedToArray2["default"])(_useState45, 2),
    addressType = _useState46[0],
    setAddressType = _useState46[1];
  var _useState47 = (0, _react.useState)(true),
    _useState48 = (0, _slicedToArray2["default"])(_useState47, 2),
    addressTypeValid = _useState48[0],
    setAddressTypeValid = _useState48[1];
  var _useState49 = (0, _react.useState)({
      value: 'bill',
      label: 'Facturación'
    }),
    _useState50 = (0, _slicedToArray2["default"])(_useState49, 2),
    addressTypeDefault = _useState50[0],
    setAddressTypeDefault = _useState50[1];
  var addressTypeOptions = [{
    label: 'Envío',
    value: 'shipping'
  }, {
    label: 'Facturación',
    value: 'bill'
  }];
  var _useState51 = (0, _react.useState)(''),
    _useState52 = (0, _slicedToArray2["default"])(_useState51, 2),
    address1 = _useState52[0],
    setAddress1 = _useState52[1];
  var _useState53 = (0, _react.useState)(false),
    _useState54 = (0, _slicedToArray2["default"])(_useState53, 2),
    address1Valid = _useState54[0],
    setAddress1Valid = _useState54[1];
  var _useState55 = (0, _react.useState)(''),
    _useState56 = (0, _slicedToArray2["default"])(_useState55, 2),
    address2 = _useState56[0],
    setAddress2 = _useState56[1];
  var _useState57 = (0, _react.useState)(true),
    _useState58 = (0, _slicedToArray2["default"])(_useState57, 2),
    address2Valid = _useState58[0],
    setAddress2Valid = _useState58[1];
  var _useState59 = (0, _react.useState)(_Constans.CITY_DEFAULT.value),
    _useState60 = (0, _slicedToArray2["default"])(_useState59, 2),
    city = _useState60[0],
    setCity = _useState60[1];
  var _useState61 = (0, _react.useState)(true),
    _useState62 = (0, _slicedToArray2["default"])(_useState61, 2),
    cityValid = _useState62[0],
    setCityValid = _useState62[1];
  var _useState63 = (0, _react.useState)(_Constans.CITY_DEFAULT),
    _useState64 = (0, _slicedToArray2["default"])(_useState63, 2),
    cityDefault = _useState64[0],
    setCityDefault = _useState64[1];
  var _useState65 = (0, _react.useState)([]),
    _useState66 = (0, _slicedToArray2["default"])(_useState65, 2),
    cityOptions = _useState66[0],
    setCityOptions = _useState66[1];
  var _useState67 = (0, _react.useState)(_Constans.STATE_COUNTRY_DEFAULT.value),
    _useState68 = (0, _slicedToArray2["default"])(_useState67, 2),
    state = _useState68[0],
    setStateCountry = _useState68[1];
  var _useState69 = (0, _react.useState)(true),
    _useState70 = (0, _slicedToArray2["default"])(_useState69, 2),
    stateCountryValid = _useState70[0],
    setStateCountryValid = _useState70[1];
  var _useState71 = (0, _react.useState)(_Constans.STATE_COUNTRY_DEFAULT),
    _useState72 = (0, _slicedToArray2["default"])(_useState71, 2),
    stateCountryDefault = _useState72[0],
    setStateCountryDefault = _useState72[1];
  var _useState73 = (0, _react.useState)([]),
    _useState74 = (0, _slicedToArray2["default"])(_useState73, 2),
    stateCountryOptions = _useState74[0],
    setStateCountryOptions = _useState74[1];
  var _useState75 = (0, _react.useState)(_Constans.COUNTRY_DEFAULT.value),
    _useState76 = (0, _slicedToArray2["default"])(_useState75, 2),
    country = _useState76[0],
    setCountry = _useState76[1];
  var _useState77 = (0, _react.useState)(true),
    _useState78 = (0, _slicedToArray2["default"])(_useState77, 2),
    countryValid = _useState78[0],
    setCountryValid = _useState78[1];
  var _useState79 = (0, _react.useState)(_Constans.COUNTRY_DEFAULT),
    _useState80 = (0, _slicedToArray2["default"])(_useState79, 2),
    countryDefault = _useState80[0],
    setCountryDefault = _useState80[1];
  var countryOptions = [];
  _Constans.Countries.forEach(function (item) {
    Object.keys(item).forEach(function (key) {
      countryOptions.push({
        value: key,
        label: item[key]
      });
    });
  });
  var _useState81 = (0, _react.useState)(''),
    _useState82 = (0, _slicedToArray2["default"])(_useState81, 2),
    postCode = _useState82[0],
    setPostCode = _useState82[1];
  var _useState83 = (0, _react.useState)(true),
    _useState84 = (0, _slicedToArray2["default"])(_useState83, 2),
    postCodeValid = _useState84[0],
    setPostCodeValid = _useState84[1];
  var _useState85 = (0, _react.useState)(''),
    _useState86 = (0, _slicedToArray2["default"])(_useState85, 2),
    email = _useState86[0],
    setEmail = _useState86[1];
  var _useState87 = (0, _react.useState)(false),
    _useState88 = (0, _slicedToArray2["default"])(_useState87, 2),
    emailValid = _useState88[0],
    setEmailValid = _useState88[1];
  var _useState89 = (0, _react.useState)(''),
    _useState90 = (0, _slicedToArray2["default"])(_useState89, 2),
    phone = _useState90[0],
    setPhone = _useState90[1];
  var _useState91 = (0, _react.useState)(false),
    _useState92 = (0, _slicedToArray2["default"])(_useState91, 2),
    phoneValid = _useState92[0],
    setPhoneValid = _useState92[1];
  var _useState93 = (0, _react.useState)(''),
    _useState94 = (0, _slicedToArray2["default"])(_useState93, 2),
    type = _useState94[0],
    setType = _useState94[1];
  var _useState95 = (0, _react.useState)(false),
    _useState96 = (0, _slicedToArray2["default"])(_useState95, 2),
    typeValid = _useState96[0],
    setTypeValid = _useState96[1];
  var _useState97 = (0, _react.useState)({
      value: '',
      label: 'Elija el tipo de Entidad'
    }),
    _useState98 = (0, _slicedToArray2["default"])(_useState97, 2),
    typeDefault = _useState98[0],
    setTypeDefault = _useState98[1];
  var typeOptions = [{
    value: 'personal',
    label: 'Natural'
  }, {
    value: 'legal',
    label: 'Jurídica'
  }];
  var _useState99 = (0, _react.useState)('https://categorygafpri.s3.us-east-2.amazonaws.com/fotousuariogafpri.png'),
    _useState100 = (0, _slicedToArray2["default"])(_useState99, 2),
    photo = _useState100[0],
    setPhoto = _useState100[1];
  var _useState101 = (0, _react.useState)(false),
    _useState102 = (0, _slicedToArray2["default"])(_useState101, 2),
    photoValid = _useState102[0],
    setPhotoValid = _useState102[1];
  var _useState103 = (0, _react.useState)(false),
    _useState104 = (0, _slicedToArray2["default"])(_useState103, 2),
    submitting = _useState104[0],
    setSubmitting = _useState104[1];
  var _useState105 = (0, _react.useState)('https://categorygafpri.s3.us-east-2.amazonaws.com/fotousuariogafpri.png'),
    _useState106 = (0, _slicedToArray2["default"])(_useState105, 2),
    documentPhoto = _useState106[0],
    setDocumentPhoto = _useState106[1];
  var _useState107 = (0, _react.useState)(false),
    _useState108 = (0, _slicedToArray2["default"])(_useState107, 2),
    documentPhotoValid = _useState108[0],
    setDocumentPhotoValid = _useState108[1];
  var _useState109 = (0, _react.useState)(false),
    _useState110 = (0, _slicedToArray2["default"])(_useState109, 2),
    documentSubmitting = _useState110[0],
    setDocumentSubmitting = _useState110[1];
  var _useState111 = (0, _react.useState)('active'),
    _useState112 = (0, _slicedToArray2["default"])(_useState111, 2),
    status = _useState112[0],
    setStatus = _useState112[1];
  var _useState113 = (0, _react.useState)(false),
    _useState114 = (0, _slicedToArray2["default"])(_useState113, 2),
    statusValid = _useState114[0],
    setStatusValid = _useState114[1];
  var _useState115 = (0, _react.useState)({
      value: 'active',
      label: 'Activo'
    }),
    _useState116 = (0, _slicedToArray2["default"])(_useState115, 2),
    statusDefault = _useState116[0],
    setStatusDefault = _useState116[1];
  var statusOptions = [{
    label: 'Activo',
    value: 'active'
  }, {
    label: 'Inactivo',
    value: 'inactive'
  }];
  var _useState117 = (0, _react.useState)([]),
    _useState118 = (0, _slicedToArray2["default"])(_useState117, 2),
    documentId = _useState118[0],
    setDocumentId = _useState118[1];
  var _useState119 = (0, _react.useState)([]),
    _useState120 = (0, _slicedToArray2["default"])(_useState119, 2),
    address = _useState120[0],
    setAddress = _useState120[1];
  var _useState121 = (0, _react.useState)(false),
    _useState122 = (0, _slicedToArray2["default"])(_useState121, 2),
    addressValid = _useState122[0],
    setAddressValid = _useState122[1];
  var _useState123 = (0, _react.useState)({
      data: {
        items: (0, _Context.getItem)(_Constans.ENTITY_STORAGE, null)
      }
    }),
    _useState124 = (0, _slicedToArray2["default"])(_useState123, 2),
    entities = _useState124[0],
    setEntities = _useState124[1];
  var error = useError.states.error;
  var changeError = useError.actions.changeError;
  var _useState125 = (0, _react.useState)(0),
    _useState126 = (0, _slicedToArray2["default"])(_useState125, 2),
    entityId = _useState126[0],
    setEntityId = _useState126[1];
  var _useState127 = (0, _react.useState)('asc'),
    _useState128 = (0, _slicedToArray2["default"])(_useState127, 2),
    orderList = _useState128[0],
    setOrderList = _useState128[1];
  var _useState129 = (0, _react.useState)(''),
    _useState130 = (0, _slicedToArray2["default"])(_useState129, 2),
    searchTerm = _useState130[0],
    setSearchTerm = _useState130[1];
  var _useState131 = (0, _react.useState)(1),
    _useState132 = (0, _slicedToArray2["default"])(_useState131, 2),
    currentPage = _useState132[0],
    setCurrentPage = _useState132[1];
  var _useState133 = (0, _react.useState)(1),
    _useState134 = (0, _slicedToArray2["default"])(_useState133, 2),
    documentCurrentPage = _useState134[0],
    setDocumentCurrentPage = _useState134[1];
  var _useState135 = (0, _react.useState)('name'),
    _useState136 = (0, _slicedToArray2["default"])(_useState135, 2),
    searchBy = _useState136[0],
    setSearchBy = _useState136[1];
  var _useState137 = (0, _react.useState)({
      value: 'name',
      label: 'Nombre'
    }),
    _useState138 = (0, _slicedToArray2["default"])(_useState137, 2),
    searchByDefault = _useState138[0],
    setSearchByDefault = _useState138[1];
  var searchByOptions = [{
    value: 'name',
    label: 'Nombre'
  }, {
    value: 'lastName',
    label: 'Apellido'
  }, {
    value: 'email',
    label: 'Email'
  }, {
    value: 'phone',
    label: 'Teléfono'
  }, {
    value: 'digit',
    label: 'Documento legal'
  }];
  var itemsPerPage = 6;
  var infoReset = function infoReset() {
    setIsReset(true);
    setName('');
    setNameValid(false);
    setLastName('');
    setLastNameValid(true);
    setTypeDocumentIdId(null);
    setTypeDocumentIdIdValid(false);
    setTypeDocumentIdIdDefault({
      value: '',
      label: 'Elija el tipo de Documento'
    });
    setIndex('');
    setIndexValid(false);
    setIndexDefault({
      value: '',
      label: 'Elija el tipo de Documento'
    });
    setDigit('');
    setDigitValid(false);
    setAddressType('bill');
    setAddressTypeValid(true);
    setAddressTypeDefault({
      value: 'bill',
      label: 'Facturación'
    });
    setAddress1('');
    setAddress1Valid(false);
    setAddress2('');
    setAddress2Valid(true);
    setCity(_Constans.CITY_DEFAULT.value);
    setCityValid(true);
    setCityDefault(_Constans.CITY_DEFAULT);
    setStateCountry(_Constans.STATE_COUNTRY_DEFAULT.value);
    setStateCountryValid(true);
    setStateCountryDefault(_Constans.STATE_COUNTRY_DEFAULT);
    setStateCountryOptions([]);
    setCountry(_Constans.COUNTRY_DEFAULT.value);
    setCountryValid(true);
    setCountryDefault(_Constans.COUNTRY_DEFAULT);
    setPostCode('');
    setPostCodeValid(true);
    setEmail('');
    setEmailValid(false);
    setPhone('');
    setPhoneValid(false);
    setType('');
    setTypeValid(false);
    setTypeDefault({
      value: '',
      label: 'Elija el tipo de Entidad'
    });
    setPhoto('https://categorygafpri.s3.us-east-2.amazonaws.com/fotousuariogafpri.png');
    setPhotoValid(false);
    setSubmitting(false);
    setStatus('active');
    setStatusValid(false);
    setStatusDefault({
      value: 'active',
      label: 'Activo'
    });
    setAddress([]);
    setAddressValid(true);
    useError.actions.changeError([]);
    setEntityId(0);
    setOrderList('asc');
    setSearchTerm('');
    setCurrentPage(1);
    setDocumentCurrentPage(1);
  };

  // Funciones de paginas
  var onFetching = function onFetching() {
    setIsFetching(true);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
    setIsView(false);
    setIsAddAddress(false);
    setIsAddDocument(false);
  };
  var onInit = function onInit() {
    setIsFetching(false);
    setIsInit(true);
    setIsAdd(false);
    setIsUpdate(false);
    setIsView(false);
    setIsAddAddress(false);
    setIsAddDocument(false);
  };
  var onAdd = function onAdd() {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(true);
    setIsUpdate(false);
    setIsView(false);
    setIsAddAddress(false);
    setIsAddDocument(false);
  };
  var onUpdate = function onUpdate() {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(true);
    setIsView(false);
    setIsAddAddress(false);
    setIsAddDocument(false);
  };
  var onView = function onView() {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
    setIsView(true);
    setIsAddAddress(false);
    setIsAddDocument(false);
  };
  var onAddAddress = function onAddAddress() {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
    setIsView(false);
    setIsAddAddress(true);
    setIsAddDocument(false);
  };
  var onAddDocument = function onAddDocument() {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
    setIsView(false);
    setIsAddAddress(false);
    setIsAddDocument(true);
  };
  var onIsReady = function onIsReady() {
    setIsReady(true);
  };
  var notReady = function notReady() {
    setIsReady(false);
  };
  var goUpdate = function goUpdate(id) {
    infoReset();
    setEntityId(id);
    onUpdate();
  };
  var goAddPersonal = function goAddPersonal() {
    infoReset();
    setType('personal');
    setFormType('personal');
    onAdd();
  };
  var goAddLegal = function goAddLegal() {
    infoReset();
    setType('legal');
    setFormType('legal');
    onAdd();
  };
  var goView = function goView(id) {
    infoReset();
    setEntityId(id);
    onView();
  };

  // Funciones de Validacion
  var validationButtonNext = function validationButtonNext() {
    (0, _Validations.generalValidationButtonNext)(nameValid, lastNameValid, typeDocumentIdIdValid, indexValid, digitValid, addressTypeValid, address1Valid, address2Valid, cityValid, stateCountryValid, countryValid, postCodeValid, emailValid, phoneValid, typeValid, photoValid, statusValid);
  };
  var validationButtonNextAddress = function validationButtonNextAddress() {
    (0, _Validations.generalValidationButtonNext)(addressTypeValid, address1Valid, address2Valid, cityValid, stateCountryValid, countryValid, postCodeValid);
  };
  var validationButtonNextDocument = function validationButtonNextDocument() {
    (0, _Validations.generalValidationButtonNext)(typeDocumentIdIdValid, indexValid, digitValid, documentPhotoValid);
  };
  var validationButtonNextUpdate = function validationButtonNextUpdate() {
    (0, _Validations.generalValidationButtonNext)(nameValid, lastNameValid, emailValid, phoneValid, typeValid, photoValid, statusValid);
  };
  var validationName = function validationName(value) {
    return (0, _Validations.generalValidationName)(value, setNameValid, nameValid);
  };
  var validationLastName = function validationLastName(value) {
    return (0, _Validations.generalValidationLastName)(value, setLastNameValid, lastNameValid);
  };
  var validationTypeDocumentIdId = function validationTypeDocumentIdId(value) {
    return (0, _Validations.generalValidationTypeDocumentIdId)(value, setTypeDocumentIdIdValid, typeDocumentIdIdValid);
  };
  var validationIndex = function validationIndex(value) {
    return (0, _Validations.generalValidationTypeDocumentIdIndex)(value, setIndexValid, indexValid);
  };
  var validationDigit = function validationDigit(value) {
    return (0, _Validations.generalValidationTypeDocumentIdDigit)(value, setDigitValid, digitValid);
  };
  var validationAddressType = function validationAddressType(value) {
    return (0, _Validations.generalValidationAddressType)(value, setAddressTypeValid, addressTypeValid);
  };
  var validationAddress1 = function validationAddress1(value) {
    return (0, _Validations.generalValidationAddress1)(value, setAddress1Valid, address1Valid);
  };
  var validationAddress2 = function validationAddress2(value) {
    return (0, _Validations.generalValidationAddress2)(value, setAddress2Valid, address2Valid);
  };
  var validationCity = function validationCity(value) {
    return (0, _Validations.generalValidationSelectCity)(value, setCityValid, cityValid);
  };
  var validationStateCountry = function validationStateCountry(value) {
    return (0, _Validations.generalValidationSelectStateCountry)(value, setStateCountryValid, stateCountryValid);
  };
  var validationCountry = function validationCountry(value) {
    return (0, _Validations.generalValidationSelectCountry)(value, setCountryValid, countryValid);
  };
  var validationPostCode = function validationPostCode(value) {
    return (0, _Validations.generalValidationPostCode)(value, setPostCodeValid, postCodeValid);
  };
  var validationEmail = function validationEmail(value) {
    return (0, _Validations.generalValidationEmail)(value, setEmailValid, emailValid);
  };
  var validationPhone = function validationPhone(value) {
    return (0, _Validations.generalValidationPhone)(value, setPhoneValid, phoneValid);
  };
  var validationType = function validationType(value) {
    return (0, _Validations.generalValidationType)(value, setTypeValid, typeValid);
  };
  var validationPhoto = function validationPhoto(value) {
    return (0, _Validations.generalValidationPhotoEntity)(value, setPhotoValid, photoValid);
  };
  var validationDocumentPhoto = function validationDocumentPhoto(value) {
    return (0, _Validations.generalValidationPhotoDocumentId)(value, setDocumentPhotoValid, documentPhotoValid);
  };
  var validationStatus = function validationStatus(value) {
    return (0, _Validations.generalValidationStatus)(value, setStatusValid, statusValid);
  };

  // Funciones de cambios
  var changeName = function changeName(value) {
    (0, _Changes.generalChangeName)(value, validationName, setName);
  };
  var changeLastName = function changeLastName(value) {
    (0, _Changes.generalChangeLastName)(value, validationLastName, setLastName);
  };
  var changeTypeDocumentIdId = function changeTypeDocumentIdId(options) {
    (0, _Changes.generalChangeTypeDocumentIdId)(options, validationTypeDocumentIdId, setTypeDocumentIdIdDefault, setTypeDocumentIdId);
  };
  var changeIndex = function changeIndex(options) {
    (0, _Changes.generalChangeDocumentIdIndex)(options, validationIndex, setIndexDefault, setIndex);
  };
  var changeDigit = function changeDigit(newDigit) {
    (0, _Changes.generalChangeDocumentIdDigit)(newDigit, validationDigit, setDigit);
  };
  var changeAddressType = function changeAddressType(options) {
    (0, _Changes.generalChangeAddressType)(options, validationAddressType, setAddressTypeDefault, setAddressType);
  };
  var changeAddress1 = function changeAddress1(value) {
    (0, _Changes.generalChangeAddress)(value, validationAddress1, setAddress1);
  };
  var changeAddress2 = function changeAddress2(value) {
    (0, _Changes.generalChangeAddress)(value, validationAddress2, setAddress2);
  };
  var changeTypeInAllAddresses = function changeTypeInAllAddresses(addresses, newType) {
    return addresses.map(function (item) {
      return _objectSpread(_objectSpread({}, item), {}, {
        type: newType
      });
    });
  };
  var updateAddressTypeById = function updateAddressTypeById(addresses, id, newType) {
    return addresses.map(function (item) {
      if (item.id === id) {
        return _objectSpread(_objectSpread({}, item), {}, {
          type: newType
        });
      }
      return item;
    });
  };
  var changeCity = function changeCity(options) {
    (0, _Changes.generalChangeCityStateCountry)(options, validationCity, setCityDefault, setCity, setIsReset);
  };
  var changeCityOptions = _react["default"].useCallback(function () {
    (0, _Changes.generalChangeCityOptions)(country, state, setCityDefault, setCity, setCityOptions, isReset);
  }, [country, state]); // eslint-disable-line react-hooks/exhaustive-deps

  var changeStateCountry = function changeStateCountry(options) {
    (0, _Changes.generalChangeCityStateCountry)(options, validationStateCountry, setStateCountryDefault, setStateCountry, setIsReset);
  };
  var changeStateCountryOptions = _react["default"].useCallback(function () {
    (0, _Changes.generalChangeStateCountryOptions)(country, setStateCountryDefault, setStateCountry, setStateCountryOptions, isReset);
  }, [country]); // eslint-disable-line react-hooks/exhaustive-deps

  var changeCountry = function changeCountry(options) {
    (0, _Changes.generalChangeCityStateCountry)(options, validationCountry, setCountryDefault, setCountry, setIsReset);
  };
  var changePostCode = function changePostCode(newPostCode) {
    (0, _Changes.generalChangePostCode)(newPostCode, validationPostCode, setPostCode);
  };
  var changeEmail = function changeEmail(inputValue) {
    (0, _Changes.generalChangeEmail)(inputValue, validationEmail, setEmail);
  };
  var changePhone = function changePhone(newPhone) {
    (0, _Changes.generalChangePhone)(newPhone, validationPhone, setPhone);
  };
  var changeType = function changeType(options) {
    (0, _Changes.generalChangeType)(options, validationType, setTypeDefault, setType);
  };
  var changePhoto = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(e) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            (0, _Changes.generalChangePhoto)(e, changeError, setSubmitting, setPhoto, validationPhoto);
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function changePhoto(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var changeDocumentPhoto = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(e) {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            (0, _Changes.generalChangePhoto)(e, changeError, setDocumentSubmitting, setDocumentPhoto, validationDocumentPhoto);
          case 1:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function changeDocumentPhoto(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  var changeStatus = function changeStatus(options) {
    (0, _Changes.generalChangeStatus)(options, validationStatus, setStatusDefault, setStatus);
  };
  var changeSearchBy = function changeSearchBy(options) {
    var label = options !== null && options !== void 0 && options.label ? options.label : 'Nombre';
    var value = options !== null && options !== void 0 && options.value && (options.value === 'name' || options.value === 'lastName' || options.value === 'email' || options.value === 'phone' || options.value === 'digit') ? options.value : 'name';
    var newDefaulValue = {
      label: label,
      value: value
    };
    setSearchByDefault(newDefaulValue);
    setSearchBy(value);
  };

  // Manejo de la data en DB
  var getLastItem = (_entities$data = entities.data) !== null && _entities$data !== void 0 && _entities$data.items ? entities.data.items.sort(function (a, b) {
    return new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime();
  })[0] : null;
  var setDataStorage = function setDataStorage(newData) {
    (0, _Context.saveItem)(_Constans.ENTITY_STORAGE, newData.data.items);
  };
  var setData = function setData(newData) {
    setEntities(newData);
    setDataStorage(newData);
  };
  var onEntity = function onEntity(newData) {
    setData(newData);
    onIsReady();
  };
  var offEntity = function offEntity() {
    var newData = {
      data: {
        items: null
      }
    };
    setData(newData);
    notReady();
  };
  var getEntities = /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
      var _entities$data$items;
      var lastEntryDateAndCount, lastDate, count;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _helpers.getLastEntryDateAndCount)('entity');
          case 2:
            lastEntryDateAndCount = _context3.sent;
            lastDate = (getLastItem === null || getLastItem === void 0 ? void 0 : getLastItem.modifiedAt) || null;
            count = ((_entities$data$items = entities.data.items) === null || _entities$data$items === void 0 ? void 0 : _entities$data$items.length) || 0;
            if (entities.data.items === null || "".concat(lastEntryDateAndCount === null || lastEntryDateAndCount === void 0 ? void 0 : lastEntryDateAndCount.date) !== "".concat(lastDate) || "".concat(lastEntryDateAndCount === null || lastEntryDateAndCount === void 0 ? void 0 : lastEntryDateAndCount.count) !== "".concat(count)) {
              if (token) {
                (0, _helpers.gafpriFetch)({
                  initMethod: 'GET',
                  initRoute: _Constans.ENTITY_ROUTE,
                  initToken: {
                    token: token
                  },
                  functionFetching: notReady,
                  functionSuccess: onEntity
                });
              } else {
                notReady();
              }
            } else {
              onIsReady();
            }
          case 6:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function getEntities() {
      return _ref4.apply(this, arguments);
    };
  }();
  var handleNewEntity = function handleNewEntity(newItem) {
    setEntities(function (prevState) {
      var newData = {
        data: {
          items: [].concat((0, _toConsumableArray2["default"])(prevState.data.items || []), [newItem])
        }
      };
      setDataStorage(newData);
      return newData;
    });
  };
  var handleUpdatedEntity = function handleUpdatedEntity(itemUpdate) {
    setEntities(function (prevState) {
      var _prevState$data$items;
      var updatedItems = ((_prevState$data$items = prevState.data.items) === null || _prevState$data$items === void 0 ? void 0 : _prevState$data$items.map(function (item) {
        return "".concat(item.id) === "".concat(itemUpdate.id) ? itemUpdate : item;
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
  var returnInit = function returnInit() {
    infoReset();
    onInit();
  };
  var newError = function newError(newErrorValue) {
    useError.actions.newError({
      newErrorValue: newErrorValue,
      functionAction: onAdd
    });
  };
  var newErrorUpdate = function newErrorUpdate(newErrorValue) {
    useError.actions.newError({
      newErrorValue: newErrorValue,
      functionAction: onUpdate
    });
  };
  var add = function add() {
    if (nameValid && lastNameValid && typeDocumentIdIdValid && indexValid && digitValid && addressTypeValid && address1Valid && address2Valid && cityValid && stateCountryValid && countryValid && postCodeValid && emailValid && phoneValid && typeValid && photoValid && statusValid && token) {
      var payload = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
        name: name,
        type: type,
        status: status
      }, lastName ? {
        lastName: lastName
      } : {}), email ? {
        email: email
      } : {}), phone ? {
        phone: phone
      } : {}), photo ? {
        photo: photo
      } : {}), {}, {
        documentId: _objectSpread(_objectSpread({
          typeDocumentIdId: typeDocumentIdId
        }, index !== 'null' ? {
          index: index
        } : {}), {}, {
          digit: digit
        }),
        address: _objectSpread(_objectSpread({
          type: addressType,
          address1: address1
        }, address2 ? {
          address2: address2
        } : {}), {}, {
          city: city,
          state: state,
          country: country
        }, postCode ? {
          postCode: postCode
        } : {})
      });
      (0, _helpers.gafpriFetch)({
        initMethod: 'POST',
        initRoute: _Constans.ENTITY_ROUTE,
        initCredentials: payload,
        initToken: {
          token: token
        },
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newError
      });
    }
  };
  function getById(id) {
    var _entities$data$items2;
    return ((_entities$data$items2 = entities.data.items) === null || _entities$data$items2 === void 0 ? void 0 : _entities$data$items2.find(function (item) {
      return item.id === id;
    })) || null;
  }
  var update = function update() {
    if (nameValid && lastNameValid && typeValid && photoValid && statusValid && phoneValid && emailValid && token) {
      var payload = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, name ? {
        name: name
      } : {}), type ? {
        type: type
      } : {}), status ? {
        status: status
      } : {}), lastName ? {
        lastName: lastName
      } : {}), email ? {
        email: email
      } : {}), phone ? {
        phone: phone
      } : {}), photo ? {
        photo: photo
      } : {});
      (0, _helpers.gafpriFetch)({
        initMethod: 'PATCH',
        initRoute: "".concat(_Constans.ENTITY_ROUTE, "/").concat(entityId),
        initCredentials: payload,
        initToken: {
          token: token
        },
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newErrorUpdate
      });
    }
  };
  var updateAddress = function updateAddress(newAddress) {
    if (token) {
      var payload = {
        address: newAddress
      };
      (0, _helpers.gafpriFetch)({
        initMethod: 'PATCH',
        initRoute: "".concat(_Constans.ENTITY_ROUTE, "/").concat(entityId),
        initCredentials: payload,
        initToken: {
          token: token
        },
        functionFetching: onFetching,
        functionSuccess: function functionSuccess() {
          return goUpdate(entityId);
        },
        functionError: newErrorUpdate
      });
    }
  };
  var updateDocument = function updateDocument(newDocument) {
    if (token) {
      var payload = {
        documentId: newDocument
      };
      (0, _helpers.gafpriFetch)({
        initMethod: 'PATCH',
        initRoute: "".concat(_Constans.ENTITY_ROUTE, "/").concat(entityId),
        initCredentials: payload,
        initToken: {
          token: token
        },
        functionFetching: onFetching,
        functionSuccess: function functionSuccess() {
          return goUpdate(entityId);
        },
        functionError: newErrorUpdate
      });
    }
  };
  var addAddress = function addAddress() {
    if (addressTypeValid && address1Valid && address2Valid && cityValid && stateCountryValid && countryValid && postCodeValid) {
      var updateNewAddress = address;
      if (addressType === 'bill') {
        updateNewAddress = changeTypeInAllAddresses(address, 'shipping');
      }
      var newAddress = _objectSpread(_objectSpread(_objectSpread({
        type: addressType,
        address1: address1
      }, address2 ? {
        address2: address2
      } : {}), {}, {
        city: city,
        state: state,
        country: country
      }, postCode ? {
        postCode: postCode
      } : {}), {}, {
        entityId: entityId
      });
      updateNewAddress.push(newAddress);
      updateAddress(updateNewAddress);
    }
  };
  var addDocument = function addDocument() {
    if (typeDocumentIdIdValid && indexValid && digitValid && documentPhotoValid) {
      var newDocument = [_objectSpread(_objectSpread({
        typeDocumentIdId: typeDocumentIdId
      }, index !== 'null' ? {
        index: index
      } : {}), {}, {
        digit: digit,
        photo: documentPhoto
      })];
      updateDocument(newDocument);
    }
  };
  var changeAddress = function changeAddress(id) {
    var newAddress = changeTypeInAllAddresses(address, 'shipping');
    var updateNewAddress = updateAddressTypeById(newAddress, id, 'bill');
    setAddress(updateNewAddress);
    updateAddress(updateNewAddress);
  };
  var deleteAddress = function deleteAddress(id) {
    if (token) {
      var payload = {
        address: [{
          id: id
        }]
      };
      (0, _helpers.gafpriFetch)({
        initMethod: 'DELETE',
        initRoute: "".concat(_Constans.ENTITY_ROUTE, "/").concat(entityId),
        initCredentials: payload,
        initToken: {
          token: token
        },
        functionFetching: onFetching,
        functionSuccess: function functionSuccess() {
          return goUpdate(entityId);
        },
        functionError: newErrorUpdate
      });
    }
  };
  var deleteDocument = function deleteDocument(id) {
    if (documentId.length > 1 && token) {
      var payload = {
        documentId: [{
          id: id
        }]
      };
      (0, _helpers.gafpriFetch)({
        initMethod: 'DELETE',
        initRoute: "".concat(_Constans.ENTITY_ROUTE, "/").concat(entityId),
        initCredentials: payload,
        initToken: {
          token: token
        },
        functionFetching: onFetching,
        functionSuccess: function functionSuccess() {
          return goUpdate(entityId);
        },
        functionError: newErrorUpdate
      });
    } else {
      // eslint-disable-next-line no-alert
      alert('No se puede borrar el documento principal');
    }
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
    if (entities.data.items) {
      return entities.data.items.filter(function (item) {
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
  function sortByProperty(items, search, order) {
    if (items) {
      return items.slice().sort(function (a, b) {
        var aValue;
        var bValue;
        if (search === 'digit') {
          var _a$documentId, _b$documentId;
          var aDocumentsWithDigit = (_a$documentId = a.documentId) === null || _a$documentId === void 0 ? void 0 : _a$documentId.filter(function (doc) {
            return Object.prototype.hasOwnProperty.call(doc, 'digit');
          });
          var bDocumentsWithDigit = (_b$documentId = b.documentId) === null || _b$documentId === void 0 ? void 0 : _b$documentId.filter(function (doc) {
            return Object.prototype.hasOwnProperty.call(doc, 'digit');
          });
          aValue = aDocumentsWithDigit.map(function (doc) {
            return doc.digit;
          }).join(' ');
          bValue = bDocumentsWithDigit.map(function (doc) {
            return doc.digit;
          }).join(' ');
        } else {
          var _a$search, _b$search;
          aValue = (_a$search = a[search]) !== null && _a$search !== void 0 ? _a$search : '';
          bValue = (_b$search = b[search]) !== null && _b$search !== void 0 ? _b$search : '';
        }
        var comparison = aValue.localeCompare(bValue, undefined, {
          sensitivity: 'base'
        });
        return order === 'asc' ? comparison : -comparison;
      });
    }
    return null;
  }
  var filterBySearch = function filterBySearch(search, searchType) {
    if (entities.data.items) {
      return entities.data.items.filter(function (item) {
        if (searchType === 'digit') {
          var _item$documentId;
          var documentsWithDigit = (_item$documentId = item.documentId) === null || _item$documentId === void 0 ? void 0 : _item$documentId.filter(function (doc) {
            return Object.prototype.hasOwnProperty.call(doc, 'digit');
          });
          return documentsWithDigit.some(function (doc) {
            return doc.digit.toLowerCase().includes(search.toLowerCase());
          });
        }
        var value = item[searchType];
        return value ? value.toLowerCase().includes(search.toLowerCase()) : false;
      });
    }
    return null;
  };

  // Efects
  _react["default"].useEffect(function () {
    getEntities();
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  _react["default"].useEffect(function () {
    setCurrentPage(1);
    setDocumentCurrentPage(1);
  }, [searchTerm]);
  var states = {
    isReady: isReady,
    isFetching: isFetching,
    isInit: isInit,
    isAdd: isAdd,
    isUpdate: isUpdate,
    isView: isView,
    isAddAddress: isAddAddress,
    isAddDocument: isAddDocument,
    formType: formType,
    name: name,
    nameValid: nameValid,
    lastName: lastName,
    lastNameValid: lastNameValid,
    typeDocumentIdId: typeDocumentIdId,
    typeDocumentIdIdValid: typeDocumentIdIdValid,
    typeDocumentIdIdDefault: typeDocumentIdIdDefault,
    typeDocumentIdIdOptions: typeDocumentIdIdOptions,
    index: index,
    indexValid: indexValid,
    indexDefault: indexDefault,
    indexOptions: indexOptions,
    digit: digit,
    digitValid: digitValid,
    addressType: addressType,
    addressTypeValid: addressTypeValid,
    addressTypeDefault: addressTypeDefault,
    addressTypeOptions: addressTypeOptions,
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
    type: type,
    typeValid: typeValid,
    typeDefault: typeDefault,
    typeOptions: typeOptions,
    photo: photo,
    photoValid: photoValid,
    submitting: submitting,
    documentPhoto: documentPhoto,
    documentPhotoValid: documentPhotoValid,
    documentSubmitting: documentSubmitting,
    status: status,
    statusValid: statusValid,
    statusDefault: statusDefault,
    statusOptions: statusOptions,
    documentId: documentId,
    address: address,
    addressValid: addressValid,
    entities: entities,
    error: error,
    entityId: entityId,
    orderList: orderList,
    searchTerm: searchTerm,
    currentPage: currentPage,
    documentCurrentPage: documentCurrentPage,
    searchBy: searchBy,
    searchByDefault: searchByDefault,
    searchByOptions: searchByOptions,
    itemsPerPage: itemsPerPage
  };

  // Define las acciones necesarias para los atributos de Site
  var actions = {
    onFetching: onFetching,
    onInit: onInit,
    onAdd: onAdd,
    onUpdate: onUpdate,
    onIsReady: onIsReady,
    notReady: notReady,
    goUpdate: goUpdate,
    goAddPersonal: goAddPersonal,
    goAddLegal: goAddLegal,
    goView: goView,
    onAddAddress: onAddAddress,
    onAddDocument: onAddDocument,
    validationButtonNext: validationButtonNext,
    validationButtonNextAddress: validationButtonNextAddress,
    validationButtonNextDocument: validationButtonNextDocument,
    validationButtonNextUpdate: validationButtonNextUpdate,
    validationName: validationName,
    validationLastName: validationLastName,
    validationTypeDocumentIdId: validationTypeDocumentIdId,
    validationIndex: validationIndex,
    validationDigit: validationDigit,
    validationAddressType: validationAddressType,
    validationAddress1: validationAddress1,
    validationAddress2: validationAddress2,
    validationCity: validationCity,
    validationStateCountry: validationStateCountry,
    validationCountry: validationCountry,
    validationPostCode: validationPostCode,
    validationEmail: validationEmail,
    validationPhone: validationPhone,
    validationType: validationType,
    validationPhoto: validationPhoto,
    validationDocumentPhoto: validationDocumentPhoto,
    validationStatus: validationStatus,
    changeName: changeName,
    changeLastName: changeLastName,
    changeTypeDocumentIdId: changeTypeDocumentIdId,
    changeIndex: changeIndex,
    changeDigit: changeDigit,
    changeAddressType: changeAddressType,
    changeAddress1: changeAddress1,
    changeAddress2: changeAddress2,
    changeCity: changeCity,
    changeCityOptions: changeCityOptions,
    changeStateCountry: changeStateCountry,
    changeStateCountryOptions: changeStateCountryOptions,
    changeCountry: changeCountry,
    changePostCode: changePostCode,
    changeEmail: changeEmail,
    changePhone: changePhone,
    changeType: changeType,
    changeError: changeError,
    changePhoto: changePhoto,
    setPhoto: setPhoto,
    changeDocumentPhoto: changeDocumentPhoto,
    setDocumentPhoto: setDocumentPhoto,
    setSubmitting: setSubmitting,
    setDocumentSubmitting: setDocumentSubmitting,
    changeStatus: changeStatus,
    setAddress: setAddress,
    setDocumentId: setDocumentId,
    addAddress: addAddress,
    changeAddress: changeAddress,
    infoReset: infoReset,
    onEntity: onEntity,
    offEntity: offEntity,
    handleNewEntity: handleNewEntity,
    handleUpdatedEntity: handleUpdatedEntity,
    returnInit: returnInit,
    newError: newError,
    newErrorUpdate: newErrorUpdate,
    add: add,
    addDocument: addDocument,
    deleteAddress: deleteAddress,
    deleteDocument: deleteDocument,
    getById: getById,
    update: update,
    sortByName: sortByName,
    filterByName: filterByName,
    getPaginated: getPaginated,
    sortByProperty: sortByProperty,
    filterBySearch: filterBySearch,
    changeSearchBy: changeSearchBy,
    setOrderList: setOrderList,
    setSearchTerm: setSearchTerm,
    setCurrentPage: setCurrentPage,
    setDocumentCurrentPage: setDocumentCurrentPage
  };
  return {
    states: states,
    actions: actions
  };
};
exports.useGafpriEntity = useGafpriEntity;