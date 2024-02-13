"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalValidationButtonNext = void 0;
var _helpers = require("../helpers");
var _Constans = require("../Constans");
var generalValidationButtonNext = function generalValidationButtonNext(_ref) {
  var validations = _ref.validations,
    inputId = _ref.inputId;
  var isAllValid = validations.every(function (validation) {
    return validation;
  });
  if (isAllValid) {
    (0, _helpers.removeClass)("".concat(_Constans.BUTTON_NEXT_INPUT).concat(inputId), _Constans.DISABLED);
  } else {
    (0, _helpers.addClass)("".concat(_Constans.BUTTON_NEXT_INPUT).concat(inputId), _Constans.DISABLED);
  }
};
exports.generalValidationButtonNext = generalValidationButtonNext;