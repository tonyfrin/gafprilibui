"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalValidationExpensesTypeId = void 0;
var _constants = require("../constants");
var _index = require("./index");
var generalValidationExpensesTypeId = exports.generalValidationExpensesTypeId = function generalValidationExpensesTypeId(_ref) {
  var value = _ref.value,
    setValid = _ref.setValid,
    currentValid = _ref.currentValid,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? true : _ref$required,
    _ref$inputId = _ref.inputId,
    inputId = _ref$inputId === void 0 ? '' : _ref$inputId;
  var valid = value !== null ? value : 0;
  return (0, _index.validationInputNumbersWithValue)({
    value: valid,
    inputId: "".concat(_constants.EXPENSES_TYPE_INPUT).concat(inputId),
    setValid: setValid,
    currentValid: currentValid,
    required: required
  });
};