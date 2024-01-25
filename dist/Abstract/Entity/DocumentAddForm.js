"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocumentAddForm = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Input = require("../Input");
var _Form = require("../Form");
var _templateObject, _templateObject2, _templateObject3;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var photoInfoContainerStyleDefault = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n"])));
var photoMainContainerStyleDefault = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n"])));
var nameLastNameContainerStyleDefault = (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n"])));
var DocumentAddForm = function DocumentAddForm(_ref) {
  var use = _ref.use,
    _ref$photoMainContain = _ref.photoMainContainerStyle,
    photoMainContainerStyle = _ref$photoMainContain === void 0 ? photoMainContainerStyleDefault : _ref$photoMainContain,
    _ref$photoInfoContain = _ref.photoInfoContainerStyle,
    photoInfoContainerStyle = _ref$photoInfoContain === void 0 ? photoInfoContainerStyleDefault : _ref$photoInfoContain,
    _ref$nameLastNameCont = _ref.nameLastNameContainerStyle,
    nameLastNameContainerStyle = _ref$nameLastNameCont === void 0 ? nameLastNameContainerStyleDefault : _ref$nameLastNameCont,
    inputTypeDocumentIdIdProps = _ref.inputTypeDocumentIdIdProps,
    inputIndexProps = _ref.inputIndexProps,
    _ref$mainTitle = _ref.mainTitle,
    mainTitle = _ref$mainTitle === void 0 ? 'Nuevo documento' : _ref$mainTitle,
    _ref$subTitle = _ref.subTitle,
    subTitle = _ref$subTitle === void 0 ? 'Agrega un nuevo documento de identificación' : _ref$subTitle,
    modelFormProps = _ref.modelFormProps,
    inputDigitProps = _ref.inputDigitProps,
    propsPhoto = _ref.propsPhoto;
  var _React$useState = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    InputTypeDocumentIdId = _React$useState2[0],
    setInputTypeDocumentIdId = _React$useState2[1];
  var _React$useState3 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    InputIndex = _React$useState4[0],
    setInputIndex = _React$useState4[1];
  var fileInputRef = _react["default"].useRef(null);
  _react["default"].useEffect(function () {
    use.actions.validationDocumentPhoto(use.states.documentPhoto);
    var typeDocumentIdId = use.states.typeDocumentIdId === null ? '' : "".concat(use.states.typeDocumentIdId);
    use.actions.validationTypeDocumentIdId(typeDocumentIdId);
    use.actions.validationIndex(use.states.index);
    use.actions.validationDigit(use.states.digit);
  }, [use.states.documentPhoto, use.states.typeDocumentIdId, InputTypeDocumentIdId, use.states.index, InputIndex, use.states.digit]);
  _react["default"].useEffect(function () {
    use.actions.validationButtonNextDocument();
  }, [use.states.documentPhotoValid, use.states.typeDocumentIdIdValid, use.states.indexValid, use.states.digitValid]);
  var buttonTitle = 'Agregar';
  var handleActions = function handleActions(action, value) {
    switch (action) {
      case 'submit':
        use.actions.addDocument();
        break;
      case 'return':
        use.actions.goUpdate(use.states.entityId);
        break;
      default:
        console.log('Acción desconocida:', action);
    }
  };
  _react["default"].useEffect(function () {
    if (use.states.documentPhoto) {
      var img = new Image();
      img.src = use.states.documentPhoto;
      img.onload = function () {
        use.actions.setDocumentSubmitting(false);
      };
      img.onerror = function () {
        use.actions.changeError(["Error al cargar la imagen: ".concat(use.states.photo)]);
        use.actions.setDocumentSubmitting(true);
      };
    }
  }, [use.states.documentPhoto]);
  _react["default"].useEffect(function () {
    setInputTypeDocumentIdId(function () {
      return /*#__PURE__*/_react["default"].createElement(_Input.SelectTypeDocumentIdId, {
        changeTypeDocumentIdId: use.actions.changeTypeDocumentIdId,
        props: _objectSpread({
          options: use.states.typeDocumentIdIdOptions,
          defaultValue: use.states.typeDocumentIdIdDefault,
          styles: {
            width: '92%'
          }
        }, inputTypeDocumentIdIdProps)
      });
    });
    setInputIndex(function () {
      return /*#__PURE__*/_react["default"].createElement(_Input.SelectDocumentIdIndex, {
        changeIndex: use.actions.changeIndex,
        props: _objectSpread({
          options: use.states.indexOptions,
          defaultValue: use.states.indexDefault,
          styles: {
            width: '92%'
          }
        }, inputIndexProps)
      });
    });
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_Form.ModelForm, (0, _extends2["default"])({
    titles: {
      title1: mainTitle,
      title2: subTitle
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
    className: (0, _css.css)(photoInfoContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Form.PhotoDocumentId, {
    photo: use.states.documentPhoto,
    changePhoto: use.actions.changeDocumentPhoto,
    submitting: use.states.submitting,
    changeError: use.actions.changeError,
    setSubmitting: use.actions.setSubmitting,
    props: propsPhoto
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(nameLastNameContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputTypeDocumentIdId, InputIndex, /*#__PURE__*/_react["default"].createElement(_Input.InputDocumentiIdDigit, {
    changeDocumentiIdDigit: function changeDocumentiIdDigit(event) {
      return use.actions.changeDigit(event);
    },
    props: _objectSpread({
      inputProps: {
        defaultValue: use.states.digit
      },
      styles: {
        width: '92%',
        padding: '09px 19px'
      }
    }, inputDigitProps)
  }))))));
};
exports.DocumentAddForm = DocumentAddForm;