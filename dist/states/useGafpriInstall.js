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
var useGafpriSitesConfig_1 = require("./useGafpriSitesConfig");
var useGafpriTypeDocument_1 = require("./useGafpriTypeDocument");
var useGafpriUser_1 = require("./useGafpriUser");
var useGafpriCategoryProjects_1 = require("./useGafpriCategoryProjects");
var helpers_1 = require("../helpers");
var actionTypes = {
    isConfig: 'CONFIG',
    isSites: 'SITES',
    isConfigSite: 'CONFIG_SITE',
    isTypeDucument: 'TYPE_DOCUMENT',
    isRoles: 'ROLES',
    isUser: 'USER',
    isCategory: 'CATEGORY',
    isProjects: 'PROJECTS',
    isFinal: 'FINAL',
};
var reducerObject = (_a = {},
    _a[actionTypes.isConfig] = function (state) { return (__assign(__assign({}, state), { isConfig: true, isSites: false, isConfigSite: false, isTypeDucument: false, isRoles: false, isUser: false, isCategory: false, isProjects: false, isFinal: false })); },
    _a[actionTypes.isSites] = function (state) { return (__assign(__assign({}, state), { isConfig: false, isSites: true, isConfigSite: false, isTypeDucument: false, isRoles: false, isUser: false, isCategory: false, isProjects: false, isFinal: false })); },
    _a[actionTypes.isConfigSite] = function (state) { return (__assign(__assign({}, state), { isConfig: false, isSites: false, isConfigSite: true, isTypeDucument: false, isRoles: false, isUser: false, isCategory: false, isProjects: false, isFinal: false })); },
    _a[actionTypes.isTypeDucument] = function (state) { return (__assign(__assign({}, state), { isConfig: false, isSites: false, isConfigSite: false, isTypeDucument: true, isRoles: false, isUser: false, isCategory: false, isProjects: false, isFinal: false })); },
    _a[actionTypes.isRoles] = function (state) { return (__assign(__assign({}, state), { isConfig: false, isSites: false, isConfigSite: false, isTypeDucument: false, isRoles: true, isUser: false, isCategory: false, isProjects: false, isFinal: false })); },
    _a[actionTypes.isUser] = function (state) { return (__assign(__assign({}, state), { isConfig: false, isSites: false, isConfigSite: false, isTypeDucument: false, isRoles: false, isUser: true, isCategory: false, isProjects: false, isFinal: false })); },
    _a[actionTypes.isCategory] = function (state) { return (__assign(__assign({}, state), { isConfig: false, isSites: false, isConfigSite: false, isTypeDucument: false, isRoles: false, isUser: false, isCategory: true, isProjects: false, isFinal: false })); },
    _a[actionTypes.isProjects] = function (state) { return (__assign(__assign({}, state), { isConfig: false, isSites: false, isConfigSite: false, isTypeDucument: false, isRoles: false, isUser: false, isCategory: false, isProjects: true, isFinal: false })); },
    _a[actionTypes.isFinal] = function (state) { return (__assign(__assign({}, state), { isConfig: false, isSites: false, isConfigSite: false, isTypeDucument: false, isRoles: false, isUser: false, isCategory: false, isProjects: false, isFinal: true })); },
    _a);
var reducer = function (state, action) {
    return reducerObject[action.type](state, action.payload) || state;
};
var initialState = function () { return ({
    isConfig: true,
    isSites: false,
    isConfigSite: false,
    isTypeDucument: false,
    isRoles: false,
    isUser: false,
    isCategory: false,
    isProjects: false,
    isFinal: false,
}); };
function useGafpriInstall(useGafpri) {
    var useCurrency = (0, useGafpriCurrency_1.useGafpriCurrency)();
    var useSites = (0, useGafpriSites_1.useGafpriSites)();
    var useSitesConfig = (0, useGafpriSitesConfig_1.useGafpriSitesConfig)();
    var useTypeDocument = (0, useGafpriTypeDocument_1.useGafpriTypeDocument)();
    var useUser = (0, useGafpriUser_1.useGafpriUser)();
    var useCategory = (0, useGafpriCategoryProjects_1.useGafpriCategoryProjects)({ type: 'Category' });
    var useProjects = (0, useGafpriCategoryProjects_1.useGafpriCategoryProjects)({ type: 'Projects' });
    var _a = react_1.default.useReducer(reducer, initialState()), state = _a[0], dispatch = _a[1];
    var 
    // state
    isConfig = state.isConfig, isSites = state.isSites, isConfigSite = state.isConfigSite, isTypeDucument = state.isTypeDucument, isRoles = state.isRoles, isUser = state.isUser, isCategory = state.isCategory, isProjects = state.isProjects, isFinal = state.isFinal;
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
    var onConfigSite = function () {
        return dispatch({
            type: actionTypes.isConfigSite,
        });
    };
    var onTypeDucument = function () {
        return dispatch({
            type: actionTypes.isTypeDucument,
        });
    };
    var onUser = function () {
        return dispatch({
            type: actionTypes.isUser,
        });
    };
    var onCategory = function () {
        return dispatch({
            type: actionTypes.isCategory,
        });
    };
    var onProjects = function () {
        return dispatch({
            type: actionTypes.isProjects,
        });
    };
    // const onFinal = (): void =>
    //   dispatch({
    //     type: actionTypes.isFinal,
    //   });
    var nextCurrency = function () {
        if (useCurrency.states.buttonCurrency) {
            onSites();
        }
    };
    var nextInfoSite = function () {
        if (useSites.states.validSiteName &&
            useSites.states.validSiteDocumentIndex &&
            useSites.states.validDocument &&
            useSites.states.validAddress1 &&
            useSites.states.validAddress2 &&
            useSites.states.validCity &&
            useSites.states.validStateCountry &&
            useSites.states.validCountry &&
            useSites.states.validPostcode &&
            useSites.states.validPhone &&
            useSites.states.validEmail) {
            onConfigSite();
        }
    };
    var nextConfigSite = function () {
        if (useSitesConfig.states.currencyValid &&
            useSitesConfig.states.currencyLocationValid &&
            useSitesConfig.states.separatorValid &&
            useSitesConfig.states.decimalNumbersValid &&
            useSitesConfig.states.taxesValid &&
            useSitesConfig.states.hostValid) {
            onTypeDucument();
        }
    };
    var nextTypeDocument = function () {
        if (useTypeDocument.states.countryValid &&
            useTypeDocument.states.nameValid) {
            onUser();
        }
    };
    var nextUser = function () {
        if (useUser.states.nameValid &&
            useUser.states.lastNameValid &&
            useUser.states.roleValid &&
            useUser.states.documentIndexValid &&
            useUser.states.documentValid &&
            useUser.states.address1Valid &&
            useUser.states.address2Valid &&
            useUser.states.cityValid &&
            useUser.states.stateCountry &&
            useUser.states.countryValid &&
            useUser.states.postcodeValid &&
            useUser.states.phoneValid &&
            useUser.states.emailValid &&
            useUser.states.passwordValid) {
            onCategory();
        }
    };
    var nextCategory = function () {
        if (useCategory.states.nameValid && useCategory.states.descriptionValid) {
            onProjects();
        }
    };
    var successInstall = function () {
        onProjects();
        useGafpri.actions.onInstalled();
    };
    var credentials = {
        currencies: {
            name: useCurrency.states.currencyName,
            symbol: useCurrency.states.currencySymbol,
        },
        sites: {
            name: useSites.states.siteName,
            documentIndex: useSites.states.siteDocumentIndex,
            documentNumber: useSites.states.document,
            address1: useSites.states.address1,
            address2: useSites.states.address2,
            city: useSites.states.city,
            state: useSites.states.stateCountry,
            postCode: useSites.states.postcode,
            country: useSites.states.country,
            email: useSites.states.email,
            phone: useSites.states.phone,
            currenciesId: useSitesConfig.states.currency,
            currencyLocation: useSitesConfig.states.currencyLocation,
            thousandsSeparator: useSitesConfig.states.thousandsSeparator,
            decimalSeparator: useSitesConfig.states.decimalSeparator,
            decimalNumbers: useSitesConfig.states.decimalNumbers,
            taxes: useSitesConfig.states.taxes,
            host: useSitesConfig.states.host,
        },
        typeDocumentId: {
            name: useTypeDocument.states.name,
            country: useTypeDocument.states.country,
        },
        roles: {
            name: 'Administrador',
            permissions: [
                'usersGet',
                'usersCreate',
                'usersUpdate',
                'usersDelete',
                'customerGet',
                'customerCreate',
                'customerUpdate',
                'customerDelete',
                'addressGet',
                'addressCreate',
                'addressUpdate',
                'addressDelete',
                'typeDocumentIdGet',
                'typeDocumentIdCreate',
                'typeDocumentIdUpdate',
                'typeDocumentIdDelete',
                'documentIdGet',
                'documentIdCreate',
                'documentIdUpdate',
                'documentIdDelete',
                'currenciesGet',
                'currenciesCreate',
                'currenciesUpdate',
                'currenciesDelete',
                'sitesGet',
                'sitesCreate',
                'sitesUpdate',
                'sitesDelete',
                'rolesGet',
                'rolesCreate',
                'rolesUpdate',
                'rolesDelete',
                'employessGet',
                'employessCreate',
                'employessUpdate',
                'employessDelete',
                'paymentGet',
                'paymentCreate',
                'paymentUpdate',
                'paymentDelete',
                'suppliersGet',
                'suppliersCreate',
                'suppliersUpdate',
                'suppliersDelete',
                'ordersGet',
                'ordersCreate',
                'ordersUpdate',
                'ordersDelete',
                'categoryGet',
                'categoryCreate',
                'categoryUpdate',
                'categoryDelete',
                'projectsGet',
                'projectsCreate',
                'projectsUpdate',
                'projectsDelete',
                'productsGet',
                'productsCreate',
                'productsUpdate',
                'productsDelete',
                'storagesGet',
                'storagesCreate',
                'storagesUpdate',
                'storagesDelete',
                'budgetsGet',
                'budgetsCreate',
                'budgetsUpdate',
                'budgetsDelete',
                'crtGet',
                'crtCreate',
                'crtUpdate',
                'crtDelete',
                'pmGet',
                'pmCreate',
                'pmUpdate',
                'pmDelete',
                'crGet',
                'crCreate',
                'crUpdate',
                'crDelete',
                'crtransactionsGet',
                'crtransactionsCreate',
                'crtransactionsUpdate',
                'crtransactionsDelete',
                'bank-typeCreate',
                'bank-typeGet',
                'bank-typeUpdate',
                'bank-typeDelete',
                'wallet-accountCreate',
                'wallet-accountGet',
                'wallet-accountUpdate',
                'wallet-accountDelete',
                'wallet-beneficiariesCreate',
                'wallet-beneficiariesGet',
                'wallet-beneficiariesUpdate',
                'wallet-beneficiariesDelete',
                'wt-in-transitCreate',
                'wt-in-transitGet',
                'wt-in-transitUpdate',
                'wt-in-transitDelete',
                'accounts-receivableCreate',
                'accounts-receivableGet',
                'accounts-receivableUpdate',
                'accounts-receivableDelete',
                'referredCreate',
                'referredGet',
                'referredUpdate',
                'referredDelete',
                'credit-order-paymentsCreate',
                'credit-order-paymentsGet',
                'credit-order-paymentsUpdate',
                'credit-order-paymentsDelete',
                'banking-transactions-paymentsCreate',
                'banking-transactions-paymentsGet',
                'banking-transactions-paymentsUpdate',
                'banking-transactions-paymentsDelete',
                'order-return-paymentsCreate',
                'order-return-paymentsUpdate',
                'order-return-paymentsDelete',
                'order-return-paymentsGet',
            ],
        },
        user: {
            password: useUser.states.password,
            email: useUser.states.email,
            phone: useUser.states.phone,
            name: useUser.states.name,
            lastName: useUser.states.lastName,
            role: useUser.states.role,
            address: {
                address1: useUser.states.address1,
                address2: useUser.states.address2,
                city: useUser.states.city,
                state: useUser.states.stateCountry,
                postCode: useUser.states.postcode,
                country: useUser.states.country,
                type: 'shipping_address',
            },
            documentId: {
                typeDocumentIdId: '1',
                index: useUser.states.documentIndex,
                number: useUser.states.document,
            },
        },
        category: {
            name: useCategory.states.name,
            description: useCategory.states.description,
        },
        projects: {
            name: useProjects.states.name,
            description: useProjects.states.description,
        },
    };
    var install = function () {
        (0, helpers_1.gafpriFetch)({
            initMethod: 'POST',
            initApi: 'http://localhost:4000',
            initRoute: 'api/v1/install/',
            initCredentials: credentials,
            functionFetching: useGafpri.actions.onFetching,
            functionSuccess: successInstall,
            functionError: successInstall,
        });
    };
    /**
     * Export
     *
     *
     */
    var states = {
        isConfig: isConfig,
        isSites: isSites,
        isConfigSite: isConfigSite,
        isTypeDucument: isTypeDucument,
        isRoles: isRoles,
        isUser: isUser,
        isCategory: isCategory,
        isProjects: isProjects,
        isFinal: isFinal,
    };
    var actions = {
        onConfig: onConfig,
        onSites: onSites,
        onConfigSite: onConfigSite,
        onTypeDucument: onTypeDucument,
        onUser: onUser,
        onCategory: onCategory,
        onProjects: onProjects,
        nextCurrency: nextCurrency,
        nextInfoSite: nextInfoSite,
        nextConfigSite: nextConfigSite,
        nextTypeDocument: nextTypeDocument,
        nextUser: nextUser,
        nextCategory: nextCategory,
        install: install,
    };
    return {
        states: states,
        actions: actions,
        useCurrency: useCurrency,
        useSites: useSites,
        useSitesConfig: useSitesConfig,
        useTypeDocument: useTypeDocument,
        useUser: useUser,
        useCategory: useCategory,
        useProjects: useProjects,
        useGafpri: useGafpri,
    };
}
exports.useGafpriInstall = useGafpriInstall;
//# sourceMappingURL=useGafpriInstall.js.map