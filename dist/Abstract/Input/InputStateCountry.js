"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputStateCountry = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _constants = require("../../constants");
var _Input = require("./Input");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var InputStateCountry = function InputStateCountry(_ref) {
  var changeStateCountry = _ref.changeStateCountry,
    props = _ref.props,
    _ref$inputId = _ref.inputId,
    inputId = _ref$inputId === void 0 ? '' : _ref$inputId;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    styles: props === null || props === void 0 ? void 0 : props.styles,
    inputProps: _objectSpread({
      placeholder: 'Estado o Provincia',
      type: 'text',
      id: "".concat(_constants.STATE_COUNTRY_INPUT).concat(inputId),
      onKeyUp: function onKeyUp(event) {
        return changeStateCountry({
          label: event.target.value,
          value: event.target.value
        });
      }
    }, props === null || props === void 0 ? void 0 : props.inputProps),
    inputClass: props === null || props === void 0 ? void 0 : props.inputClass,
    containerStyles: props === null || props === void 0 ? void 0 : props.containerStyles,
    containerClass: props === null || props === void 0 ? void 0 : props.containerClass
  }));
};
exports.InputStateCountry = InputStateCountry;