"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserFormUpdate = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Input = require("../Input");
var _Containers = require("../Containers");
var _List = require("../List");
var _Form = require("../Form");
var _templateObject, _templateObject2, _templateObject3;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var defaultPhotoContainerStyle = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n"])));
var defaultPhotoMainContainerStyle = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n"])));
var defaultNameContainerStyle = (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n"])));
var UserFormUpdate = function UserFormUpdate(_ref) {
  var _useSites$actions$get, _useSites$actions$get2, _currentUser$roles, _paginated$map;
  var use = _ref.use,
    useSites = _ref.useSites,
    _ref$photoMainContain = _ref.photoMainContainerStyle,
    photoMainContainerStyle = _ref$photoMainContain === void 0 ? defaultPhotoMainContainerStyle : _ref$photoMainContain,
    _ref$photoContainerSt = _ref.photoContainerStyle,
    photoContainerStyle = _ref$photoContainerSt === void 0 ? defaultPhotoContainerStyle : _ref$photoContainerSt,
    _ref$nameContainerSty = _ref.nameContainerStyle,
    nameContainerStyle = _ref$nameContainerSty === void 0 ? defaultNameContainerStyle : _ref$nameContainerSty,
    modelFormProps = _ref.modelFormProps,
    nameInputProps = _ref.nameInputProps,
    lastNameInputProps = _ref.lastNameInputProps,
    emailInputProps = _ref.emailInputProps,
    phoneContainerProps = _ref.phoneContainerProps,
    areaCodeSelectProps = _ref.areaCodeSelectProps,
    phoneInputProps = _ref.phoneInputProps,
    roleContainerProps = _ref.roleContainerProps,
    roleSelectProps = _ref.roleSelectProps,
    siteSelectProps = _ref.siteSelectProps,
    roleListProps = _ref.roleListProps,
    propsPhoto = _ref.propsPhoto;
  var _React$useState = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    InputAreaCode = _React$useState2[0],
    setInputAreaCode = _React$useState2[1];
  var _React$useState3 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    InputRole = _React$useState4[0],
    setInputRole = _React$useState4[1];
  var _React$useState5 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    InputSite = _React$useState6[0],
    setInputSite = _React$useState6[1];
  var currentUser = use.actions.getById(use.states.userId);
  _react["default"].useEffect(function () {
    use.actions.validationName(use.states.name);
    use.actions.validationLastName(use.states.lastName);
    use.actions.validationEmail(use.states.email);
    use.actions.validationAreaCode(use.states.areaCode);
    use.actions.validationPhoneNumber(use.states.phoneNumber);
    use.actions.validationRole(use.states.rolesId);
    use.actions.validationSite(use.states.site);
    use.actions.validationPhoto(use.states.photo);
    use.actions.validationIsActive("".concat(use.states.isActive));
    use.actions.validationButtonNext();
  }, [use.states.name, use.states.lastName, use.states.email, use.states.phoneNumber, use.states.areaCode, use.states.rolesId, use.states.site, use.states.photo, use.states.isActive, InputRole, InputSite, InputAreaCode]);
  _react["default"].useEffect(function () {
    use.actions.validationButtonNext();
  }, [use.states.nameValid, use.states.lastNameValid, use.states.emailValid, use.states.phoneNumberValid, use.states.areaCodeValid, use.states.roleValid, use.states.siteValid, use.states.photoValid, use.states.isActiveValid]);
  _react["default"].useEffect(function () {
    setInputRole(function () {
      return /*#__PURE__*/_react["default"].createElement(_Input.SelectRoles, {
        changeRoles: function changeRoles(e) {
          return use.actions.changeRole(e);
        },
        props: _objectSpread({
          options: use.states.roleOptions,
          defaultValue: use.states.roleDefault,
          styles: {
            width: '96%'
          }
        }, roleSelectProps)
      });
    });
    setInputSite(function () {
      return /*#__PURE__*/_react["default"].createElement(_Input.SelectSite, {
        changeSite: function changeSite(e) {
          return use.actions.changeSite(e);
        },
        props: _objectSpread({
          options: use.states.siteOptions,
          defaultValue: use.states.siteDefault,
          styles: {
            width: '96%'
          }
        }, siteSelectProps)
      });
    });
  }, []);
  _react["default"].useEffect(function () {
    if (use.states.name !== '') {
      setInputAreaCode(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectAreaCode, {
          changeAreaCode: function changeAreaCode(e) {
            return use.actions.changeAreaCode(e);
          },
          props: _objectSpread({
            options: use.states.areaCodeOptions,
            defaultValue: use.states.areaCodeDefault,
            styles: {
              width: '96%'
            }
          }, areaCodeSelectProps)
        });
      });
    }
  }, [use.states.name]);
  _react["default"].useEffect(function () {
    if (currentUser) {
      use.actions.changeName(currentUser.name);
      if (currentUser !== null && currentUser !== void 0 && currentUser.lastName) use.actions.changeLastName(currentUser.lastName);
      use.actions.changeEmail(currentUser.email);
      if (currentUser !== null && currentUser !== void 0 && currentUser.photo) use.actions.setPhoto(currentUser.photo);
      var countryCode = currentUser.phone.slice(0, -10);
      var countryCodeLabel = countryCode === '0058' ? '(+58) Venezuela' : countryCode === '001' ? '(+1) Estados Unidos' : '';
      var countryCodeDefault = {
        label: countryCodeLabel,
        value: countryCode
      };
      use.actions.changeAreaCode(countryCodeDefault);
      var phoneNumber = currentUser.phone.slice(-10);
      use.actions.changePhoneNumber(phoneNumber);
    }
  }, []);
  var handleActions = function handleActions(action, value) {
    switch (action) {
      case 'submit':
        use.actions.update();
        break;
      case 'return':
        use.actions.returnInit();
        break;
      default:
        console.log('Acción desconocida:', action);
    }
  };
  var sites = [{
    id: "".concat((_useSites$actions$get = useSites.actions.getMainSite()) === null || _useSites$actions$get === void 0 ? void 0 : _useSites$actions$get.id),
    name: ((_useSites$actions$get2 = useSites.actions.getMainSite()) === null || _useSites$actions$get2 === void 0 ? void 0 : _useSites$actions$get2.name) || '',
    role: (currentUser === null || currentUser === void 0 ? void 0 : (_currentUser$roles = currentUser.roles) === null || _currentUser$roles === void 0 ? void 0 : _currentUser$roles.name) || ''
  }];
  var filtered = use.actions.filterRoleByName(sites, use.states.searchTerm);
  var roles = use.actions.sortRoleByName(filtered, use.states.orderList) || [];
  var paginated = use.actions.getRolePaginated(roles, use.states.currentPage, use.states.itemsPerPage);
  var items = (_paginated$map = paginated === null || paginated === void 0 ? void 0 : paginated.map(function (item) {
    return [item.id, item.name, item.role];
  })) !== null && _paginated$map !== void 0 ? _paginated$map : [];
  var headers = ['# Sitio', 'Nombre del Sitio', 'Rol'];
  var options = [{
    value: 'asc',
    label: 'Ascendente'
  }, {
    value: 'desc',
    label: 'Descendente'
  }];
  var valueDefaul = use.states.orderList === 'asc' ? {
    value: 'asc',
    label: 'Ascendente'
  } : {
    value: 'desc',
    label: 'Descendente'
  };
  var totalPages = Math.ceil(roles.length / use.states.itemsPerPage);
  return /*#__PURE__*/_react["default"].createElement(_Form.ModelForm, (0, _extends2["default"])({
    titles: {
      title1: 'Actualizar Usuario',
      title2: "Actualiza la informaci\xF3n del usuario #".concat(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id)
    },
    buttonTitles: {
      mainButton: 'Actualizar',
      returnButton: 'Volver'
    },
    handleActions: handleActions,
    error: use.states.error
  }, modelFormProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(photoMainContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(photoContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Form.PhotoUser, {
    photo: use.states.photo,
    changePhoto: use.actions.changePhoto,
    submitting: use.states.submitting,
    changeError: use.actions.changeError,
    setSubmitting: use.actions.setSubmitting,
    props: propsPhoto
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(nameContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputName, {
    changeName: function changeName(e) {
      return use.actions.changeName(e);
    },
    props: _objectSpread({
      inputProps: {
        defaultValue: use.states.name
      },
      styles: {
        width: '100%'
      }
    }, nameInputProps)
  }), /*#__PURE__*/_react["default"].createElement(_Input.InputLastName, {
    changeLastName: function changeLastName(e) {
      return use.actions.changeLastName(e);
    },
    props: _objectSpread({
      inputProps: {
        defaultValue: use.states.lastName
      },
      styles: {
        width: '100%'
      }
    }, lastNameInputProps)
  }), /*#__PURE__*/_react["default"].createElement(_Input.InputEmail, {
    changeEmail: function changeEmail(e) {
      return use.actions.changeEmail(e);
    },
    props: _objectSpread({
      inputProps: {
        defaultValue: use.states.email
      },
      styles: {
        width: '100%'
      }
    }, emailInputProps)
  })))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%'
    }
  }, phoneContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputAreaCode, /*#__PURE__*/_react["default"].createElement(_Input.InputPhone, {
    changePhone: function changePhone(e) {
      return use.actions.changePhoneNumber(e);
    },
    props: _objectSpread({
      inputProps: {
        defaultValue: use.states.phoneNumber
      },
      styles: {
        width: '96%'
      }
    }, phoneInputProps)
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%'
    }
  }, roleContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputRole, InputSite)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_List.List, (0, _extends2["default"])({
    title: "Roles",
    items: items,
    headers: headers,
    columns: 3,
    selectProps: {
      options: options,
      onChange: function onChange(event) {
        if (event !== null && event !== void 0 && event.value) {
          use.actions.setOrderList(event.value);
        }
      },
      defaultValue: valueDefaul,
      styles: {
        width: '100%'
      }
    },
    inputProps: {
      value: use.states.searchTerm,
      onChange: function onChange(e) {
        return use.actions.setSearchTerm(e.target.value);
      },
      placeholder: 'Buscar por nombre...'
    },
    propsPagination: {
      currentPage: use.states.currentPage,
      setCurrentPage: use.actions.setCurrentPage,
      totalPages: totalPages
    }
  }, roleListProps)))));
};
exports.UserFormUpdate = UserFormUpdate;