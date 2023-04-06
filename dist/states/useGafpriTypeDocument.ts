import React from 'react';
import { SingleValue } from 'react-select';
import {
  validationSelect,
  validationInput,
  changeInputText,
  changeSelect,
  removeClass,
  addClass,
  isSelectDefault,
} from '../helpers';
import { Countries } from '../Constans';

type SelectDefault = {
  value: string;
  label: string;
};

const optionsCountry: SelectDefault[] = [];
Countries.forEach((item) => {
  Object.keys(item).forEach((key) => {
    optionsCountry.push({ value: key, label: item[key] });
  });
});

type State = {
  country: string;
  countryValid: boolean;
  countryOptions: SelectDefault[];
  countryDefault: SelectDefault;

  name: string;
  nameValid: boolean;
};

type Actions = {
  changeCountry: (
    newValue: SingleValue<{ value: string; label: string }>
  ) => void;
  validationCountry: (value: string) => void;

  changeName: (value: string) => void;
  validationName: (value: string) => void;

  validationButtonNext: () => void;
};

type Payload = string | boolean | SelectDefault | undefined;
type ActionType = string;

type Action = {
  type: ActionType;
  payload?: Payload;
};

type ReducerHandler = (state: State, payload: Payload) => State;

const actionTypes = {
  country: 'COUNTRY',
  countryValid: 'COUNTRY_VALID',
  countryDefault: 'COUNTREY_DEFAULT',

  name: 'NAME',
  nameValid: 'NAME_VALID',
};

const reducerObject: Record<string, ReducerHandler> = {
  [actionTypes.country]: (state, payload) => {
    if (typeof payload === 'string') {
      return {
        ...state,
        country: payload,
      };
    }
    return state;
  },
  [actionTypes.countryValid]: (state, payload) => {
    if (typeof payload === 'boolean') {
      return {
        ...state,
        countryValid: payload,
      };
    }
    return state;
  },
  [actionTypes.countryDefault]: (state, payload) => {
    if (isSelectDefault(payload)) {
      return {
        ...state,
        countryDefault: payload,
      };
    }
    return state;
  },
  [actionTypes.name]: (state, payload) => {
    if (typeof payload === 'string') {
      return {
        ...state,
        name: payload,
      };
    }
    return state;
  },
  [actionTypes.nameValid]: (state, payload) => {
    if (typeof payload === 'boolean') {
      return {
        ...state,
        nameValid: payload,
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

export type UseTypeDocument = {
  states: State;
  actions: Actions;
};

const initialState = (): State => ({
  country: '',
  countryValid: false,
  countryOptions: optionsCountry,
  countryDefault: {
    label: 'Seleccione el país del documento',
    value: '',
  },
  name: '',
  nameValid: false,
});

export function useGafpriTypeDocument(): UseTypeDocument {
  const [state, dispatch] = React.useReducer(reducer, initialState());
  const {
    country,
    countryValid,
    countryOptions,
    countryDefault,

    name,
    nameValid,
  } = state;

  /**
   * SITES
   *
   *
   */

  // Setear valores de sitio
  const setCountry = (value: string): void =>
    dispatch({
      type: actionTypes.country,
      payload: value,
    });

  const setCountryValid = (value: boolean): void =>
    dispatch({
      type: actionTypes.countryValid,
      payload: value,
    });

  const setCountryDefault = (value: SelectDefault): void =>
    dispatch({
      type: actionTypes.countryDefault,
      payload: value,
    });

  const setName = (value: string): void =>
    dispatch({
      type: actionTypes.name,
      payload: value,
    });

  const setNameValid = (value: boolean): void =>
    dispatch({
      type: actionTypes.nameValid,
      payload: value,
    });

  // Funciones de Validacion
  const validationCountry = (value: string): boolean => {
    const validation: boolean = validationSelect(
      value,
      'countryTypeDocument',
      'gs-input-alert'
    );
    setCountryValid(validation);
    return validation;
  };

  const validationName = (value: string): boolean => {
    const valid = validationInput(
      value,
      /^[-a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_,.&'\-\s]+$/,
      'nameTypeDocument',
      'gs-input-alert',
      true
    );
    setNameValid(valid);
    return valid;
  };

  const validationButtonNext = (): void => {
    if (countryValid && nameValid) {
      removeClass('buttonNextTypeDocument', 'gs-disabled');
    } else {
      addClass('buttonNextTypeDocument', 'gs-disabled');
    }
  };

  // Funciones de cambios

  const changeCountry = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    changeSelect({
      newValue: options,
      validation: validationCountry,
      setDefault: setCountryDefault,
      setValue: setCountry,
    });
  };

  const changeName = (value: string): void => {
    const newName = value.toLocaleUpperCase();
    changeInputText({
      value: newName,
      validation: validationName,
      setValue: setName,
    });
  };

  /**
   * Export
   *
   *
   */
  const states = {
    country,
    countryValid,
    countryOptions,
    countryDefault,

    name,
    nameValid,
  };

  const actions = {
    changeCountry,
    validationCountry,

    changeName,
    validationName,

    validationButtonNext,
  };

  return {
    states,
    actions,
  };
}
