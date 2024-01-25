"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EntityAddForm = void 0;
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
var EntityAddForm = function EntityAddForm(_ref) {
  var use = _ref.use,
    formType = _ref.formType,
    _ref$photoMainContain = _ref.photoMainContainerStyle,
    photoMainContainerStyle = _ref$photoMainContain === void 0 ? defaultPhotoMainContainerStyle : _ref$photoMainContain,
    _ref$photoContainerSt = _ref.photoContainerStyle,
    photoContainerStyle = _ref$photoContainerSt === void 0 ? defaultPhotoContainerStyle : _ref$photoContainerSt,
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
    phoneProps = _ref.phoneProps,
    propsPhoto = _ref.propsPhoto;
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
  var returnInit = function returnInit() {
    setInputState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null));
    setInputCountry( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null));
    use.actions.returnInit();
  };
  var handleActions = function handleActions(action, value) {
    switch (action) {
      case 'submit':
        use.actions.add();
        break;
      case 'return':
        returnInit();
        break;
      default:
        console.log('Acción desconocida:', action);
    }
  };
  _react["default"].useEffect(function () {
    setInputTypeDocumentIdId(function () {
      return /*#__PURE__*/_react["default"].createElement(_Input.SelectTypeDocumentIdId, {
        changeTypeDocumentIdId: function changeTypeDocumentIdId(e) {
          return use.actions.changeTypeDocumentIdId(e);
        },
        props: _objectSpread({
          options: use.states.typeDocumentIdIdOptions,
          defaultValue: use.states.typeDocumentIdIdDefault,
          styles: {
            width: '100%'
          }
        }, typeDocumentIdIdProps)
      });
    });
    setInputIndex(function () {
      return /*#__PURE__*/_react["default"].createElement(_Input.SelectDocumentIdIndex, {
        changeIndex: function changeIndex(e) {
          return use.actions.changeIndex(e);
        },
        props: _objectSpread({
          options: use.states.indexOptions,
          defaultValue: use.states.indexDefault,
          styles: {
            width: '92%'
          }
        }, indexProps)
      });
    });
    setInputCountry(function () {
      return /*#__PURE__*/_react["default"].createElement(_Input.SelectCountry, {
        changeCountry: function changeCountry(e) {
          return use.actions.changeCountry(e);
        },
        props: _objectSpread({
          options: use.states.countryOptions,
          defaultValue: use.states.countryDefault,
          styles: {
            width: '92%'
          }
        }, countryProps)
      });
    });
  }, []);
  _react["default"].useEffect(function () {
    if (use.states.stateCountryOptions.length > 0) {
      setInputState(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectStateCountry, {
          changeStateCountry: function changeStateCountry(e) {
            return use.actions.changeStateCountry(e);
          },
          props: _objectSpread({
            options: use.states.stateCountryOptions,
            defaultValue: use.states.stateCountryDefault,
            styles: {
              width: '90%'
            }
          }, stateSelectProps)
        });
      });
    } else {
      setInputState(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.InputStateCountry, {
          changeStateCountry: function changeStateCountry(e) {
            return use.actions.changeStateCountry(e);
          },
          props: _objectSpread({
            inputProps: {
              defaultValue: use.states.state
            },
            styles: {
              padding: '10px 19px',
              width: '90%'
            }
          }, stateInputProps)
        });
      });
    }
    if (use.states.cityOptions.length > 0) {
      setInputCity(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectCity, {
          changeCity: function changeCity(e) {
            return use.actions.changeCity(e);
          },
          props: _objectSpread({
            options: use.states.cityOptions,
            defaultValue: use.states.cityDefault,
            styles: {
              width: '90%'
            }
          }, citySelectProps)
        });
      });
    } else {
      setInputCity(function () {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputCity, {
          changeCity: use.actions.changeCity,
          props: _objectSpread({
            inputProps: {
              defaultValue: use.states.city
            },
            styles: {
              padding: '10px 19px',
              width: '90%'
            }
          }, cityInputProps)
        }));
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
  }, /*#__PURE__*/_react["default"].createElement(_Form.PhotoEntity, {
    photo: use.states.photo,
    changePhoto: use.actions.changePhoto,
    submitting: use.states.submitting,
    changeError: use.actions.changeError,
    setSubmitting: use.actions.setSubmitting,
    props: propsPhoto
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(nameContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputName, {
    changeName: use.actions.changeName,
    props: _objectSpread({
      inputProps: {
        defaultValue: use.states.name
      },
      styles: {
        width: '100%'
      }
    }, nameProps)
  }), isPersonalForm && /*#__PURE__*/_react["default"].createElement(_Input.InputLastName, {
    changeLastName: use.actions.changeLastName,
    props: _objectSpread({
      inputProps: {
        defaultValue: use.states.lastName
      },
      styles: {
        width: '100%'
      }
    }, lastNameProps)
  }), InputTypeDocumentIdId))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%',
      justifyContent: 'start'
    }
  }, containerDocumentProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputIndex, /*#__PURE__*/_react["default"].createElement(_Input.InputDocumentiIdDigit, {
    changeDocumentiIdDigit: use.actions.changeDigit,
    props: _objectSpread({
      inputProps: {
        defaultValue: use.states.digit
      },
      styles: {
        width: '92%',
        padding: '09px 19px'
      }
    }, digitProps)
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%',
      justifyContent: 'start'
    }
  }, containerAddressProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputAddress1, {
    changeAddress1: use.actions.changeAddress1,
    props: _objectSpread({
      inputProps: {
        defaultValue: use.states.address1
      },
      styles: {
        width: '92%',
        padding: '09px 19px'
      }
    }, address1Props)
  }), /*#__PURE__*/_react["default"].createElement(_Input.InputAddress2, {
    changeAddress2: use.actions.changeAddress2,
    props: _objectSpread({
      inputProps: {
        defaultValue: use.states.address2
      },
      styles: {
        width: '92%',
        padding: '09px 19px'
      }
    }, address2Props)
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%',
      justifyContent: 'start'
    }
  }, containerCityStateProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputCity, InputState)), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%',
      justifyContent: 'start'
    }
  }, containerCountryProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputCountry, /*#__PURE__*/_react["default"].createElement(_Input.InputZipCode, {
    changeZipCode: use.actions.changePostCode,
    props: _objectSpread({
      inputProps: {
        defaultValue: use.states.postCode
      },
      styles: {
        width: '92%',
        padding: '09px 19px'
      }
    }, codePostProps)
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%',
      justifyContent: 'start'
    }
  }, containerEmailPhoneProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputEmail, {
    changeEmail: use.actions.changeEmail,
    props: _objectSpread({
      inputProps: {
        defaultValue: use.states.email
      },
      styles: {
        width: '92%',
        padding: '09px 19px'
      }
    }, emailProps)
  }), /*#__PURE__*/_react["default"].createElement(_Input.InputPhone, {
    changePhone: use.actions.changePhone,
    props: _objectSpread({
      inputProps: {
        defaultValue: use.states.phone
      },
      styles: {
        width: '92%',
        padding: '09px 19px'
      }
    }, phoneProps)
  })))));
};
exports.EntityAddForm = EntityAddForm;