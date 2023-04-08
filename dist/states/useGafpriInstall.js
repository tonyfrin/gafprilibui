"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriInstall = useGafpriInstall;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _useGafpriSites = require("./useGafpriSites");
var _useGafpriCurrency = require("./useGafpriCurrency");
var _useGafpriSitesConfig = require("./useGafpriSitesConfig");
var _useGafpriTypeDocument = require("./useGafpriTypeDocument");
var _useGafpriUser = require("./useGafpriUser");
var _useGafpriCategoryProjects = require("./useGafpriCategoryProjects");
var _helpers = require("../helpers");
var _reducerObject;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var actionTypes = {
  isConfig: 'CONFIG',
  isSites: 'SITES',
  isConfigSite: 'CONFIG_SITE',
  isTypeDucument: 'TYPE_DOCUMENT',
  isRoles: 'ROLES',
  isUser: 'USER',
  isCategory: 'CATEGORY',
  isProjects: 'PROJECTS',
  isFinal: 'FINAL'
};
var reducerObject = (_reducerObject = {}, (0, _defineProperty2["default"])(_reducerObject, actionTypes.isConfig, function (state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    isConfig: true,
    isSites: false,
    isConfigSite: false,
    isTypeDucument: false,
    isRoles: false,
    isUser: false,
    isCategory: false,
    isProjects: false,
    isFinal: false
  });
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.isSites, function (state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    isConfig: false,
    isSites: true,
    isConfigSite: false,
    isTypeDucument: false,
    isRoles: false,
    isUser: false,
    isCategory: false,
    isProjects: false,
    isFinal: false
  });
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.isConfigSite, function (state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    isConfig: false,
    isSites: false,
    isConfigSite: true,
    isTypeDucument: false,
    isRoles: false,
    isUser: false,
    isCategory: false,
    isProjects: false,
    isFinal: false
  });
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.isTypeDucument, function (state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    isConfig: false,
    isSites: false,
    isConfigSite: false,
    isTypeDucument: true,
    isRoles: false,
    isUser: false,
    isCategory: false,
    isProjects: false,
    isFinal: false
  });
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.isRoles, function (state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    isConfig: false,
    isSites: false,
    isConfigSite: false,
    isTypeDucument: false,
    isRoles: true,
    isUser: false,
    isCategory: false,
    isProjects: false,
    isFinal: false
  });
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.isUser, function (state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    isConfig: false,
    isSites: false,
    isConfigSite: false,
    isTypeDucument: false,
    isRoles: false,
    isUser: true,
    isCategory: false,
    isProjects: false,
    isFinal: false
  });
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.isCategory, function (state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    isConfig: false,
    isSites: false,
    isConfigSite: false,
    isTypeDucument: false,
    isRoles: false,
    isUser: false,
    isCategory: true,
    isProjects: false,
    isFinal: false
  });
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.isProjects, function (state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    isConfig: false,
    isSites: false,
    isConfigSite: false,
    isTypeDucument: false,
    isRoles: false,
    isUser: false,
    isCategory: false,
    isProjects: true,
    isFinal: false
  });
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.isFinal, function (state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    isConfig: false,
    isSites: false,
    isConfigSite: false,
    isTypeDucument: false,
    isRoles: false,
    isUser: false,
    isCategory: false,
    isProjects: false,
    isFinal: true
  });
}), _reducerObject);
var reducer = function reducer(state, action) {
  return reducerObject[action.type](state, action.payload) || state;
};
var initialState = function initialState() {
  return {
    isConfig: true,
    isSites: false,
    isConfigSite: false,
    isTypeDucument: false,
    isRoles: false,
    isUser: false,
    isCategory: false,
    isProjects: false,
    isFinal: false
  };
};
function useGafpriInstall(useGafpri) {
  var useCurrency = (0, _useGafpriCurrency.useGafpriCurrency)();
  var useSites = (0, _useGafpriSites.useGafpriSites)();
  var useSitesConfig = (0, _useGafpriSitesConfig.useGafpriSitesConfig)();
  var useTypeDocument = (0, _useGafpriTypeDocument.useGafpriTypeDocument)();
  var useUser = (0, _useGafpriUser.useGafpriUser)();
  var useCategory = (0, _useGafpriCategoryProjects.useGafpriCategoryProjects)({
    type: 'Category'
  });
  var useProjects = (0, _useGafpriCategoryProjects.useGafpriCategoryProjects)({
    type: 'Projects'
  });
  var _React$useReducer = _react["default"].useReducer(reducer, initialState()),
    _React$useReducer2 = (0, _slicedToArray2["default"])(_React$useReducer, 2),
    state = _React$useReducer2[0],
    dispatch = _React$useReducer2[1];
  var isConfig = state.isConfig,
    isSites = state.isSites,
    isConfigSite = state.isConfigSite,
    isTypeDucument = state.isTypeDucument,
    isRoles = state.isRoles,
    isUser = state.isUser,
    isCategory = state.isCategory,
    isProjects = state.isProjects,
    isFinal = state.isFinal;

  /**
   * CURRENCY
   *
   *
   */
  var onConfig = function onConfig() {
    return dispatch({
      type: actionTypes.isConfig
    });
  };
  var onSites = function onSites() {
    return dispatch({
      type: actionTypes.isSites
    });
  };
  var onConfigSite = function onConfigSite() {
    return dispatch({
      type: actionTypes.isConfigSite
    });
  };
  var onTypeDucument = function onTypeDucument() {
    return dispatch({
      type: actionTypes.isTypeDucument
    });
  };
  var onUser = function onUser() {
    return dispatch({
      type: actionTypes.isUser
    });
  };
  var onCategory = function onCategory() {
    return dispatch({
      type: actionTypes.isCategory
    });
  };
  var onProjects = function onProjects() {
    return dispatch({
      type: actionTypes.isProjects
    });
  };

  // const onFinal = (): void =>
  //   dispatch({
  //     type: actionTypes.isFinal,
  //   });

  var nextCurrency = function nextCurrency() {
    if (useCurrency.states.buttonCurrency) {
      onSites();
    }
  };
  var nextInfoSite = function nextInfoSite() {
    if (useSites.states.validSiteName && useSites.states.validSiteDocumentIndex && useSites.states.validDocument && useSites.states.validAddress1 && useSites.states.validAddress2 && useSites.states.validCity && useSites.states.validStateCountry && useSites.states.validCountry && useSites.states.validPostcode && useSites.states.validPhone && useSites.states.validEmail) {
      onConfigSite();
    }
  };
  var nextConfigSite = function nextConfigSite() {
    if (useSitesConfig.states.currencyValid && useSitesConfig.states.currencyLocationValid && useSitesConfig.states.separatorValid && useSitesConfig.states.decimalNumbersValid && useSitesConfig.states.taxesValid && useSitesConfig.states.hostValid) {
      onTypeDucument();
    }
  };
  var nextTypeDocument = function nextTypeDocument() {
    if (useTypeDocument.states.countryValid && useTypeDocument.states.nameValid) {
      onUser();
    }
  };
  var nextUser = function nextUser() {
    if (useUser.states.nameValid && useUser.states.lastNameValid && useUser.states.roleValid && useUser.states.documentIndexValid && useUser.states.documentValid && useUser.states.address1Valid && useUser.states.address2Valid && useUser.states.cityValid && useUser.states.stateCountry && useUser.states.countryValid && useUser.states.postcodeValid && useUser.states.phoneValid && useUser.states.emailValid && useUser.states.passwordValid) {
      onCategory();
    }
  };
  var nextCategory = function nextCategory() {
    if (useCategory.states.nameValid && useCategory.states.descriptionValid) {
      onProjects();
    }
  };
  var successInstall = function successInstall() {
    onProjects();
    useGafpri.actions.onInstalled();
  };
  var credentials = {
    currencies: {
      name: useCurrency.states.currencyName,
      symbol: useCurrency.states.currencySymbol
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
      host: useSitesConfig.states.host
    },
    typeDocumentId: {
      name: useTypeDocument.states.name,
      country: useTypeDocument.states.country
    },
    roles: {
      name: 'Administrador',
      permissions: ['usersGet', 'usersCreate', 'usersUpdate', 'usersDelete', 'customerGet', 'customerCreate', 'customerUpdate', 'customerDelete', 'addressGet', 'addressCreate', 'addressUpdate', 'addressDelete', 'typeDocumentIdGet', 'typeDocumentIdCreate', 'typeDocumentIdUpdate', 'typeDocumentIdDelete', 'documentIdGet', 'documentIdCreate', 'documentIdUpdate', 'documentIdDelete', 'currenciesGet', 'currenciesCreate', 'currenciesUpdate', 'currenciesDelete', 'sitesGet', 'sitesCreate', 'sitesUpdate', 'sitesDelete', 'rolesGet', 'rolesCreate', 'rolesUpdate', 'rolesDelete', 'employessGet', 'employessCreate', 'employessUpdate', 'employessDelete', 'paymentGet', 'paymentCreate', 'paymentUpdate', 'paymentDelete', 'suppliersGet', 'suppliersCreate', 'suppliersUpdate', 'suppliersDelete', 'ordersGet', 'ordersCreate', 'ordersUpdate', 'ordersDelete', 'categoryGet', 'categoryCreate', 'categoryUpdate', 'categoryDelete', 'projectsGet', 'projectsCreate', 'projectsUpdate', 'projectsDelete', 'productsGet', 'productsCreate', 'productsUpdate', 'productsDelete', 'storagesGet', 'storagesCreate', 'storagesUpdate', 'storagesDelete', 'budgetsGet', 'budgetsCreate', 'budgetsUpdate', 'budgetsDelete', 'crtGet', 'crtCreate', 'crtUpdate', 'crtDelete', 'pmGet', 'pmCreate', 'pmUpdate', 'pmDelete', 'crGet', 'crCreate', 'crUpdate', 'crDelete', 'crtransactionsGet', 'crtransactionsCreate', 'crtransactionsUpdate', 'crtransactionsDelete', 'bank-typeCreate', 'bank-typeGet', 'bank-typeUpdate', 'bank-typeDelete', 'wallet-accountCreate', 'wallet-accountGet', 'wallet-accountUpdate', 'wallet-accountDelete', 'wallet-beneficiariesCreate', 'wallet-beneficiariesGet', 'wallet-beneficiariesUpdate', 'wallet-beneficiariesDelete', 'wt-in-transitCreate', 'wt-in-transitGet', 'wt-in-transitUpdate', 'wt-in-transitDelete', 'accounts-receivableCreate', 'accounts-receivableGet', 'accounts-receivableUpdate', 'accounts-receivableDelete', 'referredCreate', 'referredGet', 'referredUpdate', 'referredDelete', 'credit-order-paymentsCreate', 'credit-order-paymentsGet', 'credit-order-paymentsUpdate', 'credit-order-paymentsDelete', 'banking-transactions-paymentsCreate', 'banking-transactions-paymentsGet', 'banking-transactions-paymentsUpdate', 'banking-transactions-paymentsDelete', 'order-return-paymentsCreate', 'order-return-paymentsUpdate', 'order-return-paymentsDelete', 'order-return-paymentsGet']
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
        type: 'shipping_address'
      },
      documentId: {
        typeDocumentIdId: '1',
        index: useUser.states.documentIndex,
        number: useUser.states.document
      }
    },
    category: {
      name: useCategory.states.name,
      description: useCategory.states.description
    },
    projects: {
      name: useProjects.states.name,
      description: useProjects.states.description
    }
  };
  var install = function install() {
    (0, _helpers.gafpriFetch)({
      initMethod: 'POST',
      initApi: 'http://localhost:4000',
      initRoute: 'api/v1/install/',
      initCredentials: credentials,
      functionFetching: useGafpri.actions.onFetching,
      functionSuccess: successInstall,
      functionError: successInstall
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
    isFinal: isFinal
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
    install: install
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
    useGafpri: useGafpri
  };
}