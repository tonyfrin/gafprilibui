import React from 'react';
import { useGafpriSites } from './useGafpriSites';
import type { UseSites } from './useGafpriSites';
import { useGafpriCurrency } from './useGafpriCurrency';
import type { UseCurrency } from './useGafpriCurrency';
import { useGafpriSitesConfig } from './useGafpriSitesConfig';
import type { UseSitesConfig } from './useGafpriSitesConfig';
import { useGafpriTypeDocument } from './useGafpriTypeDocument';
import type { UseTypeDocument } from './useGafpriTypeDocument';
import { useGafpriUser } from './useGafpriUser';
import type { UseUser } from './useGafpriUser';
import { useGafpriCategoryProjects } from './useGafpriCategoryProjects';
import type { UseCategoryProjects } from './useGafpriCategoryProjects';
import type { UseGafpri } from './useGafpri';
import { gafpriFetch } from '../helpers';

type State = {
  isConfig: boolean;
  isSites: boolean;
  isConfigSite: boolean;
  isTypeDucument: boolean;
  isRoles: boolean;
  isUser: boolean;
  isCategory: boolean;
  isProjects: boolean;
  isFinal: boolean;
};

type Actions = {
  onConfig: () => void;
  onSites: () => void;
  onConfigSite: () => void;
  onTypeDucument: () => void;
  onUser: () => void;
  onCategory: () => void;
  onProjects: () => void;
  nextCurrency: () => void;
  nextInfoSite: () => void;
  nextConfigSite: () => void;
  nextTypeDocument: () => void;
  nextUser: () => void;
  nextCategory: () => void;
  install: () => void;
};

type Payload = boolean | undefined;
type ActionType = string;

type Action = {
  type: ActionType;
  payload?: Payload;
};

type ReducerObject = {
  [key in ActionType]: (state: State, payload: Payload) => State;
};

export interface UseInstall {
  states: State;
  actions: Actions;
  useCurrency: UseCurrency;
  useSites: UseSites;
  useSitesConfig: UseSitesConfig;
  useTypeDocument: UseTypeDocument;
  useUser: UseUser;
  useCategory: UseCategoryProjects;
  useProjects: UseCategoryProjects;
  useGafpri: UseGafpri;
}

const actionTypes = {
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

const reducerObject: ReducerObject = {
  [actionTypes.isConfig]: (state) => ({
    ...state,
    isConfig: true,
    isSites: false,
    isConfigSite: false,
    isTypeDucument: false,
    isRoles: false,
    isUser: false,
    isCategory: false,
    isProjects: false,
    isFinal: false,
  }),
  [actionTypes.isSites]: (state) => ({
    ...state,
    isConfig: false,
    isSites: true,
    isConfigSite: false,
    isTypeDucument: false,
    isRoles: false,
    isUser: false,
    isCategory: false,
    isProjects: false,
    isFinal: false,
  }),
  [actionTypes.isConfigSite]: (state) => ({
    ...state,
    isConfig: false,
    isSites: false,
    isConfigSite: true,
    isTypeDucument: false,
    isRoles: false,
    isUser: false,
    isCategory: false,
    isProjects: false,
    isFinal: false,
  }),
  [actionTypes.isTypeDucument]: (state) => ({
    ...state,
    isConfig: false,
    isSites: false,
    isConfigSite: false,
    isTypeDucument: true,
    isRoles: false,
    isUser: false,
    isCategory: false,
    isProjects: false,
    isFinal: false,
  }),
  [actionTypes.isRoles]: (state) => ({
    ...state,
    isConfig: false,
    isSites: false,
    isConfigSite: false,
    isTypeDucument: false,
    isRoles: true,
    isUser: false,
    isCategory: false,
    isProjects: false,
    isFinal: false,
  }),
  [actionTypes.isUser]: (state) => ({
    ...state,
    isConfig: false,
    isSites: false,
    isConfigSite: false,
    isTypeDucument: false,
    isRoles: false,
    isUser: true,
    isCategory: false,
    isProjects: false,
    isFinal: false,
  }),
  [actionTypes.isCategory]: (state) => ({
    ...state,
    isConfig: false,
    isSites: false,
    isConfigSite: false,
    isTypeDucument: false,
    isRoles: false,
    isUser: false,
    isCategory: true,
    isProjects: false,
    isFinal: false,
  }),
  [actionTypes.isProjects]: (state) => ({
    ...state,
    isConfig: false,
    isSites: false,
    isConfigSite: false,
    isTypeDucument: false,
    isRoles: false,
    isUser: false,
    isCategory: false,
    isProjects: true,
    isFinal: false,
  }),
  [actionTypes.isFinal]: (state) => ({
    ...state,
    isConfig: false,
    isSites: false,
    isConfigSite: false,
    isTypeDucument: false,
    isRoles: false,
    isUser: false,
    isCategory: false,
    isProjects: false,
    isFinal: true,
  }),
};

const reducer = (state: State, action: Action): State => {
  return reducerObject[action.type](state, action.payload) || state;
};

const initialState = (): State => ({
  isConfig: true,
  isSites: false,
  isConfigSite: false,
  isTypeDucument: false,
  isRoles: false,
  isUser: false,
  isCategory: false,
  isProjects: false,
  isFinal: false,
});

export function useGafpriInstall(useGafpri: UseGafpri): UseInstall {
  const useCurrency = useGafpriCurrency();
  const useSites = useGafpriSites();
  const useSitesConfig = useGafpriSitesConfig();
  const useTypeDocument = useGafpriTypeDocument();
  const useUser = useGafpriUser();
  const useCategory = useGafpriCategoryProjects({ type: 'Category' });
  const useProjects = useGafpriCategoryProjects({ type: 'Projects' });
  const [state, dispatch] = React.useReducer(reducer, initialState());
  const {
    // state
    isConfig,
    isSites,
    isConfigSite,
    isTypeDucument,
    isRoles,
    isUser,
    isCategory,
    isProjects,
    isFinal,
  } = state;

  /**
   * CURRENCY
   *
   *
   */
  const onConfig = (): void =>
    dispatch({
      type: actionTypes.isConfig,
    });

  const onSites = (): void =>
    dispatch({
      type: actionTypes.isSites,
    });

  const onConfigSite = (): void =>
    dispatch({
      type: actionTypes.isConfigSite,
    });

  const onTypeDucument = (): void =>
    dispatch({
      type: actionTypes.isTypeDucument,
    });

  const onUser = (): void =>
    dispatch({
      type: actionTypes.isUser,
    });

  const onCategory = (): void =>
    dispatch({
      type: actionTypes.isCategory,
    });

  const onProjects = (): void =>
    dispatch({
      type: actionTypes.isProjects,
    });

  // const onFinal = (): void =>
  //   dispatch({
  //     type: actionTypes.isFinal,
  //   });

  const nextCurrency = (): void => {
    if (useCurrency.states.buttonCurrency) {
      onSites();
    }
  };

  const nextInfoSite = (): void => {
    if (
      useSites.states.validSiteName &&
      useSites.states.validSiteDocumentIndex &&
      useSites.states.validDocument &&
      useSites.states.validAddress1 &&
      useSites.states.validAddress2 &&
      useSites.states.validCity &&
      useSites.states.validStateCountry &&
      useSites.states.validCountry &&
      useSites.states.validPostcode &&
      useSites.states.validPhone &&
      useSites.states.validEmail
    ) {
      onConfigSite();
    }
  };

  const nextConfigSite = (): void => {
    if (
      useSitesConfig.states.currencyValid &&
      useSitesConfig.states.currencyLocationValid &&
      useSitesConfig.states.separatorValid &&
      useSitesConfig.states.decimalNumbersValid &&
      useSitesConfig.states.taxesValid &&
      useSitesConfig.states.hostValid
    ) {
      onTypeDucument();
    }
  };

  const nextTypeDocument = (): void => {
    if (
      useTypeDocument.states.countryValid &&
      useTypeDocument.states.nameValid
    ) {
      onUser();
    }
  };

  const nextUser = (): void => {
    if (
      useUser.states.nameValid &&
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
      useUser.states.passwordValid
    ) {
      onCategory();
    }
  };

  const nextCategory = (): void => {
    if (useCategory.states.nameValid && useCategory.states.descriptionValid) {
      onProjects();
    }
  };

  const successInstall = (): void => {
    onProjects();
    useGafpri.actions.onInstalled();
  };

  const credentials = {
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

  const install = (): void => {
    gafpriFetch({
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
  const states = {
    isConfig,
    isSites,
    isConfigSite,
    isTypeDucument,
    isRoles,
    isUser,
    isCategory,
    isProjects,
    isFinal,
  };

  const actions = {
    onConfig,
    onSites,
    onConfigSite,
    onTypeDucument,
    onUser,
    onCategory,
    onProjects,
    nextCurrency,
    nextInfoSite,
    nextConfigSite,
    nextTypeDocument,
    nextUser,
    nextCategory,
    install,
  };

  return {
    states,
    actions,
    useCurrency,
    useSites,
    useSitesConfig,
    useTypeDocument,
    useUser,
    useCategory,
    useProjects,
    useGafpri,
  };
}
