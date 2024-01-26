"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserForm = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Input = require("../Input");
var _Containers = require("../Containers");
var _Form = require("../Form");
var _templateObject, _templateObject2, _templateObject3;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var defaultPhotoContainerStyle = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n"])));
var defaultPhotoMainContainerStyle = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n"])));
var defaultNameContainerStyle = (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n"])));
var UserForm = function UserForm(_ref) {
  var use = _ref.use,
    formType = _ref.formType,
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
  var isAddForm = formType === 'add';
  var isUpdateForm = formType === 'update';
  var currentUser = isUpdateForm ? use.actions.getById(use.states.userId) : null;
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
    if (isAddForm) {
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
    }
  }, []);
  var title1Text = isAddForm ? 'Nuevo Usuario' : 'Actualizar Usuario';
  var title2Text = isAddForm ? 'Agrega un nuevo usuario' : "Actualiza la informaci\xF3n del usuario #".concat(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id);
  var buttonTitle = isAddForm ? 'Agregar' : 'Actualizar';
  var buttonAction = isAddForm ? use.actions.add : use.actions.update;
  var handleActions = function handleActions(action, value) {
    switch (action) {
      case 'submit':
        buttonAction();
        break;
      case 'return':
        use.actions.returnInit();
        break;
      default:
        console.log('Acción desconocida:', action);
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_Form.ModelForm, (0, _extends2["default"])({
    titles: {
      title1: title1Text,
      title2: title2Text
    },
    buttonTitles: {
      mainButton: buttonTitle,
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
  }, roleContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputRole, InputSite))));
};
exports.UserForm = UserForm;