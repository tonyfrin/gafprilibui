"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddressAddForm = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _Input = require("../Input");
var _Containers = require("../Containers");
var _Form = require("../Form");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var AddressAddForm = function AddressAddForm(_ref) {
  var use = _ref.use,
    inputCityProps = _ref.inputCityProps,
    selectCityProps = _ref.selectCityProps,
    inputStateProps = _ref.inputStateProps,
    selectStateProps = _ref.selectStateProps,
    selectCountryProps = _ref.selectCountryProps,
    selectTypeProps = _ref.selectTypeProps,
    _ref$mainTitle = _ref.mainTitle,
    mainTitle = _ref$mainTitle === void 0 ? 'Nueva dirección' : _ref$mainTitle,
    _ref$subTitle = _ref.subTitle,
    subTitle = _ref$subTitle === void 0 ? 'Agregar nueva dirección' : _ref$subTitle,
    modelFormProps = _ref.modelFormProps,
    containerAddressProps = _ref.containerAddressProps,
    inputAddress1Props = _ref.inputAddress1Props,
    inputAddress2Props = _ref.inputAddress2Props,
    containerCountryProps = _ref.containerCountryProps,
    containerPostCodeProps = _ref.containerPostCodeProps,
    inputPostCodeProps = _ref.inputPostCodeProps;
  var _React$useState = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    InputCity = _React$useState2[0],
    setInputCity = _React$useState2[1];
  var _React$useState3 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    InputState = _React$useState4[0],
    setInputState = _React$useState4[1];
  var _React$useState5 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    InputCountry = _React$useState6[0],
    setInputCountry = _React$useState6[1];
  var _React$useState7 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
    InputType = _React$useState8[0],
    setInputType = _React$useState8[1];
  _react["default"].useEffect(function () {
    use.actions.validationAddressType(use.states.addressType);
    use.actions.validationAddress1(use.states.address1);
    use.actions.validationAddress2(use.states.address2);
    use.actions.validationCity(use.states.city);
    use.actions.validationStateCountry(use.states.state);
    use.actions.validationCountry(use.states.country);
    use.actions.validationPostCode(use.states.postCode);
  }, [use.states.address1, use.states.address2, use.states.city, InputCity, use.states.state, InputState, use.states.country, InputCountry, use.states.postCode, use.states.addressType]);
  _react["default"].useEffect(function () {
    use.actions.validationButtonNextAddress();
  }, [use.states.address1Valid, use.states.address2Valid, use.states.cityValid, use.states.stateCountryValid, use.states.countryValid, use.states.postCodeValid, use.states.addressTypeValid]);
  var buttonTitle = 'Agregar';
  var handleActions = function handleActions(action, value) {
    switch (action) {
      case 'submit':
        use.actions.addAddress();
        break;
      case 'return':
        use.actions.goUpdate(use.states.entityId);
        break;
      default:
        console.log('Acción desconocida:', action);
    }
  };
  _react["default"].useEffect(function () {
    setInputCountry(function () {
      return /*#__PURE__*/_react["default"].createElement(_Input.SelectCountry, {
        changeCountry: function changeCountry(event) {
          return use.actions.changeCountry(event);
        },
        props: _objectSpread({
          options: use.states.countryOptions,
          defaultValue: use.states.countryDefault,
          styles: {
            width: '89%'
          }
        }, selectCountryProps)
      });
    });
    setInputType(function () {
      return /*#__PURE__*/_react["default"].createElement(_Input.SelectAddressType, {
        changeAddressType: function changeAddressType(event) {
          return use.actions.changeAddressType(event);
        },
        props: _objectSpread({
          options: use.states.addressTypeOptions,
          defaultValue: use.states.addressTypeDefault,
          styles: {
            width: '92%'
          }
        }, selectTypeProps)
      });
    });
  }, []);
  _react["default"].useEffect(function () {
    if (use.states.stateCountryOptions.length > 0) {
      setInputState(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectStateCountry, {
          changeStateCountry: function changeStateCountry(event) {
            return use.actions.changeStateCountry(event);
          },
          props: _objectSpread({
            options: use.states.stateCountryOptions,
            defaultValue: use.states.stateCountryDefault,
            styles: {
              width: '89%'
            }
          }, selectStateProps)
        });
      });
    } else {
      setInputState(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.InputStateCountry, {
          changeStateCountry: function changeStateCountry(event) {
            return use.actions.changeStateCountry(event);
          },
          props: _objectSpread({
            inputProps: {
              defaultValue: use.states.state
            },
            styles: {
              padding: '10px 19px',
              width: '89%'
            }
          }, inputStateProps)
        });
      });
    }
    if (use.states.cityOptions.length > 0) {
      setInputCity(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectCity, {
          changeCity: function changeCity(event) {
            return use.actions.changeCity(event);
          },
          props: _objectSpread({
            options: use.states.cityOptions,
            defaultValue: use.states.cityDefault,
            styles: {
              width: '89%'
            }
          }, selectCityProps)
        });
      });
    } else {
      setInputCity(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.InputCity, {
          changeCity: function changeCity(event) {
            return use.actions.changeCity(event);
          },
          props: _objectSpread({
            inputProps: {
              defaultValue: use.states.city
            },
            styles: {
              padding: '10px 19px',
              width: '89%'
            }
          }, inputCityProps)
        });
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
      title1: mainTitle,
      title2: subTitle
    },
    buttonTitles: {
      mainButton: buttonTitle,
      returnButton: 'Volver'
    },
    handleActions: handleActions,
    error: use.states.error
  }, modelFormProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%',
      justifyContent: 'start'
    }
  }, containerAddressProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputAddress1, {
    changeAddress1: function changeAddress1(event) {
      return use.actions.changeAddress1(event);
    },
    props: _objectSpread({
      inputProps: {
        defaultValue: use.states.address1
      },
      styles: {
        width: '92%',
        padding: '09px 19px'
      }
    }, inputAddress1Props)
  }), /*#__PURE__*/_react["default"].createElement(_Input.InputAddress2, {
    changeAddress2: function changeAddress2(event) {
      return use.actions.changeAddress2(event);
    },
    props: _objectSpread({
      inputProps: {
        defaultValue: use.states.address2
      },
      styles: {
        width: '92%',
        padding: '09px 19px'
      }
    }, inputAddress2Props)
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%',
      justifyContent: 'start'
    }
  }, containerCountryProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputCity, InputState, InputCountry)), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%',
      justifyContent: 'start'
    }
  }, containerPostCodeProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputZipCode, {
    changeZipCode: function changeZipCode(event) {
      return use.actions.changePostCode(event);
    },
    props: _objectSpread({
      inputProps: {
        defaultValue: use.states.postCode
      },
      styles: {
        width: '92%',
        padding: '09px 19px'
      }
    }, inputPostCodeProps)
  }), InputType))));
};
exports.AddressAddForm = AddressAddForm;