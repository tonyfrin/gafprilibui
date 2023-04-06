import React from 'react';
import { SingleValue } from 'react-select';
import {
  validationSelect,
  validationInput,
  changeInputText,
  toTitleCase,
  addClass,
  removeClass,
  changeSelect,
  validationInputName,
  isSelectDefault,
  isSelectDefaultArray,
} from '../helpers';
import { Countries, StatesCountries, Cities } from '../Constans';

type SelectDefault = {
  value: string;
  label: string;
};

type State = {
  siteName: string;
  validSiteName: boolean;

  siteDocumentIndex: string;
  validSiteDocumentIndex: boolean;
  siteDocumentIndexOptions: SelectDefault[];
  siteDocumentIndexDefault: SelectDefault;

  document: string;
  validDocument: boolean;

  address1: string;
  validAddress1: boolean;

  address2: string;
  validAddress2: boolean;

  city: string;
  validCity: boolean;
  cityOptions: SelectDefault[];
  cityDefault: SelectDefault;

  stateCountry: string;
  validStateCountry: boolean;
  stateCountryOptions: SelectDefault[];
  stateCountryDefault: SelectDefault;

  country: string;
  validCountry: boolean;
  countryOptions: SelectDefault[];
  countryDefault: SelectDefault;

  postcode: string;
  validPostcode: boolean;

  phone: string;
  validPhone: boolean;

  email: string;
  validEmail: boolean;
};

type Actions = {
  changeSiteName: (value: string) => void;
  validationSiteName: (value: string) => void;

  changeSiteDocumentIndex: (
    newValue: SingleValue<{ value: string; label: string }>
  ) => void;
  validationSiteDocumentIndex: (value: string) => void;

  changeDocument: (value: string) => void;
  validationDocument: (value: string) => void;

  changeAddres1: (value: string) => void;
  validationAddress1: (value: string) => void;

  changeAddres2: (value: string) => void;
  validationAddress2: (value: string) => void;

  changeCity: (newValue: SingleValue<{ value: string; label: string }>) => void;
  validationCity: (value: string) => void;

  changeStateCountry: (
    newValue: SingleValue<{ value: string; label: string }>
  ) => void;
  validationStateCountry: (value: string) => void;

  changeCountry: (
    newValue: SingleValue<{ value: string; label: string }>
  ) => void;
  validationCountry: (value: string) => void;

  changePostcode: (value: string) => void;
  validationPostcode: (value: string) => void;

  changePhone: (value: string) => void;
  validationPhone: (value: string) => void;

  changeEmail: (value: string) => void;
  validationEmail: (value: string) => void;

  validationButtonNext: () => void;
};

const optionsCountry: SelectDefault[] = [];

Countries.forEach((item) => {
  Object.keys(item).forEach((key) => {
    optionsCountry.push({ value: key, label: item[key] });
  });
});

type Payload = string | boolean | SelectDefault | SelectDefault[] | undefined;
type ActionType = string;

type ReducerHandler = (state: State, payload: Payload) => State;

type Action = {
  type: ActionType;
  payload?: Payload;
};

export type UseSites = {
  states: State;
  actions: Actions;
};

const actionTypes = {
  siteName: 'SITE_NAME',
  validSiteName: 'VALID_SITE_NAME',
  siteDocumentIndex: 'SITE_DOCUMENT_NAME',
  validSiteDocumentIndex: 'VALID_SITE_DOCUMENT_INDEX',
  siteDocumentIndexDefault: 'SITE_DOCUMENT_INDEX_DEFAULT',
  document: 'DOCUMENT',
  validDocument: 'VALID_DOCUMENT',
  address1: 'ADDRESS_1',
  validAddress1: 'VALID_ADDRESS_1',
  address2: 'ADDRESS_2',
  validAddress2: 'VALID_ADDRESS_2',
  city: 'CITY',
  validCity: 'VALID_CITY',
  cityOptions: 'CITY_OPTIONS',
  cityDefault: 'CITY_DEFOULT',
  stateCountry: 'STATE_COUNTRY',
  validStateCountry: 'VALID_STATE_COUNTRY',
  stateCountryOptions: 'STATE_COUNTRY_OPTIONS',
  stateCountryDefault: 'STATE_COUNTRY_DEFAULT',
  country: 'COUNTRY',
  validCountry: 'VALID_COUNTRY',
  countryDefault: 'COUNTRY_DEFAULT',
  postcode: 'POSTCODE',
  validPostcode: 'VALID_POSTCODE',
  phone: 'PHONE',
  validPhone: 'VALID_PHONE',
  email: 'EMAIL',
  validEmail: 'VALID_EMAIL',
};

const reducerObject: Record<string, ReducerHandler> = {
  [actionTypes.siteName]: (state, payload) => {
    if (typeof payload === 'string') {
      return {
        ...state,
        siteName: payload,
      };
    }
    return state;
  },
  [actionTypes.validSiteName]: (state, payload) => {
    if (typeof payload === 'boolean') {
      return {
        ...state,
        validSiteName: payload,
      };
    }
    return state;
  },
  [actionTypes.siteDocumentIndex]: (state, payload) => {
    if (typeof payload === 'string') {
      return {
        ...state,
        siteDocumentIndex: payload,
      };
    }
    return state;
  },
  [actionTypes.validSiteDocumentIndex]: (state, payload) => {
    if (typeof payload === 'boolean') {
      return {
        ...state,
        validSiteDocumentIndex: payload,
      };
    }
    return state;
  },
  [actionTypes.siteDocumentIndexDefault]: (state, payload) => {
    if (isSelectDefault(payload)) {
      return {
        ...state,
        siteDocumentIndexDefault: payload,
      };
    }
    return state;
  },
  [actionTypes.document]: (state, payload) => {
    if (typeof payload === 'string') {
      return {
        ...state,
        document: payload,
      };
    }
    return state;
  },
  [actionTypes.validDocument]: (state, payload) => {
    if (typeof payload === 'boolean') {
      return {
        ...state,
        validSiteDocumentIndex: payload,
      };
    }
    return state;
  },
  [actionTypes.address1]: (state, payload) => {
    if (typeof payload === 'string') {
      return {
        ...state,
        address1: payload,
      };
    }
    return state;
  },
  [actionTypes.validAddress1]: (state, payload) => {
    if (typeof payload === 'boolean') {
      return {
        ...state,
        validAddress1: payload,
      };
    }
    return state;
  },
  [actionTypes.address2]: (state, payload) => {
    if (typeof payload === 'string') {
      return {
        ...state,
        address2: payload,
      };
    }
    return state;
  },
  [actionTypes.validAddress2]: (state, payload) => {
    if (typeof payload === 'boolean') {
      return {
        ...state,
        validAddress2: payload,
      };
    }
    return state;
  },
  [actionTypes.city]: (state, payload) => {
    if (typeof payload === 'string') {
      return {
        ...state,
        city: payload,
      };
    }
    return state;
  },
  [actionTypes.validCity]: (state, payload) => {
    if (typeof payload === 'boolean') {
      return {
        ...state,
        validCity: payload,
      };
    }
    return state;
  },
  [actionTypes.cityOptions]: (state, payload) => {
    if (isSelectDefaultArray(payload)) {
      return {
        ...state,
        cityOptions: payload,
      };
    }
    return state;
  },
  [actionTypes.cityDefault]: (state, payload) => {
    if (isSelectDefault(payload)) {
      return {
        ...state,
        cityDefault: payload,
      };
    }
    return state;
  },
  [actionTypes.stateCountry]: (state, payload) => {
    if (typeof payload === 'string') {
      return {
        ...state,
        stateCountry: payload,
      };
    }
    return state;
  },
  [actionTypes.validStateCountry]: (state, payload) => {
    if (typeof payload === 'boolean') {
      return {
        ...state,
        validStateCountry: payload,
      };
    }
    return state;
  },
  [actionTypes.stateCountryOptions]: (state, payload) => {
    if (isSelectDefaultArray(payload)) {
      return {
        ...state,
        stateCountryOptions: payload,
      };
    }
    return state;
  },
  [actionTypes.stateCountryDefault]: (state, payload) => {
    if (isSelectDefault(payload)) {
      return {
        ...state,
        stateCountryDefault: payload,
      };
    }
    return state;
  },
  [actionTypes.country]: (state, payload) => {
    if (typeof payload === 'string') {
      return {
        ...state,
        country: payload,
      };
    }
    return state;
  },
  [actionTypes.validCountry]: (state, payload) => {
    if (typeof payload === 'boolean') {
      return {
        ...state,
        validCountry: payload,
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
  [actionTypes.postcode]: (state, payload) => {
    if (typeof payload === 'string') {
      return {
        ...state,
        postcode: payload,
      };
    }
    return state;
  },
  [actionTypes.validPostcode]: (state, payload) => {
    if (typeof payload === 'boolean') {
      return {
        ...state,
        validPostcode: payload,
      };
    }
    return state;
  },
  [actionTypes.phone]: (state, payload) => {
    if (typeof payload === 'string') {
      return {
        ...state,
        phone: payload,
      };
    }
    return state;
  },
  [actionTypes.validPhone]: (state, payload) => {
    if (typeof payload === 'boolean') {
      return {
        ...state,
        validPhone: payload,
      };
    }
    return state;
  },
  [actionTypes.email]: (state, payload) => {
    if (typeof payload === 'string') {
      return {
        ...state,
        email: payload,
      };
    }
    return state;
  },
  [actionTypes.validEmail]: (state, payload) => {
    if (typeof payload === 'boolean') {
      return {
        ...state,
        validEmail: payload,
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
  siteDocumentIndexDefault: { label: 'Elija el tipo de Documento', value: '' },
  document: '',
  validDocument: false,
  address1: '',
  validAddress1: false,
  address2: '',
  validAddress2: true,
  city: '',
  validCity: false,
  cityOptions: [],
  cityDefault: { label: 'Elija la Ciudad', value: '' },
  stateCountry: '',
  validStateCountry: false,
  stateCountryOptions: [],
  stateCountryDefault: { label: 'Elija el Estado', value: '' },
  country: '',
  validCountry: false,
  countryOptions: optionsCountry,
  countryDefault: { label: 'Elija el país', value: '' },
  postcode: '',
  validPostcode: true,
  phone: '',
  validPhone: true,
  email: '',
  validEmail: true,
});

export function useGafpriSites(): UseSites {
  const [state, dispatch] = React.useReducer(reducer, initialState());
  const {
    siteName,
    validSiteName,

    siteDocumentIndex,
    validSiteDocumentIndex,
    siteDocumentIndexOptions,
    siteDocumentIndexDefault,

    document,
    validDocument,

    address1,
    validAddress1,

    address2,
    validAddress2,

    city,
    validCity,
    cityOptions,
    cityDefault,

    stateCountry,
    validStateCountry,
    stateCountryOptions,
    stateCountryDefault,

    country,
    validCountry,
    countryOptions,
    countryDefault,

    postcode,
    validPostcode,

    phone,
    validPhone,

    email,
    validEmail,
  } = state;

  /**
   * SITES
   *
   *
   */

  // Setear valores de sitio
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

  const setDocument = (value: string): void =>
    dispatch({
      type: actionTypes.document,
      payload: value,
    });

  const setValidDocument = (value: boolean): void =>
    dispatch({
      type: actionTypes.validDocument,
      payload: value,
    });

  const setAddress1 = (value: string): void =>
    dispatch({
      type: actionTypes.address1,
      payload: value,
    });

  const setValidAddress1 = (value: boolean): void =>
    dispatch({
      type: actionTypes.validAddress1,
      payload: value,
    });

  const setAddress2 = (value: string): void =>
    dispatch({
      type: actionTypes.address2,
      payload: value,
    });

  const setValidAddress2 = (value: boolean): void =>
    dispatch({
      type: actionTypes.validAddress2,
      payload: value,
    });

  const setCity = (value: string): void =>
    dispatch({
      type: actionTypes.city,
      payload: value,
    });

  const setValidCity = (value: boolean): void =>
    dispatch({
      type: actionTypes.validCity,
      payload: value,
    });

  const setCityOptions = (value: SelectDefault[]): void =>
    dispatch({
      type: actionTypes.cityOptions,
      payload: value,
    });

  const setCityDefault = (value: SelectDefault): void =>
    dispatch({
      type: actionTypes.cityDefault,
      payload: value,
    });

  const setStateCountry = (value: string): void =>
    dispatch({
      type: actionTypes.stateCountry,
      payload: value,
    });

  const setValidStateCountry = (value: boolean): void =>
    dispatch({
      type: actionTypes.validStateCountry,
      payload: value,
    });

  const setStateCountryOptions = (value: SelectDefault[]): void =>
    dispatch({
      type: actionTypes.stateCountryOptions,
      payload: value,
    });

  const setStateCountryDefault = (value: SelectDefault): void =>
    dispatch({
      type: actionTypes.stateCountryDefault,
      payload: value,
    });

  const setCountry = (value: string): void =>
    dispatch({
      type: actionTypes.country,
      payload: value,
    });

  const setValidCountry = (value: boolean): void =>
    dispatch({
      type: actionTypes.validCountry,
      payload: value,
    });

  const setCountryDefault = (value: SelectDefault): void =>
    dispatch({
      type: actionTypes.countryDefault,
      payload: value,
    });

  const setPostcode = (value: string): void =>
    dispatch({
      type: actionTypes.postcode,
      payload: value,
    });

  const setValidPostcode = (value: boolean): void =>
    dispatch({
      type: actionTypes.validPostcode,
      payload: value,
    });

  const setPhone = (value: string): void =>
    dispatch({
      type: actionTypes.phone,
      payload: value,
    });

  const setValidPhone = (value: boolean): void =>
    dispatch({
      type: actionTypes.validPhone,
      payload: value,
    });

  const setEmail = (value: string): void =>
    dispatch({
      type: actionTypes.email,
      payload: value,
    });

  const setValidEmail = (value: boolean): void =>
    dispatch({
      type: actionTypes.validEmail,
      payload: value,
    });

  // Funciones de Validacion
  const validationButtonNext = (): void => {
    if (
      validSiteName &&
      validSiteDocumentIndex &&
      validDocument &&
      validAddress1 &&
      validAddress2 &&
      validCity &&
      validStateCountry &&
      validCountry &&
      validPostcode &&
      validPhone &&
      validEmail
    ) {
      removeClass('buttonNextInfoSite', 'gs-disabled');
    } else {
      addClass('buttonNextInfoSite', 'gs-disabled');
    }
  };

  const validationSiteName = (value: string): boolean => {
    return validationInputName({
      name: value,
      inputId: 'siteName',
      setValid: setValidSiteName,
    });
  };

  const validationSiteDocumentIndex = (value: string): boolean => {
    const validation: boolean = validationSelect(
      value,
      'siteDocumentIndex',
      'gs-input-alert'
    );
    setValidSiteDocumentIndex(validation);
    validationButtonNext();
    return validation;
  };

  const validationDocument = (value: string): boolean => {
    const valid = validationInput(
      value,
      /^\d{1,12}(-\d{1,12})?$/,
      'siteDocument',
      'gs-input-alert',
      true
    );
    setValidDocument(valid);
    validationButtonNext();
    return valid;
  };

  const validationAddress1 = (value: string): boolean => {
    const valid = validationInput(
      value,
      /^[a-zA-Z0-9]+[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_#'()\-.,\s]+$/,
      'address1',
      'gs-input-alert',
      true
    );
    setValidAddress1(valid);
    validationButtonNext();
    return valid;
  };

  const validationAddress2 = (value: string): boolean => {
    const valid = validationInput(
      value,
      /^[a-zA-Z0-9]+[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_#'()\-.,\s]+$/,
      'address2',
      'gs-input-alert'
    );
    setValidAddress2(valid);
    validationButtonNext();
    return valid;
  };

  const validationCity = (value: string): boolean => {
    const validation: boolean = validationSelect(
      value,
      'citySite',
      'gs-input-alert'
    );
    setValidCity(validation);
    validationButtonNext();
    return validation;
  };

  const validationStateCountry = (value: string): boolean => {
    const validation: boolean = validationSelect(
      value,
      'stateCountrySite',
      'gs-input-alert'
    );
    setValidStateCountry(validation);
    validationButtonNext();
    return validation;
  };

  const validationCountry = (value: string): boolean => {
    const validation: boolean = validationSelect(
      value,
      'countrySite',
      'gs-input-alert'
    );
    setValidCountry(validation);
    validationButtonNext();
    return validation;
  };

  const validationPostcode = (value: string): boolean => {
    const valid = validationInput(
      value,
      /^[a-zA-Z0-9]+[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_#()\-.\s]+$/,
      'postcodeSite',
      'gs-input-alert'
    );
    setValidPostcode(valid);
    validationButtonNext();
    return valid;
  };

  const validationPhone = (value: string): boolean => {
    const valid = validationInput(
      value,
      /^[0-9]{10,20}/,
      'phoneSite',
      'gs-input-alert'
    );
    setValidPhone(valid);
    validationButtonNext();
    return valid;
  };

  const validationEmail = (value: string): boolean => {
    const valid = validationInput(
      value,
      /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/,
      'emailSite',
      'gs-input-alert'
    );
    setValidEmail(valid);
    validationButtonNext();
    return valid;
  };

  // Funciones de cambios
  const changeSiteName = (value: string): void => {
    const name = toTitleCase(value);
    changeInputText({
      value: name,
      validation: validationSiteName,
      setValue: setSiteName,
    });
  };

  const changeSiteDocumentIndex = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    changeSelect({
      newValue: options,
      validation: validationSiteDocumentIndex,
      setDefault: setSiteDocumentIndexDefault,
      setValue: setSiteDocumentIndex,
    });
  };

  const changeDocument = (newDocument: string): void => {
    changeInputText({
      value: newDocument,
      validation: validationDocument,
      setValue: setDocument,
    });
  };

  const changeAddres1 = (value: string): void => {
    const address = toTitleCase(value);
    changeInputText({
      value: address,
      validation: validationAddress1,
      setValue: setAddress1,
    });
  };

  const changeAddres2 = (value: string): void => {
    const address = toTitleCase(value);
    changeInputText({
      value: address,
      validation: validationAddress2,
      setValue: setAddress2,
    });
  };

  const changeCity = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    changeSelect({
      newValue: options,
      validation: validationCity,
      setDefault: setCityDefault,
      setValue: setCity,
    });
  };

  const changeStateCountry = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    changeSelect({
      newValue: options,
      validation: validationStateCountry,
      setDefault: setStateCountryDefault,
      setValue: setStateCountry,
    });
  };

  const changeStateCountryOptions = React.useCallback((): void => {
    const newValueState: SelectDefault[] = [];
    if (country && StatesCountries[0][country].length > 0) {
      StatesCountries[0][country].forEach((item) => {
        Object.keys(item).forEach((key) => {
          newValueState.push({ value: key, label: item[key] });
        });
      });
    }

    setStateCountryDefault({ label: 'Elija el Estado', value: '' });
    setStateCountry('');
    setStateCountryOptions(newValueState);
  }, [country]);

  const changeCityOptions = React.useCallback((): void => {
    const newValueCity: SelectDefault[] = [];
    if (Cities[0][country]) {
      if (Array.isArray(Cities[0][country][0][stateCountry])) {
        Cities[0][country][0][stateCountry].forEach((item) => {
          Object.keys(item).forEach((key) => {
            newValueCity.push({ value: item[key], label: item[key] });
          });
        });
      }
    }
    setCityDefault({ label: 'Elija la ciudad', value: '' });
    setCity('');
    setCityOptions(newValueCity);
  }, [country, stateCountry]);

  const changeCountry = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    changeStateCountryOptions();
    changeSelect({
      newValue: options,
      validation: validationCountry,
      setDefault: setCountryDefault,
      setValue: setCountry,
    });
  };

  const changePostcode = (newPostcode: string): void => {
    changeInputText({
      value: newPostcode,
      validation: validationPostcode,
      setValue: setPostcode,
    });
  };

  const changePhone = (newPhone: string): void => {
    changeInputText({
      value: newPhone,
      validation: validationPhone,
      setValue: setPhone,
    });
  };

  const changeEmail = (inputValue: string): void => {
    const newEmail = inputValue.toLocaleLowerCase();
    changeInputText({
      value: newEmail,
      validation: validationEmail,
      setValue: setEmail,
    });
  };

  // Efects
  React.useEffect(() => {
    changeStateCountryOptions();
  }, [changeStateCountryOptions]);

  React.useEffect(() => {
    changeCityOptions();
  }, [changeCityOptions]);

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
    siteDocumentIndexDefault,

    document,
    validDocument,

    address1,
    validAddress1,

    address2,
    validAddress2,

    city,
    validCity,
    cityOptions,
    cityDefault,

    stateCountry,
    validStateCountry,
    stateCountryOptions,
    stateCountryDefault,

    country,
    validCountry,
    countryOptions,
    countryDefault,

    postcode,
    validPostcode,

    phone,
    validPhone,

    email,
    validEmail,
  };

  const actions = {
    changeSiteName,
    validationSiteName,

    changeSiteDocumentIndex,
    validationSiteDocumentIndex,

    changeDocument,
    validationDocument,

    changeAddres1,
    validationAddress1,

    changeAddres2,
    validationAddress2,

    changeCity,
    validationCity,

    changeStateCountry,
    validationStateCountry,

    changeCountry,
    validationCountry,

    changePostcode,
    validationPostcode,

    changePhone,
    validationPhone,

    changeEmail,
    validationEmail,

    validationButtonNext,
  };

  return {
    states,
    actions,
  };
}
