"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalValidationVisibility = void 0;
var _constants = require("../constants");
var _helpers = require("../helpers");
var generalValidationVisibility = function generalValidationVisibility(_ref) {
  var newValue = _ref.value,
    setValid = _ref.setValid,
    currentValid = _ref.currentValid,
    _ref$inputId = _ref.inputId,
    inputId = _ref$inputId === void 0 ? '' : _ref$inputId;
  var valid = (0, _helpers.validationSelect)(newValue, "".concat(_constants.VISIBILITY_INPUT).concat(inputId));
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};
exports.generalValidationVisibility = generalValidationVisibility;