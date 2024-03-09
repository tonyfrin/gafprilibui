"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalChangeExpensesTypeId = void 0;
var generalChangeExpensesTypeId = exports.generalChangeExpensesTypeId = function generalChangeExpensesTypeId(_ref) {
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