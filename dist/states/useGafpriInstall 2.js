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
exports.useGafpriInstall = void 0;
var react_1 = __importDefault(require("react"));
var useGafpriSites_1 = require("./useGafpriSites");
var useGafpriCurrency_1 = require("./useGafpriCurrency");
function useGafpriInstall() {
    var useCurrency = (0, useGafpriCurrency_1.useGafpriCurrency)();
    var useSites = (0, useGafpriSites_1.useGafpriSites)();
    var _a = react_1.default.useReducer(reducer, initialState()), state = _a[0], dispatch = _a[1];
    var 
    //state
    isConfig = state.isConfig, isSites = state.isSites, isTypeDucument = state.isTypeDucument, isRoles = state.isRoles, isUser = state.isUser, isCategory = state.isCategory, isProjects = state.isProjects;
    /**
     * CURRENCY
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
    var nextCurrency = function () {
        if (useCurrency.states.buttonCurrency) {
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
    };
    var actions = {
        onConfig: onConfig,
        nextCurrency: nextCurrency,
    };
    return {
        states: states,
        actions: actions,
        useCurrency: useCurrency,
        useSites: useSites,
    };
}
exports.useGafpriInstall = useGafpriInstall;
var initialState = function () { return ({
    isConfig: true,
    isSites: false,
    isTypeDucument: false,
    isRoles: false,
    isUser: false,
    isCategory: false,
    isProjects: false,
}); };
var actionTypes = {
    isConfig: 'CONFIG',
    isSites: 'SITES',
    isTypeDucument: 'TYPE_DOCUMENT',
    isRoles: 'ROLES',
    isUser: 'USER',
    isCategory: 'CATEGORY',
    isProjects: 'PROJECTS',
};
var reducerObject = (_a = {},
    _a[actionTypes.isConfig] = function (state) { return (__assign(__assign({}, state), { isConfig: true, isSites: false, isTypeDucument: false, isRoles: false, isUser: false, isCategory: false, isProjects: false })); },
    _a[actionTypes.isSites] = function (state) { return (__assign(__assign({}, state), { isConfig: false, isSites: true, isTypeDucument: false, isRoles: false, isUser: false, isCategory: false, isProjects: false })); },
    _a[actionTypes.isTypeDucument] = function (state) { return (__assign(__assign({}, state), { isConfig: false, isSites: false, isTypeDucument: true, isRoles: false, isUser: false, isCategory: false, isProjects: false })); },
    _a[actionTypes.isRoles] = function (state) { return (__assign(__assign({}, state), { isConfig: false, isSites: false, isTypeDucument: false, isRoles: true, isUser: false, isCategory: false, isProjects: false })); },
    _a[actionTypes.isUser] = function (state) { return (__assign(__assign({}, state), { isConfig: false, isSites: false, isTypeDucument: false, isRoles: false, isUser: true, isCategory: false, isProjects: false })); },
    _a[actionTypes.isCategory] = function (state) { return (__assign(__assign({}, state), { isConfig: false, isSites: false, isTypeDucument: false, isRoles: false, isUser: false, isCategory: true, isProjects: false })); },
    _a[actionTypes.isProjects] = function (state) { return (__assign(__assign({}, state), { isConfig: false, isSites: false, isTypeDucument: false, isRoles: false, isUser: false, isCategory: false, isProjects: true })); },
    _a);
var reducer = function (state, action) {
    return reducerObject[action.type](state, action.payload) || state;
};
//# sourceMappingURL=useGafpriInstall.js.map