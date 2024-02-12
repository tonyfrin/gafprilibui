"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalChangeNote = void 0;
var _dompurify = _interopRequireDefault(require("dompurify"));
var _helpers = require("../helpers");
var generalChangeNote = function generalChangeNote(value, validation, setValue) {
  var valueClean = _dompurify["default"].sanitize(value);
  (0, _helpers.changeInputText)({
    value: valueClean,
    validation: validation,
    setValue: setValue
  });
};
exports.generalChangeNote = generalChangeNote;