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
exports.useGafpriSitesConfig = void 0;
var react_1 = __importDefault(require("react"));
var helpers_1 = require("../helpers");
var actionTypes = {
    currency: 'CURRENCY',
    currencyValid: 'CURRENCY_VALID',
    currencyDefault: 'CURRENCY_DEFAULT',
    currencyLocation: 'CURRENCY_LOCATION',
    currencyLocationValid: 'CURRENCY_LOCATION_VALID',
    currencyLocationDefault: 'CURRENCY_LOCATION_DEFAULT',
    thousandsSeparator: 'THOUSANDS_SEPARATOR',
    decimalSeparator: 'DECIMAL_SEPARATOR',
    separatorValid: 'SEPARATOR_VALID',
    separatorDefault: 'SEPARATOR_DEFAULT',
    decimalNumbers: 'DECIMAL_NUMBERS',
    decimalNumbersValid: 'DECIMAL_NUMBERS_VALID',
    decimalNumbersDefault: 'DECIMAL_NUMBERS_DEFAULT',
    taxes: 'TAXES',
    taxesValid: 'TAXES_VALID',
    taxesDefault: 'TAXES_DEFAULT',
    host: 'HOST',
    hostValid: 'HOST_VALID',
};
var reducerObject = (_a = {},
    _a[actionTypes.currency] = function (state, payload) {
        if (typeof payload === 'string') {
            return __assign(__assign({}, state), { currency: payload });
        }
        return state;
    },
    _a[actionTypes.currencyValid] = function (state, payload) {
        if (typeof payload === 'boolean') {
            return __assign(__assign({}, state), { currencyValid: payload });
        }
        return state;
    },
    _a[actionTypes.currencyDefault] = function (state, payload) {
        if ((0, helpers_1.isSelectDefault)(payload)) {
            return __assign(__assign({}, state), { currencyDefault: payload });
        }
        return state;
    },
    _a[actionTypes.currencyLocation] = function (state, payload) {
        if (typeof payload === 'string') {
            return __assign(__assign({}, state), { currencyLocation: payload });
        }
        return state;
    },
    _a[actionTypes.currencyLocationValid] = function (state, payload) {
        if (typeof payload === 'boolean') {
            return __assign(__assign({}, state), { currencyLocationValid: payload });
        }
        return state;
    },
    _a[actionTypes.currencyLocationDefault] = function (state, payload) {
        if ((0, helpers_1.isSelectDefault)(payload)) {
            return __assign(__assign({}, state), { currencyLocationDefault: payload });
        }
        return state;
    },
    _a[actionTypes.thousandsSeparator] = function (state, payload) {
        if (typeof payload === 'string') {
            return __assign(__assign({}, state), { thousandsSeparator: payload });
        }
        return state;
    },
    _a[actionTypes.decimalSeparator] = function (state, payload) {
        if (typeof payload === 'string') {
            return __assign(__assign({}, state), { decimalSeparator: payload });
        }
        return state;
    },
    _a[actionTypes.separatorValid] = function (state, payload) {
        if (typeof payload === 'boolean') {
            return __assign(__assign({}, state), { separatorValid: payload });
        }
        return state;
    },
    _a[actionTypes.separatorDefault] = function (state, payload) {
        if ((0, helpers_1.isSelectDefault)(payload)) {
            return __assign(__assign({}, state), { separatorDefault: payload });
        }
        return state;
    },
    _a[actionTypes.decimalNumbers] = function (state, payload) {
        if (typeof payload === 'string') {
            return __assign(__assign({}, state), { decimalNumbers: payload });
        }
        return state;
    },
    _a[actionTypes.decimalNumbersValid] = function (state, payload) {
        if (typeof payload === 'boolean') {
            return __assign(__assign({}, state), { decimalNumbersValid: payload });
        }
        return state;
    },
    _a[actionTypes.decimalNumbersDefault] = function (state, payload) {
        if ((0, helpers_1.isSelectDefault)(payload)) {
            return __assign(__assign({}, state), { decimalNumbersDefault: payload });
        }
        return state;
    },
    _a[actionTypes.taxes] = function (state, payload) {
        if (typeof payload === 'string') {
            return __assign(__assign({}, state), { taxes: payload });
        }
        return state;
    },
    _a[actionTypes.taxesValid] = function (state, payload) {
        if (typeof payload === 'boolean') {
            return __assign(__assign({}, state), { decimalNumbersValid: payload });
        }
        return state;
    },
    _a[actionTypes.taxesDefault] = function (state, payload) {
        if ((0, helpers_1.isSelectDefault)(payload)) {
            return __assign(__assign({}, state), { taxesDefault: payload });
        }
        return state;
    },
    _a[actionTypes.host] = function (state, payload) {
        if (typeof payload === 'string') {
            return __assign(__assign({}, state), { host: payload });
        }
        return state;
    },
    _a[actionTypes.hostValid] = function (state, payload) {
        if (typeof payload === 'boolean') {
            return __assign(__assign({}, state), { decimalNumbersValid: payload });
        }
        return state;
    },
    _a);
var reducer = function (state, action) {
    return reducerObject[action.type](state, action.payload) || state;
};
var initialState = function () { return ({
    currency: '',
    currencyValid: false,
    currencyOptions: [
        {
            label: 'Seleccionada',
            value: '1',
        },
    ],
    currencyDefault: {
        label: 'Selecciona tipo de moneda',
        value: '',
    },
    currencyLocation: '',
    currencyLocationValid: false,
    currencyLocationOptions: [
        { label: 'Izquierda', value: 'left' },
        { label: 'Derecha', value: 'right' },
    ],
    currencyLocationDefault: {
        label: 'Selecciona la posición de la moneda',
        value: '',
    },
    thousandsSeparator: '',
    decimalSeparator: '',
    separatorValid: false,
    separatorOptions: [
        { label: 'Miles: " . "    Decimal: " , "', value: '.' },
        { label: 'Miles: " , "    Decimal: " . "', value: ',' },
    ],
    separatorDefault: {
        label: 'Selecciona los separadores',
        value: '',
    },
    decimalNumbers: '',
    decimalNumbersValid: false,
    decimalNumbersOptions: [
        { label: '0', value: '0' },
        { label: '2', value: '2' },
    ],
    decimalNumbersDefault: {
        label: 'Selecciona el número de decimales',
        value: '',
    },
    taxes: '',
    taxesValid: false,
    taxesOptions: [
        { label: 'Si trabaja con impuestos', value: 'true' },
        { label: 'No trabaja con impuestos', value: 'false' },
    ],
    taxesDefault: {
        label: 'Selecciona los impuestos',
        value: '',
    },
    host: '',
    hostValid: false,
}); };
function useGafpriSitesConfig() {
    var _a = react_1.default.useReducer(reducer, initialState()), state = _a[0], dispatch = _a[1];
    var currency = state.currency, currencyValid = state.currencyValid, currencyOptions = state.currencyOptions, currencyDefault = state.currencyDefault, currencyLocation = state.currencyLocation, currencyLocationValid = state.currencyLocationValid, currencyLocationOptions = state.currencyLocationOptions, currencyLocationDefault = state.currencyLocationDefault, thousandsSeparator = state.thousandsSeparator, decimalSeparator = state.decimalSeparator, separatorValid = state.separatorValid, separatorOptions = state.separatorOptions, separatorDefault = state.separatorDefault, decimalNumbers = state.decimalNumbers, decimalNumbersValid = state.decimalNumbersValid, decimalNumbersOptions = state.decimalNumbersOptions, decimalNumbersDefault = state.decimalNumbersDefault, taxes = state.taxes, taxesValid = state.taxesValid, taxesOptions = state.taxesOptions, taxesDefault = state.taxesDefault, host = state.host, hostValid = state.hostValid;
    /**
     * SITES
     *
     *
     */
    // Setear valores de sitio
    var setCurrency = function (value) {
        return dispatch({
            type: actionTypes.currency,
            payload: value,
        });
    };
    var setCurrencyValid = function (value) {
        return dispatch({
            type: actionTypes.currencyValid,
            payload: value,
        });
    };
    var setCurrencyDefault = function (value) {
        return dispatch({
            type: actionTypes.currencyDefault,
            payload: value,
        });
    };
    var setCurrencyLocation = function (value) {
        return dispatch({
            type: actionTypes.currencyLocation,
            payload: value,
        });
    };
    var setCurrencyLocationValid = function (value) {
        return dispatch({
            type: actionTypes.currencyLocationValid,
            payload: value,
        });
    };
    var setCurrencyLocationDefault = function (value) {
        return dispatch({
            type: actionTypes.currencyLocationDefault,
            payload: value,
        });
    };
    var setThousandsSeparator = function (value) {
        return dispatch({
            type: actionTypes.thousandsSeparator,
            payload: value,
        });
    };
    var setDecimalSeparator = function (value) {
        return dispatch({
            type: actionTypes.decimalSeparator,
            payload: value,
        });
    };
    var setSeparatorValid = function (value) {
        return dispatch({
            type: actionTypes.separatorValid,
            payload: value,
        });
    };
    var setSeparatorDefault = function (value) {
        return dispatch({
            type: actionTypes.separatorDefault,
            payload: value,
        });
    };
    var setSeparator = function (value) {
        if (value === '.') {
            setThousandsSeparator('.');
            setDecimalSeparator(',');
        }
        else if (value === ',') {
            setThousandsSeparator(',');
            setDecimalSeparator('.');
        }
    };
    var setDecimalNumbers = function (value) {
        return dispatch({
            type: actionTypes.decimalNumbers,
            payload: value,
        });
    };
    var setDecimalNumbersValid = function (value) {
        return dispatch({
            type: actionTypes.decimalNumbersValid,
            payload: value,
        });
    };
    var setDecimalNumbersDefault = function (value) {
        return dispatch({
            type: actionTypes.decimalNumbersDefault,
            payload: value,
        });
    };
    var setTaxes = function (value) {
        return dispatch({
            type: actionTypes.taxes,
            payload: value,
        });
    };
    var setTaxesValid = function (value) {
        return dispatch({
            type: actionTypes.taxesValid,
            payload: value,
        });
    };
    var setTaxesDefault = function (value) {
        return dispatch({
            type: actionTypes.taxesDefault,
            payload: value,
        });
    };
    var setHost = function (value) {
        return dispatch({
            type: actionTypes.host,
            payload: value,
        });
    };
    var setHostValid = function (value) {
        return dispatch({
            type: actionTypes.hostValid,
            payload: value,
        });
    };
    // Funciones de Validacion
    var validationCurrency = function (value) {
        var validation = (0, helpers_1.validationSelect)(value, 'currencySite', 'gs-input-alert');
        setCurrencyValid(validation);
        return validation;
    };
    var validationCurrencyLocation = function (value) {
        var validation = (0, helpers_1.validationSelect)(value, 'currencyLocationSite', 'gs-input-alert');
        setCurrencyLocationValid(validation);
        return validation;
    };
    var validationSeparator = function (value) {
        var validation = (0, helpers_1.validationSelect)(value, 'separatorSite', 'gs-input-alert');
        setSeparatorValid(validation);
        return validation;
    };
    var validationDecimalNumbers = function (value) {
        var validation = (0, helpers_1.validationSelect)(value, 'decimalNumbersSite', 'gs-input-alert');
        setDecimalNumbersValid(validation);
        return validation;
    };
    var validationTaxes = function (value) {
        var validation = (0, helpers_1.validationSelect)(value, 'taxesSite', 'gs-input-alert');
        setTaxesValid(validation);
        return validation;
    };
    var validationHost = function (name) {
        var valid = (0, helpers_1.validationInput)(name, /^[-a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_,.&:/'\-\s]+$/, 'hostSite', 'gs-input-alert', true);
        setHostValid(valid);
        return valid;
    };
    var validationButtonNext = function () {
        if (currencyValid &&
            currencyLocationValid &&
            separatorValid &&
            decimalNumbersValid &&
            taxesValid &&
            hostValid) {
            (0, helpers_1.removeClass)('buttonNextConfigSite', 'gs-disabled');
        }
        else {
            (0, helpers_1.addClass)('buttonNextConfigSite', 'gs-disabled');
        }
    };
    // Funciones de cambios
    var changeCurrency = function (options) {
        (0, helpers_1.changeSelect)({
            newValue: options,
            validation: validationCurrency,
            setDefault: setCurrencyDefault,
            setValue: setCurrency,
        });
    };
    var changeCurrencyLocation = function (options) {
        (0, helpers_1.changeSelect)({
            newValue: options,
            validation: validationCurrencyLocation,
            setDefault: setCurrencyLocationDefault,
            setValue: setCurrencyLocation,
        });
    };
    var changeSeparator = function (options) {
        (0, helpers_1.changeSelect)({
            newValue: options,
            validation: validationSeparator,
            setDefault: setSeparatorDefault,
            setValue: setSeparator,
        });
    };
    var changeDecimalNumbers = function (options) {
        (0, helpers_1.changeSelect)({
            newValue: options,
            validation: validationDecimalNumbers,
            setDefault: setDecimalNumbersDefault,
            setValue: setDecimalNumbers,
        });
    };
    var changeTaxes = function (options) {
        (0, helpers_1.changeSelect)({
            newValue: options,
            validation: validationTaxes,
            setDefault: setTaxesDefault,
            setValue: setTaxes,
        });
    };
    var changeHost = function (value) {
        var NewHost = value.toLocaleLowerCase();
        (0, helpers_1.changeInputText)({
            value: NewHost,
            validation: validationHost,
            setValue: setHost,
        });
    };
    /**
     * Export
     *
     *
     */
    var states = {
        currency: currency,
        currencyValid: currencyValid,
        currencyOptions: currencyOptions,
        currencyDefault: currencyDefault,
        currencyLocation: currencyLocation,
        currencyLocationValid: currencyLocationValid,
        currencyLocationOptions: currencyLocationOptions,
        currencyLocationDefault: currencyLocationDefault,
        thousandsSeparator: thousandsSeparator,
        decimalSeparator: decimalSeparator,
        separatorValid: separatorValid,
        separatorOptions: separatorOptions,
        separatorDefault: separatorDefault,
        decimalNumbers: decimalNumbers,
        decimalNumbersValid: decimalNumbersValid,
        decimalNumbersOptions: decimalNumbersOptions,
        decimalNumbersDefault: decimalNumbersDefault,
        taxes: taxes,
        taxesValid: taxesValid,
        taxesOptions: taxesOptions,
        taxesDefault: taxesDefault,
        host: host,
        hostValid: hostValid,
    };
    var actions = {
        changeCurrency: changeCurrency,
        validationCurrency: validationCurrency,
        changeCurrencyLocation: changeCurrencyLocation,
        validationCurrencyLocation: validationCurrencyLocation,
        changeSeparator: changeSeparator,
        validationSeparator: validationSeparator,
        changeDecimalNumbers: changeDecimalNumbers,
        validationDecimalNumbers: validationDecimalNumbers,
        changeTaxes: changeTaxes,
        validationTaxes: validationTaxes,
        changeHost: changeHost,
        validationHost: validationHost,
        validationButtonNext: validationButtonNext,
    };
    return {
        states: states,
        actions: actions,
    };
}
exports.useGafpriSitesConfig = useGafpriSitesConfig;
//# sourceMappingURL=useGafpriSitesConfig.js.map