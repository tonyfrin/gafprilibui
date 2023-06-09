import React from 'react';
import { gafpriFetch } from '../helpers';

type State = {
  source: {
    api: string;
    url: string;
  };
  isInstalled: boolean;
  isFetching: boolean;
};

type Actions = {
  onInstalled: () => void;
  onFetching: () => void;
};

type Payload = unknown;
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
}

const initialState = (): State => ({
  source: {
    api: 'http://localhost:4000',
    url: 'https://prueba.tiendasgafpri.com',
  },
  isInstalled: true,
  isFetching: false,
});

const actionTypes = {
  isInstalled: 'INSTALLED',
  isFetching: 'FETCHING',
  notInstalled: 'NOT_INSTALLED',
};

const reducerObject: ReducerObject = {
  [actionTypes.isInstalled]: (state) => ({
    ...state,
    isInstalled: true,
    isFetching: false,
  }),
  [actionTypes.isFetching]: (state) => ({
    ...state,
    isInstalled: false,
    isFetching: true,
  }),
  [actionTypes.notInstalled]: (state) => ({
    ...state,
    isInstalled: false,
    isFetching: false,
  }),
};

const reducer = (state: State, action: Action): State => {
  return reducerObject[action.type](state, action.payload) || state;
};

export function useGafpri(): UseGafpri {
  const [state, dispatch] = React.useReducer(reducer, initialState());
  const {
    // state
    source,
    isInstalled,
    isFetching,
  } = state;

  /**
   * CURRENCY
   *
   *
   */
  const onInstalled = (): void =>
    dispatch({
      type: actionTypes.isInstalled,
    });

  const onFetching = (): void =>
    dispatch({
      type: actionTypes.isFetching,
    });

  const notInstalled = (): void =>
    dispatch({
      type: actionTypes.notInstalled,
    });

  type Data = {
    success: boolean;
  };

  const successCheck = (data: Data): void => {
    if (data.success) {
      notInstalled();
    } else {
      onInstalled();
    }
  };

  const check = (): void => {
    gafpriFetch({
      initMethod: 'GET',
      initApi: 'http://localhost:4000',
      initRoute: 'api/v1/install/check',
      functionFetching: onFetching,
      functionSuccess: successCheck,
      functionError: successCheck,
    });
  };

  React.useEffect(() => {
    check();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  /**
   * Export
   *
   *
   */
  const states = {
    isInstalled,
    isFetching,
    source,
  };

  const actions = {
    onInstalled,
    onFetching,
  };

  return {
    states,
    actions,
  };
}
