import React from 'react';
import { UseSites } from './useGafpriSites';
import { useGafpriSites } from './useGafpriSites';
import { useGafpriCurrency } from './useGafpriCurrency';
import type { UseCurrency } from './useGafpriCurrency';

type State = {
  isConfig: boolean;
  isSites: boolean;
  isTypeDucument: boolean;
  isRoles: boolean;
  isUser: boolean;
  isCategory: boolean;
  isProjects: boolean;
};

type Actions = {
  onConfig: () => void;
  nextCurrency: () => void;
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

export interface UseGafpri {
  states: State;
  actions: Actions;
  useCurrency: UseCurrency;
  useSites: UseSites;
}

export function useGafpriInstall(): UseGafpri {
  const useCurrency = useGafpriCurrency();
  const useSites = useGafpriSites();
  const [state, dispatch] = React.useReducer(reducer, initialState());
  const {
    //state
    isConfig,
    isSites,
    isTypeDucument,
    isRoles,
    isUser,
    isCategory,
    isProjects,
  } = state;

  /**
   * CURRENCY
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

  const nextCurrency = (): void => {
    if (useCurrency.states.buttonCurrency) {
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
  };

  const actions = {
    onConfig,
    nextCurrency,
  };

  return {
    states,
    actions,
    useCurrency,
    useSites,
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
});

const actionTypes = {
  isConfig: 'CONFIG',
  isSites: 'SITES',
  isTypeDucument: 'TYPE_DOCUMENT',
  isRoles: 'ROLES',
  isUser: 'USER',
  isCategory: 'CATEGORY',
  isProjects: 'PROJECTS',
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
};

const reducer = (state: State, action: Action) => {
  return reducerObject[action.type](state, action.payload) || state;
};
