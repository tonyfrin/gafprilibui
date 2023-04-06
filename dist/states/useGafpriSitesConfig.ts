import React from 'react';
import { SingleValue } from 'react-select';
import {
  validationSelect,
  validationInput,
  changeInputText,
  addClass,
  removeClass,
  changeSelect,
  isSelectDefault,
} from '../helpers';

export type SelectDefault = {
  value: string;
  label: string;
};

type State = {
  currency: string;
  currencyValid: boolean;
  currencyOptions: SelectDefault[];
  currencyDefault: SelectDefault;

  currencyLocation: string;
  currencyLocationValid: boolean;
  currencyLocationOptions: SelectDefault[];
  currencyLocationDefault: SelectDefault;

  thousandsSeparator: string;
  decimalSeparator: string;
  separatorValid: boolean;
  separatorOptions: SelectDefault[];
  separatorDefault: SelectDefault;

  decimalNumbers: string;
  decimalNumbersValid: boolean;
  decimalNumbersOptions: SelectDefault[];
  decimalNumbersDefault: SelectDefault;

  taxes: string;
  taxesValid: boolean;
  taxesOptions: SelectDefault[];
  taxesDefault: SelectDefault;

  host: string;
  hostValid: boolean;
};

type Actions = {
  changeCurrency: (
    newValue: SingleValue<{ value: string; label: string }>
  ) => void;
  validationCurrency: (value: string) => void;

  changeCurrencyLocation: (
    newValue: SingleValue<{ value: string; label: string }>
  ) => void;
  validationCurrencyLocation: (value: string) => void;

  changeSeparator: (
    newValue: SingleValue<{ value: string; label: string }>
  ) => void;
  validationSeparator: (value: string) => void;

  changeDecimalNumbers: (
    newValue: SingleValue<{ value: string; label: string }>
  ) => void;
  validationDecimalNumbers: (value: string) => void;

  changeTaxes: (
    newValue: SingleValue<{ value: string; label: string }>
  ) => void;
  validationTaxes: (value: string) => void;

  changeHost: (value: string) => void;
  validationHost: (value: string) => void;

  validationButtonNext: () => void;
};

type Payload = string | boolean | SelectDefault | undefined;
type ActionType = string;

type Action = {
  type: ActionType;
  payload?: Payload;
};

const actionTypes = {
  currency: 'CURRENCY',
  currencyValid: 'CURRENCY_VALID',
  currencyDefault: 'CURRENCY_DEFAULT',
  currencyLocation: 'CURRENCY_LOCATION',
  currencyLocationValid: 'CURRENCY_LOCATION_VALID',
  currencyLocationDefault: 'CURRENCY_LOCATION_DEFAULT',
  thousandsSeparator: 'THOUSANDS_SEPARATOR',
  decimalSeparator: 'DECIMAL_SEPARATOR',
  separatorValid: 'SEPARATOR_VALID',
  separatorDefault: 'SEPARATOR_DEFAULT',
  decimalNumbers: 'DECIMAL_NUMBERS',
  decimalNumbersValid: 'DECIMAL_NUMBERS_VALID',
  decimalNumbersDefault: 'DECIMAL_NUMBERS_DEFAULT',
  taxes: 'TAXES',
  taxesValid: 'TAXES_VALID',
  taxesDefault: 'TAXES_DEFAULT',
  host: 'HOST',
  hostValid: 'HOST_VALID',
};

type ReducerHandler = (state: State, payload: Payload) => State;

const reducerObject: Record<string, ReducerHandler> = {
  [actionTypes.currency]: (state, payload) => {
    if (typeof payload === 'string') {
      return {
        ...state,
        currency: payload,
      };
    }
    return state;
  },
  [actionTypes.currencyValid]: (state, payload) => {
    if (typeof payload === 'boolean') {
      return {
        ...state,
        currencyValid: payload,
      };
    }
    return state;
  },
  [actionTypes.currencyDefault]: (state, payload) => {
    if (isSelectDefault(payload)) {
      return {
        ...state,
        currencyDefault: payload,
      };
    }
    return state;
  },
  [actionTypes.currencyLocation]: (state, payload) => {
    if (typeof payload === 'string') {
      return {
        ...state,
        currencyLocation: payload,
      };
    }
    return state;
  },
  [actionTypes.currencyLocationValid]: (state, payload) => {
    if (typeof payload === 'boolean') {
      return {
        ...state,
        currencyLocationValid: payload,
      };
    }
    return state;
  },
  [actionTypes.currencyLocationDefault]: (state, payload) => {
    if (isSelectDefault(payload)) {
      return {
        ...state,
        currencyLocationDefault: payload,
      };
    }
    return state;
  },
  [actionTypes.thousandsSeparator]: (state, payload) => {
    if (typeof payload === 'string') {
      return {
        ...state,
        thousandsSeparator: payload,
      };
    }
    return state;
  },
  [actionTypes.decimalSeparator]: (state, payload) => {
    if (typeof payload === 'string') {
      return {
        ...state,
        decimalSeparator: payload,
      };
    }
    return state;
  },
  [actionTypes.separatorValid]: (state, payload) => {
    if (typeof payload === 'boolean') {
      return {
        ...state,
        separatorValid: payload,
      };
    }
    return state;
  },
  [actionTypes.separatorDefault]: (state, payload) => {
    if (isSelectDefault(payload)) {
      return {
        ...state,
        separatorDefault: payload,
      };
    }
    return state;
  },
  [actionTypes.decimalNumbers]: (state, payload) => {
    if (typeof payload === 'string') {
      return {
        ...state,
        decimalNumbers: payload,
      };
    }
    return state;
  },
  [actionTypes.decimalNumbersValid]: (state, payload) => {
    if (typeof payload === 'boolean') {
      return {
        ...state,
        decimalNumbersValid: payload,
      };
    }
    return state;
  },
  [actionTypes.decimalNumbersDefault]: (state, payload) => {
    if (isSelectDefault(payload)) {
      return {
        ...state,
        decimalNumbersDefault: payload,
      };
    }
    return state;
  },
  [actionTypes.taxes]: (state, payload) => {
    if (typeof payload === 'string') {
      return {
        ...state,
        taxes: payload,
      };
    }
    return state;
  },
  [actionTypes.taxesValid]: (state, payload) => {
    if (typeof payload === 'boolean') {
      return {
        ...state,
        decimalNumbersValid: payload,
      };
    }
    return state;
  },
  [actionTypes.taxesDefault]: (state, payload) => {
    if (isSelectDefault(payload)) {
      return {
        ...state,
        taxesDefault: payload,
      };
    }
    return state;
  },
  [actionTypes.host]: (state, payload) => {
    if (typeof payload === 'string') {
      return {
        ...state,
        host: payload,
      };
    }
    return state;
  },
  [actionTypes.hostValid]: (state, payload) => {
    if (typeof payload === 'boolean') {
      return {
        ...state,
        decimalNumbersValid: payload,
      };
    }
    return state;
  },
};

const reducer = (state: State, action: Action): State => {
  return reducerObject[action.type](state, action.payload) || state;
};

export type UseSitesConfig = {
  states: State;
  actions: Actions;
};

const initialState = (): State => ({
  currency: '',
  currencyValid: false,
  currencyOptions: [
    {
      label: 'Seleccionada',
      value: '1',
    },
  ],
  currencyDefault: {
    label: 'Selecciona tipo de moneda',
    value: '',
  },
  currencyLocation: '',
  currencyLocationValid: false,
  currencyLocationOptions: [
    { label: 'Izquierda', value: 'left' },
    { label: 'Derecha', value: 'right' },
  ],
  currencyLocationDefault: {
    label: 'Selecciona la posición de la moneda',
    value: '',
  },
  thousandsSeparator: '',
  decimalSeparator: '',
  separatorValid: false,
  separatorOptions: [
    { label: 'Miles: " . "    Decimal: " , "', value: '.' },
    { label: 'Miles: " , "    Decimal: " . "', value: ',' },
  ],
  separatorDefault: {
    label: 'Selecciona los separadores',
    value: '',
  },
  decimalNumbers: '',
  decimalNumbersValid: false,
  decimalNumbersOptions: [
    { label: '0', value: '0' },
    { label: '2', value: '2' },
  ],
  decimalNumbersDefault: {
    label: 'Selecciona el número de decimales',
    value: '',
  },
  taxes: '',
  taxesValid: false,
  taxesOptions: [
    { label: 'Si trabaja con impuestos', value: 'true' },
    { label: 'No trabaja con impuestos', value: 'false' },
  ],
  taxesDefault: {
    label: 'Selecciona los impuestos',
    value: '',
  },
  host: '',
  hostValid: false,
});

export function useGafpriSitesConfig(): UseSitesConfig {
  const [state, dispatch] = React.useReducer(reducer, initialState());
  const {
    currency,
    currencyValid,
    currencyOptions,
    currencyDefault,

    currencyLocation,
    currencyLocationValid,
    currencyLocationOptions,
    currencyLocationDefault,

    thousandsSeparator,
    decimalSeparator,
    separatorValid,
    separatorOptions,
    separatorDefault,

    decimalNumbers,
    decimalNumbersValid,
    decimalNumbersOptions,
    decimalNumbersDefault,

    taxes,
    taxesValid,
    taxesOptions,
    taxesDefault,

    host,
    hostValid,
  } = state;

  /**
   * SITES
   *
   *
   */

  // Setear valores de sitio
  const setCurrency = (value: string): void =>
    dispatch({
      type: actionTypes.currency,
      payload: value,
    });

  const setCurrencyValid = (value: boolean): void =>
    dispatch({
      type: actionTypes.currencyValid,
      payload: value,
    });

  const setCurrencyDefault = (value: SelectDefault): void =>
    dispatch({
      type: actionTypes.currencyDefault,
      payload: value,
    });

  const setCurrencyLocation = (value: string): void =>
    dispatch({
      type: actionTypes.currencyLocation,
      payload: value,
    });

  const setCurrencyLocationValid = (value: boolean): void =>
    dispatch({
      type: actionTypes.currencyLocationValid,
      payload: value,
    });

  const setCurrencyLocationDefault = (value: SelectDefault): void =>
    dispatch({
      type: actionTypes.currencyLocationDefault,
      payload: value,
    });

  const setThousandsSeparator = (value: string): void =>
    dispatch({
      type: actionTypes.thousandsSeparator,
      payload: value,
    });

  const setDecimalSeparator = (value: string): void =>
    dispatch({
      type: actionTypes.decimalSeparator,
      payload: value,
    });

  const setSeparatorValid = (value: boolean): void =>
    dispatch({
      type: actionTypes.separatorValid,
      payload: value,
    });

  const setSeparatorDefault = (value: SelectDefault): void =>
    dispatch({
      type: actionTypes.separatorDefault,
      payload: value,
    });

  const setSeparator = (value: string): void => {
    if (value === '.') {
      setThousandsSeparator('.');
      setDecimalSeparator(',');
    } else if (value === ',') {
      setThousandsSeparator(',');
      setDecimalSeparator('.');
    }
  };

  const setDecimalNumbers = (value: string): void =>
    dispatch({
      type: actionTypes.decimalNumbers,
      payload: value,
    });

  const setDecimalNumbersValid = (value: boolean): void =>
    dispatch({
      type: actionTypes.decimalNumbersValid,
      payload: value,
    });

  const setDecimalNumbersDefault = (value: SelectDefault): void =>
    dispatch({
      type: actionTypes.decimalNumbersDefault,
      payload: value,
    });

  const setTaxes = (value: string): void =>
    dispatch({
      type: actionTypes.taxes,
      payload: value,
    });

  const setTaxesValid = (value: boolean): void =>
    dispatch({
      type: actionTypes.taxesValid,
      payload: value,
    });

  const setTaxesDefault = (value: SelectDefault): void =>
    dispatch({
      type: actionTypes.taxesDefault,
      payload: value,
    });

  const setHost = (value: string): void =>
    dispatch({
      type: actionTypes.host,
      payload: value,
    });

  const setHostValid = (value: boolean): void =>
    dispatch({
      type: actionTypes.hostValid,
      payload: value,
    });

  // Funciones de Validacion
  const validationCurrency = (value: string): boolean => {
    const validation: boolean = validationSelect(
      value,
      'currencySite',
      'gs-input-alert'
    );
    setCurrencyValid(validation);
    return validation;
  };

  const validationCurrencyLocation = (value: string): boolean => {
    const validation: boolean = validationSelect(
      value,
      'currencyLocationSite',
      'gs-input-alert'
    );
    setCurrencyLocationValid(validation);
    return validation;
  };

  const validationSeparator = (value: string): boolean => {
    const validation: boolean = validationSelect(
      value,
      'separatorSite',
      'gs-input-alert'
    );
    setSeparatorValid(validation);
    return validation;
  };

  const validationDecimalNumbers = (value: string): boolean => {
    const validation: boolean = validationSelect(
      value,
      'decimalNumbersSite',
      'gs-input-alert'
    );
    setDecimalNumbersValid(validation);
    return validation;
  };

  const validationTaxes = (value: string): boolean => {
    const validation: boolean = validationSelect(
      value,
      'taxesSite',
      'gs-input-alert'
    );
    setTaxesValid(validation);
    return validation;
  };

  const validationHost = (name: string): boolean => {
    const valid = validationInput(
      name,
      /^[-a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_,.&:/'\-\s]+$/,
      'hostSite',
      'gs-input-alert',
      true
    );
    setHostValid(valid);
    return valid;
  };

  const validationButtonNext = (): void => {
    if (
      currencyValid &&
      currencyLocationValid &&
      separatorValid &&
      decimalNumbersValid &&
      taxesValid &&
      hostValid
    ) {
      removeClass('buttonNextConfigSite', 'gs-disabled');
    } else {
      addClass('buttonNextConfigSite', 'gs-disabled');
    }
  };

  // Funciones de cambios

  const changeCurrency = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    changeSelect({
      newValue: options,
      validation: validationCurrency,
      setDefault: setCurrencyDefault,
      setValue: setCurrency,
    });
  };

  const changeCurrencyLocation = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    changeSelect({
      newValue: options,
      validation: validationCurrencyLocation,
      setDefault: setCurrencyLocationDefault,
      setValue: setCurrencyLocation,
    });
  };

  const changeSeparator = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    changeSelect({
      newValue: options,
      validation: validationSeparator,
      setDefault: setSeparatorDefault,
      setValue: setSeparator,
    });
  };

  const changeDecimalNumbers = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    changeSelect({
      newValue: options,
      validation: validationDecimalNumbers,
      setDefault: setDecimalNumbersDefault,
      setValue: setDecimalNumbers,
    });
  };

  const changeTaxes = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    changeSelect({
      newValue: options,
      validation: validationTaxes,
      setDefault: setTaxesDefault,
      setValue: setTaxes,
    });
  };

  const changeHost = (value: string): void => {
    const NewHost = value.toLocaleLowerCase();
    changeInputText({
      value: NewHost,
      validation: validationHost,
      setValue: setHost,
    });
  };

  /**
   * Export
   *
   *
   */
  const states = {
    currency,
    currencyValid,
    currencyOptions,
    currencyDefault,

    currencyLocation,
    currencyLocationValid,
    currencyLocationOptions,
    currencyLocationDefault,

    thousandsSeparator,
    decimalSeparator,
    separatorValid,
    separatorOptions,
    separatorDefault,

    decimalNumbers,
    decimalNumbersValid,
    decimalNumbersOptions,
    decimalNumbersDefault,

    taxes,
    taxesValid,
    taxesOptions,
    taxesDefault,

    host,
    hostValid,
  };

  const actions = {
    changeCurrency,
    validationCurrency,

    changeCurrencyLocation,
    validationCurrencyLocation,

    changeSeparator,
    validationSeparator,

    changeDecimalNumbers,
    validationDecimalNumbers,

    changeTaxes,
    validationTaxes,

    changeHost,
    validationHost,

    validationButtonNext,
  };

  return {
    states,
    actions,
  };
}
