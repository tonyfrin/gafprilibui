"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalValidationType = void 0;
var _helpers = require("../helpers");
var _Constans = require("../Constans");
var generalValidationType = function generalValidationType(_ref) {
  var newValue = _ref.value,
    setValid = _ref.setValid,
    currentValid = _ref.currentValid,
    _ref$inputId = _ref.inputId,
    inputId = _ref$inputId === void 0 ? '' : _ref$inputId;
  var valid = (0, _helpers.validationSelect)(newValue, "".concat(_Constans.TYPE_INPUT).concat(inputId));
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};
exports.generalValidationType = generalValidationType;