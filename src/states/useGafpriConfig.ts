import React from 'react';
import { SingleValue } from 'react-select';
import { validationSelect, removeClass, addClass } from '../helpers';

type State = {
  isConfig: boolean;
  isSites: boolean;
  isTypeDucument: boolean;
  isRoles: boolean;
  isUser: boolean;
  isCategory: boolean;
  isProjects: boolean;
  currencyName: string;
  currencySymbol: string;
  currenciesDefault: CurrencyDefault;
  currenciesOptions: CurrencyDefault[];
  validationCurrency: boolean;
  buttonCurrency: boolean;
};

type Actions = {
  onConfig: () => void;
  nextCurrency: () => void;
  currencyChange: (
    newValue: SingleValue<{ value: string; label: string }>
  ) => void;
  validationCurrencyValue: (value: string) => void;
  validationButtonCurrency: (value: boolean) => void;
};

type CurrencyDefault = {
  value: string;
  label: string;
};

type Payload = any;
type ActionType = string;

type Action = {
  type: ActionType;
  payload?: Payload;
};

type ReducerObject = {
  [key in ActionType]: (state: State, payload: Payload) => State;
};

export interface GafpriConfig {
  states: State;
  actions: Actions;
}

function useGafpriConfig() {
  const [state, dispatch] = React.useReducer(reducer, initialState());
  const {
    isConfig,
    isSites,
    isTypeDucument,
    isRoles,
    isUser,
    isCategory,
    isProjects,
    currencyName,
    currencySymbol,
    currenciesDefault,
    currenciesOptions,
    validationCurrency,
    buttonCurrency,
  } = state;

  /**
   * Actions Set
   *
   *
   */
  const onConfig = () =>
    dispatch({
      type: actionTypes.isConfig,
    });

  const onSites = () =>
    dispatch({
      type: actionTypes.isSites,
    });

  //setear los valores de la Currency
  const setCurrenciesName = (value: string): void =>
    dispatch({
      type: actionTypes.currencyName,
      payload: value,
    });

  const setCurrenciesSymbol = (value: string): void =>
    dispatch({
      type: actionTypes.currencySymbol,
      payload: value,
    });

  const setCurrenciesDefault = (value: CurrencyDefault): void =>
    dispatch({
      type: actionTypes.currenciesDefault,
      payload: value,
    });

  const setValidationCurrency = (value: boolean): void =>
    dispatch({
      type: actionTypes.validationCurrency,
      payload: value,
    });

  const setButtonCurrency = (value: boolean): void =>
    dispatch({
      type: actionTypes.buttonCurrency,
      payload: value,
    });

  //Funciones de validations
  const validationCurrencyValue = (value: string): void => {
    const validation: boolean = validationSelect(
      value,
      'currencyName',
      'gs-input-alert'
    );
    setValidationCurrency(validation);
    validationButtonCurrency(validation);
  };

  const validationButtonCurrency = (value: boolean): void => {
    if (value) {
      removeClass('nextCurrency', 'gs-disabled');
    } else {
      addClass('nextCurrency', 'gs-disabled');
    }
    setButtonCurrency(value);
  };

  //Funciones de cambio

  const currencyChange = (newValue: SingleValue<{ value: string }>): void => {
    let name: string = '';
    let symbol: string = '';
    let defaultValue: CurrencyDefault = {
      value: '',
      label: 'Seleccione tipo de Moneda',
    };

    if (newValue?.value && newValue.value === 'usd') {
      name = 'Dólares Américanos';
      symbol = '$';
      defaultValue = {
        value: 'usd',
        label: name,
      };
    } else if (newValue?.value && newValue.value === 'bsd') {
      name = 'Bolívares';
      symbol = 'BsD';
      defaultValue = {
        value: 'bsd',
        label: name,
      };
    } else if (newValue?.value && newValue.value === 'eur') {
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

  const nextCurrency = (): void => {
    if (buttonCurrency) {
      onSites();
    }
  };

  /**
   * Export
   *
   *
   */
  const states = {
    isConfig,
    isSites,
    isTypeDucument,
    isRoles,
    isUser,
    isCategory,
    isProjects,
    currencyName,
    currencySymbol,
    currenciesDefault,
    currenciesOptions,
    validationCurrency,
    buttonCurrency,
  };

  const actions = {
    onConfig,
    nextCurrency,
    currencyChange,
    validationCurrencyValue,
    validationButtonCurrency,
  };

  return {
    states,
    actions,
  };
}

const initialState = (): State => ({
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
});

const actionTypes = {
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

const reducerObject: ReducerObject = {
  [actionTypes.isConfig]: (state) => ({
    ...state,
    isConfig: true,
    isSites: false,
    isTypeDucument: false,
    isRoles: false,
    isUser: false,
    isCategory: false,
    isProjects: false,
  }),
  [actionTypes.isSites]: (state) => ({
    ...state,
    isConfig: false,
    isSites: true,
    isTypeDucument: false,
    isRoles: false,
    isUser: false,
    isCategory: false,
    isProjects: false,
  }),
  [actionTypes.isTypeDucument]: (state) => ({
    ...state,
    isConfig: false,
    isSites: false,
    isTypeDucument: true,
    isRoles: false,
    isUser: false,
    isCategory: false,
    isProjects: false,
  }),
  [actionTypes.isRoles]: (state) => ({
    ...state,
    isConfig: false,
    isSites: false,
    isTypeDucument: false,
    isRoles: true,
    isUser: false,
    isCategory: false,
    isProjects: false,
  }),
  [actionTypes.isUser]: (state) => ({
    ...state,
    isConfig: false,
    isSites: false,
    isTypeDucument: false,
    isRoles: false,
    isUser: true,
    isCategory: false,
    isProjects: false,
  }),
  [actionTypes.isCategory]: (state) => ({
    ...state,
    isConfig: false,
    isSites: false,
    isTypeDucument: false,
    isRoles: false,
    isUser: false,
    isCategory: true,
    isProjects: false,
  }),
  [actionTypes.isProjects]: (state) => ({
    ...state,
    isConfig: false,
    isSites: false,
    isTypeDucument: false,
    isRoles: false,
    isUser: false,
    isCategory: false,
    isProjects: true,
  }),
  [actionTypes.currencyName]: (state, payload) => ({
    ...state,
    currencyName: payload,
  }),
  [actionTypes.currencySymbol]: (state, payload) => ({
    ...state,
    currencySymbol: payload,
  }),
  [actionTypes.currenciesDefault]: (state, payload) => ({
    ...state,
    currenciesDefault: payload,
  }),
  [actionTypes.validationCurrency]: (state, payload) => ({
    ...state,
    validationCurrency: payload,
  }),
  [actionTypes.buttonCurrency]: (state, payload) => ({
    ...state,
    buttonCurrency: payload,
  }),
};

const reducer = (state: State, action: Action) => {
  return reducerObject[action.type](state, action.payload) || state;
};

export { useGafpriConfig };
