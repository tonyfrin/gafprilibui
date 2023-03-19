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
exports.useGafpriConfig = void 0;
var react_1 = __importDefault(require("react"));
var helpers_1 = require("../helpers");
function useGafpriConfig() {
    var _a = react_1.default.useReducer(reducer, initialState()), state = _a[0], dispatch = _a[1];
    var isConfig = state.isConfig, isSites = state.isSites, isTypeDucument = state.isTypeDucument, isRoles = state.isRoles, isUser = state.isUser, isCategory = state.isCategory, isProjects = state.isProjects, currencyName = state.currencyName, currencySymbol = state.currencySymbol, currenciesDefault = state.currenciesDefault, currenciesOptions = state.currenciesOptions, validationCurrency = state.validationCurrency, buttonCurrency = state.buttonCurrency;
    /**
     * Actions Set
     *
     *
     */
    var onConfig = function () {
        return dispatch({
            type: actionTypes.isConfig,
        });
    };
    var onSites = function () {
        return dispatch({
            type: actionTypes.isSites,
        });
    };
    //setear los valores de la Currency
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
    //Funciones de validations
    var validationCurrencyValue = function (value) {
        var validation = (0, helpers_1.validationSelect)(value, 'currencyName', 'gs-input-alert');
        setValidationCurrency(validation);
        validationButtonCurrency(validation);
    };
    var validationButtonCurrency = function (value) {
        if (value) {
            (0, helpers_1.removeClass)('nextCurrency', 'gs-disabled');
        }
        else {
            (0, helpers_1.addClass)('nextCurrency', 'gs-disabled');
        }
        setButtonCurrency(value);
    };
    //Funciones de cambio
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
    var nextCurrency = function () {
        if (buttonCurrency) {
            onSites();
        }
    };
    /**
     * Export
     *
     *
     */
    var states = {
        isConfig: isConfig,
        isSites: isSites,
        isTypeDucument: isTypeDucument,
        isRoles: isRoles,
        isUser: isUser,
        isCategory: isCategory,
        isProjects: isProjects,
        currencyName: currencyName,
        currencySymbol: currencySymbol,
        currenciesDefault: currenciesDefault,
        currenciesOptions: currenciesOptions,
        validationCurrency: validationCurrency,
        buttonCurrency: buttonCurrency,
    };
    var actions = {
        onConfig: onConfig,
        nextCurrency: nextCurrency,
        currencyChange: currencyChange,
        validationCurrencyValue: validationCurrencyValue,
        validationButtonCurrency: validationButtonCurrency,
    };
    return {
        states: states,
        actions: actions,
    };
}
exports.useGafpriConfig = useGafpriConfig;
var initialState = function () { return ({
    isConfig: true,
    isSites: false,
    isTypeDucument: false,
    isRoles: false,
    isUser: false,
    isCategory: false,
    isProjects: false,
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
var actionTypes = {
    isConfig: 'CONFIG',
    isSites: 'SITES',
    isTypeDucument: 'TYPE_DOCUMENT',
    isRoles: 'ROLES',
    isUser: 'USER',
    isCategory: 'CATEGORY',
    isProjects: 'PROJECTS',
    currencyName: 'CURRENCY_NAME',
    currencySymbol: 'CURRENCY_SYMBOL',
    currenciesDefault: 'CURRENCY_DEFAULT',
    validationCurrency: 'VALIDATION_CURRENCY',
    buttonCurrency: 'BUTTON_CURRENCY',
};
var reducerObject = (_a = {},
    _a[actionTypes.isConfig] = function (state) { return (__assign(__assign({}, state), { isConfig: true, isSites: false, isTypeDucument: false, isRoles: false, isUser: false, isCategory: false, isProjects: false })); },
    _a[actionTypes.isSites] = function (state) { return (__assign(__assign({}, state), { isConfig: false, isSites: true, isTypeDucument: false, isRoles: false, isUser: false, isCategory: false, isProjects: false })); },
    _a[actionTypes.isTypeDucument] = function (state) { return (__assign(__assign({}, state), { isConfig: false, isSites: false, isTypeDucument: true, isRoles: false, isUser: false, isCategory: false, isProjects: false })); },
    _a[actionTypes.isRoles] = function (state) { return (__assign(__assign({}, state), { isConfig: false, isSites: false, isTypeDucument: false, isRoles: true, isUser: false, isCategory: false, isProjects: false })); },
    _a[actionTypes.isUser] = function (state) { return (__assign(__assign({}, state), { isConfig: false, isSites: false, isTypeDucument: false, isRoles: false, isUser: true, isCategory: false, isProjects: false })); },
    _a[actionTypes.isCategory] = function (state) { return (__assign(__assign({}, state), { isConfig: false, isSites: false, isTypeDucument: false, isRoles: false, isUser: false, isCategory: true, isProjects: false })); },
    _a[actionTypes.isProjects] = function (state) { return (__assign(__assign({}, state), { isConfig: false, isSites: false, isTypeDucument: false, isRoles: false, isUser: false, isCategory: false, isProjects: true })); },
    _a[actionTypes.currencyName] = function (state, payload) { return (__assign(__assign({}, state), { currencyName: payload })); },
    _a[actionTypes.currencySymbol] = function (state, payload) { return (__assign(__assign({}, state), { currencySymbol: payload })); },
    _a[actionTypes.currenciesDefault] = function (state, payload) { return (__assign(__assign({}, state), { currenciesDefault: payload })); },
    _a[actionTypes.validationCurrency] = function (state, payload) { return (__assign(__assign({}, state), { validationCurrency: payload })); },
    _a[actionTypes.buttonCurrency] = function (state, payload) { return (__assign(__assign({}, state), { buttonCurrency: payload })); },
    _a);
var reducer = function (state, action) {
    return reducerObject[action.type](state, action.payload) || state;
};
//# sourceMappingURL=useGafpriConfig.js.map