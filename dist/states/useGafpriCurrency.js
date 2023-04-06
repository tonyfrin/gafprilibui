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
exports.useGafpriCurrency = void 0;
var react_1 = __importDefault(require("react"));
var helpers_1 = require("../helpers");
var actionTypes = {
    currencyName: 'CURRENCY_NAME',
    currencySymbol: 'CURRENCY_SYMBOL',
    currenciesDefault: 'CURRENCY_DEFAULT',
    validationCurrency: 'VALIDATION_CURRENCY',
    buttonCurrency: 'BUTTON_CURRENCY',
};
var reducerObject = (_a = {},
    _a[actionTypes.currencyName] = function (state, payload) {
        if (typeof payload === 'string') {
            return __assign(__assign({}, state), { currencyName: payload });
        }
        return state;
    },
    _a[actionTypes.currencySymbol] = function (state, payload) {
        if (typeof payload === 'string') {
            return __assign(__assign({}, state), { currencySymbol: payload });
        }
        return state;
    },
    _a[actionTypes.currenciesDefault] = function (state, payload) {
        if (typeof payload === 'object') {
            return __assign(__assign({}, state), { currenciesDefault: payload });
        }
        return state;
    },
    _a[actionTypes.validationCurrency] = function (state, payload) {
        if (typeof payload === 'boolean') {
            return __assign(__assign({}, state), { validationCurrency: payload });
        }
        return state;
    },
    _a[actionTypes.buttonCurrency] = function (state, payload) {
        if (typeof payload === 'boolean') {
            return __assign(__assign({}, state), { buttonCurrency: payload });
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
    currencyName: '',
    currencySymbol: '',
    currenciesDefault: {
        value: '',
        label: 'Seleccione tipo de Moneda',
    },
    currenciesOptions: [
        { label: 'Dólares Americanos', value: 'usd' },
        { label: 'Bolívares', value: 'bsd' },
        { label: 'Euros', value: 'eur' },
    ],
    validationCurrency: false,
    buttonCurrency: false,
}); };
function useGafpriCurrency() {
    var _a = react_1.default.useReducer(reducer, initialState()), state = _a[0], dispatch = _a[1];
    var 
    // currency
    currencyName = state.currencyName, currencySymbol = state.currencySymbol, currenciesDefault = state.currenciesDefault, currenciesOptions = state.currenciesOptions, validationCurrency = state.validationCurrency, buttonCurrency = state.buttonCurrency;
    /**
     * CURRENCY
     *
     *
     */
    // setear los valores de la Currencies
    var setCurrenciesName = function (value) {
        return dispatch({
            type: actionTypes.currencyName,
            payload: value,
        });
    };
    var setCurrenciesSymbol = function (value) {
        return dispatch({
            type: actionTypes.currencySymbol,
            payload: value,
        });
    };
    var setCurrenciesDefault = function (value) {
        return dispatch({
            type: actionTypes.currenciesDefault,
            payload: value,
        });
    };
    var setValidationCurrency = function (value) {
        return dispatch({
            type: actionTypes.validationCurrency,
            payload: value,
        });
    };
    var setButtonCurrency = function (value) {
        return dispatch({
            type: actionTypes.buttonCurrency,
            payload: value,
        });
    };
    // Funciones de validations
    var validationButtonCurrency = function (value) {
        if (value) {
            (0, helpers_1.removeClass)('nextCurrency', 'gs-disabled');
        }
        else {
            (0, helpers_1.addClass)('nextCurrency', 'gs-disabled');
        }
        setButtonCurrency(value);
    };
    var validationCurrencyValue = function (value) {
        var validation = (0, helpers_1.validationSelect)(value, 'currencyName', 'gs-input-alert');
        setValidationCurrency(validation);
        validationButtonCurrency(validation);
    };
    // Funciones de cambio
    var currencyChange = function (newValue) {
        var name = '';
        var symbol = '';
        var defaultValue = {
            value: '',
            label: 'Seleccione tipo de Moneda',
        };
        if ((newValue === null || newValue === void 0 ? void 0 : newValue.value) && newValue.value === 'usd') {
            name = 'Dólares Américanos';
            symbol = '$';
            defaultValue = {
                value: 'usd',
                label: name,
            };
        }
        else if ((newValue === null || newValue === void 0 ? void 0 : newValue.value) && newValue.value === 'bsd') {
            name = 'Bolívares';
            symbol = 'BsD';
            defaultValue = {
                value: 'bsd',
                label: name,
            };
        }
        else if ((newValue === null || newValue === void 0 ? void 0 : newValue.value) && newValue.value === 'eur') {
            name = 'Euro';
            symbol = '€';
            defaultValue = {
                value: 'eur',
                label: name,
            };
        }
        setCurrenciesName(name);
        setCurrenciesSymbol(symbol);
        setCurrenciesDefault(defaultValue);
        validationCurrencyValue(symbol);
    };
    /**
     * Export
     *
     *
     */
    var states = {
        currencyName: currencyName,
        currencySymbol: currencySymbol,
        currenciesDefault: currenciesDefault,
        currenciesOptions: currenciesOptions,
        validationCurrency: validationCurrency,
        buttonCurrency: buttonCurrency,
    };
    var actions = {
        currencyChange: currencyChange,
        validationCurrencyValue: validationCurrencyValue,
        validationButtonCurrency: validationButtonCurrency,
    };
    return {
        states: states,
        actions: actions,
    };
}
exports.useGafpriCurrency = useGafpriCurrency;
//# sourceMappingURL=useGafpriCurrency.js.map