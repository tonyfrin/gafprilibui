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
exports.useGafpriSites = void 0;
var react_1 = __importDefault(require("react"));
var helpers_1 = require("../helpers");
function useGafpriSites() {
    var _a = react_1.default.useReducer(reducer, initialState()), state = _a[0], dispatch = _a[1];
    var siteName = state.siteName, validSiteName = state.validSiteName, siteNameDefault = state.siteNameDefault, siteDocumentIndex = state.siteDocumentIndex, validSiteDocumentIndex = state.validSiteDocumentIndex, siteDocumentIndexOptions = state.siteDocumentIndexOptions, siteDocumentIndexDefault = state.siteDocumentIndexDefault;
    /**
     * SITES
     *
     *
     */
    //Setear valores de sitio
    var setSiteName = function (value) {
        return dispatch({
            type: actionTypes.siteName,
            payload: value,
        });
    };
    var setValidSiteName = function (value) {
        return dispatch({
            type: actionTypes.validSiteName,
            payload: value,
        });
    };
    var setSiteNameDefault = function (value) {
        return dispatch({
            type: actionTypes.siteNameDefault,
            payload: value,
        });
    };
    var setSiteDocumentIndex = function (value) {
        return dispatch({
            type: actionTypes.siteDocumentIndex,
            payload: value,
        });
    };
    var setValidSiteDocumentIndex = function (value) {
        return dispatch({
            type: actionTypes.validSiteDocumentIndex,
            payload: value,
        });
    };
    var setSiteDocumentIndexDefault = function (value) {
        return dispatch({
            type: actionTypes.siteDocumentIndexDefault,
            payload: value,
        });
    };
    //Funciones de Validacion
    var validationSiteName = function (name) {
        var valid = (0, helpers_1.validationInput)(name, /^[-a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_,.'\-\s]+$/, 'siteName', 'gs-input-alert', true);
        setValidSiteName(valid);
        return valid;
    };
    var validationSiteDocumentIndex = function (value) {
        var validation = (0, helpers_1.validationSelect)(value, 'siteDocumentIndex', 'gs-input-alert');
        setValidSiteDocumentIndex(validation);
        return validation;
    };
    //Funciones de cambios
    var changeSiteName = function (name) {
        var newName = '';
        var valid = validationSiteName(name);
        if (valid) {
            newName = name;
        }
        setSiteName(newName);
        setSiteNameDefault(newName);
    };
    var changeSiteDocumentIndex = function (newValue) {
        if (newValue != null) {
            var valid = validationSiteDocumentIndex(newValue.value);
            if (valid) {
                var newDefaulValue = {
                    label: newValue.label,
                    value: newValue.value,
                };
                setSiteDocumentIndexDefault(newDefaulValue);
                setSiteDocumentIndex(newValue.value);
            }
        }
    };
    /**
     * Export
     *
     *
     */
    var states = {
        siteName: siteName,
        validSiteName: validSiteName,
        siteDocumentIndex: siteDocumentIndex,
        validSiteDocumentIndex: validSiteDocumentIndex,
        siteDocumentIndexOptions: siteDocumentIndexOptions,
        siteNameDefault: siteNameDefault,
        siteDocumentIndexDefault: siteDocumentIndexDefault,
    };
    var actions = {
        changeSiteName: changeSiteName,
        validationSiteName: validationSiteName,
        changeSiteDocumentIndex: changeSiteDocumentIndex,
        validationSiteDocumentIndex: validationSiteDocumentIndex,
    };
    return {
        states: states,
        actions: actions,
    };
}
exports.useGafpriSites = useGafpriSites;
var initialState = function () { return ({
    siteName: '',
    validSiteName: false,
    siteDocumentIndex: '',
    validSiteDocumentIndex: false,
    siteDocumentIndexOptions: [
        { label: 'J', value: 'J' },
        { label: 'V', value: 'V' },
        { label: 'G', value: 'G' },
        { label: 'No Aplica', value: 'null' },
    ],
    siteNameDefault: '',
    siteDocumentIndexDefault: { label: 'Elija el tipo de Documento', value: '' },
}); };
var actionTypes = {
    siteName: 'SITE_NAME',
    validSiteName: 'VALID_SITE_NAME',
    siteNameDefault: 'SITE_NAME_DEFAULT',
    siteDocumentIndex: 'SITE_DOCUMENT_NAME',
    validSiteDocumentIndex: 'VALID_SITE_DOCUMENT_INDEX',
    siteDocumentIndexDefault: 'SITE_DOCUMENT_INDEX_DEFAULT',
};
var reducerObject = (_a = {},
    _a[actionTypes.siteName] = function (state, payload) { return (__assign(__assign({}, state), { siteName: payload })); },
    _a[actionTypes.validSiteName] = function (state, payload) { return (__assign(__assign({}, state), { validSiteName: payload })); },
    _a[actionTypes.siteNameDefault] = function (state, payload) { return (__assign(__assign({}, state), { siteNameDefault: payload })); },
    _a[actionTypes.siteDocumentIndex] = function (state, payload) { return (__assign(__assign({}, state), { siteDocumentIndex: payload })); },
    _a[actionTypes.validSiteDocumentIndex] = function (state, payload) { return (__assign(__assign({}, state), { validSiteDocumentIndex: payload })); },
    _a[actionTypes.siteDocumentIndexDefault] = function (state, payload) { return (__assign(__assign({}, state), { siteDocumentIndexDefault: payload })); },
    _a);
var reducer = function (state, action) {
    return reducerObject[action.type](state, action.payload) || state;
};
//# sourceMappingURL=useGafpriSites.js.map