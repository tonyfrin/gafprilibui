"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SiteInfo = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _index = require("./../index");
var SiteInfo = function SiteInfo(_ref) {
  var useSites = _ref.useSites;
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
    setInputTypeDocument(function () {
      return /*#__PURE__*/_react["default"].createElement(_index.GsSelect, {
        id: "siteDocumentIndex",
        onChange: function onChange(event) {
          return useSites.actions.changeSiteDocumentIndex(event);
        },
        options: useSites.states.siteDocumentIndexOptions,
        defaultValue: useSites.states.siteDocumentIndexDefault,
        styles: {
          width: '90%'
        }
      });
    });
    setInputCountry(function () {
      return /*#__PURE__*/_react["default"].createElement(_index.GsSelect, {
        id: "countrySite",
        onChange: function onChange(event) {
          return useSites.actions.changeCountry(event);
        },
        options: useSites.states.countryOptions,
        defaultValue: useSites.states.countryDefault,
        styles: {
          width: '90%'
        }
      });
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  _react["default"].useEffect(function () {
    if (useSites.states.stateCountryOptions.length > 0) {
      setInputState(function () {
        return /*#__PURE__*/_react["default"].createElement(_index.GsSelect, {
          id: "stateCountrySite",
          onChange: function onChange(event) {
            return useSites.actions.changeStateCountry(event);
          },
          options: useSites.states.stateCountryOptions,
          defaultValue: useSites.states.stateCountryDefault,
          styles: {
            width: '90%'
          }
        });
      });
    } else {
      setInputState(function () {
        return /*#__PURE__*/_react["default"].createElement(_index.Input, {
          inputProps: {
            placeholder: 'Estado',
            type: 'text',
            id: 'stateCountrySite',
            onKeyUp: function onKeyUp(event) {
              return useSites.actions.changeStateCountry({
                label: event.target.value,
                value: event.target.value
              });
            },
            defaultValue: useSites.states.stateCountry
          },
          styles: {
            padding: '10px 19px',
            width: '90%'
          }
        });
      });
    }
    if (useSites.states.cityOptions.length > 0) {
      setInputCity(function () {
        return /*#__PURE__*/_react["default"].createElement(_index.GsSelect, {
          id: "citySite",
          onChange: function onChange(event) {
            return useSites.actions.changeCity(event);
          },
          options: useSites.states.cityOptions,
          defaultValue: useSites.states.cityDefault,
          styles: {
            width: '90%'
          }
        });
      });
    } else {
      setInputCity(function () {
        return /*#__PURE__*/_react["default"].createElement(_index.Input, {
          inputProps: {
            placeholder: 'Ciudad',
            type: 'text',
            id: 'citySite',
            onKeyUp: function onKeyUp(event) {
              return useSites.actions.changeCity({
                label: event.target.value,
                value: event.target.value
              });
            },
            defaultValue: useSites.states.city
          },
          styles: {
            padding: '10px 19px',
            width: '90%'
          }
        });
      });
    }
  }, [useSites.states.country, useSites.states.stateCountryOptions, useSites.states.cityOptions]);
  _react["default"].useEffect(function () {
    useSites.actions.validationSiteName(useSites.states.siteName);
    useSites.actions.validationSiteDocumentIndex(useSites.states.siteDocumentIndex);
    useSites.actions.validationDocument(useSites.states.document);
    useSites.actions.validationAddress1(useSites.states.address1);
    useSites.actions.validationCity(useSites.states.city);
    useSites.actions.validationStateCountry(useSites.states.stateCountry);
    useSites.actions.validationCountry(useSites.states.country);
    useSites.actions.validationPostcode(useSites.states.postcode);
    useSites.actions.validationPhone(useSites.states.phone);
    useSites.actions.validationEmail(useSites.states.email);
  }, [InputCountry, InputState, InputCity, useSites.states.country, useSites.states.stateCountry, useSites.states.city]);
  _react["default"].useEffect(function () {
    useSites.actions.validationButtonNext();
  }, [useSites.states.validSiteName, useSites.states.validSiteDocumentIndex, useSites.states.validDocument, useSites.states.validAddress1, useSites.states.validAddress2, useSites.states.validCity, useSites.states.validStateCountry, useSites.states.validCountry, useSites.states.validPostcode, useSites.states.validPhone, useSites.states.validEmail]); // eslint-disable-line react-hooks/exhaustive-deps

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_index.ContainerForm, null, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_index.Input, {
    inputProps: {
      placeholder: 'Nombre del sitio',
      type: 'text',
      id: 'siteName',
      onKeyUp: function onKeyUp(event) {
        return useSites.actions.changeSiteName(event.target.value);
      },
      defaultValue: useSites.states.siteName
    }
  }), /*#__PURE__*/_react["default"].createElement(_index.ContainerButton, {
    styles: {
      width: '96.5%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputTypeDocument, /*#__PURE__*/_react["default"].createElement(_index.Input, {
    inputProps: {
      placeholder: 'Numero de documento legal',
      type: 'text',
      id: 'siteDocument',
      onKeyUp: function onKeyUp(event) {
        return useSites.actions.changeDocument(event.target.value);
      },
      defaultValue: useSites.states.document
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
      placeholder: 'Dirección 1',
      type: 'text',
      id: 'address1',
      onKeyUp: function onKeyUp(event) {
        return useSites.actions.changeAddres1(event.target.value);
      },
      defaultValue: useSites.states.address1
    },
    styles: {
      width: '90%'
    }
  }), /*#__PURE__*/_react["default"].createElement(_index.Input, {
    inputProps: {
      placeholder: 'Dirección 2',
      type: 'text',
      id: 'address2',
      onKeyUp: function onKeyUp(event) {
        return useSites.actions.changeAddres2(event.target.value);
      },
      defaultValue: useSites.states.address2
    },
    styles: {
      width: '90%'
    }
  }))), /*#__PURE__*/_react["default"].createElement(_index.ContainerButton, {
    styles: {
      width: '96.5%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputCity, InputState)), /*#__PURE__*/_react["default"].createElement(_index.ContainerButton, {
    styles: {
      width: '96.5%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputCountry, /*#__PURE__*/_react["default"].createElement(_index.Input, {
    inputProps: {
      placeholder: 'Código Postal',
      type: 'text',
      id: 'postcodeSite',
      onKeyUp: function onKeyUp(event) {
        return useSites.actions.changePostcode(event.target.value);
      },
      defaultValue: useSites.states.postcode
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
      placeholder: 'Teléfono',
      type: 'phone',
      id: 'phoneSite',
      onKeyUp: function onKeyUp(event) {
        return useSites.actions.changePhone(event.target.value);
      },
      defaultValue: useSites.states.phone
    },
    styles: {
      padding: '10px 19px',
      width: '90%'
    }
  }), /*#__PURE__*/_react["default"].createElement(_index.Input, {
    inputProps: {
      placeholder: 'Email',
      type: 'email',
      id: 'emailSite',
      onKeyUp: function onKeyUp(event) {
        return useSites.actions.changeEmail(event.target.value);
      },
      defaultValue: useSites.states.email
    },
    styles: {
      padding: '10px 19px',
      width: '90%'
    }
  }))))));
};
exports.SiteInfo = SiteInfo;