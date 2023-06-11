"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriUsers = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _axios = _interopRequireDefault(require("axios"));
var _helpers = require("../helpers");
var _Context = require("../Context");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var useGafpriUsers = function useGafpriUsers(_ref) {
  var _useRoles$states$role, _useRoles$states$role2, _useSites$states$site, _useSites$states$site2, _users$data;
  var useRoles = _ref.useRoles,
    useSites = _ref.useSites;
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
  var _useState13 = (0, _react.useState)(''),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    name = _useState14[0],
    setName = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
    nameValid = _useState16[0],
    setNameValid = _useState16[1];
  var _useState17 = (0, _react.useState)(''),
    _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
    lastName = _useState18[0],
    setLastName = _useState18[1];
  var _useState19 = (0, _react.useState)(true),
    _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
    lastNameValid = _useState20[0],
    setLastNameValid = _useState20[1];
  var _useState21 = (0, _react.useState)(''),
    _useState22 = (0, _slicedToArray2["default"])(_useState21, 2),
    email = _useState22[0],
    setEmail = _useState22[1];
  var _useState23 = (0, _react.useState)(false),
    _useState24 = (0, _slicedToArray2["default"])(_useState23, 2),
    emailValid = _useState24[0],
    setEmailValid = _useState24[1];
  var _useState25 = (0, _react.useState)(''),
    _useState26 = (0, _slicedToArray2["default"])(_useState25, 2),
    phoneNumber = _useState26[0],
    setPhoneNumber = _useState26[1];
  var _useState27 = (0, _react.useState)(false),
    _useState28 = (0, _slicedToArray2["default"])(_useState27, 2),
    phoneNumberValid = _useState28[0],
    setPhoneNumberValid = _useState28[1];
  var _useState29 = (0, _react.useState)('0058'),
    _useState30 = (0, _slicedToArray2["default"])(_useState29, 2),
    areaCode = _useState30[0],
    setAreaCode = _useState30[1];
  var _useState31 = (0, _react.useState)(false),
    _useState32 = (0, _slicedToArray2["default"])(_useState31, 2),
    areaCodeValid = _useState32[0],
    setAreaCodeValid = _useState32[1];
  var _useState33 = (0, _react.useState)({
      value: '0058',
      label: '(+58) Venezuela'
    }),
    _useState34 = (0, _slicedToArray2["default"])(_useState33, 2),
    areaCodeDefault = _useState34[0],
    setAreaCodeDefault = _useState34[1];
  var areaCodeOptions = [{
    value: '0058',
    label: '(+58) Venezuela'
  }, {
    value: '001',
    label: '(+1) Estados Unidos'
  }];
  var _useState35 = (0, _react.useState)(''),
    _useState36 = (0, _slicedToArray2["default"])(_useState35, 2),
    role = _useState36[0],
    setRole = _useState36[1];
  var _useState37 = (0, _react.useState)(false),
    _useState38 = (0, _slicedToArray2["default"])(_useState37, 2),
    roleValid = _useState38[0],
    setRoleValid = _useState38[1];
  var _useState39 = (0, _react.useState)({
      value: '',
      label: 'Elija el rol del usuario'
    }),
    _useState40 = (0, _slicedToArray2["default"])(_useState39, 2),
    roleDefault = _useState40[0],
    setRoleDefault = _useState40[1];
  var roleOptions = ((_useRoles$states$role = useRoles.states.roles.data) === null || _useRoles$states$role === void 0 ? void 0 : (_useRoles$states$role2 = _useRoles$states$role.items) === null || _useRoles$states$role2 === void 0 ? void 0 : _useRoles$states$role2.map(function (item) {
    return {
      value: item.name,
      label: item.name
    };
  })) || [];
  var _useState41 = (0, _react.useState)(''),
    _useState42 = (0, _slicedToArray2["default"])(_useState41, 2),
    site = _useState42[0],
    setSite = _useState42[1];
  var _useState43 = (0, _react.useState)(false),
    _useState44 = (0, _slicedToArray2["default"])(_useState43, 2),
    siteValid = _useState44[0],
    setSiteValid = _useState44[1];
  var _useState45 = (0, _react.useState)({
      value: '',
      label: 'Elija el sitio web'
    }),
    _useState46 = (0, _slicedToArray2["default"])(_useState45, 2),
    siteDefault = _useState46[0],
    setSiteDefault = _useState46[1];
  var siteOptions = ((_useSites$states$site = useSites.states.sites.data) === null || _useSites$states$site === void 0 ? void 0 : (_useSites$states$site2 = _useSites$states$site.items) === null || _useSites$states$site2 === void 0 ? void 0 : _useSites$states$site2.map(function (item) {
    return {
      value: "".concat(item.id),
      label: item.name
    };
  })) || [];
  var _useState47 = (0, _react.useState)('https://categorygafpri.s3.us-east-2.amazonaws.com/fotousuariogafpri.png'),
    _useState48 = (0, _slicedToArray2["default"])(_useState47, 2),
    photo = _useState48[0],
    setPhoto = _useState48[1];
  var _useState49 = (0, _react.useState)(false),
    _useState50 = (0, _slicedToArray2["default"])(_useState49, 2),
    photoValid = _useState50[0],
    setPhotoValid = _useState50[1];
  var _useState51 = (0, _react.useState)(false),
    _useState52 = (0, _slicedToArray2["default"])(_useState51, 2),
    submitting = _useState52[0],
    setSubmitting = _useState52[1];
  var _useState53 = (0, _react.useState)(true),
    _useState54 = (0, _slicedToArray2["default"])(_useState53, 2),
    isActive = _useState54[0],
    setIsActive = _useState54[1];
  var _useState55 = (0, _react.useState)(false),
    _useState56 = (0, _slicedToArray2["default"])(_useState55, 2),
    isActiveValid = _useState56[0],
    setIsActiveValid = _useState56[1];
  var _useState57 = (0, _react.useState)({
      value: 'true',
      label: 'Activo'
    }),
    _useState58 = (0, _slicedToArray2["default"])(_useState57, 2),
    isActiveDefault = _useState58[0],
    setIsActiveDefault = _useState58[1];
  var isActiveOptions = [{
    label: 'Activo',
    value: 'true'
  }, {
    label: 'Inactivo',
    value: 'false'
  }];
  var _useState59 = (0, _react.useState)({
      data: {
        items: (0, _Context.getItem)('GS_USERS_V2', null)
      }
    }),
    _useState60 = (0, _slicedToArray2["default"])(_useState59, 2),
    users = _useState60[0],
    setUsers = _useState60[1];
  var _useState61 = (0, _react.useState)([]),
    _useState62 = (0, _slicedToArray2["default"])(_useState61, 2),
    error = _useState62[0],
    setError = _useState62[1];
  var _useState63 = (0, _react.useState)(0),
    _useState64 = (0, _slicedToArray2["default"])(_useState63, 2),
    userId = _useState64[0],
    setUserId = _useState64[1];
  var _useState65 = (0, _react.useState)('asc'),
    _useState66 = (0, _slicedToArray2["default"])(_useState65, 2),
    orderList = _useState66[0],
    setOrderList = _useState66[1];
  var _useState67 = (0, _react.useState)(''),
    _useState68 = (0, _slicedToArray2["default"])(_useState67, 2),
    searchTerm = _useState68[0],
    setSearchTerm = _useState68[1];
  var _useState69 = (0, _react.useState)(1),
    _useState70 = (0, _slicedToArray2["default"])(_useState69, 2),
    currentPage = _useState70[0],
    setCurrentPage = _useState70[1];
  var _useState71 = (0, _react.useState)('name'),
    _useState72 = (0, _slicedToArray2["default"])(_useState71, 2),
    searchBy = _useState72[0],
    setSearchBy = _useState72[1];
  var _useState73 = (0, _react.useState)({
      value: 'name',
      label: 'Nombre'
    }),
    _useState74 = (0, _slicedToArray2["default"])(_useState73, 2),
    searchByDefault = _useState74[0],
    setSearchByDefault = _useState74[1];
  var searchByOptions = [{
    value: 'name',
    label: 'Nombre'
  }, {
    value: 'email',
    label: 'Email'
  }, {
    value: 'phone',
    label: 'Teléfono'
  }, {
    value: 'login',
    label: 'Login'
  }];
  var itemsPerPage = 6;
  var infoReset = function infoReset() {
    setName('');
    setNameValid(false);
    setLastName('');
    setLastNameValid(true);
    setEmail('');
    setEmailValid(false);
    setPhoneNumber('');
    setPhoneNumberValid(false);
    setAreaCode('0058');
    setAreaCodeValid(false);
    setAreaCodeDefault({
      value: '0058',
      label: '(+58) Venezuela'
    });
    setRole('');
    setRoleValid(false);
    setRoleDefault({
      value: '',
      label: 'Elija el rol del usuario'
    });
    setSite('');
    setSiteValid(false);
    setSiteDefault({
      value: '',
      label: 'Elija el sitio web'
    });
    setPhoto('https://categorygafpri.s3.us-east-2.amazonaws.com/fotousuariogafpri.png');
    setPhotoValid(false);
    setSubmitting(false);
    setIsActive(true);
    setIsActiveValid(false);
    setIsActiveDefault({
      value: 'true',
      label: 'Activo'
    });
    setError([]);
    setUserId(0);
    setOrderList('asc');
    setSearchTerm('');
    setCurrentPage(1);
  };

  // Funciones de paginas
  var onFetching = function onFetching() {
    setIsFetching(true);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
    setIsView(false);
  };
  var onInit = function onInit() {
    setIsFetching(false);
    setIsInit(true);
    setIsAdd(false);
    setIsUpdate(false);
    setIsView(false);
  };
  var onAdd = function onAdd() {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(true);
    setIsUpdate(false);
    setIsView(false);
  };
  var onUpdate = function onUpdate() {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(true);
    setIsView(false);
  };
  var onView = function onView() {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
    setIsView(true);
  };
  var onIsReady = function onIsReady() {
    setIsReady(true);
  };
  var notReady = function notReady() {
    setIsReady(false);
  };
  var goUpdate = function goUpdate(id) {
    infoReset();
    setUserId(id);
    onUpdate();
  };
  var goView = function goView(id) {
    setUserId(id);
    onView();
  };
  var goAdd = function goAdd() {
    infoReset();
    onAdd();
  };

  // Funciones de Validacion
  var validationButtonNext = function validationButtonNext() {
    if (nameValid && lastNameValid && emailValid && areaCodeValid && phoneNumberValid && roleValid && siteValid && photoValid && isActiveValid) {
      (0, _helpers.removeClass)('buttonNext', 'gs-disabled');
    } else {
      (0, _helpers.addClass)('buttonNext', 'gs-disabled');
    }
  };
  var validationName = function validationName(value) {
    return (0, _helpers.validationInputName)({
      name: value,
      inputId: 'userName',
      setValid: setNameValid
    });
  };
  var validationLastName = function validationLastName(value) {
    return (0, _helpers.validationInputName)({
      name: value,
      inputId: 'userLastName',
      setValid: setLastNameValid,
      required: false
    });
  };
  var validationEmail = function validationEmail(value) {
    var valid = (0, _helpers.validationInput)(value, /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/, 'userEmail', 'gs-input-alert', true);
    setEmailValid(valid);
    return valid;
  };
  var validationPhoneNumber = function validationPhoneNumber(value) {
    var valid = (0, _helpers.validationInput)(value, /^[0-9]{10}$/, 'userPhone', 'gs-input-alert', true);
    setPhoneNumberValid(valid);
    return valid;
  };
  var validationAreaCode = function validationAreaCode(value) {
    var validation = (0, _helpers.validationSelect)(value, 'areaCodeUser', 'gs-input-alert');
    setAreaCodeValid(validation);
    return validation;
  };
  var validationSite = function validationSite(value) {
    var validation = (0, _helpers.validationSelect)(value, 'userSite', 'gs-input-alert');
    setSiteValid(validation);
    return validation;
  };
  var validationRole = function validationRole(value) {
    var validation = (0, _helpers.validationSelect)(value, 'userRole', 'gs-input-alert');
    setRoleValid(validation);
    return validation;
  };
  var validationPhoto = function validationPhoto(value) {
    var valid = (0, _helpers.validationInput)(value, /^(?:(?:[a-z][a-z0-9+-.]*):\/\/)?(?:[a-z0-9_-]+(?::[a-z0-9_-]+)*@)?(?:[a-z0-9.-]+|(?:\[[a-f0-9:.]+\]))(?::\d+)?(?:\/[^\s#?]*(?:\?[^\s#?]*)?(?:#[^\s#?]*)?)?$/i, 'photoUser', 'gs-input-alert');
    setPhotoValid(valid);
    return valid;
  };
  var validationIsActive = function validationIsActive(value) {
    var validation = (0, _helpers.validationSelect)(value, 'isActiveUser', 'gs-input-alert');
    setIsActiveValid(validation);
    return validation;
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
  var changeLastName = function changeLastName(value) {
    var newValue = (0, _helpers.toTitleCase)(value);
    (0, _helpers.changeInputText)({
      value: newValue,
      validation: validationLastName,
      setValue: setLastName
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
  var changePhoneNumber = function changePhoneNumber(newPhone) {
    var newValue = newPhone.startsWith('0') ? newPhone.slice(1) : newPhone;
    (0, _helpers.changeInputText)({
      value: newValue,
      validation: validationPhoneNumber,
      setValue: setPhoneNumber
    });
  };
  var changeAreaCode = function changeAreaCode(options) {
    (0, _helpers.changeSelect)({
      newValue: options,
      validation: validationAreaCode,
      setDefault: setAreaCodeDefault,
      setValue: setAreaCode
    });
  };
  var changeRole = function changeRole(options) {
    (0, _helpers.changeSelect)({
      newValue: options,
      validation: validationRole,
      setDefault: setRoleDefault,
      setValue: setRole
    });
  };
  var changeSite = function changeSite(options) {
    (0, _helpers.changeSelect)({
      newValue: options,
      validation: validationSite,
      setDefault: setSiteDefault,
      setValue: setSite
    });
  };
  var changeError = function changeError(value) {
    setError(value);
    setTimeout(function () {
      setError([]);
    }, 5000);
  };
  var changePhoto = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(e) {
      var newFile, mimeType, formData, config, response;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            newFile = e.target.files && e.target.files[0];
            if (newFile) {
              _context.next = 3;
              break;
            }
            return _context.abrupt("return");
          case 3:
            // Obtén el tipo MIME en función de la extensión del archivo
            mimeType = (0, _helpers.getMimeTypeByExtension)(newFile.name);
            if (mimeType) {
              _context.next = 7;
              break;
            }
            changeError(['El archivo no es una imagen válida. Asegúrate de subir un archivo JPG, JPEG o PNG.']);
            return _context.abrupt("return");
          case 7:
            formData = new FormData();
            formData.append('file', newFile);
            formData.append('fileName', newFile.name);
            setSubmitting(true);
            config = {
              headers: {
                'content-type': 'multipart/form-data'
              }
            };
            _context.prev = 12;
            _context.next = 15;
            return _axios["default"].post('/api/upload', formData, config);
          case 15:
            response = _context.sent;
            if (response.status === 200) {
              setPhoto(response.data.imageUrl);
              validationPhoto(response.data.imageUrl);
            } else {
              setSubmitting(false);
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            _context.next = 23;
            break;
          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](12);
            changeError(["".concat(_context.t0.message)]);
            setSubmitting(false);
          case 23:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[12, 19]]);
    }));
    return function changePhoto(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var changeIsActive = function changeIsActive(options) {
    (0, _helpers.changeSelect)({
      newValue: options,
      validation: validationIsActive,
      setDefault: setIsActiveDefault,
      setValue: setIsActive
    });
  };
  var changeSearchBy = function changeSearchBy(options) {
    var label = options !== null && options !== void 0 && options.label ? options.label : 'Nombre';
    var value = options !== null && options !== void 0 && options.value && (options.value === 'name' || options.value === 'email' || options.value === 'phone' || options.value === 'login') ? options.value : 'name';
    var newDefaulValue = {
      label: label,
      value: value
    };
    setSearchByDefault(newDefaulValue);
    setSearchBy(value);
  };

  // Manejo de la data en DB
  var getLastItem = (_users$data = users.data) !== null && _users$data !== void 0 && _users$data.items ? users.data.items.sort(function (a, b) {
    return new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime();
  })[0] : null;
  var setDataStorage = function setDataStorage(newData) {
    (0, _Context.saveItem)('GS_USERS_V2', newData.data.items);
  };
  var setData = function setData(newData) {
    setUsers(newData);
    setDataStorage(newData);
  };
  var onSites = function onSites(newData) {
    setData(newData);
    onIsReady();
  };
  var resetData = function resetData() {
    var newData = {
      data: {
        items: null
      }
    };
    setData(newData);
    notReady();
  };
  var getUsers = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      var _users$data$items;
      var lastEntryDateAndCount, lastDate, count;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _helpers.getLastEntryDateAndCount)('users');
          case 2:
            lastEntryDateAndCount = _context2.sent;
            lastDate = (getLastItem === null || getLastItem === void 0 ? void 0 : getLastItem.modifiedAt) || null;
            count = ((_users$data$items = users.data.items) === null || _users$data$items === void 0 ? void 0 : _users$data$items.length) || 0;
            if (users.data.items === null || "".concat(lastEntryDateAndCount === null || lastEntryDateAndCount === void 0 ? void 0 : lastEntryDateAndCount.date) !== "".concat(lastDate) || "".concat(lastEntryDateAndCount === null || lastEntryDateAndCount === void 0 ? void 0 : lastEntryDateAndCount.count) !== "".concat(count)) {
              (0, _helpers.gafpriFetch)({
                initMethod: 'GET',
                initApi: 'http://localhost:4000',
                initRoute: 'api/v1/users',
                functionFetching: notReady,
                functionSuccess: onSites
              });
            } else {
              onIsReady();
            }
          case 6:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function getUsers() {
      return _ref3.apply(this, arguments);
    };
  }();
  var handleNewUsers = function handleNewUsers(newItem) {
    setUsers(function (prevState) {
      var newData = {
        data: {
          items: [].concat((0, _toConsumableArray2["default"])(prevState.data.items || []), [newItem])
        }
      };
      setDataStorage(newData);
      return newData;
    });
  };
  var handleUpdatedUsers = function handleUpdatedUsers(itemUpdate) {
    setUsers(function (prevState) {
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
  var add = function add() {
    if (nameValid && lastNameValid && emailValid && phoneNumberValid && areaCodeValid && roleValid && siteValid && photoValid && isActiveValid) {
      var payload = {
        name: name,
        email: email,
        phone: "".concat(areaCode).concat(phoneNumber),
        role: role,
        isActive: isActive
      };
      var updatedPayload = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, payload), lastName ? {
        lastName: lastName
      } : {}), photo ? {
        photo: photo
      } : {}), site ? {
        site: site
      } : {});
      (0, _helpers.gafpriFetch)({
        initMethod: 'POST',
        initApi: 'http://localhost:4000',
        initRoute: 'api/v1/users',
        initCredentials: updatedPayload,
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newError
      });
    }
  };
  function getById(id) {
    var _users$data$items2;
    return ((_users$data$items2 = users.data.items) === null || _users$data$items2 === void 0 ? void 0 : _users$data$items2.find(function (item) {
      return item.id === id;
    })) || null;
  }
  var update = function update() {
    if (nameValid && lastNameValid && emailValid && phoneNumberValid && areaCodeValid && roleValid && siteValid && photoValid && isActiveValid) {
      var payload = {
        name: name,
        email: email,
        phone: "".concat(areaCode).concat(phoneNumber),
        role: role,
        isActive: isActive
      };
      var updatedPayload = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, payload), lastName ? {
        lastName: lastName
      } : {}), photo ? {
        photo: photo
      } : {}), site ? {
        site: site
      } : {});
      (0, _helpers.gafpriFetch)({
        initMethod: 'PATCH',
        initApi: 'http://localhost:4000',
        initRoute: "api/v1/users/".concat(userId),
        initCredentials: updatedPayload,
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newErrorUpdate
      });
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
  function sortRoleByName(items, order) {
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
  function sortByProperty(items, search, order) {
    if (items) {
      return items.slice().sort(function (a, b) {
        var comparison = a[search].localeCompare(b[search], undefined, {
          sensitivity: 'base'
        });
        return order === 'asc' ? comparison : -comparison;
      });
    }
    return null;
  }
  var filterByName = function filterByName(search) {
    if (users.data.items) {
      return users.data.items.filter(function (item) {
        return item.name.toLowerCase().includes(search.toLowerCase());
      });
    }
    return null;
  };
  var filterRoleByName = function filterRoleByName(roleArray, search) {
    if (roleArray) {
      return roleArray.filter(function (item) {
        return item.name.toLowerCase().includes(search.toLowerCase());
      });
    }
    return null;
  };
  var filterBySearch = function filterBySearch(search, searchType) {
    if (users.data.items) {
      return users.data.items.filter(function (item) {
        return item[searchType].toLowerCase().includes(search.toLowerCase());
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
  var getRolePaginated = function getRolePaginated(items, page, itemPerPage) {
    var startIndex = (page - 1) * itemPerPage;
    var endIndex = startIndex + itemPerPage;
    if (items) {
      return items.slice(startIndex, endIndex);
    }
    return null;
  };

  // Efects
  _react["default"].useEffect(function () {
    getUsers();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  _react["default"].useEffect(function () {
    setCurrentPage(1);
  }, [searchTerm]);
  var states = {
    isReady: isReady,
    isFetching: isFetching,
    isInit: isInit,
    isAdd: isAdd,
    isUpdate: isUpdate,
    isView: isView,
    name: name,
    nameValid: nameValid,
    lastName: lastName,
    lastNameValid: lastNameValid,
    email: email,
    emailValid: emailValid,
    phoneNumber: phoneNumber,
    phoneNumberValid: phoneNumberValid,
    areaCode: areaCode,
    areaCodeValid: areaCodeValid,
    areaCodeDefault: areaCodeDefault,
    areaCodeOptions: areaCodeOptions,
    role: role,
    roleValid: roleValid,
    roleDefault: roleDefault,
    roleOptions: roleOptions,
    site: site,
    siteValid: siteValid,
    siteDefault: siteDefault,
    siteOptions: siteOptions,
    photo: photo,
    photoValid: photoValid,
    submitting: submitting,
    isActive: isActive,
    isActiveValid: isActiveValid,
    isActiveDefault: isActiveDefault,
    isActiveOptions: isActiveOptions,
    users: users,
    error: error,
    userId: userId,
    orderList: orderList,
    searchTerm: searchTerm,
    currentPage: currentPage,
    itemsPerPage: itemsPerPage,
    searchBy: searchBy,
    searchByDefault: searchByDefault,
    searchByOptions: searchByOptions
  };

  // Define las acciones necesarias para los atributos de Site
  var actions = {
    onFetching: onFetching,
    onInit: onInit,
    onAdd: onAdd,
    onUpdate: onUpdate,
    goView: goView,
    onIsReady: onIsReady,
    notReady: notReady,
    goUpdate: goUpdate,
    goAdd: goAdd,
    validationButtonNext: validationButtonNext,
    validationName: validationName,
    validationLastName: validationLastName,
    validationEmail: validationEmail,
    validationPhoneNumber: validationPhoneNumber,
    validationAreaCode: validationAreaCode,
    validationRole: validationRole,
    validationSite: validationSite,
    validationPhoto: validationPhoto,
    validationIsActive: validationIsActive,
    changeName: changeName,
    changeLastName: changeLastName,
    changeEmail: changeEmail,
    changePhoneNumber: changePhoneNumber,
    changeAreaCode: changeAreaCode,
    changeRole: changeRole,
    changeSite: changeSite,
    changeError: changeError,
    changePhoto: changePhoto,
    setSubmitting: setSubmitting,
    setPhoto: setPhoto,
    changeIsActive: changeIsActive,
    infoReset: infoReset,
    resetData: resetData,
    handleNewUsers: handleNewUsers,
    handleUpdatedUsers: handleUpdatedUsers,
    returnInit: returnInit,
    add: add,
    getById: getById,
    update: update,
    sortByName: sortByName,
    filterByName: filterByName,
    getPaginated: getPaginated,
    setOrderList: setOrderList,
    setSearchTerm: setSearchTerm,
    setCurrentPage: setCurrentPage,
    changeSearchBy: changeSearchBy,
    sortByProperty: sortByProperty,
    filterBySearch: filterBySearch,
    filterRoleByName: filterRoleByName,
    sortRoleByName: sortRoleByName,
    getRolePaginated: getRolePaginated
  };
  return {
    states: states,
    actions: actions
  };
};
exports.useGafpriUsers = useGafpriUsers;