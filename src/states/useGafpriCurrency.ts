import React from 'react';
import { SingleValue } from 'react-select';
import { validationSelect, removeClass, addClass } from '../helpers';

type SelectDefault = {
  value: string;
  label: string;
};

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

type Payload = string | boolean | SelectDefault;
type ActionType = string;

type Action = {
  type: ActionType;
  payload: Payload;
};

const actionTypes = {
  currencyName: 'CURRENCY_NAME',
  currencySymbol: 'CURRENCY_SYMBOL',
  currenciesDefault: 'CURRENCY_DEFAULT',
  validationCurrency: 'VALIDATION_CURRENCY',
  buttonCurrency: 'BUTTON_CURRENCY',
};

type ReducerHandler = (state: State, payload: Payload) => State;

const reducerObject: Record<string, ReducerHandler> = {
  [actionTypes.currencyName]: (state, payload) => {
    if (typeof payload === 'string') {
      return {
        ...state,
        currencyName: payload,
      };
    }
    return state;
  },
  [actionTypes.currencySymbol]: (state, payload) => {
    if (typeof payload === 'string') {
      return {
        ...state,
        currencySymbol: payload,
      };
    }
    return state;
  },
  [actionTypes.currenciesDefault]: (state, payload) => {
    if (typeof payload === 'object') {
      return {
        ...state,
        currenciesDefault: payload,
      };
    }
    return state;
  },
  [actionTypes.validationCurrency]: (state, payload) => {
    if (typeof payload === 'boolean') {
      return {
        ...state,
        validationCurrency: payload,
      };
    }
    return state;
  },
  [actionTypes.buttonCurrency]: (state, payload) => {
    if (typeof payload === 'boolean') {
      return {
        ...state,
        buttonCurrency: payload,
      };
    }
    return state;
  },
};

const reducer = (state: State, action: Action): State => {
  const handler = reducerObject[action.type];
  if (handler && action.payload !== undefined) {
    return handler(state, action.payload);
  }
  return state;
};

export interface UseCurrency {
  states: State;
  actions: Actions;
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

export function useGafpriCurrency(): UseCurrency {
  const [state, dispatch] = React.useReducer(reducer, initialState());
  const {
    // currency
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

  // setear los valores de la Currencies
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

  // Funciones de validations
  const validationButtonCurrency = (value: boolean): void => {
    if (value) {
      removeClass('nextCurrency', 'gs-disabled');
    } else {
      addClass('nextCurrency', 'gs-disabled');
    }
    setButtonCurrency(value);
  };

  const validationCurrencyValue = (value: string): void => {
    const validation: boolean = validationSelect(
      value,
      'currencyName',
      'gs-input-alert'
    );
    setValidationCurrency(validation);
    validationButtonCurrency(validation);
  };

  // Funciones de cambio

  const currencyChange = (newValue: SingleValue<{ value: string }>): void => {
    let name = '';
    let symbol = '';
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
