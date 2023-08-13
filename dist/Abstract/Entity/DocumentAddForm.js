"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocumentAddForm = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Input = require("../Input");
var _Button = require("../Button");
var _Components = require("../../Components");
var _Form = require("../Form");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
var photoInfoContainerStyleDefault = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n"])));
var photoFormStyleDefault = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column-reverse;\n  width: 100%;\n"])));
var loadingContainerStyleDefault = (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  transition: all 1s ease 0s;\n  width: 100%;\n  max-width: 120px;\n  max-height: 120px;\n  object-fit: cover;\n  border: 1px solid #ebebeb;\n  margin: auto;\n  border-radius: 100%;\n"])));
var imageStyleDefault = (0, _css.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  transition: all 1s ease 0s;\n  width: 100%;\n  max-width: 120px;\n  max-height: 120px;\n  object-fit: cover;\n  border: 1px solid #ebebeb;\n  margin: auto;\n  border-radius: 100%;\n"])));
var photoMainContainerStyleDefault = (0, _css.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n"])));
var nameLastNameContainerStyleDefault = (0, _css.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n"])));
var DocumentAddForm = function DocumentAddForm(_ref) {
  var use = _ref.use,
    _ref$photoMainContain = _ref.photoMainContainerStyle,
    photoMainContainerStyle = _ref$photoMainContain === void 0 ? photoMainContainerStyleDefault : _ref$photoMainContain,
    _ref$photoInfoContain = _ref.photoInfoContainerStyle,
    photoInfoContainerStyle = _ref$photoInfoContain === void 0 ? photoInfoContainerStyleDefault : _ref$photoInfoContain,
    _ref$photoFormStyle = _ref.photoFormStyle,
    photoFormStyle = _ref$photoFormStyle === void 0 ? photoFormStyleDefault : _ref$photoFormStyle,
    _ref$loadingContainer = _ref.loadingContainerStyle,
    loadingContainerStyle = _ref$loadingContainer === void 0 ? loadingContainerStyleDefault : _ref$loadingContainer,
    _ref$imageStyle = _ref.imageStyle,
    imageStyle = _ref$imageStyle === void 0 ? imageStyleDefault : _ref$imageStyle,
    _ref$nameLastNameCont = _ref.nameLastNameContainerStyle,
    nameLastNameContainerStyle = _ref$nameLastNameCont === void 0 ? nameLastNameContainerStyleDefault : _ref$nameLastNameCont,
    inputTypeDocumentIdIdProps = _ref.inputTypeDocumentIdIdProps,
    inputIndexProps = _ref.inputIndexProps,
    _ref$mainTitle = _ref.mainTitle,
    mainTitle = _ref$mainTitle === void 0 ? 'Nuevo documento' : _ref$mainTitle,
    _ref$subTitle = _ref.subTitle,
    subTitle = _ref$subTitle === void 0 ? 'Agrega un nuevo documento de identificación' : _ref$subTitle,
    modelFormProps = _ref.modelFormProps,
    photoButtonProps = _ref.photoButtonProps,
    loadingProps = _ref.loadingProps,
    inputDigitProps = _ref.inputDigitProps;
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
      return /*#__PURE__*/_react["default"].createElement(_Input.GsSelect, (0, _extends2["default"])({
        id: "entityTypeDocumentIdId",
        onChange: function onChange(e) {
          return use.actions.changeTypeDocumentIdId(e);
        },
        options: use.states.typeDocumentIdIdOptions,
        defaultValue: use.states.typeDocumentIdIdDefault,
        styles: {
          width: '92%'
        }
      }, inputTypeDocumentIdIdProps));
    });
    setInputIndex(function () {
      return /*#__PURE__*/_react["default"].createElement(_Input.GsSelect, (0, _extends2["default"])({
        id: "entityDocumentIndex",
        onChange: function onChange(e) {
          return use.actions.changeIndex(e);
        },
        options: use.states.indexOptions,
        defaultValue: use.states.indexDefault,
        styles: {
          width: '92%'
        }
      }, inputIndexProps));
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
  }, /*#__PURE__*/_react["default"].createElement("form", {
    className: (0, _css.css)(photoFormStyle),
    onSubmit: handleSubmit,
    id: "entityDocumentPhoto"
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("input", {
    type: "file",
    id: "file-input",
    ref: fileInputRef,
    hidden: true,
    onChange: use.actions.changeDocumentPhoto
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
  }, photoButtonProps))), use.states.documentSubmitting ? /*#__PURE__*/_react["default"].createElement("div", {
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
  }, loadingProps))) : use.states.documentPhoto && /*#__PURE__*/_react["default"].createElement("img", {
    className: (0, _css.css)(imageStyle),
    src: use.states.documentPhoto,
    alt: "Document Id"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(nameLastNameContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputTypeDocumentIdId, InputIndex, /*#__PURE__*/_react["default"].createElement(_Input.Input, (0, _extends2["default"])({
    inputProps: {
      placeholder: 'Número de identificación',
      type: 'number',
      min: '0',
      step: '1',
      id: 'entityDocumentDigit',
      title: 'Solo números, ejemplo: 181234678',
      onKeyUp: function onKeyUp(event) {
        return use.actions.changeDigit(event.target.value);
      },
      defaultValue: use.states.digit
    },
    styles: {
      width: '92%',
      padding: '09px 19px'
    }
  }, inputDigitProps)))))));
};
exports.DocumentAddForm = DocumentAddForm;