import React, { useState } from 'react';
import { SingleValue } from 'react-select';
import type {
  ErrorResponseProps,
  CustomErrorResponseProps,
  SelectDefault,
} from '../helpers';
import {
  isCustomErrorResponse,
  isErrorResponse,
  getLastEntryDateAndCount,
  removeClass,
  addClass,
  validationInputName,
  toTitleCase,
  changeInputText,
  validationSelect,
  changeSelect,
  validationInput,
  gafpriFetch,
} from '../helpers';
import { Countries, StatesCountries, Cities } from '../Constans';
import { getItem, saveItem } from '../Context';
import type { UseCurrenciesReturn } from './useGafpriCurrencies';

type DeletedSite = {
  itemId: number;
};

export interface SitesAttributes {
  id: number;
  name: string;
  documentIndex: string;
  documentNumber: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  postCode: string;
  country: string;
  email: string;
  phone: string;
  currenciesId: number;
  currencyLocation: string;
  thousandsSeparator: string;
  decimalSeparator: string;
  decimalNumbers: number;
  taxes: boolean;
  host: string;
  createdAt: Date;
  modifiedAt: Date;
}

interface SitesData {
  data: {
    items: SitesAttributes[] | [] | null;
  };
}

export type UseSitesReturn = {
  states: {
    isReady: boolean;
    isFetching: boolean;
    isInit: boolean;
    isAdd: boolean;
    isUpdate: boolean;

    name: string;
    nameValid: boolean;

    documentIndex: string;
    documentIndexValid: boolean;
    documentIndexDefault: SelectDefault;
    documentIndexOptions: SelectDefault[];

    documentNumber: string;
    documentNumberValid: boolean;

    address1: string;
    address1Valid: boolean;

    address2: string;
    address2Valid: boolean;

    city: string;
    cityValid: boolean;
    cityDefault: SelectDefault;
    cityOptions: SelectDefault[];

    state: string;
    stateCountryValid: boolean;
    stateCountryDefault: SelectDefault;
    stateCountryOptions: SelectDefault[];

    country: string;
    countryValid: boolean;
    countryDefault: SelectDefault;
    countryOptions: SelectDefault[];

    postCode: string;
    postCodeValid: boolean;

    email: string;
    emailValid: boolean;

    phone: string;
    phoneValid: boolean;

    currenciesId: number;
    currenciesIdValid: boolean;
    currenciesIdDefault: SelectDefault;
    currenciesIdOptions: SelectDefault[];

    currencyLocation: string;
    currencyLocationValid: boolean;
    currencyLocationDefault: SelectDefault;
    currencyLocationOptions: SelectDefault[];

    thousandsSeparator: string;
    decimalSeparator: string;
    separatorValid: boolean;
    separatorDefault: SelectDefault;
    separatorOptions: SelectDefault[];

    decimalNumbers: number;
    decimalNumbersValid: boolean;
    decimalNumbersDefault: SelectDefault;
    decimalNumbersOptions: SelectDefault[];

    taxes: boolean;
    taxesValid: boolean;
    taxesDefault: SelectDefault;
    taxesOptions: SelectDefault[];

    host: string;
    hostValid: boolean;

    sites: SitesData;
    error: string[];
    orderList: 'asc' | 'desc';
    searchTerm: string;
    currentPage: number;
    itemsPerPage: number;
    siteId: number;
  };
  actions: {
    onFetching: () => void;
    onInit: () => void;
    returnInit: () => void;
    onAdd: () => void;
    goAdd: () => void;
    onUpdate: () => void;
    changeName: (name: string) => void;
    changeDocumentIndex: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    changeDocumentNumber: (documentNumber: string) => void;
    changeAddress1: (address1: string) => void;
    changeAddress2: (address2: string) => void;
    changeCity: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    changeCityOptions: () => void;
    changeStateCountry: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    setStateCountryDefault: (options: SelectDefault) => void;
    setStateCountry: (value: string) => void;
    changeStateCountryOptions: () => void;
    changeCountry: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    setCountryDefault: (options: SelectDefault) => void;
    setCountry: (value: string) => void;
    changePostCode: (postCode: string) => void;
    changeEmail: (email: string) => void;
    changePhone: (phone: string) => void;
    changeCurrenciesId: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    changeCurrencyLocation: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    changeSeparator: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    changeDecimalNumbers: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    changeTaxes: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    changeHost: (host: string) => void;
    validationButtonNext: () => void;
    setIsReady: (value: boolean) => void;
    update: () => void;

    add: () => void;
    getById: (id: number) => SitesAttributes | null;
    getMainSite: () => SitesAttributes | null;
    goUpdate: (id: number) => void;
    sortByName: (
      items: SitesAttributes[] | null,
      order: 'asc' | 'desc'
    ) => SitesAttributes[] | null;
    setOrderList: (order: 'asc' | 'desc') => void;
    setSearchTerm: (value: string) => void;
    filterByName: (search: string) => SitesAttributes[] | null;
    setCurrentPage: (value: number) => void;
    getPaginated: (
      items: SitesAttributes[] | null,
      page: number,
      itemsPerPage: number
    ) => SitesAttributes[] | null;
    deleteSites: (id: number) => void;
    handleNewSite: (newItem: SitesAttributes) => void;
    handleDeletedSite: (value: DeletedSite) => void;
    handleUpdatedSite: (itemUpdate: SitesAttributes) => void;

    validationName: (value: string) => boolean;
    validationDocumentIndex: (value: string) => boolean;
    validationDocumentNumber: (value: string) => boolean;
    validationAddress1: (value: string) => boolean;
    validationAddress2: (value: string) => boolean;
    validationCity: (value: string) => boolean;
    validationStateCountry: (value: string) => boolean;
    validationCountry: (value: string) => boolean;

    validationPostCode: (value: string) => boolean;
    validationEmail: (value: string) => boolean;
    validationPhone: (value: string) => boolean;
    validationCurrenciesId: (value: string) => boolean;
    validationCurrencyLocation: (value: string) => boolean;
    validationSeparator: (value: string) => boolean;
    validationDecimalNumbers: (value: string) => boolean;
    validationTaxes: (value: string) => boolean;
    validationHost: (value: string) => boolean;
  };
};

export type UseSitesProps = {
  useCurrencies: UseCurrenciesReturn;
};

export const useGafpriSites = ({
  useCurrencies,
}: UseSitesProps): UseSitesReturn => {
  // Define los estados necesarios para los atributos de Site
  const [isReady, setIsReady] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [isInit, setIsInit] = useState(true);
  const [isAdd, setIsAdd] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const [name, setName] = useState('');
  const [nameValid, setNameValid] = useState(false);

  const [documentIndex, setDocumentIndex] = useState('');
  const [documentIndexValid, setDocumentIndexValid] = useState(false);
  const [documentIndexDefault, setDocumentIndexDefault] =
    useState<SelectDefault>({ value: '', label: 'Elija el tipo de Documento' });
  const documentIndexOptions = [
    { label: 'J', value: 'J' },
    { label: 'V', value: 'V' },
    { label: 'G', value: 'G' },
    { label: 'No Aplica', value: 'null' },
  ];

  const [documentNumber, setDocumentNumber] = useState('');
  const [documentNumberValid, setDocumentNumberValid] = useState(false);

  const [address1, setAddress1] = useState('');
  const [address1Valid, setAddress1Valid] = useState(false);

  const [address2, setAddress2] = useState('');
  const [address2Valid, setAddress2Valid] = useState(true);

  const [city, setCity] = useState('');
  const [cityValid, setCityValid] = useState(false);
  const [cityDefault, setCityDefault] = useState<SelectDefault>({
    value: '',
    label: 'Elija la ciudad',
  });
  const [cityOptions, setCityOptions] = useState<SelectDefault[]>([]);

  const [state, setStateCountry] = useState('');
  const [stateCountryValid, setStateCountryValid] = useState(false);
  const [stateCountryDefault, setStateCountryDefault] = useState<SelectDefault>(
    { value: '', label: 'Elija el Estado' }
  );
  const [stateCountryOptions, setStateCountryOptions] = useState<
    SelectDefault[]
  >([]);

  const [country, setCountry] = useState('');
  const [countryValid, setCountryValid] = useState(false);
  const [countryDefault, setCountryDefault] = useState<SelectDefault>({
    value: '',
    label: 'Elija el Pais',
  });
  const countryOptions: SelectDefault[] = [];

  Countries.forEach((item) => {
    Object.keys(item).forEach((key) => {
      countryOptions.push({ value: key, label: item[key] });
    });
  });

  const [postCode, setPostCode] = useState('');
  const [postCodeValid, setPostCodeValid] = useState(true);

  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);

  const [phone, setPhone] = useState('');
  const [phoneValid, setPhoneValid] = useState(false);

  const [currenciesId, setCurrenciesId] = useState(0);
  const [currenciesIdValid, setCurrenciesIdValid] = useState(false);
  const [currenciesIdDefault, setCurrenciesIdDefault] = useState<SelectDefault>(
    { value: '', label: 'Elija la moneda del Sitio' }
  );

  const currenciesIdOptions: SelectDefault[] =
    useCurrencies.states.currencies.data.items?.map((item) => {
      return { label: `${item.name} ${item.symbol}`, value: `${item.id}` };
    }) || [];

  const [currencyLocation, setCurrencyLocation] = useState('');
  const [currencyLocationValid, setCurrencyLocationValid] = useState(false);
  const [currencyLocationDefault, setCurrencyLocationDefault] =
    useState<SelectDefault>({
      value: '',
      label: 'Elija la ubicación del símbolo de la moneda',
    });
  const currencyLocationOptions: SelectDefault[] = [
    { label: 'Izquierda', value: 'left' },
    { label: 'Derecha', value: 'right' },
  ];

  const [thousandsSeparator, setThousandsSeparator] = useState('');
  const [decimalSeparator, setDecimalSeparator] = useState('');
  const [separatorValid, setSeparatorValid] = useState(false);
  const [separatorDefault, setSeparatorDefault] = useState<SelectDefault>({
    value: '',
    label: 'Selecciona los separadores de la moneda',
  });
  const separatorOptions = [
    { label: 'Miles: " . "    Decimal: " , "', value: '.' },
    { label: 'Miles: " , "    Decimal: " . "', value: ',' },
  ];

  const setSeparator = (value: string): void => {
    if (value === '.') {
      setThousandsSeparator('.');
      setDecimalSeparator(',');
    } else if (value === ',') {
      setThousandsSeparator(',');
      setDecimalSeparator('.');
    }
  };

  const [decimalNumbers, setDecimalNumbers] = useState(0);
  const [decimalNumbersValid, setDecimalNumbersValid] = useState(false);
  const [decimalNumbersDefault, setDecimalNumbersDefault] =
    useState<SelectDefault>({
      value: '',
      label: 'Selecciona el número de decimales',
    });
  const decimalNumbersOptions: SelectDefault[] = [
    { label: '0', value: '0' },
    { label: '2', value: '2' },
  ];

  const [taxes, setTaxes] = useState(false);
  const [taxesValid, setTaxesValid] = useState(false);
  const [taxesDefault, setTaxesDefault] = useState<SelectDefault>({
    value: '',
    label: 'Selecciona la opción para los impuestos',
  });
  const taxesOptions: SelectDefault[] = [
    { label: 'Si trabaja con impuestos', value: 'true' },
    { label: 'No trabaja con impuestos', value: 'false' },
  ];

  const [host, setHost] = useState('');
  const [hostValid, setHostValid] = useState(false);

  const [sites, setSites] = useState<SitesData>({
    data: {
      items: getItem('GS_SITES_V2', null),
    },
  });
  const [error, setError] = useState<string[]>([]);
  const [siteId, setSiteId] = useState(0);
  const [orderList, setOrderList] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const infoReset = (): void => {
    setName('');
    setNameValid(false);

    setDocumentIndex('');
    setDocumentIndexValid(false);
    setDocumentIndexDefault({ value: '', label: 'Elija el tipo de Documento' });

    setDocumentNumber('');
    setDocumentNumberValid(false);

    setAddress1('');
    setAddress1Valid(false);

    setAddress2('');
    setAddress2Valid(true);

    setCity('');
    setCityValid(false);

    setStateCountry('');
    setStateCountryValid(false);

    setCountry('');
    setCountryValid(false);

    setPostCode('');
    setPostCodeValid(true);

    setEmail('');
    setEmailValid(false);

    setPhone('');
    setPhoneValid(false);

    setCurrenciesId(0);
    setCurrenciesIdValid(false);
    setCurrenciesIdDefault({ value: '', label: 'Elija la moneda del Sitio' });

    setCurrencyLocation('');
    setCurrencyLocationValid(false);
    setCurrencyLocationDefault({
      value: '',
      label: 'Elija la ubicación del símbolo de la moneda',
    });

    setThousandsSeparator('');
    setDecimalSeparator('');
    setSeparatorValid(false);
    setSeparatorDefault({
      value: '',
      label: 'Selecciona los separadores de la moneda',
    });

    setDecimalNumbers(0);
    setDecimalNumbersValid(false);
    setDecimalNumbersDefault({
      value: '',
      label: 'Selecciona el número de decimales',
    });

    setTaxes(false);
    setTaxesValid(false);
    setTaxesDefault({
      value: '',
      label: 'Selecciona la opción para los impuestos',
    });

    setHost('');
    setHostValid(false);

    setError([]);
  };

  // Funciones de paginas
  const onFetching = (): void => {
    setIsFetching(true);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
  };

  const onInit = (): void => {
    setIsFetching(false);
    setIsInit(true);
    setIsAdd(false);
    setIsUpdate(false);
  };

  const onAdd = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(true);
    setIsUpdate(false);
  };

  const onUpdate = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(true);
  };

  const onIsReady = (): void => {
    setIsReady(true);
  };

  const notReady = (): void => {
    setIsReady(false);
  };

  const goUpdate = (id: number): void => {
    infoReset();
    setSiteId(id);
    onUpdate();
  };

  const goAdd = (): void => {
    infoReset();
    onAdd();
  };

  // Funciones de Validacion
  const validationButtonNext = (): void => {
    if (
      nameValid &&
      documentIndexValid &&
      documentNumberValid &&
      address1Valid &&
      address2Valid &&
      cityValid &&
      stateCountryValid &&
      postCodeValid &&
      countryValid &&
      emailValid &&
      phoneValid &&
      currenciesIdValid &&
      currencyLocationValid &&
      separatorValid &&
      decimalNumbersValid &&
      taxesValid &&
      hostValid
    ) {
      removeClass('buttonNext', 'gs-disabled');
    } else {
      addClass('buttonNext', 'gs-disabled');
    }
  };

  const validationName = (value: string): boolean => {
    return validationInputName({
      name: value,
      inputId: 'siteName',
      setValid: setNameValid,
    });
  };

  const validationDocumentIndex = (value: string): boolean => {
    const validation: boolean = validationSelect(
      value,
      'documentIndex',
      'gs-input-alert'
    );
    setDocumentIndexValid(validation);
    return validation;
  };

  const validationDocumentNumber = (value: string): boolean => {
    const valid = validationInput(
      value,
      /^\d{1,12}(-\d{1,12})?$/,
      'documentNumber',
      'gs-input-alert',
      true
    );
    setDocumentNumberValid(valid);
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
    setAddress1Valid(valid);
    return valid;
  };

  const validationAddress2 = (value: string): boolean => {
    const valid = validationInput(
      value,
      /^[a-zA-Z0-9]+[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_#'()\-.,\s]+$/,
      'address2',
      'gs-input-alert'
    );
    setAddress2Valid(valid);
    return valid;
  };

  const validationCity = (value: string): boolean => {
    const validation: boolean = validationSelect(
      value,
      'citySite',
      'gs-input-alert'
    );
    setCityValid(validation);
    return validation;
  };

  const validationStateCountry = (value: string): boolean => {
    const validation: boolean = validationSelect(
      value,
      'stateCountrySite',
      'gs-input-alert'
    );
    setStateCountryValid(validation);
    return validation;
  };

  const validationCountry = (value: string): boolean => {
    const validation: boolean = validationSelect(
      value,
      'countrySite',
      'gs-input-alert'
    );
    setCountryValid(validation);
    return validation;
  };

  const validationPostCode = (value: string): boolean => {
    const valid = validationInput(
      value,
      /^[a-zA-Z0-9]+[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_#()\-.\s]+$/,
      'postCodeSite',
      'gs-input-alert'
    );
    setPostCodeValid(valid);
    return valid;
  };

  const validationEmail = (value: string): boolean => {
    const valid = validationInput(
      value,
      /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/,
      'emailSite',
      'gs-input-alert',
      true
    );
    setEmailValid(valid);
    return valid;
  };

  const validationPhone = (value: string): boolean => {
    const valid = validationInput(
      value,
      /^[0-9]{10,20}/,
      'phoneSite',
      'gs-input-alert',
      true
    );
    setPhoneValid(valid);
    return valid;
  };

  const validationCurrenciesId = (value: string): boolean => {
    const validation: boolean = validationSelect(
      value,
      'currencySite',
      'gs-input-alert'
    );
    setCurrenciesIdValid(validation);
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

  const validationHost = (value: string): boolean => {
    const valid = validationInput(
      value,
      /^[-a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_,.&:/'\-\s]+$/,
      'hostSite',
      'gs-input-alert',
      true
    );
    setHostValid(valid);
    return valid;
  };

  // Funciones de cambios
  const changeName = (value: string): void => {
    const newValue = toTitleCase(value);
    changeInputText({
      value: newValue,
      validation: validationName,
      setValue: setName,
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

  const changeDocumentNumber = (newDocument: string): void => {
    changeInputText({
      value: newDocument,
      validation: validationDocumentNumber,
      setValue: setDocumentNumber,
    });
  };

  const changeAddress1 = (value: string): void => {
    const address = toTitleCase(value);
    changeInputText({
      value: address,
      validation: validationAddress1,
      setValue: setAddress1,
    });
  };

  const changeAddress2 = (value: string): void => {
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

  const changeCityOptions = React.useCallback((): void => {
    const newValueCity: SelectDefault[] = [];
    if (Cities[0][country]) {
      if (Array.isArray(Cities[0][country][0][state])) {
        Cities[0][country][0][state].forEach((item) => {
          Object.keys(item).forEach((key) => {
            newValueCity.push({ value: item[key], label: item[key] });
          });
        });
      }
    }
    setCityDefault({ label: 'Elija la ciudad', value: '' });
    setCity('');
    setCityOptions(newValueCity);
  }, [country, state]);

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

  const changePostCode = (newPostCode: string): void => {
    changeInputText({
      value: newPostCode,
      validation: validationPostCode,
      setValue: setPostCode,
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

  const changePhone = (newPhone: string): void => {
    changeInputText({
      value: newPhone,
      validation: validationPhone,
      setValue: setPhone,
    });
  };

  const changeCurrenciesId = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    const value = options ? parseInt(options.value, 10) : 0;
    const label = options?.label || '';
    const newOptions = { value, label };
    changeSelect({
      newValue: newOptions,
      validation: validationCurrenciesId,
      setDefault: setCurrenciesIdDefault,
      setValue: setCurrenciesId,
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
    const value = options ? parseInt(options.value, 10) : 0;
    const label = options?.label || '';
    const newOptions = { value, label };
    changeSelect({
      newValue: newOptions,
      validation: validationDecimalNumbers,
      setDefault: setDecimalNumbersDefault,
      setValue: setDecimalNumbers,
    });
  };

  const changeTaxes = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    const value = options && options.value === 'true';
    const label = options?.label || '';
    const newOptions = { value, label };
    changeSelect({
      newValue: newOptions,
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

  // Manejo de la data en DB
  const getLastItem: SitesAttributes | null = sites.data?.items
    ? sites.data.items.sort(
        (a, b) =>
          new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime()
      )[0]
    : null;

  const setDataStorage = (newData: SitesData): void => {
    saveItem('GS_SITES_V2', newData.data.items);
  };

  const setData = (newData: SitesData): void => {
    setSites(newData);
    setDataStorage(newData);
  };

  const onSites = (newData: SitesData): void => {
    setData(newData);
    onIsReady();
  };

  const getSites = async (): Promise<void> => {
    const lastEntryDateAndCount = await getLastEntryDateAndCount('sites');
    const lastDate = getLastItem?.modifiedAt || null;
    const count = sites.data.items?.length || 0;

    if (
      sites.data.items === null ||
      `${lastEntryDateAndCount?.date}` !== `${lastDate}` ||
      `${lastEntryDateAndCount?.count}` !== `${count}`
    ) {
      gafpriFetch({
        initMethod: 'GET',
        initApi: 'http://localhost:4000',
        initRoute: 'api/v1/sites',
        functionFetching: notReady,
        functionSuccess: onSites,
      });
    } else {
      onIsReady();
    }
  };

  const handleNewSite = (newItem: SitesAttributes): void => {
    setSites((prevState) => {
      const newData = {
        data: {
          items: [...(prevState.data.items || []), newItem],
        },
      };
      setDataStorage(newData);
      return newData;
    });
  };

  const handleUpdatedSite = (itemUpdate: SitesAttributes): void => {
    setSites((prevState) => {
      const updatedItems =
        prevState.data.items?.map((item) =>
          item.id === itemUpdate.id ? itemUpdate : item
        ) || [];
      const newData = {
        data: {
          items: updatedItems,
        },
      };
      setDataStorage(newData);
      return newData;
    });
  };

  const handleDeletedSite = ({ itemId }: DeletedSite): void => {
    setSites((prevState) => {
      const filteredItems =
        prevState.data.items?.filter((item) => `${item.id}` !== `${itemId}`) ||
        [];

      const newData = {
        data: {
          items: filteredItems,
        },
      };

      setDataStorage(newData);
      return newData;
    });
  };

  const returnInit = (): void => {
    infoReset();
    onInit();
  };

  const newError = (
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
  ): void => {
    if (isErrorResponse(newErrorValue)) {
      setError([newErrorValue.message]);
      onAdd();
    } else if (isCustomErrorResponse(newErrorValue)) {
      const errorMessage = newErrorValue.errors.map((item) => {
        return item.message;
      });
      setError(errorMessage);
      onAdd();
    } else {
      setError([`${newErrorValue}`]);
      onAdd();
    }

    setTimeout(() => {
      setError([]);
    }, 5000);
  };

  const newErrorUpdate = (
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
  ): void => {
    if (isErrorResponse(newErrorValue)) {
      setError([newErrorValue.message]);
      onUpdate();
    } else if (isCustomErrorResponse(newErrorValue)) {
      const errorMessage = newErrorValue.errors.map((item) => {
        return item.message;
      });
      setError(errorMessage);
      onUpdate();
    } else {
      setError([`${newErrorValue}`]);
      onUpdate();
    }

    setTimeout(() => {
      setError([]);
    }, 5000);
  };

  const newErrorDelete = (
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
  ): void => {
    if (isErrorResponse(newErrorValue)) {
      setError([newErrorValue.message]);
      onInit();
    } else if (isCustomErrorResponse(newErrorValue)) {
      const errorMessage = newErrorValue.errors.map((item) => {
        return item.message;
      });
      setError(errorMessage);
      onInit();
    } else {
      setError([`${newErrorValue}`]);
      onInit();
    }

    setTimeout(() => {
      setError([]);
    }, 5000);
  };

  const add = (): void => {
    if (
      nameValid &&
      documentIndexValid &&
      documentNumberValid &&
      address1Valid &&
      address2Valid &&
      cityValid &&
      stateCountryValid &&
      postCodeValid &&
      countryValid &&
      emailValid &&
      phoneValid &&
      currenciesIdValid &&
      currencyLocationValid &&
      separatorValid &&
      decimalNumbersValid &&
      taxesValid &&
      hostValid
    ) {
      const payload = {
        name,
        documentIndex,
        documentNumber,
        address1,
        city,
        state,
        country,
        email,
        phone,
        currenciesId,
        currencyLocation,
        thousandsSeparator,
        decimalSeparator,
        decimalNumbers,
        taxes,
        host,
      };

      const updatedPayload = {
        ...payload,
        ...(postCode ? { postCode } : {}),
        ...(address2 ? { address2 } : {}),
      };

      gafpriFetch({
        initMethod: 'POST',
        initApi: 'http://localhost:4000',
        initRoute: 'api/v1/sites',
        initCredentials: updatedPayload,
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newError,
      });
    }
  };

  function getById(id: number): SitesAttributes | null {
    return sites.data.items?.find((item) => `${item.id}` === `${id}`) || null;
  }

  function getMainSite(): SitesAttributes | null {
    if (sites.data.items) {
      return sites.data.items[0];
    }

    return null;
  }

  const update = (): void => {
    if (
      nameValid &&
      documentIndexValid &&
      documentNumberValid &&
      address1Valid &&
      address2Valid &&
      cityValid &&
      stateCountryValid &&
      postCodeValid &&
      countryValid &&
      emailValid &&
      phoneValid &&
      currenciesIdValid &&
      currencyLocationValid &&
      separatorValid &&
      decimalNumbersValid &&
      taxesValid &&
      hostValid
    ) {
      const payload = {
        name,
        documentIndex,
        documentNumber,
        address1,
        city,
        state,
        country,
        email,
        phone,
        currenciesId,
        currencyLocation,
        thousandsSeparator,
        decimalSeparator,
        decimalNumbers,
        taxes,
        host,
      };

      const updatedPayload = {
        ...payload,
        ...(postCode ? { postCode } : {}),
        ...(address2 ? { address2 } : {}),
      };

      gafpriFetch({
        initMethod: 'PATCH',
        initApi: 'http://localhost:4000',
        initRoute: `api/v1/sites/${siteId}`,
        initCredentials: updatedPayload,
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newErrorUpdate,
      });
    }
  };

  const deleteSites = (id: number): void => {
    gafpriFetch({
      initMethod: 'DELETE',
      initApi: 'http://localhost:4000',
      initRoute: `api/v1/sites/${id}`,
      functionFetching: onFetching,
      functionSuccess: returnInit,
      functionError: newErrorDelete,
    });
  };

  function sortByName(
    items: SitesAttributes[] | null,
    order: 'asc' | 'desc'
  ): SitesAttributes[] | null {
    if (items) {
      return items.slice().sort((a, b) => {
        const comparison = a.name.localeCompare(b.name, undefined, {
          sensitivity: 'base',
        });
        return order === 'asc' ? comparison : -comparison;
      });
    }
    return null;
  }

  const filterByName = (search: string): SitesAttributes[] | null => {
    if (sites.data.items) {
      return sites.data.items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return null;
  };

  const getPaginated = (
    items: SitesAttributes[] | null,
    page: number,
    itemPerPage: number
  ): SitesAttributes[] | null => {
    const startIndex = (page - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;

    if (items) {
      return items.slice(startIndex, endIndex);
    }

    return null;
  };

  // Efects
  React.useEffect(() => {
    getSites();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const states = {
    isReady,
    isFetching,
    isAdd,
    isInit,
    isUpdate,

    name,
    nameValid,

    documentIndex,
    documentIndexValid,
    documentIndexDefault,
    documentIndexOptions,

    documentNumber,
    documentNumberValid,

    address1,
    address1Valid,

    address2,
    address2Valid,

    city,
    cityValid,
    cityDefault,
    cityOptions,

    state,
    stateCountryValid,
    stateCountryDefault,
    stateCountryOptions,

    country,
    countryValid,
    countryDefault,
    countryOptions,

    postCode,
    postCodeValid,

    email,
    emailValid,

    phone,
    phoneValid,

    currenciesId,
    currenciesIdValid,
    currenciesIdDefault,
    currenciesIdOptions,

    currencyLocation,
    currencyLocationValid,
    currencyLocationDefault,
    currencyLocationOptions,

    thousandsSeparator,
    decimalSeparator,
    separatorValid,
    separatorDefault,
    separatorOptions,

    decimalNumbers,
    decimalNumbersValid,
    decimalNumbersDefault,
    decimalNumbersOptions,

    taxes,
    taxesValid,
    taxesDefault,
    taxesOptions,

    host,
    hostValid,

    sites,
    error,
    orderList,
    searchTerm,
    currentPage,
    itemsPerPage,
    siteId,
  };

  // Define las acciones necesarias para los atributos de Site
  const actions = {
    onFetching,
    onInit,
    returnInit,
    onAdd,
    goAdd,
    onUpdate,
    changeName,
    changeDocumentIndex,
    changeDocumentNumber,
    changeAddress1,
    changeAddress2,
    changeCity,
    changeCityOptions,
    changeStateCountry,
    setStateCountryDefault,
    setStateCountry,
    changeCountry,
    setCountryDefault,
    changeStateCountryOptions,
    setCountry,
    changePostCode,
    changeEmail,
    changePhone,
    changeCurrenciesId,
    changeCurrencyLocation,
    changeSeparator,
    changeDecimalNumbers,
    changeTaxes,
    changeHost,
    validationButtonNext,
    setIsReady,
    add,
    update,
    getById,
    getMainSite,
    goUpdate,
    sortByName,
    setOrderList,
    setSearchTerm,
    filterByName,
    setCurrentPage,
    getPaginated,
    deleteSites,
    handleNewSite,
    handleDeletedSite,
    handleUpdatedSite,
    validationName,
    validationDocumentIndex,
    validationDocumentNumber,
    validationAddress1,
    validationAddress2,
    validationCity,
    validationStateCountry,
    validationCountry,
    validationPostCode,
    validationEmail,
    validationPhone,
    validationCurrenciesId,
    validationCurrencyLocation,
    validationSeparator,
    validationDecimalNumbers,
    validationTaxes,
    validationHost,
  };

  return {
    states,
    actions,
  };
};
