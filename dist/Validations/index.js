"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validationPhoto = exports.validationInputSku = exports.validationInputSinglePassword = exports.validationInputPassword = exports.validationInputNameLastNameUserName = exports.validationInputDescription = exports.validationInputArray = exports.validationInputAddress = exports.generalValidationUserName = exports.generalValidationStatus = exports.generalValidationSku = exports.generalValidationSinglePassword = exports.generalValidationSelectStateCountry = exports.generalValidationSelectSite = exports.generalValidationSelectCountry = exports.generalValidationSelectCity = exports.generalValidationPostCode = exports.generalValidationPhotoCategory = exports.generalValidationPhoto = exports.generalValidationPassword = exports.generalValidationParentId = exports.generalValidationName = exports.generalValidationLastName = exports.generalValidationGalleryImage = exports.generalValidationDescription = exports.generalValidationButtonNext = exports.generalValidationAddress2 = exports.generalValidationAddress1 = void 0;
var _helpers = require("../helpers");
var _Constans = require("../Constans");
var validationInputNameLastNameUserName = function validationInputNameLastNameUserName(_ref) {
  var value = _ref.value,
    currentValid = _ref.currentValid,
    inputId = _ref.inputId,
    setValid = _ref.setValid,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? true : _ref$required;
  var valid = (0, _helpers.validationInput)(value, /^[-a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_,.&'@-\s]+$/, inputId, required);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};
exports.validationInputNameLastNameUserName = validationInputNameLastNameUserName;
var generalValidationName = function generalValidationName(value, setValid, currentValid) {
  var required = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return validationInputNameLastNameUserName({
    value: value,
    inputId: _Constans.NAME_INPUT,
    setValid: setValid,
    currentValid: currentValid,
    required: required
  });
};
exports.generalValidationName = generalValidationName;
var generalValidationLastName = function generalValidationLastName(value, setValid, currentValid) {
  var required = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return validationInputNameLastNameUserName({
    value: value,
    inputId: _Constans.LAST_NAME_INPUT,
    setValid: setValid,
    currentValid: currentValid,
    required: required
  });
};
exports.generalValidationLastName = generalValidationLastName;
var generalValidationUserName = function generalValidationUserName(value, setValid, currentValid) {
  var required = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return validationInputNameLastNameUserName({
    value: value,
    inputId: _Constans.USER_NAME_INPUT,
    setValid: setValid,
    currentValid: currentValid,
    required: required
  });
};
exports.generalValidationUserName = generalValidationUserName;
var validationInputPassword = function validationInputPassword(_ref2) {
  var value = _ref2.value,
    inputId = _ref2.inputId,
    setValid = _ref2.setValid,
    currentValid = _ref2.currentValid,
    _ref2$required = _ref2.required,
    required = _ref2$required === void 0 ? true : _ref2$required;
  var valid = (0, _helpers.validationInput)(value, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, inputId, required);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};
exports.validationInputPassword = validationInputPassword;
var validationInputSinglePassword = function validationInputSinglePassword(_ref3) {
  var value = _ref3.value,
    inputId = _ref3.inputId,
    setValid = _ref3.setValid,
    _ref3$required = _ref3.required,
    required = _ref3$required === void 0 ? true : _ref3$required;
  var valid = (0, _helpers.validationInput)(value, /^.+$/, inputId, required);
  setValid(valid);
  return valid;
};
exports.validationInputSinglePassword = validationInputSinglePassword;
var generalValidationPassword = function generalValidationPassword(value, setValid, currentValid) {
  var required = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return validationInputPassword({
    value: value,
    inputId: _Constans.PASSWORD_INPUT,
    setValid: setValid,
    currentValid: currentValid,
    required: required
  });
};
exports.generalValidationPassword = generalValidationPassword;
var generalValidationSinglePassword = function generalValidationSinglePassword(value, setValid, currentValid) {
  var required = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return validationInputSinglePassword({
    value: value,
    inputId: _Constans.PASSWORD_INPUT,
    setValid: setValid,
    currentValid: currentValid,
    required: required
  });
};
exports.generalValidationSinglePassword = generalValidationSinglePassword;
var generalValidationButtonNext = function generalValidationButtonNext() {
  for (var _len = arguments.length, validations = new Array(_len), _key = 0; _key < _len; _key++) {
    validations[_key] = arguments[_key];
  }
  var isAllValid = validations.every(function (validation) {
    return validation;
  });
  if (isAllValid) {
    (0, _helpers.removeClass)(_Constans.BUTTON_NEXT_INPUT, _Constans.DISABLED);
  } else {
    (0, _helpers.addClass)(_Constans.BUTTON_NEXT_INPUT, _Constans.DISABLED);
  }
};
exports.generalValidationButtonNext = generalValidationButtonNext;
var validationInputDescription = function validationInputDescription(_ref4) {
  var value = _ref4.value,
    inputId = _ref4.inputId,
    setValid = _ref4.setValid,
    currentValid = _ref4.currentValid,
    _ref4$required = _ref4.required,
    required = _ref4$required === void 0 ? true : _ref4$required;
  var valid = (0, _helpers.validationInput)(value, /^[\s\S]*$/, inputId, required);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};
exports.validationInputDescription = validationInputDescription;
var generalValidationDescription = function generalValidationDescription(value, setValid, currentValid) {
  var required = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return validationInputDescription({
    value: value,
    inputId: _Constans.DESCRIPTION_INPUT,
    setValid: setValid,
    currentValid: currentValid,
    required: required
  });
};
exports.generalValidationDescription = generalValidationDescription;
var validationInputAddress = function validationInputAddress(_ref5) {
  var value = _ref5.value,
    currentValid = _ref5.currentValid,
    inputId = _ref5.inputId,
    setValid = _ref5.setValid,
    _ref5$required = _ref5.required,
    required = _ref5$required === void 0 ? true : _ref5$required;
  var valid = (0, _helpers.validationInput)(value, /^[a-zA-Z0-9#]+[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_#'()\-.,\s]+$/, inputId, required);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};
exports.validationInputAddress = validationInputAddress;
var generalValidationAddress1 = function generalValidationAddress1(value, setValid, currentValid) {
  var required = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return validationInputAddress({
    value: value,
    inputId: _Constans.ADDRESS1_INPUT,
    setValid: setValid,
    currentValid: currentValid,
    required: required
  });
};
exports.generalValidationAddress1 = generalValidationAddress1;
var generalValidationAddress2 = function generalValidationAddress2(value, setValid, currentValid) {
  var required = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  return validationInputAddress({
    value: value,
    inputId: _Constans.ADDRESS2_INPUT,
    setValid: setValid,
    currentValid: currentValid,
    required: required
  });
};
exports.generalValidationAddress2 = generalValidationAddress2;
var generalValidationSelectCity = function generalValidationSelectCity(value, setValid, currentValid) {
  var validation = (0, _helpers.validationSelect)(value, _Constans.CITY_INPUT);
  if (validation !== currentValid) {
    setValid(validation);
  }
  return validation;
};
exports.generalValidationSelectCity = generalValidationSelectCity;
var generalValidationSelectStateCountry = function generalValidationSelectStateCountry(value, setValid, currentValid) {
  var validation = (0, _helpers.validationSelect)(value, _Constans.STATE_COUNTRY_INPUT);
  if (validation !== currentValid) {
    setValid(validation);
  }
  return validation;
};
exports.generalValidationSelectStateCountry = generalValidationSelectStateCountry;
var generalValidationSelectCountry = function generalValidationSelectCountry(value, setValid, currentValid) {
  var validation = (0, _helpers.validationSelect)(value, _Constans.COUNTRY_INPUT);
  if (validation !== currentValid) {
    setValid(validation);
  }
  return validation;
};
exports.generalValidationSelectCountry = generalValidationSelectCountry;
var generalValidationPostCode = function generalValidationPostCode(value, setValid, currentValid) {
  var required = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var valid = (0, _helpers.validationInput)(value, /^[a-zA-Z0-9]+[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_#()\-.\s]+$/, _Constans.ZIP_CODE_INPUT, required);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};
exports.generalValidationPostCode = generalValidationPostCode;
var generalValidationSelectSite = function generalValidationSelectSite(value, setValid, currentValid) {
  var validation = (0, _helpers.validationSelect)(value, _Constans.SITE_INPUT);
  if (validation !== currentValid) {
    setValid(validation);
  }
  return validation;
};
exports.generalValidationSelectSite = generalValidationSelectSite;
var validationInputSku = function validationInputSku(_ref6) {
  var value = _ref6.value,
    inputId = _ref6.inputId,
    currentValid = _ref6.currentValid,
    setValid = _ref6.setValid,
    _ref6$required = _ref6.required,
    required = _ref6$required === void 0 ? true : _ref6$required;
  var valid = (0, _helpers.validationInput)(value, /^[\d-]+$/, inputId, required);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};
exports.validationInputSku = validationInputSku;
var generalValidationSku = function generalValidationSku(value, setValid, currentValid) {
  var required = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return validationInputSku({
    value: value,
    inputId: _Constans.SKU_INPUT,
    setValid: setValid,
    currentValid: currentValid,
    required: required
  });
};
exports.generalValidationSku = generalValidationSku;
var validationPhoto = function validationPhoto(_ref7) {
  var value = _ref7.value,
    inputId = _ref7.inputId,
    currentValid = _ref7.currentValid,
    setValid = _ref7.setValid,
    _ref7$required = _ref7.required,
    required = _ref7$required === void 0 ? true : _ref7$required;
  var valid = (0, _helpers.validationInput)(value, /^(?:(?:[a-z][a-z0-9+-.]*):\/\/)?(?:[a-z0-9_-]+(?::[a-z0-9_-]+)*@)?(?:[a-z0-9.-]+|(?:\[[a-f0-9:.]+\]))(?::\d+)?(?:\/[^\s#?]*(?:\?[^\s#?]*)?(?:#[^\s#?]*)?)?$/i, inputId, required);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};
exports.validationPhoto = validationPhoto;
var generalValidationPhoto = function generalValidationPhoto(value, setValid, currentValid, required, inputId) {
  return validationPhoto({
    value: value,
    inputId: inputId,
    setValid: setValid,
    currentValid: currentValid,
    required: required
  });
};
exports.generalValidationPhoto = generalValidationPhoto;
var generalValidationPhotoCategory = function generalValidationPhotoCategory(value, setValid, currentValid) {
  var required = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return validationPhoto({
    value: value,
    inputId: _Constans.PHOTO_CATEGORY_INPUT,
    setValid: setValid,
    currentValid: currentValid,
    required: required
  });
};
exports.generalValidationPhotoCategory = generalValidationPhotoCategory;
var validationInputArray = function validationInputArray(values, match, componentId) {
  var required = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var allValid = true;
  values.forEach(function (value) {
    var isValid = value && (0, _helpers.validationHidden)(value, match);
    if (required && !isValid) {
      allValid = false;
    }
    if (!required && value && !isValid) {
      allValid = false;
    }
  });
  if (allValid) {
    (0, _helpers.removeClass)(componentId, _Constans.ALERT);
  } else {
    (0, _helpers.addClass)(componentId, _Constans.ALERT);
  }
  return allValid;
};
exports.validationInputArray = validationInputArray;
var generalValidationGalleryImage = function generalValidationGalleryImage(value, setValid, currentValid) {
  var required = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var valid = validationInputArray(value, /^(?:(?:[a-z][a-z0-9+-.]*):\/\/)?(?:[a-z0-9_-]+(?::[a-z0-9_-]+)*@)?(?:[a-z0-9.-]+|(?:\[[a-f0-9:.]+\]))(?::\d+)?(?:\/[^\s#?]*(?:\?[^\s#?]*)?(?:#[^\s#?]*)?)?$/i, _Constans.GALLERY_IMAGE_INPUT, required);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};
exports.generalValidationGalleryImage = generalValidationGalleryImage;
var generalValidationParentId = function generalValidationParentId(newValue, setValid, currentValid) {
  var valid = (0, _helpers.validationSelect)(newValue, _Constans.PARENT_ID_INPUT);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};
exports.generalValidationParentId = generalValidationParentId;
var generalValidationStatus = function generalValidationStatus(newValue, setValid, currentValid) {
  var valid = (0, _helpers.validationSelect)(newValue, _Constans.STATUS_INPUT);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};
exports.generalValidationStatus = generalValidationStatus;