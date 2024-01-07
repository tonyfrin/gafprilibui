"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalChangeUserName = exports.generalChangeStatus = exports.generalChangeStateCountryOptions = exports.generalChangeSite = exports.generalChangePostCode = exports.generalChangePhoto = exports.generalChangePassword = exports.generalChangeParentId = exports.generalChangeName = exports.generalChangeLastName = exports.generalChangeDescription = exports.generalChangeCityStateCountry = exports.generalChangeCityOptions = exports.generalChangeAddress = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _axios = _interopRequireDefault(require("axios"));
var _dompurify = _interopRequireDefault(require("dompurify"));
var _helpers = require("../helpers");
var _Constans = require("../Constans");
var generalChangeUserName = function generalChangeUserName(value, validation, setValue) {
  var valueClean = _dompurify["default"].sanitize(value);
  var userName = valueClean.toLowerCase();
  (0, _helpers.changeInputText)({
    value: userName,
    validation: validation,
    setValue: setValue
  });
};
exports.generalChangeUserName = generalChangeUserName;
var generalChangeName = function generalChangeName(value, validation, setValue) {
  var valueClean = _dompurify["default"].sanitize(value);
  var name = (0, _helpers.toTitleCase)(valueClean);
  (0, _helpers.changeInputText)({
    value: name,
    validation: validation,
    setValue: setValue
  });
};
exports.generalChangeName = generalChangeName;
var generalChangeLastName = function generalChangeLastName(value, validation, setValue) {
  var valueClean = _dompurify["default"].sanitize(value);
  var lastName = (0, _helpers.toTitleCase)(valueClean);
  (0, _helpers.changeInputText)({
    value: lastName,
    validation: validation,
    setValue: setValue
  });
};
exports.generalChangeLastName = generalChangeLastName;
var generalChangePassword = function generalChangePassword(value, validation, setValue) {
  var valueClean = _dompurify["default"].sanitize(value);
  (0, _helpers.changeInputText)({
    value: valueClean,
    validation: validation,
    setValue: setValue
  });
};
exports.generalChangePassword = generalChangePassword;
var generalChangeDescription = function generalChangeDescription(value, validation, setValue) {
  var valueClean = _dompurify["default"].sanitize(value);
  (0, _helpers.changeInputText)({
    value: valueClean,
    validation: validation,
    setValue: setValue
  });
};
exports.generalChangeDescription = generalChangeDescription;
var generalChangeAddress = function generalChangeAddress(value, validation, setValue) {
  var valueClean = _dompurify["default"].sanitize(value);
  var newAddress = (0, _helpers.toTitleCase)(valueClean);
  (0, _helpers.changeInputText)({
    value: newAddress,
    validation: validation,
    setValue: setValue
  });
};
exports.generalChangeAddress = generalChangeAddress;
var generalChangeCityStateCountry = function generalChangeCityStateCountry(options, validation, setDefault, setValue, setIsReset) {
  setIsReset(false);
  (0, _helpers.changeSelect)({
    newValue: options,
    validation: validation,
    setDefault: setDefault,
    setValue: setValue
  });
};
exports.generalChangeCityStateCountry = generalChangeCityStateCountry;
var generalChangeCityOptions = function generalChangeCityOptions(country, state, setCityDefault, setCity, setCityOptions, isReset) {
  var newValueCity = [];
  if (_Constans.Cities[0][country]) {
    if (Array.isArray(_Constans.Cities[0][country][0][state])) {
      _Constans.Cities[0][country][0][state].forEach(function (item) {
        Object.keys(item).forEach(function (key) {
          newValueCity.push({
            value: item[key],
            label: item[key]
          });
        });
      });
    }
  }
  if (isReset) {
    setCityDefault(_Constans.CITY_DEFAULT);
    setCity(_Constans.CITY_DEFAULT.value);
  } else {
    setCityDefault({
      label: 'Elija la ciudad',
      value: ''
    });
    setCity('');
  }
  setCityOptions(newValueCity);
};
exports.generalChangeCityOptions = generalChangeCityOptions;
var generalChangeStateCountryOptions = function generalChangeStateCountryOptions(country, setStateCountryDefault, setStateCountry, setStateCountryOptions, isReset) {
  var _StatesCountries$0$co;
  var newValueState = [];
  if (country && ((_StatesCountries$0$co = _Constans.StatesCountries[0][country]) === null || _StatesCountries$0$co === void 0 ? void 0 : _StatesCountries$0$co.length) > 0) {
    _Constans.StatesCountries[0][country].forEach(function (item) {
      Object.keys(item).forEach(function (key) {
        newValueState.push({
          value: key,
          label: item[key]
        });
      });
    });
  }
  if (isReset) {
    setStateCountryDefault(_Constans.STATE_COUNTRY_DEFAULT);
    setStateCountry(_Constans.STATE_COUNTRY_DEFAULT.value);
  } else {
    setStateCountryDefault({
      label: 'Elija el Estado',
      value: ''
    });
    setStateCountry('');
  }
  setStateCountryOptions(newValueState);
};
exports.generalChangeStateCountryOptions = generalChangeStateCountryOptions;
var generalChangePostCode = function generalChangePostCode(value, validation, setValue) {
  var valueClean = _dompurify["default"].sanitize(value);
  (0, _helpers.changeInputText)({
    value: valueClean,
    validation: validation,
    setValue: setValue
  });
};
exports.generalChangePostCode = generalChangePostCode;
var generalChangeSite = function generalChangeSite(options, validation, setDefault, setValue) {
  (0, _helpers.changeSelect)({
    newValue: options,
    validation: validation,
    setDefault: setDefault,
    setValue: setValue
  });
};
exports.generalChangeSite = generalChangeSite;
var generalChangeParentId = function generalChangeParentId(options, validation, setDefault, setValue) {
  var value = null;
  if (options && options.value !== 'null') {
    value = parseInt(options.value, 10);
  }
  var label = (options === null || options === void 0 ? void 0 : options.label) || 'Sin categoría padre';
  var newOptions = {
    value: value,
    label: label
  };
  (0, _helpers.changeSelect)({
    newValue: newOptions,
    validation: validation,
    setDefault: setDefault,
    setValue: setValue
  });
};
exports.generalChangeParentId = generalChangeParentId;
var generalChangePhoto = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(e, changeError, setSubmitting, setPhoto) {
    var newFile, mimeType, formData, config, response;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          newFile = e.target.files && e.target.files[0];
          if (newFile) {
            _context.next = 3;
            break;
          }
          return _context.abrupt("return");
        case 3:
          // Obtén el tipo MIME en función de la extensión del archivo
          mimeType = (0, _helpers.getMimeTypeByExtension)(newFile.name);
          if (mimeType) {
            _context.next = 7;
            break;
          }
          changeError(['El archivo no es una imagen válida. Asegúrate de subir un archivo JPG, JPEG o PNG.']);
          return _context.abrupt("return");
        case 7:
          formData = new FormData();
          formData.append('file', newFile);
          formData.append('fileName', newFile.name);
          setSubmitting(true);
          config = {
            headers: {
              'content-type': 'multipart/form-data'
            }
          };
          _context.prev = 12;
          _context.next = 15;
          return _axios["default"].post(_Constans.UPLOAD_PHOTO_ROUTE, formData, config);
        case 15:
          response = _context.sent;
          if (response.status === 200) {
            setPhoto(response.data.imageUrl);
          } else {
            setSubmitting(false);
          }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          _context.next = 23;
          break;
        case 19:
          _context.prev = 19;
          _context.t0 = _context["catch"](12);
          changeError(["".concat(_context.t0.message)]);
          setSubmitting(false);
        case 23:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[12, 19]]);
  }));
  return function generalChangePhoto(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();
exports.generalChangePhoto = generalChangePhoto;
var generalChangeStatus = function generalChangeStatus(options, validation, setDefault, setValue) {
  (0, _helpers.changeSelect)({
    newValue: options,
    validation: validation,
    setDefault: setDefault,
    setValue: setValue
  });
};
exports.generalChangeStatus = generalChangeStatus;