import React from 'react';
import { SingleValue } from 'react-select';
import { validationSelect, validationInput } from '../helpers';

type State = {
  siteName: string;
  validSiteName: boolean;
  siteNameDefault: string;
  siteDocumentIndex: string;
  validSiteDocumentIndex: boolean;
  siteDocumentIndexOptions: SelectDefault[];
  siteDocumentIndexDefault: SelectDefault;
};

type Actions = {
  changeSiteName: (value: string) => void;
  validationSiteName: (value: string) => void;
  changeSiteDocumentIndex: (
    newValue: SingleValue<{ value: string; label: string }>
  ) => void;
  validationSiteDocumentIndex: (value: string) => void;
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

export type UseSites = {
  states: State;
  actions: Actions;
};

function useGafpriSites(): UseSites {
  const [state, dispatch] = React.useReducer(reducer, initialState());
  const {
    siteName,
    validSiteName,
    siteNameDefault,

    siteDocumentIndex,
    validSiteDocumentIndex,
    siteDocumentIndexOptions,
    siteDocumentIndexDefault,
  } = state;

  /**
   * SITES
   *
   *
   */

  //Setear valores de sitio
  const setSiteName = (value: string): void =>
    dispatch({
      type: actionTypes.siteName,
      payload: value,
    });

  const setValidSiteName = (value: boolean): void =>
    dispatch({
      type: actionTypes.validSiteName,
      payload: value,
    });

  const setSiteNameDefault = (value: string): void =>
    dispatch({
      type: actionTypes.siteNameDefault,
      payload: value,
    });

  const setSiteDocumentIndex = (value: string): void =>
    dispatch({
      type: actionTypes.siteDocumentIndex,
      payload: value,
    });

  const setValidSiteDocumentIndex = (value: boolean): void =>
    dispatch({
      type: actionTypes.validSiteDocumentIndex,
      payload: value,
    });

  const setSiteDocumentIndexDefault = (value: SelectDefault): void =>
    dispatch({
      type: actionTypes.siteDocumentIndexDefault,
      payload: value,
    });

  //Funciones de Validacion
  const validationSiteName = (name: string): boolean => {
    const valid = validationInput(
      name,
      /^[-a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_,.'\-\s]+$/,
      'siteName',
      'gs-input-alert',
      true
    );
    setValidSiteName(valid);
    return valid;
  };

  const validationSiteDocumentIndex = (value: string): boolean => {
    const validation: boolean = validationSelect(
      value,
      'siteDocumentIndex',
      'gs-input-alert'
    );
    setValidSiteDocumentIndex(validation);
    return validation;
  };

  //Funciones de cambios
  const changeSiteName = (name: string): void => {
    let newName = '';
    const valid = validationSiteName(name);
    if (valid) {
      newName = name;
    }

    setSiteName(newName);
    setSiteNameDefault(newName);
  };

  const changeSiteDocumentIndex = (
    newValue: SingleValue<{ value: string; label: string }>
  ): void => {
    if (newValue != null) {
      const valid = validationSiteDocumentIndex(newValue.value);
      if (valid) {
        const newDefaulValue = {
          label: newValue.label,
          value: newValue.value,
        };
        setSiteDocumentIndexDefault(newDefaulValue);
        setSiteDocumentIndex(newValue.value);
      }
    }
  };

  /**
   * Export
   *
   *
   */
  const states = {
    siteName,
    validSiteName,
    siteDocumentIndex,
    validSiteDocumentIndex,
    siteDocumentIndexOptions,
    siteNameDefault,
    siteDocumentIndexDefault,
  };

  const actions = {
    changeSiteName,
    validationSiteName,
    changeSiteDocumentIndex,
    validationSiteDocumentIndex,
  };

  return {
    states,
    actions,
  };
}

const initialState = (): State => ({
  siteName: '',
  validSiteName: false,
  siteDocumentIndex: '',
  validSiteDocumentIndex: false,
  siteDocumentIndexOptions: [
    { label: 'J', value: 'J' },
    { label: 'V', value: 'V' },
    { label: 'G', value: 'G' },
    { label: 'No Aplica', value: 'null' },
  ],
  siteNameDefault: '',
  siteDocumentIndexDefault: { label: 'Elija el tipo de Documento', value: '' },
});

const actionTypes = {
  siteName: 'SITE_NAME',
  validSiteName: 'VALID_SITE_NAME',
  siteNameDefault: 'SITE_NAME_DEFAULT',
  siteDocumentIndex: 'SITE_DOCUMENT_NAME',
  validSiteDocumentIndex: 'VALID_SITE_DOCUMENT_INDEX',
  siteDocumentIndexDefault: 'SITE_DOCUMENT_INDEX_DEFAULT',
};

const reducerObject: ReducerObject = {
  [actionTypes.siteName]: (state, payload) => ({
    ...state,
    siteName: payload,
  }),
  [actionTypes.validSiteName]: (state, payload) => ({
    ...state,
    validSiteName: payload,
  }),
  [actionTypes.siteNameDefault]: (state, payload) => ({
    ...state,
    siteNameDefault: payload,
  }),
  [actionTypes.siteDocumentIndex]: (state, payload) => ({
    ...state,
    siteDocumentIndex: payload,
  }),
  [actionTypes.validSiteDocumentIndex]: (state, payload) => ({
    ...state,
    validSiteDocumentIndex: payload,
  }),
  [actionTypes.siteDocumentIndexDefault]: (state, payload) => ({
    ...state,
    siteDocumentIndexDefault: payload,
  }),
};

const reducer = (state: State, action: Action) => {
  return reducerObject[action.type](state, action.payload) || state;
};

export { useGafpriSites };
