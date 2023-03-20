import React from 'react';
import { SingleValue } from 'react-select';
import { validationSelect, removeClass, addClass } from '../helpers';

type State = {
  currencyName: string;
  currencySymbol: string;
  currenciesDefault: SelectDefault;
  currenciesOptions: SelectDefault[];
  validationCurrency: boolean;
  buttonCurrency: boolean;
};

type Actions = {
  currencyChange: (
    newValue: SingleValue<{ value: string; label: string }>
  ) => void;
  validationCurrencyValue: (value: string) => void;
  validationButtonCurrency: (value: boolean) => void;
};

type SelectDefault = {
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

export interface UseCurrency {
  states: State;
  actions: Actions;
}

export function useGafpriCurrency(): UseCurrency {
  const [state, dispatch] = React.useReducer(reducer, initialState());
  const {
    //currency
    currencyName,
    currencySymbol,
    currenciesDefault,
    currenciesOptions,
    validationCurrency,
    buttonCurrency,
  } = state;

  /**
   * CURRENCY
   *
   *
   */

  //setear los valores de la Currencies
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

  const setCurrenciesDefault = (value: SelectDefault): void =>
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
    let defaultValue: SelectDefault = {
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

  /**
   * Export
   *
   *
   */
  const states = {
    currencyName,
    currencySymbol,
    currenciesDefault,
    currenciesOptions,
    validationCurrency,
    buttonCurrency,
  };

  const actions = {
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
  currencyName: 'CURRENCY_NAME',
  currencySymbol: 'CURRENCY_SYMBOL',
  currenciesDefault: 'CURRENCY_DEFAULT',
  validationCurrency: 'VALIDATION_CURRENCY',
  buttonCurrency: 'BUTTON_CURRENCY',
};

const reducerObject: ReducerObject = {
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
