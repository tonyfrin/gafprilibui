"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeSelect = exports.changeInputText = exports.addClass = void 0;
exports.gafpriFetch = gafpriFetch;
exports.removeClass = exports.isSelectDefaultArray = exports.isSelectDefault = void 0;
exports.toTitleCase = toTitleCase;
exports.validationHidden = validationHidden;
exports.validationSelect = exports.validationInputPostcode = exports.validationInputPhone = exports.validationInputPassword = exports.validationInputName = exports.validationInputEmail = exports.validationInputAddress = exports.validationInput = void 0;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
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
      setValue(newValue.value);
    }
  }
};
exports.changeSelect = changeSelect;
var validationInputName = function validationInputName(_ref3) {
  var name = _ref3.name,
    inputId = _ref3.inputId,
    setValid = _ref3.setValid;
  var valid = validationInput(name, /^[-a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_,.&'\-\s]+$/, inputId, 'gs-input-alert', true);
  setValid(valid);
  return valid;
};
exports.validationInputName = validationInputName;
var validationInputAddress = function validationInputAddress(_ref4) {
  var value = _ref4.value,
    inputId = _ref4.inputId,
    setValid = _ref4.setValid;
  var valid = validationInput(value, /^[a-zA-Z0-9#]+[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_#'()\-.,\s]+$/, inputId, 'gs-input-alert', true);
  setValid(valid);
  return valid;
};
exports.validationInputAddress = validationInputAddress;
var validationInputPostcode = function validationInputPostcode(_ref5) {
  var value = _ref5.value,
    inputId = _ref5.inputId,
    setValid = _ref5.setValid;
  var valid = validationInput(value, /^[a-zA-Z0-9]+[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_#()\-.\s]+$/, inputId, 'gs-input-alert', true);
  setValid(valid);
  return valid;
};
exports.validationInputPostcode = validationInputPostcode;
var validationInputEmail = function validationInputEmail(_ref6) {
  var value = _ref6.value,
    inputId = _ref6.inputId,
    setValid = _ref6.setValid;
  var valid = validationInput(value, /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/, inputId, 'gs-input-alert', true);
  setValid(valid);
  return valid;
};
exports.validationInputEmail = validationInputEmail;
var validationInputPhone = function validationInputPhone(_ref7) {
  var value = _ref7.value,
    inputId = _ref7.inputId,
    setValid = _ref7.setValid;
  var valid = validationInput(value, /^[0-9]{10,20}/, inputId, 'gs-input-alert', true);
  setValid(valid);
  return valid;
};
exports.validationInputPhone = validationInputPhone;
var validationInputPassword = function validationInputPassword(_ref8) {
  var value = _ref8.value,
    inputId = _ref8.inputId,
    setValid = _ref8.setValid;
  var valid = validationInput(value, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, inputId, 'gs-input-alert', true);
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