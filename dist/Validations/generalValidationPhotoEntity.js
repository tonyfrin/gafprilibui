"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalValidationPhotoEntity = void 0;
var _constants = require("../constants");
var _index = require("./index");
var generalValidationPhotoEntity = function generalValidationPhotoEntity(_ref) {
  var value = _ref.value,
    setValid = _ref.setValid,
    currentValid = _ref.currentValid,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    _ref$inputId = _ref.inputId,
    inputId = _ref$inputId === void 0 ? '' : _ref$inputId;
  return (0, _index.validationPhoto)({
    value: value,
    inputId: "".concat(_constants.PHOTO_ENTITY_INPUT).concat(inputId),
    setValid: setValid,
    currentValid: currentValid,
    required: required
  });
};
exports.generalValidationPhotoEntity = generalValidationPhotoEntity;