"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalValidationRoles = void 0;
var _helpers = require("../helpers");
var _Constans = require("../Constans");
var generalValidationRoles = function generalValidationRoles(_ref) {
  var newValue = _ref.newValue,
    setValid = _ref.setValid,
    currentValid = _ref.currentValid,
    _ref$inputId = _ref.inputId,
    inputId = _ref$inputId === void 0 ? '' : _ref$inputId;
  var valid = (0, _helpers.validationSelect)(newValue, "".concat(_Constans.ROLES_INPUT).concat(inputId));
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};
exports.generalValidationRoles = generalValidationRoles;