"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalValidationPhotoUsers = void 0;
var _Constans = require("../Constans");
var _index = require("./index");
var generalValidationPhotoUsers = function generalValidationPhotoUsers(_ref) {
  var value = _ref.value,
    setValid = _ref.setValid,
    currentValid = _ref.currentValid,
    _ref$inputId = _ref.inputId,
    inputId = _ref$inputId === void 0 ? '' : _ref$inputId,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required;
  return (0, _index.validationPhoto)({
    value: value,
    inputId: "".concat(_Constans.PHOTO_USERS_INPUT).concat(inputId),
    setValid: setValid,
    currentValid: currentValid,
    required: required
  });
};
exports.generalValidationPhotoUsers = generalValidationPhotoUsers;