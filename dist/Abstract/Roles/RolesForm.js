"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RolesForm = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Input = require("../Input");
var _Button = require("../Button");
var _Containers = require("../Containers");
var _Constans = require("../../Constans");
var _Form = require("../Form");
var _RolePermissions = require("./RolePermissions");
var _templateObject, _templateObject2;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var defaultPermissionsContainerStyle = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  margin: 30px;\n"])));
var defaultOptionButtonContainerStyle = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-around;\n  padding-bottom: 20px;\n"])));
var RolesForm = function RolesForm(_ref) {
  var use = _ref.use,
    formType = _ref.formType,
    _ref$permissionsConta = _ref.permissionsContainerStyle,
    permissionsContainerStyle = _ref$permissionsConta === void 0 ? defaultPermissionsContainerStyle : _ref$permissionsConta,
    _ref$optionButtonCont = _ref.optionButtonContainerStyle,
    optionButtonContainerStyle = _ref$optionButtonCont === void 0 ? defaultOptionButtonContainerStyle : _ref$optionButtonCont,
    modelFormProps = _ref.modelFormProps,
    nameContainerProps = _ref.nameContainerProps,
    nameInputProps = _ref.nameInputProps,
    _ref$selectAllButtonP = _ref.selectAllButtonProps,
    selectAllButtonProps = _ref$selectAllButtonP === void 0 ? {
      title: 'Todos',
      styles: {
        backgroundColor: 'rgb(67, 155, 87)',
        fontSize: '10px'
      },
      buttonProps: {
        onClick: use.actions.selectAllPermissions
      }
    } : _ref$selectAllButtonP,
    _ref$deselectAllButto = _ref.deselectAllButtonProps,
    deselectAllButtonProps = _ref$deselectAllButto === void 0 ? {
      title: 'Ninguno',
      styles: {
        backgroundColor: '#c12429',
        fontSize: '10px'
      },
      buttonProps: {
        onClick: use.actions.deselectAllPermissions
      }
    } : _ref$deselectAllButto,
    permissionsProps = _ref.permissionsProps;
  var isAddForm = formType === 'add';
  var isUpdateForm = formType === 'update';
  var currentRoles = isUpdateForm ? use.actions.getById(use.states.currentId) : null;
  _react["default"].useEffect(function () {
    use.actions.validationName(use.states.name);
    use.actions.validationButtonNext();
  }, [use.states.name]);
  _react["default"].useEffect(function () {
    use.actions.validationButtonNext();
  }, [use.states.nameValid]);
  _react["default"].useEffect(function () {
    if (currentRoles) {
      use.actions.changeName(currentRoles.name);
      use.actions.setPermissions(currentRoles.permissions);
    }
  }, []);
  var title1Text = isAddForm ? 'Nuevo Rol' : 'Actualizar Rol';
  var title2Text = isAddForm ? 'Agrega un nuevo Rol' : "Actualiza la informaci\xF3n del rol #".concat(currentRoles === null || currentRoles === void 0 ? void 0 : currentRoles.id);
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
  }, modelFormProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%'
    }
  }, nameContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputName, {
    changeName: use.actions.changeName,
    props: _objectSpread({
      inputProps: {
        defaultValue: use.states.name
      },
      styles: {
        width: '100%'
      }
    }, nameInputProps)
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(permissionsContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(optionButtonContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, selectAllButtonProps), /*#__PURE__*/_react["default"].createElement(_Button.Button, deselectAllButtonProps)), _Constans.AllRoles.map(function (role) {
    return /*#__PURE__*/_react["default"].createElement(_RolePermissions.RolePermissions, (0, _extends2["default"])({
      selectedPermissions: use.states.permissions,
      key: role.name,
      role: role,
      onPermissionChange: use.actions.changePermissions
    }, permissionsProps));
  }))));
};
exports.RolesForm = RolesForm;