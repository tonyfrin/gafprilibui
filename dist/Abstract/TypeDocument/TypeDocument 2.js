"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypeDocument = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _index = require("./../index");
var TypeDocument = function TypeDocument(_ref) {
  var useTypeDocument = _ref.useTypeDocument;
  var _React$useState = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    InputCountry = _React$useState2[0],
    setInputCountry = _React$useState2[1];
  _react["default"].useEffect(function () {
    setInputCountry(function () {
      return /*#__PURE__*/_react["default"].createElement(_index.GsSelect, {
        id: "countryTypeDocument",
        onChange: function onChange(event) {
          return useTypeDocument.actions.changeCountry(event);
        },
        options: useTypeDocument.states.countryOptions,
        defaultValue: useTypeDocument.states.countryDefault
      });
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  _react["default"].useEffect(function () {
    useTypeDocument.actions.validationCountry(useTypeDocument.states.country);
    useTypeDocument.actions.validationName(useTypeDocument.states.name);
  }, [InputCountry]);
  _react["default"].useEffect(function () {
    useTypeDocument.actions.validationButtonNext();
  }, [useTypeDocument.states.countryValid, useTypeDocument.states.nameValid]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_index.ContainerForm, null, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputCountry, /*#__PURE__*/_react["default"].createElement(_index.Input, {
    inputProps: {
      placeholder: 'Nombre del tipo de Documento',
      type: 'text',
      id: 'nameTypeDocument',
      onKeyUp: function onKeyUp(event) {
        return useTypeDocument.actions.changeName(event.target.value);
      },
      defaultValue: useTypeDocument.states.name
    }
  }))));
};
exports.TypeDocument = TypeDocument;