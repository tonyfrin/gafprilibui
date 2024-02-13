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
var _helpers = require("../helpers");
var _Context = require("../Context");
var _Constans = require("../Constans");
var _Validations = require("../Validations");
var _Changes = require("../Changes");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var useGafpriUsers = function useGafpriUsers(_ref) {
  var _useRoles$states$role, _useRoles$states$role2, _users$data;
  var useRoles = _ref.useRoles,
    token = _ref.token,
    useError = _ref.useError;
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
    rolesId = _useState36[0],
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
      value: "".concat(item.id),
      label: item.name
    };
  })) || [];
  var _useState41 = (0, _react.useState)('https://categorygafpri.s3.us-east-2.amazonaws.com/fotousuariogafpri.png'),
    _useState42 = (0, _slicedToArray2["default"])(_useState41, 2),
    photo = _useState42[0],
    setPhoto = _useState42[1];
  var _useState43 = (0, _react.useState)(false),
    _useState44 = (0, _slicedToArray2["default"])(_useState43, 2),
    photoValid = _useState44[0],
    setPhotoValid = _useState44[1];
  var _useState45 = (0, _react.useState)(false),
    _useState46 = (0, _slicedToArray2["default"])(_useState45, 2),
    submitting = _useState46[0],
    setSubmitting = _useState46[1];
  var _useState47 = (0, _react.useState)(true),
    _useState48 = (0, _slicedToArray2["default"])(_useState47, 2),
    isActive = _useState48[0],
    setIsActive = _useState48[1];
  var _useState49 = (0, _react.useState)(false),
    _useState50 = (0, _slicedToArray2["default"])(_useState49, 2),
    isActiveValid = _useState50[0],
    setIsActiveValid = _useState50[1];
  var _useState51 = (0, _react.useState)({
      value: 'true',
      label: 'Activo'
    }),
    _useState52 = (0, _slicedToArray2["default"])(_useState51, 2),
    isActiveDefault = _useState52[0],
    setIsActiveDefault = _useState52[1];
  var isActiveOptions = [{
    label: 'Activo',
    value: 'true'
  }, {
    label: 'Inactivo',
    value: 'false'
  }];
  var _useState53 = (0, _react.useState)({
      data: {
        items: (0, _Context.getItem)(_Constans.USERS_STORAGE, null)
      }
    }),
    _useState54 = (0, _slicedToArray2["default"])(_useState53, 2),
    users = _useState54[0],
    setUsers = _useState54[1];
  var error = useError.states.error;
  var changeError = useError.actions.changeError;
  var _useState55 = (0, _react.useState)(0),
    _useState56 = (0, _slicedToArray2["default"])(_useState55, 2),
    userId = _useState56[0],
    setUserId = _useState56[1];
  var _useState57 = (0, _react.useState)('asc'),
    _useState58 = (0, _slicedToArray2["default"])(_useState57, 2),
    orderList = _useState58[0],
    setOrderList = _useState58[1];
  var _useState59 = (0, _react.useState)(''),
    _useState60 = (0, _slicedToArray2["default"])(_useState59, 2),
    searchTerm = _useState60[0],
    setSearchTerm = _useState60[1];
  var _useState61 = (0, _react.useState)(1),
    _useState62 = (0, _slicedToArray2["default"])(_useState61, 2),
    currentPage = _useState62[0],
    setCurrentPage = _useState62[1];
  var _useState63 = (0, _react.useState)('name'),
    _useState64 = (0, _slicedToArray2["default"])(_useState63, 2),
    searchBy = _useState64[0],
    setSearchBy = _useState64[1];
  var _useState65 = (0, _react.useState)({
      value: 'name',
      label: 'Nombre'
    }),
    _useState66 = (0, _slicedToArray2["default"])(_useState65, 2),
    searchByDefault = _useState66[0],
    setSearchByDefault = _useState66[1];
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
    setPhoto('https://categorygafpri.s3.us-east-2.amazonaws.com/fotousuariogafpri.png');
    setPhotoValid(false);
    setSubmitting(false);
    setIsActive(true);
    setIsActiveValid(false);
    setIsActiveDefault({
      value: 'true',
      label: 'Activo'
    });
    useError.actions.changeError([]);
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
    (0, _Validations.generalValidationButtonNext)({
      validations: [nameValid, lastNameValid, emailValid, areaCodeValid, phoneNumberValid, roleValid, photoValid, isActiveValid]
    });
  };
  var validationName = function validationName(value) {
    return (0, _Validations.generalValidationName)({
      value: value,
      setValid: setNameValid,
      currentValid: nameValid
    });
  };
  var validationLastName = function validationLastName(value) {
    return (0, _Validations.generalValidationLastName)({
      value: value,
      setValid: setLastNameValid,
      currentValid: lastNameValid
    });
  };
  var validationEmail = function validationEmail(value) {
    return (0, _Validations.generalValidationEmail)({
      value: value,
      setValid: setEmailValid,
      currentValid: emailValid,
      required: true
    });
  };
  var validationPhoneNumber = function validationPhoneNumber(value) {
    return (0, _Validations.generalValidationPhone)({
      value: value,
      setValid: setPhoneNumberValid,
      currentValid: phoneNumberValid,
      required: true
    });
  };
  var validationAreaCode = function validationAreaCode(value) {
    return (0, _Validations.generalValidationAreaCode)({
      newValue: value,
      setValid: setAreaCodeValid,
      currentValid: areaCodeValid
    });
  };
  var validationRole = function validationRole(value) {
    return (0, _Validations.generalValidationRoles)({
      newValue: value,
      setValid: setRoleValid,
      currentValid: roleValid
    });
  };
  var validationPhoto = function validationPhoto(value) {
    return (0, _Validations.generalValidationPhotoUsers)({
      value: value,
      setValid: setPhotoValid,
      currentValid: photoValid
    });
  };
  var validationIsActive = function validationIsActive(value) {
    return (0, _Validations.generalValidationStatus)({
      value: value,
      setValid: setIsActiveValid,
      currentValid: isActiveValid
    });
  };

  // Funciones de cambios
  var changeName = function changeName(value) {
    (0, _Changes.generalChangeName)(value, validationName, setName);
  };
  var changeLastName = function changeLastName(value) {
    (0, _Changes.generalChangeLastName)(value, validationLastName, setLastName);
  };
  var changeEmail = function changeEmail(inputValue) {
    (0, _Changes.generalChangeEmail)(inputValue, validationEmail, setEmail);
  };
  var changePhoneNumber = function changePhoneNumber(newPhone) {
    (0, _Changes.generalChangePhone)(newPhone, validationPhoneNumber, setPhoneNumber);
  };
  var changeAreaCode = function changeAreaCode(options) {
    (0, _Changes.generalChangeAreaCode)(options, validationAreaCode, setAreaCodeDefault, setAreaCode);
  };
  var changeRole = function changeRole(options) {
    (0, _Changes.generalChangeRoles)(options, validationRole, setRoleDefault, setRole);
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
  var changeIsActive = function changeIsActive(options) {
    (0, _Changes.generalChanceIsActive)(options, validationIsActive, setIsActiveDefault, setIsActive);
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
    (0, _Context.saveItem)(_Constans.USERS_STORAGE, newData.data.items);
  };
  var setData = function setData(newData) {
    setUsers(newData);
    setDataStorage(newData);
  };
  var onUsers = function onUsers(newData) {
    setData(newData);
    onIsReady();
  };
  var offUsers = function offUsers() {
    setData({
      data: {
        items: null
      }
    });
    notReady();
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
              if (token) {
                (0, _helpers.gafpriFetch)({
                  initMethod: 'GET',
                  initRoute: _Constans.USERS_ROUTE,
                  initToken: {
                    token: token
                  },
                  functionFetching: notReady,
                  functionSuccess: onUsers
                });
              } else {
                notReady();
              }
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
    if (nameValid && lastNameValid && emailValid && phoneNumberValid && areaCodeValid && roleValid && photoValid && isActiveValid && token) {
      var payload = {
        name: name,
        email: email,
        phone: "".concat(areaCode).concat(phoneNumber),
        rolesId: rolesId,
        isActive: isActive
      };
      var updatedPayload = _objectSpread(_objectSpread(_objectSpread({}, payload), lastName ? {
        lastName: lastName
      } : {}), photo ? {
        photo: photo
      } : {});
      (0, _helpers.gafpriFetch)({
        initMethod: 'POST',
        initRoute: _Constans.USERS_ROUTE,
        initCredentials: updatedPayload,
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
    var _users$data$items2;
    return ((_users$data$items2 = users.data.items) === null || _users$data$items2 === void 0 ? void 0 : _users$data$items2.find(function (item) {
      return item.id === id;
    })) || null;
  }
  var update = function update() {
    if (nameValid && lastNameValid && emailValid && phoneNumberValid && areaCodeValid && roleValid && photoValid && isActiveValid && token) {
      var payload = {
        name: name,
        email: email,
        phone: "".concat(areaCode).concat(phoneNumber),
        rolesId: rolesId,
        isActive: isActive
      };
      var updatedPayload = _objectSpread(_objectSpread(_objectSpread({}, payload), lastName ? {
        lastName: lastName
      } : {}), photo ? {
        photo: photo
      } : {});
      (0, _helpers.gafpriFetch)({
        initMethod: 'PATCH',
        initRoute: "".concat(_Constans.USERS_ROUTE, "/").concat(userId),
        initCredentials: updatedPayload,
        initToken: {
          token: token
        },
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
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

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
    rolesId: rolesId,
    roleValid: roleValid,
    roleDefault: roleDefault,
    roleOptions: roleOptions,
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
    offUsers: offUsers,
    validationButtonNext: validationButtonNext,
    validationName: validationName,
    validationLastName: validationLastName,
    validationEmail: validationEmail,
    validationPhoneNumber: validationPhoneNumber,
    validationAreaCode: validationAreaCode,
    validationRole: validationRole,
    validationPhoto: validationPhoto,
    validationIsActive: validationIsActive,
    changeName: changeName,
    changeLastName: changeLastName,
    changeEmail: changeEmail,
    changePhoneNumber: changePhoneNumber,
    changeAreaCode: changeAreaCode,
    changeRole: changeRole,
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