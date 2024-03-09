"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalChangeProjectsId = void 0;
var generalChangeProjectsId = exports.generalChangeProjectsId = function generalChangeProjectsId(_ref) {
  var value = _ref.value,
    validation = _ref.validation,
    setValue = _ref.setValue;
  var defaultValidation = function defaultValidation() {
    return true;
  };
  var newValidations = validation || defaultValidation;
  var valid = newValidations(value);
  if (valid) {
    setValue(value);
  }
};