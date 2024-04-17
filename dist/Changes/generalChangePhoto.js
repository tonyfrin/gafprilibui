"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalChangePhoto = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _axios = _interopRequireDefault(require("axios"));
var _helpers = require("../helpers");
var generalChangePhoto = exports.generalChangePhoto = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var e, changeError, setSubmitting, setPhoto, validation, newFile, mimeType, formData, config, response, valid;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          e = _ref.e, changeError = _ref.changeError, setSubmitting = _ref.setSubmitting, setPhoto = _ref.setPhoto, validation = _ref.validation;
          newFile = e.target.files && e.target.files[0];
          if (newFile) {
            _context.next = 4;
            break;
          }
          return _context.abrupt("return");
        case 4:
          // Obtén el tipo MIME en función de la extensión del archivo
          mimeType = (0, _helpers.getMimeTypeByExtension)(newFile.name);
          if (mimeType) {
            _context.next = 8;
            break;
          }
          changeError(['El archivo no es una imagen válida. Asegúrate de subir un archivo JPG, JPEG o PNG.']);
          return _context.abrupt("return");
        case 8:
          formData = new FormData();
          formData.append('file', newFile);
          formData.append('fileName', newFile.name);
          formData.append('mimeType', mimeType);
          setSubmitting(true);
          config = {
            headers: {
              'content-type': 'multipart/form-data'
            }
          };
          _context.prev = 14;
          _context.next = 17;
          return _axios["default"].post('/api/upload', formData, config);
        case 17:
          response = _context.sent;
          if (response.status === 200) {
            valid = validation ? validation(response.data.imageUrl) : true;
            if (valid) {
              setPhoto(response.data.imageUrl);
            }
          }
          setSubmitting(false);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          _context.next = 26;
          break;
        case 22:
          _context.prev = 22;
          _context.t0 = _context["catch"](14);
          changeError(["".concat(_context.t0.message)]);
          setSubmitting(false);
        case 26:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[14, 22]]);
  }));
  return function generalChangePhoto(_x) {
    return _ref2.apply(this, arguments);
  };
}();