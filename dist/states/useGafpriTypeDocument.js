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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGafpriTypeDocument = void 0;
var react_1 = __importDefault(require("react"));
var helpers_1 = require("../helpers");
var Constans_1 = require("../Constans");
var optionsCountry = [];
Constans_1.Countries.forEach(function (item) {
    Object.keys(item).forEach(function (key) {
        optionsCountry.push({ value: key, label: item[key] });
    });
});
var actionTypes = {
    country: 'COUNTRY',
    countryValid: 'COUNTRY_VALID',
    countryDefault: 'COUNTREY_DEFAULT',
    name: 'NAME',
    nameValid: 'NAME_VALID',
};
var reducerObject = (_a = {},
    _a[actionTypes.country] = function (state, payload) {
        if (typeof payload === 'string') {
            return __assign(__assign({}, state), { country: payload });
        }
        return state;
    },
    _a[actionTypes.countryValid] = function (state, payload) {
        if (typeof payload === 'boolean') {
            return __assign(__assign({}, state), { countryValid: payload });
        }
        return state;
    },
    _a[actionTypes.countryDefault] = function (state, payload) {
        if ((0, helpers_1.isSelectDefault)(payload)) {
            return __assign(__assign({}, state), { countryDefault: payload });
        }
        return state;
    },
    _a[actionTypes.name] = function (state, payload) {
        if (typeof payload === 'string') {
            return __assign(__assign({}, state), { name: payload });
        }
        return state;
    },
    _a[actionTypes.nameValid] = function (state, payload) {
        if (typeof payload === 'boolean') {
            return __assign(__assign({}, state), { nameValid: payload });
        }
        return state;
    },
    _a);
var reducer = function (state, action) {
    var handler = reducerObject[action.type];
    if (handler && action.payload !== undefined) {
        return handler(state, action.payload);
    }
    return state;
};
var initialState = function () { return ({
    country: '',
    countryValid: false,
    countryOptions: optionsCountry,
    countryDefault: {
        label: 'Seleccione el país del documento',
        value: '',
    },
    name: '',
    nameValid: false,
}); };
function useGafpriTypeDocument() {
    var _a = react_1.default.useReducer(reducer, initialState()), state = _a[0], dispatch = _a[1];
    var country = state.country, countryValid = state.countryValid, countryOptions = state.countryOptions, countryDefault = state.countryDefault, name = state.name, nameValid = state.nameValid;
    /**
     * SITES
     *
     *
     */
    // Setear valores de sitio
    var setCountry = function (value) {
        return dispatch({
            type: actionTypes.country,
            payload: value,
        });
    };
    var setCountryValid = function (value) {
        return dispatch({
            type: actionTypes.countryValid,
            payload: value,
        });
    };
    var setCountryDefault = function (value) {
        return dispatch({
            type: actionTypes.countryDefault,
            payload: value,
        });
    };
    var setName = function (value) {
        return dispatch({
            type: actionTypes.name,
            payload: value,
        });
    };
    var setNameValid = function (value) {
        return dispatch({
            type: actionTypes.nameValid,
            payload: value,
        });
    };
    // Funciones de Validacion
    var validationCountry = function (value) {
        var validation = (0, helpers_1.validationSelect)(value, 'countryTypeDocument', 'gs-input-alert');
        setCountryValid(validation);
        return validation;
    };
    var validationName = function (value) {
        var valid = (0, helpers_1.validationInput)(value, /^[-a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_,.&'\-\s]+$/, 'nameTypeDocument', 'gs-input-alert', true);
        setNameValid(valid);
        return valid;
    };
    var validationButtonNext = function () {
        if (countryValid && nameValid) {
            (0, helpers_1.removeClass)('buttonNextTypeDocument', 'gs-disabled');
        }
        else {
            (0, helpers_1.addClass)('buttonNextTypeDocument', 'gs-disabled');
        }
    };
    // Funciones de cambios
    var changeCountry = function (options) {
        (0, helpers_1.changeSelect)({
            newValue: options,
            validation: validationCountry,
            setDefault: setCountryDefault,
            setValue: setCountry,
        });
    };
    var changeName = function (value) {
        var newName = value.toLocaleUpperCase();
        (0, helpers_1.changeInputText)({
            value: newName,
            validation: validationName,
            setValue: setName,
        });
    };
    /**
     * Export
     *
     *
     */
    var states = {
        country: country,
        countryValid: countryValid,
        countryOptions: countryOptions,
        countryDefault: countryDefault,
        name: name,
        nameValid: nameValid,
    };
    var actions = {
        changeCountry: changeCountry,
        validationCountry: validationCountry,
        changeName: changeName,
        validationName: validationName,
        validationButtonNext: validationButtonNext,
    };
    return {
        states: states,
        actions: actions,
    };
}
exports.useGafpriTypeDocument = useGafpriTypeDocument;
//# sourceMappingURL=useGafpriTypeDocument.js.map