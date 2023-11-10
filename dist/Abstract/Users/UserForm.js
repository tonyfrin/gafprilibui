"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserForm = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Input = require("../Input");
var _Containers = require("../Containers");
var _Button = require("../Button");
var _Components = require("../../Components");
var _Form = require("../Form");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
var defaultPhotoContainerStyle = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n"])));
var defaultPhotoFormStyle = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column-reverse;\n  width: 100%;\n"])));
var defaultLoadingContainerStyle = (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  transition: all 1s ease 0s;\n  width: 100%;\n  max-width: 120px;\n  max-height: 120px;\n  object-fit: cover;\n  border: 1px solid #ebebeb;\n  margin: auto;\n  border-radius: 100%;\n"])));
var defaultPhotoStyle = (0, _css.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  transition: all 1s ease 0s;\n  width: 100%;\n  max-width: 120px;\n  max-height: 120px;\n  object-fit: cover;\n  border: 1px solid #ebebeb;\n  margin: auto;\n  border-radius: 100%;\n"])));
var defaultPhotoMainContainerStyle = (0, _css.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n"])));
var defaultNameContainerStyle = (0, _css.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n"])));
var UserForm = function UserForm(_ref) {
  var use = _ref.use,
    formType = _ref.formType,
    _ref$photoMainContain = _ref.photoMainContainerStyle,
    photoMainContainerStyle = _ref$photoMainContain === void 0 ? defaultPhotoMainContainerStyle : _ref$photoMainContain,
    _ref$photoContainerSt = _ref.photoContainerStyle,
    photoContainerStyle = _ref$photoContainerSt === void 0 ? defaultPhotoContainerStyle : _ref$photoContainerSt,
    _ref$photoFormStyle = _ref.photoFormStyle,
    photoFormStyle = _ref$photoFormStyle === void 0 ? defaultPhotoFormStyle : _ref$photoFormStyle,
    _ref$loadingContainer = _ref.loadingContainerStyle,
    loadingContainerStyle = _ref$loadingContainer === void 0 ? defaultLoadingContainerStyle : _ref$loadingContainer,
    _ref$photoStyle = _ref.photoStyle,
    photoStyle = _ref$photoStyle === void 0 ? defaultPhotoStyle : _ref$photoStyle,
    _ref$nameContainerSty = _ref.nameContainerStyle,
    nameContainerStyle = _ref$nameContainerSty === void 0 ? defaultNameContainerStyle : _ref$nameContainerSty,
    modelFormProps = _ref.modelFormProps,
    photoButtonProps = _ref.photoButtonProps,
    loadingProps = _ref.loadingProps,
    nameInputProps = _ref.nameInputProps,
    lastNameInputProps = _ref.lastNameInputProps,
    emailInputProps = _ref.emailInputProps,
    phoneContainerProps = _ref.phoneContainerProps,
    areaCodeSelectProps = _ref.areaCodeSelectProps,
    phoneInputProps = _ref.phoneInputProps,
    roleContainerProps = _ref.roleContainerProps,
    roleSelectProps = _ref.roleSelectProps,
    siteSelectProps = _ref.siteSelectProps;
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
  var fileInputRef = _react["default"].useRef(null);
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
        return /*#__PURE__*/_react["default"].createElement(_Input.GsSelect, (0, _extends2["default"])({
          id: "userAreaCode",
          onChange: function onChange(e) {
            return use.actions.changeAreaCode(e);
          },
          options: use.states.areaCodeOptions,
          defaultValue: use.states.areaCodeDefault,
          styles: {
            width: '96%'
          }
        }, areaCodeSelectProps));
      });
      setInputRole(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.GsSelect, (0, _extends2["default"])({
          id: "userRole",
          onChange: function onChange(e) {
            return use.actions.changeRole(e);
          },
          options: use.states.roleOptions,
          defaultValue: use.states.roleDefault,
          styles: {
            width: '96%'
          }
        }, roleSelectProps));
      });
      setInputSite(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.GsSelect, (0, _extends2["default"])({
          id: "userSite",
          onChange: function onChange(e) {
            return use.actions.changeSite(e);
          },
          options: use.states.siteOptions,
          defaultValue: use.states.siteDefault,
          styles: {
            width: '96%'
          }
        }, siteSelectProps));
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
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
  };
  var handleButtonClick = function handleButtonClick() {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };
  _react["default"].useEffect(function () {
    if (use.states.photo) {
      var img = new Image();
      img.src = use.states.photo;
      img.onload = function () {
        use.actions.setSubmitting(false);
      };
      img.onerror = function () {
        use.actions.changeError(["Error al cargar la imagen: ".concat(use.states.photo)]);
        use.actions.setSubmitting(true);
      };
    }
  }, [use.states.photo]);
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
  }, /*#__PURE__*/_react["default"].createElement("form", {
    className: (0, _css.css)(photoFormStyle),
    onSubmit: handleSubmit,
    id: "photoCategory"
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("input", {
    type: "file",
    id: "file-input",
    ref: fileInputRef,
    hidden: true,
    onChange: use.actions.changePhoto
  }), /*#__PURE__*/_react["default"].createElement(_Button.Button, (0, _extends2["default"])({
    title: "Cambiar Foto",
    buttonProps: {
      onClick: handleButtonClick
    },
    styles: {
      fontSize: '6px',
      margin: '20px auto 40px auto',
      backgroundColor: '#439b57'
    }
  }, photoButtonProps))), use.states.submitting ? /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(loadingContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Components.Loading, (0, _extends2["default"])({
    mainStyles: {
      padding: '38px'
    },
    divStyle: {
      width: '35px',
      height: '35px',
      border: '4px solid #eee',
      borderTop: '4px solid #077bb4'
    }
  }, loadingProps))) : use.states.photo && /*#__PURE__*/_react["default"].createElement("img", {
    className: (0, _css.css)(photoStyle),
    src: use.states.photo,
    alt: "Foto de usuario"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(nameContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.Input, (0, _extends2["default"])({
    inputProps: {
      placeholder: 'Nombre',
      type: 'text',
      id: "userName",
      onKeyUp: function onKeyUp(event) {
        return use.actions.changeName(event.target.value);
      },
      defaultValue: use.states.name
    },
    styles: {
      width: '100%'
    }
  }, nameInputProps)), /*#__PURE__*/_react["default"].createElement(_Input.Input, (0, _extends2["default"])({
    inputProps: {
      placeholder: 'Apellido',
      type: 'text',
      id: "userLastName",
      onKeyUp: function onKeyUp(event) {
        return use.actions.changeLastName(event.target.value);
      },
      defaultValue: use.states.lastName
    },
    styles: {
      width: '100%'
    }
  }, lastNameInputProps)), /*#__PURE__*/_react["default"].createElement(_Input.Input, (0, _extends2["default"])({
    inputProps: {
      placeholder: 'Email',
      type: 'text',
      id: "userEmail",
      onKeyUp: function onKeyUp(event) {
        return use.actions.changeEmail(event.target.value);
      },
      defaultValue: use.states.email
    },
    styles: {
      width: '100%'
    }
  }, emailInputProps))))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%'
    }
  }, phoneContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputAreaCode, /*#__PURE__*/_react["default"].createElement(_Input.Input, (0, _extends2["default"])({
    inputProps: {
      placeholder: 'Teléfono',
      type: 'number',
      min: '0',
      step: '1',
      id: "userPhone",
      title: 'Solo números y sin comenzar en 0, ejemplo: 4241234000',
      onKeyUp: function onKeyUp(event) {
        return use.actions.changePhoneNumber(event.target.value);
      },
      defaultValue: use.states.phoneNumber
    },
    styles: {
      width: '96%'
    }
  }, phoneInputProps)))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%'
    }
  }, roleContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputRole, InputSite))));
};
exports.UserForm = UserForm;