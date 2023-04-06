"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSelectDefaultArray = exports.isSelectDefault = exports.gafpriFetch = exports.validationInputPassword = exports.validationInputPhone = exports.validationInputEmail = exports.validationInputPostcode = exports.validationInputAddress = exports.validationInputName = exports.changeSelect = exports.toTitleCase = exports.changeInputText = exports.validationInput = exports.validationHidden = exports.validationSelect = exports.removeClass = exports.addClass = void 0;
var addClass = function (element, className) {
    var input = document.getElementById(element);
    if (input && input.classList && !input.classList.contains(className)) {
        input.classList.add(className);
    }
};
exports.addClass = addClass;
var removeClass = function (element, className) {
    var input = document.getElementById(element);
    if (input && input.classList && input.classList.contains(className)) {
        input.classList.remove(className);
    }
};
exports.removeClass = removeClass;
var validationSelect = function (value, componentId, className) {
    if (value === '') {
        (0, exports.addClass)(componentId, className);
        return false;
    }
    (0, exports.removeClass)(componentId, className);
    return true;
};
exports.validationSelect = validationSelect;
function validationHidden(value, validate) {
    return validate.test(value);
}
exports.validationHidden = validationHidden;
var validationInput = function (value, match, componentId, className, required) {
    if (required === void 0) { required = false; }
    var valid = validationHidden(value, match);
    if (required && (!valid || !value)) {
        (0, exports.addClass)(componentId, className);
        return false;
    }
    if (value && valid) {
        (0, exports.removeClass)(componentId, className);
        return true;
    }
    if (!required && !value) {
        (0, exports.removeClass)(componentId, className);
        return true;
    }
    (0, exports.addClass)(componentId, className);
    return false;
};
exports.validationInput = validationInput;
var changeInputText = function (_a) {
    var value = _a.value, validation = _a.validation, setValue = _a.setValue;
    var newValue = '';
    var valid = validation(value);
    if (valid) {
        newValue = value;
    }
    setValue(newValue);
};
exports.changeInputText = changeInputText;
function toTitleCase(str) {
    return str
        .toLocaleLowerCase()
        .replace(/(^|\s|\.|,|&)[a-z\u00E0-\u00FF]/g, function (match) {
        return match.toUpperCase();
    });
}
exports.toTitleCase = toTitleCase;
var changeSelect = function (_a) {
    var newValue = _a.newValue, validation = _a.validation, setDefault = _a.setDefault, setValue = _a.setValue;
    if (newValue != null) {
        var valid = validation(newValue.value);
        if (valid) {
            var newDefaulValue = {
                label: newValue.label,
                value: newValue.value,
            };
            setDefault(newDefaulValue);
            setValue(newValue.value);
        }
    }
};
exports.changeSelect = changeSelect;
var validationInputName = function (_a) {
    var name = _a.name, inputId = _a.inputId, setValid = _a.setValid;
    var valid = (0, exports.validationInput)(name, /^[-a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_,.&'\-\s]+$/, inputId, 'gs-input-alert', true);
    setValid(valid);
    return valid;
};
exports.validationInputName = validationInputName;
var validationInputAddress = function (_a) {
    var value = _a.value, inputId = _a.inputId, setValid = _a.setValid;
    var valid = (0, exports.validationInput)(value, /^[a-zA-Z0-9#]+[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_#'()\-.,\s]+$/, inputId, 'gs-input-alert', true);
    setValid(valid);
    return valid;
};
exports.validationInputAddress = validationInputAddress;
var validationInputPostcode = function (_a) {
    var value = _a.value, inputId = _a.inputId, setValid = _a.setValid;
    var valid = (0, exports.validationInput)(value, /^[a-zA-Z0-9]+[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_#()\-.\s]+$/, inputId, 'gs-input-alert', true);
    setValid(valid);
    return valid;
};
exports.validationInputPostcode = validationInputPostcode;
var validationInputEmail = function (_a) {
    var value = _a.value, inputId = _a.inputId, setValid = _a.setValid;
    var valid = (0, exports.validationInput)(value, /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/, inputId, 'gs-input-alert', true);
    setValid(valid);
    return valid;
};
exports.validationInputEmail = validationInputEmail;
var validationInputPhone = function (_a) {
    var value = _a.value, inputId = _a.inputId, setValid = _a.setValid;
    var valid = (0, exports.validationInput)(value, /^[0-9]{10,20}/, inputId, 'gs-input-alert', true);
    setValid(valid);
    return valid;
};
exports.validationInputPhone = validationInputPhone;
var validationInputPassword = function (_a) {
    var value = _a.value, inputId = _a.inputId, setValid = _a.setValid;
    var valid = (0, exports.validationInput)(value, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, inputId, 'gs-input-alert', true);
    setValid(valid);
    return valid;
};
exports.validationInputPassword = validationInputPassword;
function gafpriFetch(_a) {
    var initMethod = _a.initMethod, initApi = _a.initApi, initRoute = _a.initRoute, initToken = _a.initToken, initCredentials = _a.initCredentials, functionFetching = _a.functionFetching, functionSuccess = _a.functionSuccess, functionError = _a.functionError;
    if (functionFetching !== undefined) {
        functionFetching();
    }
    var headers = {
        'Content-Type': 'application/json',
    };
    if (initToken !== undefined) {
        headers = __assign(__assign({}, headers), { Authorization: "Bearer ".concat(initToken.token) });
    }
    var options = {
        method: initMethod,
        headers: headers,
        body: JSON.stringify(initCredentials),
    };
    fetch("".concat(initApi, "/").concat(initRoute), options)
        .then(function (response) { return response.json(); })
        .then(function (data) {
        if (data.success) {
            if (functionSuccess !== undefined) {
                functionSuccess(data);
            }
        }
        else if (functionError !== undefined) {
            functionError(data);
        }
    })
        .catch(function (error) {
        if (functionError !== undefined) {
            functionError(error);
        }
    });
}
exports.gafpriFetch = gafpriFetch;
var isSelectDefault = function (obj) {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    var selectDefaultCandidate = obj;
    return (typeof selectDefaultCandidate.value === 'string' &&
        typeof selectDefaultCandidate.label === 'string');
};
exports.isSelectDefault = isSelectDefault;
var isSelectDefaultArray = function (obj) {
    if (!Array.isArray(obj)) {
        return false;
    }
    return obj.every(exports.isSelectDefault);
};
exports.isSelectDefaultArray = isSelectDefaultArray;
//# sourceMappingURL=index.js.map