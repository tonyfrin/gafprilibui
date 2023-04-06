import React from 'react';
import { SingleValue } from 'react-select';
import {
  validationSelect,
  validationInput,
  changeInputText,
  changeSelect,
  removeClass,
  addClass,
  validationInputName,
  toTitleCase,
  validationInputAddress,
  validationInputPostcode,
  validationInputEmail,
  validationInputPhone,
  validationInputPassword,
  isSelectDefaultArray,
  isSelectDefault,
} from '../helpers';
import {
  Countries,
  DocumentsIndex,
  Cities,
  StatesCountries,
} from '../Constans';

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
  name: string;
  nameValid: boolean;

  lastName: string;
  lastNameValid: boolean;

  role: string;
  roleValid: boolean;

  documentIndex: string;
  documentIndexValid: boolean;
  documentIndexOptions: SelectDefault[];
  documentIndexDefault: SelectDefault;

  document: string;
  documentValid: boolean;

  address1: string;
  address1Valid: boolean;

  address2: string;
  address2Valid: boolean;

  city: string;
  cityValid: boolean;
  cityOptions: SelectDefault[];
  cityDefault: SelectDefault;

  stateCountry: string;
  stateCountryValid: boolean;
  stateCountryOptions: SelectDefault[];
  stateCountryDefault: SelectDefault;

  country: string;
  countryValid: boolean;
  countryOptions: SelectDefault[];
  countryDefault: SelectDefault;

  postcode: string;
  postcodeValid: boolean;

  email: string;
  emailValid: boolean;

  phone: string;
  phoneValid: boolean;

  password: string;
  passwordValid: boolean;
};

type Actions = {
  changeName: (value: string) => void;
  validationName: (value: string) => void;

  changeLastName: (value: string) => void;
  validationLastName: (value: string) => void;

  changeRole: (value: string) => void;
  validationRole: (value: string) => void;

  changeDocumentIndex: (
    newValue: SingleValue<{ value: string; label: string }>
  ) => void;
  validationDocumentIndex: (value: string) => void;
  changeDocumentIndexOptions: () => void;

  changeDocument: (value: string) => void;
  validationDocument: (value: string) => void;

  changeAddress1: (value: string) => void;
  validationAddress1: (value: string) => void;

  changeAddress2: (value: string) => void;
  validationAddress2: (value: string) => void;

  changeCity: (newValue: SingleValue<{ value: string; label: string }>) => void;
  validationCity: (value: string) => void;
  changeCityOptions: () => void;

  changeStateCountry: (
    newValue: SingleValue<{ value: string; label: string }>
  ) => void;
  validationStateCountry: (value: string) => void;
  changeStateCountryOptions: () => void;

  changeCountry: (
    newValue: SingleValue<{ value: string; label: string }>
  ) => void;
  validationCountry: (value: string) => void;

  changePostcode: (value: string) => void;
  validationPostcode: (value: string) => void;

  changeEmail: (value: string) => void;
  validationEmail: (value: string) => void;

  changePhone: (value: string) => void;
  validationPhone: (value: string) => void;

  changePassword: (value: string) => void;
  validationPassword: (value: string) => void;

  validationButtonNext: () => void;
};

type Payload = string | boolean | SelectDefault | SelectDefault[] | undefined;
type ActionType = string;

type Action = {
  type: ActionType;
  payload?: Payload;
};

type ReducerHandler = (state: State, payload: Payload) => State;

const actionTypes = {
  name: 'NAME',
  nameValid: 'NAME_VALID',
  lastName: 'LAST_NAME',
  lastNameValid: 'LAST_NAME_VALID',
  role: 'ROLE',
  roleValid: 'ROLE_VALID',
  documentIndex: 'DOCUMENT_INDEX',
  documentIndexValid: 'DOCUMENT_INDEX_VALID',
  documentIndexOptions: 'DOCUMENT_INDEX_OPTIONS',
  documentIndexDefault: 'DOCUMENT_INDEX_DEFAULT',
  document: 'DOCUMENT',
  documentValid: 'DOCUMENT_VALID',
  address1: 'ADDRESS_1',
  address1Valid: 'ADDRESS_1_VALID',
  address2: 'ADDRESS_2',
  address2Valid: 'ADDRESS_2_VALID',
  city: 'CITY',
  cityValid: 'CITY_VALID',
  cityOptions: 'CITY_OPTIONS',
  cityDefault: 'CITY_DEFAULT',
  stateCountry: 'STATE_COUNTRY',
  stateCountryValid: 'STATE_COUNTRY_VALID',
  stateCountryOptions: 'STATE_COUNTRY_OPTIONS',
  stateCountryDefault: 'STATE_COUNTRY_DEFAULT',
  country: 'COUNTRY',
  countryValid: 'COUNTRY_VALID',
  countryDefault: 'COUNTREY_DEFAULT',
  postcode: 'POSTCODE',
  postcodeValid: 'POSTCODE_VALID',
  email: 'EMAIL',
  emailValid: 'EMAIL_VALID',
  phone: 'PHONE',
  phoneValid: 'PHONE_VALID',
  password: 'PASSWORD',
  passwordValid: 'PASSWORD_VALID',
};

const reducerObject: Record<string, ReducerHandler> = {
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
  [actionTypes.lastName]: (state, payload) => {
    if (typeof payload === 'string') {
      return {
        ...state,
        lastName: payload,
      };
    }
    return state;
  },
  [actionTypes.lastNameValid]: (state, payload) => {
    if (typeof payload === 'boolean') {
      return {
        ...state,
        lastNameValid: payload,
      };
    }
    return state;
  },
  [actionTypes.role]: (state, payload) => {
    if (typeof payload === 'string') {
      return {
        ...state,
        role: payload,
      };
    }
    return state;
  },
  [actionTypes.roleValid]: (state, payload) => {
    if (typeof payload === 'boolean') {
      return {
        ...state,
        roleValid: payload,
      };
    }
    return state;
  },
  [actionTypes.documentIndex]: (state, payload) => {
    if (typeof payload === 'string') {
      return {
        ...state,
        documentIndex: payload,
      };
    }
    return state;
  },
  [actionTypes.documentIndexValid]: (state, payload) => {
    if (typeof payload === 'boolean') {
      return {
        ...state,
        documentIndexValid: payload,
      };
    }
    return state;
  },
  [actionTypes.documentIndexOptions]: (state, payload) => {
    if (isSelectDefaultArray(payload)) {
      return {
        ...state,
        documentIndexOptions: payload,
      };
    }
    return state;
  },
  [actionTypes.documentIndexDefault]: (state, payload) => {
    if (isSelectDefault(payload)) {
      return {
        ...state,
        cityDefault: payload,
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
  [actionTypes.documentValid]: (state, payload) => {
    if (typeof payload === 'boolean') {
      return {
        ...state,
        documentValid: payload,
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
  [actionTypes.address1Valid]: (state, payload) => {
    if (typeof payload === 'boolean') {
      return {
        ...state,
        address1Valid: payload,
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
  [actionTypes.address2Valid]: (state, payload) => {
    if (typeof payload === 'boolean') {
      return {
        ...state,
        address2Valid: payload,
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
  [actionTypes.cityValid]: (state, payload) => {
    if (typeof payload === 'boolean') {
      return {
        ...state,
        cityValid: payload,
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
  [actionTypes.stateCountryValid]: (state, payload) => {
    if (typeof payload === 'boolean') {
      return {
        ...state,
        stateCountryValid: payload,
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
  [actionTypes.postcode]: (state, payload) => {
    if (typeof payload === 'string') {
      return {
        ...state,
        postcode: payload,
      };
    }
    return state;
  },
  [actionTypes.postcodeValid]: (state, payload) => {
    if (typeof payload === 'boolean') {
      return {
        ...state,
        postcodeValid: payload,
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
  [actionTypes.emailValid]: (state, payload) => {
    if (typeof payload === 'boolean') {
      return {
        ...state,
        emailValid: payload,
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
  [actionTypes.phoneValid]: (state, payload) => {
    if (typeof payload === 'boolean') {
      return {
        ...state,
        phoneValid: payload,
      };
    }
    return state;
  },
  [actionTypes.password]: (state, payload) => {
    if (typeof payload === 'string') {
      return {
        ...state,
        password: payload,
      };
    }
    return state;
  },
  [actionTypes.passwordValid]: (state, payload) => {
    if (typeof payload === 'boolean') {
      return {
        ...state,
        passwordValid: payload,
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
  name: '',
  nameValid: false,
  lastName: '',
  lastNameValid: false,
  role: '',
  roleValid: false,
  documentIndex: '',
  documentIndexValid: false,
  documentIndexOptions: [],
  documentIndexDefault: {
    label: 'Tipo de Documento',
    value: '',
  },
  document: '',
  documentValid: false,
  address1: '',
  address1Valid: false,
  address2: '',
  address2Valid: true,
  city: '',
  cityValid: false,
  cityOptions: [],
  cityDefault: { label: 'Ciudad', value: '' },
  stateCountry: '',
  stateCountryValid: false,
  stateCountryOptions: [],
  stateCountryDefault: { label: 'Estado', value: '' },
  country: '',
  countryValid: false,
  countryOptions: optionsCountry,
  countryDefault: {
    label: 'País',
    value: '',
  },
  postcode: '',
  postcodeValid: true,
  email: '',
  emailValid: false,
  phone: '',
  phoneValid: false,
  password: '',
  passwordValid: false,
});

export type UseUser = {
  states: State;
  actions: Actions;
};

export function useGafpriUser(): UseUser {
  const [state, dispatch] = React.useReducer(reducer, initialState());
  const {
    name,
    nameValid,

    lastName,
    lastNameValid,

    role,
    roleValid,

    documentIndex,
    documentIndexValid,
    documentIndexOptions,
    documentIndexDefault,

    document,
    documentValid,

    address1,
    address1Valid,

    address2,
    address2Valid,

    city,
    cityValid,
    cityOptions,
    cityDefault,

    stateCountry,
    stateCountryValid,
    stateCountryOptions,
    stateCountryDefault,

    country,
    countryValid,
    countryOptions,
    countryDefault,

    postcode,
    postcodeValid,

    email,
    emailValid,

    phone,
    phoneValid,

    password,
    passwordValid,
  } = state;

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

  const setLastName = (value: string): void =>
    dispatch({
      type: actionTypes.lastName,
      payload: value,
    });

  const setLastNameValid = (value: boolean): void =>
    dispatch({
      type: actionTypes.lastNameValid,
      payload: value,
    });

  const setRole = (value: string): void =>
    dispatch({
      type: actionTypes.role,
      payload: value,
    });

  const setRoleValid = (value: boolean): void =>
    dispatch({
      type: actionTypes.roleValid,
      payload: value,
    });

  const setDocumentIndex = (value: string): void =>
    dispatch({
      type: actionTypes.documentIndex,
      payload: value,
    });

  const setDocumentIndexValid = (value: boolean): void =>
    dispatch({
      type: actionTypes.documentIndexValid,
      payload: value,
    });

  const setDocumentIndexOptions = (value: SelectDefault[]): void =>
    dispatch({
      type: actionTypes.documentIndexOptions,
      payload: value,
    });

  const setDocumentIndexDefault = (value: SelectDefault): void =>
    dispatch({
      type: actionTypes.documentIndexDefault,
      payload: value,
    });

  const setDocument = (value: string): void =>
    dispatch({
      type: actionTypes.document,
      payload: value,
    });

  const setDocumentValid = (value: boolean): void =>
    dispatch({
      type: actionTypes.documentValid,
      payload: value,
    });

  const setAddress1 = (value: string): void =>
    dispatch({
      type: actionTypes.address1,
      payload: value,
    });

  const setAddress1Valid = (value: boolean): void =>
    dispatch({
      type: actionTypes.address1Valid,
      payload: value,
    });

  const setAddress2 = (value: string): void =>
    dispatch({
      type: actionTypes.address2,
      payload: value,
    });

  const setAddress2Valid = (value: boolean): void =>
    dispatch({
      type: actionTypes.address2Valid,
      payload: value,
    });

  const setCity = (value: string): void =>
    dispatch({
      type: actionTypes.city,
      payload: value,
    });

  const setCityValid = (value: boolean): void =>
    dispatch({
      type: actionTypes.cityValid,
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

  const setStateCountryValid = (value: boolean): void =>
    dispatch({
      type: actionTypes.stateCountryValid,
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

  const setPostcode = (value: string): void =>
    dispatch({
      type: actionTypes.postcode,
      payload: value,
    });

  const setPostcodeValid = (value: boolean): void =>
    dispatch({
      type: actionTypes.postcodeValid,
      payload: value,
    });

  const setEmail = (value: string): void =>
    dispatch({
      type: actionTypes.email,
      payload: value,
    });

  const setEmailValid = (value: boolean): void =>
    dispatch({
      type: actionTypes.emailValid,
      payload: value,
    });

  const setPhone = (value: string): void =>
    dispatch({
      type: actionTypes.phone,
      payload: value,
    });

  const setPhoneValid = (value: boolean): void =>
    dispatch({
      type: actionTypes.phoneValid,
      payload: value,
    });

  const setPassword = (value: string): void =>
    dispatch({
      type: actionTypes.password,
      payload: value,
    });

  const setPasswordValid = (value: boolean): void =>
    dispatch({
      type: actionTypes.passwordValid,
      payload: value,
    });

  // Funciones de Validacion
  const validationName = (value: string): boolean => {
    return validationInputName({
      name: value,
      inputId: 'nameUser',
      setValid: setNameValid,
    });
  };

  const validationLastName = (value: string): boolean => {
    return validationInputName({
      name: value,
      inputId: 'lastNameUser',
      setValid: setLastNameValid,
    });
  };

  const validationRole = (value: string): boolean => {
    return validationInputName({
      name: value,
      inputId: 'roleUser',
      setValid: setRoleValid,
    });
  };

  const validationDocumentIndex = (value: string): boolean => {
    const validation: boolean = validationSelect(
      value,
      'typeDocumentUser',
      'gs-input-alert'
    );
    setDocumentIndexValid(validation);
    return validation;
  };

  const validationDocument = (value: string): boolean => {
    const valid = validationInput(
      value,
      /^\d{1,12}(-\d{1,12})?$/,
      'documentUser',
      'gs-input-alert',
      true
    );
    setDocumentValid(valid);
    return valid;
  };

  const validationAddress1 = (newValue: string): boolean => {
    return validationInputAddress({
      value: newValue,
      inputId: 'address1User',
      setValid: setAddress1Valid,
    });
  };

  const validationAddress2 = (newValue: string): boolean => {
    return validationInputAddress({
      value: newValue,
      inputId: 'address2User',
      setValid: setAddress2Valid,
    });
  };

  const validationCity = (value: string): boolean => {
    const validation: boolean = validationSelect(
      value,
      'cityUser',
      'gs-input-alert'
    );
    setCityValid(validation);
    return validation;
  };

  const validationStateCountry = (value: string): boolean => {
    const validation: boolean = validationSelect(
      value,
      'stateCountryUser',
      'gs-input-alert'
    );
    setStateCountryValid(validation);
    return validation;
  };

  const validationCountry = (value: string): boolean => {
    const validation: boolean = validationSelect(
      value,
      'countryUser',
      'gs-input-alert'
    );
    setCountryValid(validation);
    return validation;
  };

  const validationPostcode = (newValue: string): boolean => {
    return validationInputPostcode({
      value: newValue,
      inputId: 'postcodeUser',
      setValid: setPostcodeValid,
    });
  };

  const validationEmail = (newValue: string): boolean => {
    return validationInputEmail({
      value: newValue,
      inputId: 'emailUser',
      setValid: setEmailValid,
    });
  };

  const validationPhone = (newValue: string): boolean => {
    return validationInputPhone({
      value: newValue,
      inputId: 'phoneUser',
      setValid: setPhoneValid,
    });
  };

  const validationPassword = (newValue: string): boolean => {
    return validationInputPassword({
      value: newValue,
      inputId: 'passwordUser',
      setValid: setPasswordValid,
    });
  };

  const validationButtonNext = (): void => {
    if (
      nameValid &&
      lastNameValid &&
      roleValid &&
      documentIndexValid &&
      documentValid &&
      address1Valid &&
      address2Valid &&
      cityValid &&
      stateCountryValid &&
      countryValid &&
      postcodeValid &&
      emailValid &&
      phoneValid &&
      passwordValid
    ) {
      removeClass('buttonNextUser', 'gs-disabled');
    } else {
      addClass('buttonNextUser', 'gs-disabled');
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

  const changeLastName = (value: string): void => {
    const newLastName = toTitleCase(value);
    changeInputText({
      value: newLastName,
      validation: validationLastName,
      setValue: setLastName,
    });
  };

  const changeRole = (value: string): void => {
    const newRole = toTitleCase(value);
    changeInputText({
      value: newRole,
      validation: validationRole,
      setValue: setRole,
    });
  };

  const changeDocumentIndex = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    changeSelect({
      newValue: options,
      validation: validationDocumentIndex,
      setDefault: setDocumentIndexDefault,
      setValue: setDocumentIndex,
    });
  };

  const changeDocument = (newValue: string): void => {
    changeInputText({
      value: newValue,
      validation: validationDocument,
      setValue: setDocument,
    });
  };

  const changeAddress1 = (value: string): void => {
    const newValue = toTitleCase(value);
    changeInputText({
      value: newValue,
      validation: validationAddress1,
      setValue: setAddress1,
    });
  };

  const changeAddress2 = (value: string): void => {
    const newValue = toTitleCase(value);
    changeInputText({
      value: newValue,
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

  const changePostcode = (newValue: string): void => {
    changeInputText({
      value: newValue,
      validation: validationPostcode,
      setValue: setPostcode,
    });
  };

  const changeEmail = (newValue: string): void => {
    const newEmail = newValue.toLocaleLowerCase();
    changeInputText({
      value: newEmail,
      validation: validationEmail,
      setValue: setEmail,
    });
  };

  const changePhone = (newValue: string): void => {
    changeInputText({
      value: newValue,
      validation: validationPhone,
      setValue: setPhone,
    });
  };

  const changePassword = (newValue: string): void => {
    changeInputText({
      value: newValue,
      validation: validationPassword,
      setValue: setPassword,
    });
  };

  const changeDocumentIndexOptions = React.useCallback((): void => {
    const newValue: SelectDefault[] = [];
    if (
      country &&
      DocumentsIndex[country] &&
      DocumentsIndex[country].length > 0
    ) {
      DocumentsIndex[country].forEach((item) => {
        newValue.push({ value: item.value, label: item.label });
      });
    }

    setDocumentIndexDefault({ label: 'Tipo Documento', value: '' });
    setDocumentIndex('');
    setDocumentIndexOptions(newValue);
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
    setCityDefault({ label: 'Ciudad', value: '' });
    setCity('');
    setCityOptions(newValueCity);
  }, [country, stateCountry]);

  const changeStateCountryOptions = React.useCallback((): void => {
    const newValueState: SelectDefault[] = [];
    if (country && StatesCountries[0][country].length > 0) {
      StatesCountries[0][country].forEach((item) => {
        Object.keys(item).forEach((key) => {
          newValueState.push({ value: key, label: item[key] });
        });
      });
    }

    setStateCountryDefault({ label: 'Estado', value: '' });
    setStateCountry('');
    setStateCountryOptions(newValueState);
  }, [country]);

  /**
   * EFFECT
   *
   *
   */

  React.useEffect(() => {
    changeDocumentIndexOptions();
  }, [changeDocumentIndexOptions]);

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
    name,
    nameValid,

    lastName,
    lastNameValid,

    role,
    roleValid,

    documentIndex,
    documentIndexValid,
    documentIndexOptions,
    documentIndexDefault,

    document,
    documentValid,

    address1,
    address1Valid,

    address2,
    address2Valid,

    city,
    cityValid,
    cityOptions,
    cityDefault,

    stateCountry,
    stateCountryValid,
    stateCountryOptions,
    stateCountryDefault,

    country,
    countryValid,
    countryOptions,
    countryDefault,

    postcode,
    postcodeValid,

    email,
    emailValid,

    phone,
    phoneValid,

    password,
    passwordValid,
  };

  const actions = {
    changeName,
    validationName,

    changeLastName,
    validationLastName,

    changeRole,
    validationRole,

    changeDocumentIndex,
    validationDocumentIndex,
    changeDocumentIndexOptions,

    changeDocument,
    validationDocument,

    changeAddress1,
    validationAddress1,

    changeAddress2,
    validationAddress2,

    changeCity,
    validationCity,
    changeCityOptions,

    changeStateCountry,
    validationStateCountry,
    changeStateCountryOptions,

    changeCountry,
    validationCountry,

    changePostcode,
    validationPostcode,

    changeEmail,
    validationEmail,

    changePhone,
    validationPhone,

    changePassword,
    validationPassword,

    validationButtonNext,
  };

  return {
    states,
    actions,
  };
}
