import React from 'react';
import {
  changeInputText,
  removeClass,
  addClass,
  validationInputName,
  toTitleCase,
} from '../helpers';

type State = {
  name: string;
  nameValid: boolean;

  description: string;
  descriptionValid: boolean;
};

type Actions = {
  changeName: (value: string) => void;
  validationName: (value: string) => void;

  changeDescription: (value: string) => void;
  validationDescription: (value: string) => void;

  validationButtonNext: () => void;
};

type ActionType = string;

const actionTypes = {
  name: 'NAME',
  nameValid: 'NAME_VALID',
  description: 'LAST_NAME',
  descriptionValid: 'LAST_NAME_VALID',
};

type Action =
  | { type: typeof actionTypes.name; payload: string }
  | { type: typeof actionTypes.nameValid; payload: boolean }
  | { type: typeof actionTypes.description; payload: string }
  | { type: typeof actionTypes.descriptionValid; payload: boolean };

type Payload = string | boolean;

type ReducerHandler = (state: State, payload: Payload) => State;

const reducerObject: Record<ActionType, ReducerHandler> = {
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
  [actionTypes.description]: (state, payload) => {
    if (typeof payload === 'string') {
      return {
        ...state,
        description: payload,
      };
    }
    return state;
  },
  [actionTypes.descriptionValid]: (state, payload) => {
    if (typeof payload === 'boolean') {
      return {
        ...state,
        descriptionValid: payload,
      };
    }
    return state;
  },
};

const reducer = (state: State, action: Action): State => {
  const handler = reducerObject[action.type];
  return handler(state, action.payload);
};

const initialState = (): State => ({
  name: '',
  nameValid: false,
  description: '',
  descriptionValid: false,
});

export type UseCategoryProjects = {
  states: State;
  actions: Actions;
};

type Props = {
  type: string;
};

export function useGafpriCategoryProjects({
  type,
}: Props): UseCategoryProjects {
  const [state, dispatch] = React.useReducer(reducer, initialState());
  const {
    name,
    nameValid,

    description,
    descriptionValid,
  } = state;

  /**
   * EFFECT
   *
   *
   */

  // Setear valores de sitio
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

  const setDescription = (value: string): void =>
    dispatch({
      type: actionTypes.description,
      payload: value,
    });

  const setDescriptionValid = (value: boolean): void =>
    dispatch({
      type: actionTypes.descriptionValid,
      payload: value,
    });

  // Funciones de Validacion
  const validationName = (value: string): boolean => {
    return validationInputName({
      name: value,
      inputId: `name${type}`,
      setValid: setNameValid,
    });
  };

  const validationDescription = (value: string): boolean => {
    return validationInputName({
      name: value,
      inputId: `description${type}`,
      setValid: setDescriptionValid,
    });
  };

  const validationButtonNext = (): void => {
    if (nameValid && description) {
      removeClass(`buttonNext${type}`, 'gs-disabled');
    } else {
      addClass(`buttonNext${type}`, 'gs-disabled');
    }
  };

  // Funciones de cambios
  const changeName = (value: string): void => {
    const newName = toTitleCase(value);
    changeInputText({
      value: newName,
      validation: validationName,
      setValue: setName,
    });
  };

  const changeDescription = (value: string): void => {
    const newLastName = toTitleCase(value);
    changeInputText({
      value: newLastName,
      validation: validationDescription,
      setValue: setDescription,
    });
  };

  /**
   * Export
   *
   *
   */
  const states = {
    name,
    nameValid,

    description,
    descriptionValid,
  };

  const actions = {
    changeName,
    validationName,

    changeDescription,
    validationDescription,

    validationButtonNext,
  };

  return {
    states,
    actions,
  };
}
