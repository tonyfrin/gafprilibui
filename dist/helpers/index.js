"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeSelect = exports.changeInputText = exports.addClass = void 0;
exports.formatPhoneNumber = formatPhoneNumber;
exports.gafpriFetch = gafpriFetch;
exports.getLastEntryDateAndCount = exports.getBase64 = void 0;
exports.getMimeTypeByExtension = getMimeTypeByExtension;
exports.isCustomErrorResponse = isCustomErrorResponse;
exports.removeClass = exports.isSelectDefaultArray = exports.isSelectDefault = exports.isErrorResponse = void 0;
exports.toTitleCase = toTitleCase;
exports.validationHidden = validationHidden;
exports.validationSelect = exports.validationInputPostcode = exports.validationInputPhone = exports.validationInputPassword = exports.validationInputName = exports.validationInputEmail = exports.validationInputAddress = exports.validationInput = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/* eslint-disable object-shorthand */

var addClass = function addClass(element, className) {
  var input = document.getElementById(element);
  if (input && input.classList && !input.classList.contains(className)) {
    input.classList.add(className);
  }
};
exports.addClass = addClass;
var removeClass = function removeClass(element, className) {
  var input = document.getElementById(element);
  if (input && input.classList && input.classList.contains(className)) {
    input.classList.remove(className);
  }
};
exports.removeClass = removeClass;
var validationSelect = function validationSelect(value, componentId, className) {
  if (value === '') {
    addClass(componentId, className);
    return false;
  }
  removeClass(componentId, className);
  return true;
};
exports.validationSelect = validationSelect;
function validationHidden(value, validate) {
  return validate.test(value);
}
var validationInput = function validationInput(value, match, componentId, className) {
  var required = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var valid = validationHidden(value, match);
  if (required && (!valid || !value)) {
    addClass(componentId, className);
    return false;
  }
  if (value && valid) {
    removeClass(componentId, className);
    return true;
  }
  if (!required && !value) {
    removeClass(componentId, className);
    return true;
  }
  addClass(componentId, className);
  return false;
};
exports.validationInput = validationInput;
var changeInputText = function changeInputText(_ref) {
  var value = _ref.value,
    validation = _ref.validation,
    setValue = _ref.setValue;
  var newValue = '';
  var valid = validation(value);
  if (valid) {
    newValue = value;
  }
  setValue(newValue);
};
exports.changeInputText = changeInputText;
function toTitleCase(str) {
  return str.toLocaleLowerCase().replace(/(^|\s|\.|,|&)[a-z\u00E0-\u00FF]/g, function (match) {
    return match.toUpperCase();
  });
}
var changeSelect = function changeSelect(_ref2) {
  var newValue = _ref2.newValue,
    validation = _ref2.validation,
    setDefault = _ref2.setDefault,
    setValue = _ref2.setValue;
  if (newValue != null) {
    var valid = validation("".concat(newValue.value));
    if (valid) {
      var newDefaulValue = {
        label: newValue.label,
        value: "".concat(newValue.value)
      };
      setDefault(newDefaulValue);
      if (typeof newValue.value === 'string' && setValue.length === 1) {
        setValue(newValue.value);
      } else if (typeof newValue.value === 'number' && setValue.length === 1) {
        setValue(newValue.value);
      } else if (typeof newValue.value === 'boolean' && setValue.length === 1) {
        setValue(newValue.value);
      } else if ((0, _typeof2["default"])(newValue.value) === 'object' && setValue.length === 1) {
        setValue(newValue.value);
      }
    }
  }
};
exports.changeSelect = changeSelect;
var validationInputName = function validationInputName(_ref3) {
  var name = _ref3.name,
    inputId = _ref3.inputId,
    setValid = _ref3.setValid,
    _ref3$required = _ref3.required,
    required = _ref3$required === void 0 ? true : _ref3$required;
  var valid = validationInput(name, /^[-a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_,.&'@-\s]+$/, inputId, 'gs-input-alert', required);
  setValid(valid);
  return valid;
};
exports.validationInputName = validationInputName;
var validationInputAddress = function validationInputAddress(_ref4) {
  var value = _ref4.value,
    inputId = _ref4.inputId,
    setValid = _ref4.setValid,
    _ref4$required = _ref4.required,
    required = _ref4$required === void 0 ? true : _ref4$required;
  var valid = validationInput(value, /^[a-zA-Z0-9#]+[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_#'()\-.,\s]+$/, inputId, 'gs-input-alert', required);
  setValid(valid);
  return valid;
};
exports.validationInputAddress = validationInputAddress;
var validationInputPostcode = function validationInputPostcode(_ref5) {
  var value = _ref5.value,
    inputId = _ref5.inputId,
    setValid = _ref5.setValid,
    _ref5$required = _ref5.required,
    required = _ref5$required === void 0 ? true : _ref5$required;
  var valid = validationInput(value, /^[a-zA-Z0-9]+[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_#()\-.\s]+$/, inputId, 'gs-input-alert', required);
  setValid(valid);
  return valid;
};
exports.validationInputPostcode = validationInputPostcode;
var validationInputEmail = function validationInputEmail(_ref6) {
  var value = _ref6.value,
    inputId = _ref6.inputId,
    setValid = _ref6.setValid,
    _ref6$required = _ref6.required,
    required = _ref6$required === void 0 ? true : _ref6$required;
  var valid = validationInput(value, /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, inputId, 'gs-input-alert', required);
  setValid(valid);
  return valid;
};
exports.validationInputEmail = validationInputEmail;
var validationInputPhone = function validationInputPhone(_ref7) {
  var value = _ref7.value,
    inputId = _ref7.inputId,
    setValid = _ref7.setValid,
    _ref7$required = _ref7.required,
    required = _ref7$required === void 0 ? true : _ref7$required;
  var valid = validationInput(value, /^[0-9]{10,20}/, inputId, 'gs-input-alert', required);
  setValid(valid);
  return valid;
};
exports.validationInputPhone = validationInputPhone;
var validationInputPassword = function validationInputPassword(_ref8) {
  var value = _ref8.value,
    inputId = _ref8.inputId,
    setValid = _ref8.setValid,
    _ref8$required = _ref8.required,
    required = _ref8$required === void 0 ? true : _ref8$required;
  var valid = validationInput(value, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, inputId, 'gs-input-alert', required);
  setValid(valid);
  return valid;
};
exports.validationInputPassword = validationInputPassword;
function gafpriFetch(_ref9) {
  var initMethod = _ref9.initMethod,
    initApi = _ref9.initApi,
    initRoute = _ref9.initRoute,
    initToken = _ref9.initToken,
    initCredentials = _ref9.initCredentials,
    functionFetching = _ref9.functionFetching,
    functionSuccess = _ref9.functionSuccess,
    functionError = _ref9.functionError;
  if (functionFetching !== undefined) {
    functionFetching();
  }
  var headers = {
    'Content-Type': 'application/json'
  };
  if (initToken !== undefined) {
    headers = _objectSpread(_objectSpread({}, headers), {}, {
      Authorization: "Bearer ".concat(initToken.token)
    });
  }
  var options = {
    method: initMethod,
    headers: headers,
    body: JSON.stringify(initCredentials)
  };
  fetch("".concat(initApi, "/").concat(initRoute), options).then(function (response) {
    return response.json();
  }).then(function (data) {
    if (data.success) {
      if (functionSuccess !== undefined) {
        functionSuccess(data);
      }
    } else if (functionError !== undefined) {
      functionError(data);
    }
  })["catch"](function (error) {
    if (functionError !== undefined) {
      functionError(error);
    }
  });
}
var isSelectDefault = function isSelectDefault(obj) {
  if ((0, _typeof2["default"])(obj) !== 'object' || obj === null) {
    return false;
  }
  var selectDefaultCandidate = obj;
  return typeof selectDefaultCandidate.value === 'string' && typeof selectDefaultCandidate.label === 'string';
};
exports.isSelectDefault = isSelectDefault;
var isSelectDefaultArray = function isSelectDefaultArray(obj) {
  if (!Array.isArray(obj)) {
    return false;
  }
  return obj.every(isSelectDefault);
};
exports.isSelectDefaultArray = isSelectDefaultArray;
var getLastEntryDateAndCount = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(service) {
    var response;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch("http://localhost:4000/api/v1/".concat(service, "/date-and-count"));
        case 3:
          response = _context.sent;
          if (!response.ok) {
            _context.next = 8;
            break;
          }
          _context.next = 7;
          return response.json();
        case 7:
          return _context.abrupt("return", _context.sent);
        case 8:
          _context.next = 13;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          // eslint-disable-next-line no-console
          console.error('Error fetching last entry date:', _context.t0);
        case 13:
          return _context.abrupt("return", null);
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function getLastEntryDateAndCount(_x) {
    return _ref10.apply(this, arguments);
  };
}();
exports.getLastEntryDateAndCount = getLastEntryDateAndCount;
var isErrorResponse = function isErrorResponse(obj) {
  return (0, _typeof2["default"])(obj) === 'object' && obj !== null && 'error' in obj && 'message' in obj && 'statusCode' in obj && 'success' in obj;
};
exports.isErrorResponse = isErrorResponse;
function isCustomErrorResponse(obj) {
  var customErrorObj = obj;
  return typeof (customErrorObj === null || customErrorObj === void 0 ? void 0 : customErrorObj.statusCode) === 'number' && typeof (customErrorObj === null || customErrorObj === void 0 ? void 0 : customErrorObj.success) === 'boolean' && typeof (customErrorObj === null || customErrorObj === void 0 ? void 0 : customErrorObj.message) === 'string' && Array.isArray(customErrorObj === null || customErrorObj === void 0 ? void 0 : customErrorObj.errors) && customErrorObj.errors.every(function (error) {
    return typeof error.message === 'string' && typeof error.origin === 'string' && typeof error.path === 'string' && typeof error.type === 'string' && Array.isArray(error.validatorArgs) && typeof error.validatorKey === 'string' && (typeof error.validatorName === 'string' || error.validatorName === null) && typeof error.value === 'string' && (0, _typeof2["default"])(error.instance) === 'object' && error.instance !== null;
  });
}
function getMimeTypeByExtension(filename) {
  var _filename$split$pop;
  var extension = (_filename$split$pop = filename.split('.').pop()) === null || _filename$split$pop === void 0 ? void 0 : _filename$split$pop.toLowerCase();
  switch (extension) {
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg';
    case 'png':
      return 'image/png';
    default:
      return null;
  }
}
function formatPhoneNumber(phoneNumber) {
  var countryCode = parseInt(phoneNumber.slice(0, phoneNumber.length - 10), 10).toString();
  var areaCode = phoneNumber.slice(phoneNumber.length - 10, phoneNumber.length - 7);
  var firstPart = phoneNumber.slice(phoneNumber.length - 7, phoneNumber.length - 4);
  var secondPart = phoneNumber.slice(phoneNumber.length - 4);
  return "+".concat(countryCode, " (").concat(areaCode, ") ").concat(firstPart, "-").concat(secondPart);
}
var getBase64 = function getBase64(img, callback) {
  var reader = new FileReader();
  reader.addEventListener('load', function () {
    return callback(reader.result);
  });
  reader.readAsDataURL(img);
};
exports.getBase64 = getBase64;