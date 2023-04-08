"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _index = require("./../index");
var User = function User(_ref) {
  var useUser = _ref.useUser;
  var _React$useState = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    InputTypeDocument = _React$useState2[0],
    setInputTypeDocument = _React$useState2[1];
  var _React$useState3 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    InputCity = _React$useState4[0],
    setInputCity = _React$useState4[1];
  var _React$useState5 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    InputState = _React$useState6[0],
    setInputState = _React$useState6[1];
  var _React$useState7 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
    InputCountry = _React$useState8[0],
    setInputCountry = _React$useState8[1];
  _react["default"].useEffect(function () {
    setInputCountry(function () {
      return /*#__PURE__*/_react["default"].createElement(_index.GsSelect, {
        id: "countryUser",
        onChange: function onChange(event) {
          return useUser.actions.changeCountry(event);
        },
        options: useUser.states.countryOptions,
        defaultValue: useUser.states.countryDefault,
        styles: {
          width: '85%'
        }
      });
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  _react["default"].useEffect(function () {
    if (useUser.states.stateCountryOptions.length > 0) {
      setInputState(function () {
        return /*#__PURE__*/_react["default"].createElement(_index.GsSelect, {
          id: "stateCountryUser",
          onChange: function onChange(event) {
            return useUser.actions.changeStateCountry(event);
          },
          options: useUser.states.stateCountryOptions,
          defaultValue: useUser.states.stateCountryDefault,
          styles: {
            width: '85%'
          }
        });
      });
    } else {
      setInputState(function () {
        return /*#__PURE__*/_react["default"].createElement(_index.Input, {
          inputProps: {
            placeholder: 'Estado',
            type: 'text',
            id: 'stateCountryUser',
            onKeyUp: function onKeyUp(event) {
              return useUser.actions.changeStateCountry({
                label: event.target.value,
                value: event.target.value
              });
            },
            defaultValue: useUser.states.stateCountry
          },
          styles: {
            padding: '10px 19px',
            width: '85%'
          }
        });
      });
    }
  }, [useUser.states.country, useUser.states.stateCountryOptions]);
  _react["default"].useEffect(function () {
    if (useUser.states.cityOptions.length > 0) {
      setInputCity(function () {
        return /*#__PURE__*/_react["default"].createElement(_index.GsSelect, {
          id: "cityUser",
          onChange: function onChange(event) {
            return useUser.actions.changeCity(event);
          },
          options: useUser.states.cityOptions,
          defaultValue: useUser.states.cityDefault,
          styles: {
            width: '85%'
          }
        });
      });
    } else {
      setInputCity(function () {
        return /*#__PURE__*/_react["default"].createElement(_index.Input, {
          inputProps: {
            placeholder: 'Ciudad',
            type: 'text',
            id: 'cityUser',
            onKeyUp: function onKeyUp(event) {
              return useUser.actions.changeCity({
                label: event.target.value,
                value: event.target.value
              });
            },
            defaultValue: useUser.states.city
          },
          styles: {
            padding: '10px 19px',
            width: '85%'
          }
        });
      });
    }
  }, [useUser.states.country, useUser.states.stateCountryOptions, useUser.states.cityOptions]);
  _react["default"].useEffect(function () {
    if (useUser.states.documentIndexOptions.length > 0) {
      setInputTypeDocument(function () {
        return /*#__PURE__*/_react["default"].createElement(_index.GsSelect, {
          id: "typeDocumentUser",
          onChange: function onChange(event) {
            return useUser.actions.changeDocumentIndex(event);
          },
          options: useUser.states.documentIndexOptions,
          defaultValue: useUser.states.documentIndexDefault,
          styles: {
            width: '90%'
          }
        });
      });
    } else {
      setInputTypeDocument(function () {
        return /*#__PURE__*/_react["default"].createElement(_index.Input, {
          inputProps: {
            placeholder: 'Tipo de documento',
            type: 'text',
            id: 'typeDocumentUser',
            onKeyUp: function onKeyUp(event) {
              return useUser.actions.changeDocumentIndex({
                label: event.target.value,
                value: event.target.value
              });
            },
            defaultValue: useUser.states.documentIndex
          },
          styles: {
            padding: '10px 19px',
            width: '90%'
          }
        });
      });
    }
  }, [useUser.states.country, useUser.states.documentIndexOptions]);
  _react["default"].useEffect(function () {
    useUser.actions.validationName(useUser.states.name);
    useUser.actions.validationLastName(useUser.states.lastName);
    useUser.actions.validationRole(useUser.states.role);
    useUser.actions.validationDocumentIndex(useUser.states.documentIndex);
    useUser.actions.validationDocument(useUser.states.document);
    useUser.actions.validationAddress1(useUser.states.address1);
    useUser.actions.validationAddress2(useUser.states.address2);
    useUser.actions.validationCity(useUser.states.city);
    useUser.actions.validationStateCountry(useUser.states.stateCountry);
    useUser.actions.validationCountry(useUser.states.country);
    useUser.actions.validationPostcode(useUser.states.postcode);
    useUser.actions.validationPhone(useUser.states.phone);
    useUser.actions.validationEmail(useUser.states.email);
    useUser.actions.validationPassword(useUser.states.password);
  }, [InputCountry, InputTypeDocument, InputCity, InputState]);
  _react["default"].useEffect(function () {
    useUser.actions.validationButtonNext();
  }, [useUser.states.nameValid, useUser.states.lastNameValid, useUser.states.roleValid, useUser.states.documentIndexValid, useUser.states.documentValid, useUser.states.address1Valid, useUser.states.address2Valid, useUser.states.cityValid, useUser.states.stateCountryValid, useUser.states.countryValid, useUser.states.postcodeValid, useUser.states.phoneValid, useUser.states.emailValid, useUser.states.passwordValid]);
  return /*#__PURE__*/_react["default"].createElement(_index.ContainerForm, null, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_index.ContainerButton, {
    styles: {
      width: '96.5%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_index.Input, {
    inputProps: {
      placeholder: 'Nombre',
      type: 'text',
      id: 'nameUser',
      onKeyUp: function onKeyUp(event) {
        return useUser.actions.changeName(event.target.value);
      },
      defaultValue: useUser.states.name
    },
    styles: {
      width: '85%'
    }
  }), /*#__PURE__*/_react["default"].createElement(_index.Input, {
    inputProps: {
      placeholder: 'Apellido',
      type: 'text',
      id: 'lastNameUser',
      onKeyUp: function onKeyUp(event) {
        return useUser.actions.changeLastName(event.target.value);
      },
      defaultValue: useUser.states.lastName
    },
    styles: {
      width: '85%'
    }
  }), /*#__PURE__*/_react["default"].createElement(_index.Input, {
    inputProps: {
      placeholder: 'Rol',
      type: 'text',
      id: 'roleUser',
      onKeyUp: function onKeyUp(event) {
        return useUser.actions.changeRole(event.target.value);
      },
      defaultValue: useUser.states.role
    },
    styles: {
      width: '85%'
    }
  }))), /*#__PURE__*/_react["default"].createElement(_index.ContainerButton, {
    styles: {
      width: '96.5%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputTypeDocument, /*#__PURE__*/_react["default"].createElement(_index.Input, {
    inputProps: {
      placeholder: 'Número de documento',
      type: 'text',
      id: 'documentUser',
      onKeyUp: function onKeyUp(event) {
        return useUser.actions.changeDocument(event.target.value);
      },
      defaultValue: useUser.states.document
    },
    styles: {
      padding: '10px 19px',
      width: '90%'
    }
  }))), /*#__PURE__*/_react["default"].createElement(_index.ContainerButton, {
    styles: {
      width: '96.5%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_index.Input, {
    inputProps: {
      placeholder: 'Dirección',
      type: 'text',
      id: 'address1User',
      onKeyUp: function onKeyUp(event) {
        return useUser.actions.changeAddress1(event.target.value);
      },
      defaultValue: useUser.states.address1
    },
    styles: {
      padding: '10px 19px',
      width: '90%'
    }
  }), /*#__PURE__*/_react["default"].createElement(_index.Input, {
    inputProps: {
      placeholder: 'Dirección 2',
      type: 'text',
      id: 'address2User',
      onKeyUp: function onKeyUp(event) {
        return useUser.actions.changeAddress2(event.target.value);
      },
      defaultValue: useUser.states.address2
    },
    styles: {
      padding: '10px 19px',
      width: '90%'
    }
  }))), /*#__PURE__*/_react["default"].createElement(_index.ContainerButton, {
    styles: {
      width: '96.5%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputCity, InputState, InputCountry)), /*#__PURE__*/_react["default"].createElement(_index.ContainerButton, {
    styles: {
      width: '96.5%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_index.Input, {
    inputProps: {
      placeholder: 'Código Postal',
      type: 'text',
      id: 'postcodeUser',
      onKeyUp: function onKeyUp(event) {
        return useUser.actions.changePostcode(event.target.value);
      },
      defaultValue: useUser.states.postcode
    },
    styles: {
      padding: '10px 19px',
      width: '90%'
    }
  }), /*#__PURE__*/_react["default"].createElement(_index.Input, {
    inputProps: {
      placeholder: 'Teléfono',
      type: 'text',
      id: 'phoneUser',
      onKeyUp: function onKeyUp(event) {
        return useUser.actions.changePhone(event.target.value);
      },
      defaultValue: useUser.states.phone
    },
    styles: {
      padding: '10px 19px',
      width: '90%'
    }
  }))), /*#__PURE__*/_react["default"].createElement(_index.ContainerButton, {
    styles: {
      width: '96.5%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_index.Input, {
    inputProps: {
      placeholder: 'Email',
      type: 'text',
      id: 'emailUser',
      onKeyUp: function onKeyUp(event) {
        return useUser.actions.changeEmail(event.target.value);
      },
      defaultValue: useUser.states.email
    },
    styles: {
      padding: '10px 19px',
      width: '90%'
    }
  }), /*#__PURE__*/_react["default"].createElement(_index.Input, {
    inputProps: {
      placeholder: 'Contraceña',
      type: 'text',
      id: 'passwordUser',
      onKeyUp: function onKeyUp(event) {
        return useUser.actions.changePassword(event.target.value);
      },
      defaultValue: useUser.states.password
    },
    styles: {
      padding: '10px 19px',
      width: '90%'
    }
  })))));
};
exports.User = User;