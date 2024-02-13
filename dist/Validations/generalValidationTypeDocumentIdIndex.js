"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalValidationTypeDocumentIdIndex = void 0;
var _helpers = require("../helpers");
var _Constans = require("../Constans");
var generalValidationTypeDocumentIdIndex = function generalValidationTypeDocumentIdIndex(_ref) {
  var newValue = _ref.value,
    setValid = _ref.setValid,
    currentValid = _ref.currentValid,
    _ref$inputId = _ref.inputId,
    inputId = _ref$inputId === void 0 ? '' : _ref$inputId;
  var valid = (0, _helpers.validationSelect)(newValue, "".concat(_Constans.TYPE_DOCUMENT_ID_INDEX_INPUT).concat(inputId));
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};
exports.generalValidationTypeDocumentIdIndex = generalValidationTypeDocumentIdIndex;