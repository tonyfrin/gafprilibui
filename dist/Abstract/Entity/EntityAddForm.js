"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EntityAddForm = void 0;
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
var defaultphotoStyle = (0, _css.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  transition: all 1s ease 0s;\n  width: 100%;\n  max-width: 120px;\n  max-height: 120px;\n  object-fit: cover;\n  border: 1px solid #ebebeb;\n  margin: auto;\n  border-radius: 100%;\n"])));
var defaultPhotoMainContainerStyle = (0, _css.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n"])));
var defaultNameContainerStyle = (0, _css.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n"])));
var EntityAddForm = function EntityAddForm(_ref) {
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
    photoStyle = _ref$photoStyle === void 0 ? defaultphotoStyle : _ref$photoStyle,
    _ref$nameContainerSty = _ref.nameContainerStyle,
    nameContainerStyle = _ref$nameContainerSty === void 0 ? defaultNameContainerStyle : _ref$nameContainerSty,
    modelFormProps = _ref.modelFormProps,
    nameProps = _ref.nameProps,
    lastNameProps = _ref.lastNameProps,
    typeDocumentIdIdProps = _ref.typeDocumentIdIdProps,
    containerDocumentProps = _ref.containerDocumentProps,
    indexProps = _ref.indexProps,
    digitProps = _ref.digitProps,
    containerAddressProps = _ref.containerAddressProps,
    address1Props = _ref.address1Props,
    address2Props = _ref.address2Props,
    containerCityStateProps = _ref.containerCityStateProps,
    cityInputProps = _ref.cityInputProps,
    stateInputProps = _ref.stateInputProps,
    citySelectProps = _ref.citySelectProps,
    stateSelectProps = _ref.stateSelectProps,
    containerCountryProps = _ref.containerCountryProps,
    countryProps = _ref.countryProps,
    codePostProps = _ref.codePostProps,
    containerEmailPhoneProps = _ref.containerEmailPhoneProps,
    emailProps = _ref.emailProps,
    phoneProps = _ref.phoneProps;
  var _React$useState = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    InputTypeDocumentIdId = _React$useState2[0],
    setInputTypeDocumentIdId = _React$useState2[1];
  var _React$useState3 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    InputIndex = _React$useState4[0],
    setInputIndex = _React$useState4[1];
  var _React$useState5 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    InputCity = _React$useState6[0],
    setInputCity = _React$useState6[1];
  var _React$useState7 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
    InputState = _React$useState8[0],
    setInputState = _React$useState8[1];
  var _React$useState9 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState10 = (0, _slicedToArray2["default"])(_React$useState9, 2),
    InputCountry = _React$useState10[0],
    setInputCountry = _React$useState10[1];
  var isPersonalForm = formType === 'personal';
  var fileInputRef = _react["default"].useRef(null);
  _react["default"].useEffect(function () {
    use.actions.validationPhoto(use.states.photo);
    use.actions.validationName(use.states.name);
    use.actions.validationLastName(use.states.lastName);
    var typeDocumentIdId = use.states.typeDocumentIdId === null ? '' : "".concat(use.states.typeDocumentIdId);
    use.actions.validationTypeDocumentIdId(typeDocumentIdId);
    use.actions.validationIndex(use.states.index);
    use.actions.validationDigit(use.states.digit);
    use.actions.validationAddressType(use.states.addressType);
    use.actions.validationAddress1(use.states.address1);
    use.actions.validationAddress2(use.states.address2);
    use.actions.validationCity(use.states.city);
    use.actions.validationStateCountry(use.states.state);
    use.actions.validationCountry(use.states.country);
    use.actions.validationPostCode(use.states.postCode);
    use.actions.validationEmail(use.states.email);
    use.actions.validationPhone(use.states.phone);
    use.actions.validationStatus(use.states.status);
    use.actions.validationType(use.states.type);
  }, [use.states.photo, use.states.name, use.states.lastName, use.states.typeDocumentIdId, InputTypeDocumentIdId, use.states.index, InputIndex, use.states.digit, use.states.address1, use.states.address2, use.states.city, InputCity, use.states.state, InputState, use.states.country, InputCountry, use.states.postCode, use.states.email, use.states.phone, use.states.status, use.states.type, use.states.addressType]);
  _react["default"].useEffect(function () {
    use.actions.validationButtonNext();
  }, [use.states.photoValid, use.states.nameValid, use.states.lastNameValid, use.states.typeDocumentIdIdValid, use.states.indexValid, use.states.digitValid, use.states.address1Valid, use.states.address2Valid, use.states.cityValid, use.states.stateCountryValid, use.states.countryValid, use.states.postCodeValid, use.states.emailValid, use.states.phoneValid, use.states.statusValid, use.states.addressTypeValid]);
  _react["default"].useEffect(function () {
    use.actions.changeStatus({
      value: 'active',
      label: 'Activo'
    });
    use.actions.changeAddressType({
      value: 'bill',
      label: 'Facturación'
    });
  }, []);
  var title1Text = isPersonalForm ? 'Nueva personal natural' : 'Nueva persona jurídica';
  var title2Text = isPersonalForm ? 'Agrega una nueva persona natural' : "Agrega una nueva persona jur\xEDdica";
  var buttonTitle = 'Agregar';
  var handleActions = function handleActions(action, value) {
    switch (action) {
      case 'submit':
        use.actions.add();
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
          width: '100%'
        }
      }, typeDocumentIdIdProps));
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
      }, indexProps));
    });
    setInputCountry(function () {
      return /*#__PURE__*/_react["default"].createElement(_Input.GsSelect, (0, _extends2["default"])({
        id: "entityCountry",
        onChange: function onChange(event) {
          return use.actions.changeCountry(event);
        },
        options: use.states.countryOptions,
        defaultValue: use.states.countryDefault,
        styles: {
          width: '92%'
        }
      }, countryProps));
    });
  }, []);
  _react["default"].useEffect(function () {
    if (use.states.stateCountryOptions.length > 0) {
      setInputState(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.GsSelect, (0, _extends2["default"])({
          id: "entityStateCountry",
          onChange: function onChange(event) {
            return use.actions.changeStateCountry(event);
          },
          options: use.states.stateCountryOptions,
          defaultValue: use.states.stateCountryDefault,
          styles: {
            width: '90%'
          }
        }, stateSelectProps));
      });
    } else {
      setInputState(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.Input, (0, _extends2["default"])({
          inputProps: {
            placeholder: 'Estado',
            type: 'text',
            id: 'entityStateCountry',
            onKeyUp: function onKeyUp(event) {
              return use.actions.changeStateCountry({
                label: event.target.value,
                value: event.target.value
              });
            },
            defaultValue: use.states.state
          },
          styles: {
            padding: '10px 19px',
            width: '90%'
          }
        }, stateInputProps));
      });
    }
    if (use.states.cityOptions.length > 0) {
      setInputCity(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.GsSelect, (0, _extends2["default"])({
          id: "entityCity",
          onChange: function onChange(event) {
            return use.actions.changeCity(event);
          },
          options: use.states.cityOptions,
          defaultValue: use.states.cityDefault,
          styles: {
            width: '90%'
          }
        }, citySelectProps));
      });
    } else {
      setInputCity(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.Input, (0, _extends2["default"])({
          inputProps: {
            placeholder: 'Ciudad',
            type: 'text',
            id: 'entityCity',
            onKeyUp: function onKeyUp(event) {
              return use.actions.changeCity({
                label: event.target.value,
                value: event.target.value
              });
            },
            defaultValue: use.states.city
          },
          styles: {
            padding: '10px 19px',
            width: '90%'
          }
        }, cityInputProps));
      });
    }
  }, [use.states.country, use.states.stateCountryOptions, use.states.cityOptions]);
  _react["default"].useEffect(function () {
    use.actions.changeCityOptions();
  }, [use.actions.changeCityOptions]);
  _react["default"].useEffect(function () {
    use.actions.changeStateCountryOptions();
  }, [use.actions.changeStateCountryOptions]);
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
    id: "entityPhoto"
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("input", {
    type: "file",
    id: "file-input",
    ref: fileInputRef,
    hidden: true,
    onChange: use.actions.changePhoto
  }), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    title: "Cambiar Foto",
    buttonProps: {
      onClick: handleButtonClick
    },
    styles: {
      fontSize: '6px',
      margin: '20px auto 40px auto',
      backgroundColor: '#439b57'
    }
  })), use.states.submitting ? /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(loadingContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Components.Loading, {
    mainStyles: {
      padding: '38px'
    },
    divStyle: {
      width: '35px',
      height: '35px',
      border: '4px solid #eee',
      borderTop: '4px solid #077bb4'
    }
  })) : use.states.photo && /*#__PURE__*/_react["default"].createElement("img", {
    className: (0, _css.css)(photoStyle),
    src: use.states.photo,
    alt: "Foto de Entidad"
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
  }, nameProps)), isPersonalForm && /*#__PURE__*/_react["default"].createElement(_Input.Input, (0, _extends2["default"])({
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
  }, lastNameProps)), InputTypeDocumentIdId))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%',
      justifyContent: 'start'
    }
  }, containerDocumentProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputIndex, /*#__PURE__*/_react["default"].createElement(_Input.Input, (0, _extends2["default"])({
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
  }, digitProps)))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%',
      justifyContent: 'start'
    }
  }, containerAddressProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.Input, (0, _extends2["default"])({
    inputProps: {
      placeholder: 'Dirección 1',
      type: 'text',
      id: 'address1',
      onKeyUp: function onKeyUp(event) {
        return use.actions.changeAddress1(event.target.value);
      },
      defaultValue: use.states.address1
    },
    styles: {
      width: '92%',
      padding: '09px 19px'
    }
  }, address1Props)), /*#__PURE__*/_react["default"].createElement(_Input.Input, (0, _extends2["default"])({
    inputProps: {
      placeholder: 'Dirección 2',
      type: 'text',
      id: 'address2',
      onKeyUp: function onKeyUp(event) {
        return use.actions.changeAddress2(event.target.value);
      },
      defaultValue: use.states.address2
    },
    styles: {
      width: '92%',
      padding: '09px 19px'
    }
  }, address2Props)))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%',
      justifyContent: 'start'
    }
  }, containerCityStateProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputCity, InputState)), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%',
      justifyContent: 'start'
    }
  }, containerCountryProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputCountry, /*#__PURE__*/_react["default"].createElement(_Input.Input, (0, _extends2["default"])({
    inputProps: {
      placeholder: 'Código Postal',
      type: 'text',
      id: 'entityCodePost',
      onKeyUp: function onKeyUp(event) {
        return use.actions.changePostCode(event.target.value);
      },
      defaultValue: use.states.postCode
    },
    styles: {
      width: '92%',
      padding: '09px 19px'
    }
  }, codePostProps)))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%',
      justifyContent: 'start'
    }
  }, containerEmailPhoneProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.Input, (0, _extends2["default"])({
    inputProps: {
      placeholder: 'Email',
      type: 'email',
      id: 'entityEmail',
      onKeyUp: function onKeyUp(event) {
        return use.actions.changeEmail(event.target.value);
      },
      defaultValue: use.states.email
    },
    styles: {
      width: '92%',
      padding: '09px 19px'
    }
  }, emailProps)), /*#__PURE__*/_react["default"].createElement(_Input.Input, (0, _extends2["default"])({
    inputProps: {
      placeholder: 'Teléfono',
      type: 'number',
      min: '0',
      step: '1',
      title: 'Solo números y sin comenzar en 0, ejemplo: 4241234000',
      id: 'entityPhone',
      onKeyUp: function onKeyUp(event) {
        return use.actions.changePhone(event.target.value);
      },
      defaultValue: use.states.phone
    },
    styles: {
      width: '92%',
      padding: '09px 19px'
    }
  }, phoneProps))))));
};
exports.EntityAddForm = EntityAddForm;