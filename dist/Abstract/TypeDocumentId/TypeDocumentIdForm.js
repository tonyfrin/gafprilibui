"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypeDocumentIdForm = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _Input = require("../Input");
var _Containers = require("../Containers");
var _Form = require("../Form");
var TypeDocumentIdForm = function TypeDocumentIdForm(_ref) {
  var use = _ref.use,
    formType = _ref.formType,
    modelFormProps = _ref.modelFormProps,
    infoContainerProps = _ref.infoContainerProps,
    nameInputProps = _ref.nameInputProps;
  var isAddForm = formType === 'add';
  var isUpdateForm = formType === 'update';
  var currentTypeDocumentId = isUpdateForm ? use.actions.getById(use.states.currentId) : null;
  _react["default"].useEffect(function () {
    use.actions.validationName(use.states.name);
    use.actions.validationCountry(use.states.country);
    use.actions.validationButtonNext();
  }, [use.states.name, use.states.country]);
  _react["default"].useEffect(function () {
    use.actions.validationButtonNext();
  }, [use.states.nameValid, use.states.countryValid]);
  _react["default"].useEffect(function () {
    if (currentTypeDocumentId) {
      use.actions.changeName(currentTypeDocumentId.name);
      use.actions.changeCountry(currentTypeDocumentId.country);
    }
  }, []);
  var title1Text = isAddForm ? 'Nuevo Tipo de Documento' : 'Actualizar Tipo de Documento';
  var title2Text = isAddForm ? 'Agrega un nuevo tipo de Documento de identificación' : "Actualiza la informaci\xF3n del tipo de documento de identificaci\xF3n #".concat(currentTypeDocumentId === null || currentTypeDocumentId === void 0 ? void 0 : currentTypeDocumentId.id);
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
  }, infoContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.Input, (0, _extends2["default"])({
    inputProps: {
      placeholder: 'Nombre',
      type: 'text',
      id: "nameTypeDocumentId",
      onKeyUp: function onKeyUp(event) {
        return use.actions.changeName(event.target.value);
      },
      defaultValue: use.states.name
    },
    styles: {
      width: '100%'
    }
  }, nameInputProps))))));
};
exports.TypeDocumentIdForm = TypeDocumentIdForm;