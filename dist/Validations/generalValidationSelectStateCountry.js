"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalValidationSelectStateCountry = void 0;
var _helpers = require("../helpers");
var _Constans = require("../Constans");
var generalValidationSelectStateCountry = function generalValidationSelectStateCountry(_ref) {
  var value = _ref.value,
    setValid = _ref.setValid,
    currentValid = _ref.currentValid,
    _ref$inputId = _ref.inputId,
    inputId = _ref$inputId === void 0 ? '' : _ref$inputId;
  var validation = (0, _helpers.validationSelect)(value, "".concat(_Constans.STATE_COUNTRY_INPUT).concat(inputId));
  if (validation !== currentValid) {
    setValid(validation);
  }
  return validation;
};
exports.generalValidationSelectStateCountry = generalValidationSelectStateCountry;