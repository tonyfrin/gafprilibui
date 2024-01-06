import React, { useState, ChangeEvent } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { SingleValue } from 'react-select';
import {
  removeClass,
  addClass,
  validationInputName,
  validationInputAddress,
  toTitleCase,
  changeInputText,
  validationSelect,
  changeSelect,
  validationInput,
  gafpriFetch,
  getLastEntryDateAndCount,
  getMimeTypeByExtension,
} from '../helpers';
import type {
  ErrorResponseProps,
  CustomErrorResponseProps,
  SelectDefault,
} from '../helpers';
import { Countries, StatesCountries, Cities } from '../Constans';
import { getItem, saveItem } from '../Context';
import type { UseTypeDocumentIdReturn } from './useGafpriTypeDocumentId';
import type { UseErrorReturn } from './useGafpriError';

interface typeDocumentId {
  id: number;
  country: string;
  name: string;
}

export interface DocumentIdAttributes {
  id?: number;
  index?: string;
  digit: string;
  photo?: string;
  entityId?: number;
  typeDocumentIdId: number | null;
  typeDocumentId?: typeDocumentId;
}

export interface AddressAttributes {
  id?: number;
  type: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  postCode?: string;
  country: string;
  entityId?: number;
}

export interface EntityAttributes {
  id: number;
  login: string;
  email?: string;
  phone?: string;
  type: string;
  name: string;
  lastName?: string;
  status: string;
  photo?: string;
  createdAt: Date;
  modifiedAt: Date;
  address: AddressAttributes[];
  documentId: DocumentIdAttributes[];
}

interface EntityData {
  data: {
    items: EntityAttributes[] | [] | null;
  };
}

export type UseEntityReturn = {
  states: {
    isReady: boolean;
    isFetching: boolean;
    isInit: boolean;
    isAdd: boolean;
    isUpdate: boolean;
    isView: boolean;
    isAddAddress: boolean;
    isAddDocument: boolean;
    formType: 'personal' | 'legal';

    name: string;
    nameValid: boolean;

    lastName: string;
    lastNameValid: boolean;

    typeDocumentIdId: number | null;
    typeDocumentIdIdValid: boolean;
    typeDocumentIdIdDefault: SelectDefault;
    typeDocumentIdIdOptions: SelectDefault[];

    index: string;
    indexValid: boolean;
    indexDefault: SelectDefault;
    indexOptions: SelectDefault[];

    digit: string;
    digitValid: boolean;

    addressType: string;
    addressTypeValid: boolean;
    addressTypeDefault: SelectDefault;
    addressTypeOptions: SelectDefault[];

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

    type: string;
    typeValid: boolean;
    typeDefault: SelectDefault;
    typeOptions: SelectDefault[];

    photo: string;
    photoValid: boolean;
    submitting: boolean;

    documentPhoto: string;
    documentPhotoValid: boolean;
    documentSubmitting: boolean;

    status: string;
    statusValid: boolean;
    statusDefault: SelectDefault;
    statusOptions: SelectDefault[];

    documentId: DocumentIdAttributes[];

    address: AddressAttributes[];
    addressValid: boolean;

    entities: EntityData;

    error: string[];
    entityId: number;
    orderList: 'asc' | 'desc';
    searchTerm: string;
    currentPage: number;
    documentCurrentPage: number;
    searchBy: string;
    searchByDefault: SelectDefault;
    searchByOptions: SelectDefault[];

    itemsPerPage: number;
  };
  actions: {
    // Funciones de paginas
    onFetching: () => void;
    onInit: () => void;
    onAdd: () => void;
    onUpdate: () => void;
    onIsReady: () => void;
    notReady: () => void;
    goUpdate: (id: number) => void;
    goAddPersonal: () => void;
    goAddLegal: () => void;
    goView: (id: number) => void;
    onAddAddress: () => void;
    onAddDocument: () => void;

    validationButtonNext: () => void;
    validationButtonNextAddress: () => void;
    validationButtonNextDocument: () => void;
    validationButtonNextUpdate: () => void;
    validationName: (value: string) => boolean;
    validationLastName: (value: string) => boolean;
    validationTypeDocumentIdId: (value: string) => boolean;
    validationIndex: (value: string) => boolean;
    validationDigit: (value: string) => boolean;
    validationAddressType: (value: string) => boolean;
    validationAddress1: (value: string) => boolean;
    validationAddress2: (value: string) => boolean;
    validationCity: (value: string) => boolean;
    validationStateCountry: (value: string) => boolean;
    validationCountry: (value: string) => boolean;
    validationPostCode: (value: string) => boolean;
    validationEmail: (value: string) => boolean;
    validationPhone: (value: string) => boolean;
    validationType: (value: string) => boolean;
    validationPhoto: (value: string) => boolean;
    validationDocumentPhoto: (value: string) => boolean;
    validationStatus: (value: string) => boolean;

    changeName: (value: string) => void;
    changeLastName: (value: string) => void;
    changeTypeDocumentIdId: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    changeIndex: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    changeDigit: (newDigit: string) => void;
    changeAddressType: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    changeAddress1: (value: string) => void;
    changeAddress2: (value: string) => void;
    changeCity: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    changeCityOptions: () => void;
    changeStateCountry: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    changeStateCountryOptions: () => void;
    changeCountry: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    changePostCode: (newPostCode: string) => void;
    changeEmail: (inputValue: string) => void;
    changePhone: (newPhone: string) => void;
    changeType: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;

    changeError: (value: string[]) => void;
    changePhoto: (e: ChangeEvent<HTMLInputElement>) => void;
    changeDocumentPhoto: (e: ChangeEvent<HTMLInputElement>) => void;
    setPhoto: (value: string) => void;
    setDocumentPhoto: (value: string) => void;
    setSubmitting: (value: boolean) => void;
    setDocumentSubmitting: (value: boolean) => void;
    changeStatus: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    setAddress: (value: AddressAttributes[]) => void;
    setDocumentId: (value: DocumentIdAttributes[]) => void;
    addAddress: () => void;
    changeAddress: (id: number) => void;
    infoReset: () => void;

    onEntity: (newData: EntityData) => void;
    offEntity: () => void;
    handleNewEntity: (newItem: EntityAttributes) => void;
    handleUpdatedEntity: (itemUpdate: EntityAttributes) => void;
    returnInit: () => void;
    newError: (
      newError: unknown | ErrorResponseProps | CustomErrorResponseProps
    ) => void;
    newErrorUpdate: (
      newError: unknown | ErrorResponseProps | CustomErrorResponseProps
    ) => void;
    add: () => void;
    deleteAddress: (id: number) => void;
    deleteDocument: (id: number) => void;
    getById: (id: number) => EntityAttributes | null;
    update: () => void;
    addDocument: () => void;

    sortByName: (
      items: EntityAttributes[] | null,
      order: 'asc' | 'desc'
    ) => EntityAttributes[] | null;

    filterByName: (search: string) => EntityAttributes[] | null;

    getPaginated: (
      items:
        | EntityAttributes[]
        | AddressAttributes[]
        | DocumentIdAttributes[]
        | null,
      page: number,
      itemsPerPage: number
    ) =>
      | EntityAttributes[]
      | AddressAttributes[]
      | DocumentIdAttributes[]
      | null;
    sortByProperty: (
      items: EntityAttributes[] | null,
      searchBy: 'name' | 'lastName' | 'email' | 'phone' | 'digit',
      order: 'asc' | 'desc'
    ) => EntityAttributes[] | null;

    filterBySearch: (
      search: string,
      searchBy: 'name' | 'lastName' | 'email' | 'phone' | 'digit'
    ) => EntityAttributes[] | null;
    changeSearchBy: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    setOrderList: (value: 'asc' | 'desc') => void;
    setSearchTerm: (value: string) => void;
    setCurrentPage: (value: number) => void;
    setDocumentCurrentPage: (value: number) => void;
  };
};

export type UseEntityProps = {
  useTypeDocumentId: UseTypeDocumentIdReturn;
  useError: UseErrorReturn;
  token: string | null;
};

export const useGafpriEntity = ({
  useTypeDocumentId,
  useError,
  token,
}: UseEntityProps): UseEntityReturn => {
  // Define los estados necesarios para los atributos de Site
  const [isReady, setIsReady] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [isInit, setIsInit] = useState(true);
  const [isAdd, setIsAdd] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isView, setIsView] = useState(false);
  const [isAddAddress, setIsAddAddress] = useState(false);
  const [isAddDocument, setIsAddDocument] = useState(false);

  const [formType, setFormType] = useState<'personal' | 'legal'>('personal');

  const [name, setName] = useState('');
  const [nameValid, setNameValid] = useState(false);

  const [lastName, setLastName] = useState('');
  const [lastNameValid, setLastNameValid] = useState(true);

  const [typeDocumentIdId, setTypeDocumentIdId] = useState<number | null>(null);
  const [typeDocumentIdIdValid, setTypeDocumentIdIdValid] = useState(false);
  const [typeDocumentIdIdDefault, setTypeDocumentIdIdDefault] =
    useState<SelectDefault>({ value: '', label: 'Elija el tipo de Documento' });
  const typeDocumentIdIdOptions =
    useTypeDocumentId.states.typeDocumentId.data?.items?.map((item) => {
      const countryName = Countries[0][item.country];
      const label = `${item.name} (${countryName})`;
      return { value: `${item.id}`, label };
    }) || [];

  const [index, setIndex] = useState('');
  const [indexValid, setIndexValid] = useState(false);
  const [indexDefault, setIndexDefault] = useState<SelectDefault>({
    value: '',
    label: 'Elija el tipo de Documento',
  });
  const indexOptions = [
    { label: 'J', value: 'J' },
    { label: 'V', value: 'V' },
    { label: 'G', value: 'G' },
    { label: 'No Aplica', value: 'null' },
  ];

  const [digit, setDigit] = useState('');
  const [digitValid, setDigitValid] = useState(false);

  const [addressType, setAddressType] = useState('bill');
  const [addressTypeValid, setAddressTypeValid] = useState(true);
  const [addressTypeDefault, setAddressTypeDefault] = useState<SelectDefault>({
    value: 'bill',
    label: 'Facturación',
  });
  const addressTypeOptions = [
    { label: 'Envío', value: 'shipping' },
    { label: 'Facturación', value: 'bill' },
  ];

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

  const [type, setType] = useState('');
  const [typeValid, setTypeValid] = useState(false);
  const [typeDefault, setTypeDefault] = useState<SelectDefault>({
    value: '',
    label: 'Elija el tipo de Entidad',
  });
  const typeOptions = [
    { value: 'personal', label: 'Natural' },
    { value: 'legal', label: 'Jurídica' },
  ];

  const [photo, setPhoto] = useState(
    'https://categorygafpri.s3.us-east-2.amazonaws.com/fotousuariogafpri.png'
  );
  const [photoValid, setPhotoValid] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [documentPhoto, setDocumentPhoto] = useState(
    'https://categorygafpri.s3.us-east-2.amazonaws.com/fotousuariogafpri.png'
  );
  const [documentPhotoValid, setDocumentPhotoValid] = useState(false);
  const [documentSubmitting, setDocumentSubmitting] = useState(false);

  const [status, setStatus] = useState('active');
  const [statusValid, setStatusValid] = useState(false);
  const [statusDefault, setStatusDefault] = useState<SelectDefault>({
    value: 'active',
    label: 'Activo',
  });
  const statusOptions = [
    { label: 'Activo', value: 'active' },
    { label: 'Inactivo', value: 'inactive' },
  ];

  const [documentId, setDocumentId] = useState<DocumentIdAttributes[]>([]);

  const [address, setAddress] = useState<AddressAttributes[]>([]);
  const [addressValid, setAddressValid] = useState(false);

  const [entities, setEntities] = useState<EntityData>({
    data: {
      items: getItem('GS_ENTITY_V2', null),
    },
  });
  const { error } = useError.states;
  const { changeError } = useError.actions;

  const [entityId, setEntityId] = useState(0);
  const [orderList, setOrderList] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [documentCurrentPage, setDocumentCurrentPage] = useState(1);
  const [searchBy, setSearchBy] = useState<
    'name' | 'lastName' | 'email' | 'phone' | 'digit'
  >('name');
  const [searchByDefault, setSearchByDefault] = useState<SelectDefault>({
    value: 'name',
    label: 'Nombre',
  });
  const searchByOptions = [
    { value: 'name', label: 'Nombre' },
    { value: 'lastName', label: 'Apellido' },
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Teléfono' },
    { value: 'digit', label: 'Documento legal' },
  ];
  const itemsPerPage = 6;

  const infoReset = (): void => {
    setName('');
    setNameValid(false);

    setLastName('');
    setLastNameValid(true);

    setTypeDocumentIdId(null);
    setTypeDocumentIdIdValid(false);
    setTypeDocumentIdIdDefault({
      value: '',
      label: 'Elija el tipo de Documento',
    });

    setIndex('');
    setIndexValid(false);
    setIndexDefault({ value: '', label: 'Elija el tipo de Documento' });

    setDigit('');
    setDigitValid(false);

    setAddressType('bill');
    setAddressTypeValid(true);
    setAddressTypeDefault({ value: 'bill', label: 'Facturación' });

    setAddress1('');
    setAddress1Valid(false);

    setAddress2('');
    setAddress2Valid(true);

    setCity('');
    setCityValid(false);
    setCityDefault({ value: '', label: 'Elija la ciudad' });

    setStateCountry('');
    setStateCountryValid(false);
    setStateCountryDefault({ value: '', label: 'Elija el Estado' });
    setStateCountryOptions([]);

    setCountry('');
    setCountryValid(false);
    setCountryDefault({ value: '', label: 'Elija el Pais' });

    setPostCode('');
    setPostCodeValid(true);

    setEmail('');
    setEmailValid(false);

    setPhone('');
    setPhoneValid(false);

    setType('');
    setTypeValid(false);
    setTypeDefault({ value: '', label: 'Elija el tipo de Entidad' });

    setPhoto(
      'https://categorygafpri.s3.us-east-2.amazonaws.com/fotousuariogafpri.png'
    );
    setPhotoValid(false);
    setSubmitting(false);

    setStatus('active');
    setStatusValid(false);
    setStatusDefault({ value: 'active', label: 'Activo' });

    setAddress([]);
    setAddressValid(true);

    useError.actions.changeError([]);
    setEntityId(0);
    setOrderList('asc');
    setSearchTerm('');
    setCurrentPage(1);
    setDocumentCurrentPage(1);
  };

  // Funciones de paginas
  const onFetching = (): void => {
    setIsFetching(true);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
    setIsView(false);
    setIsAddAddress(false);
    setIsAddDocument(false);
  };

  const onInit = (): void => {
    setIsFetching(false);
    setIsInit(true);
    setIsAdd(false);
    setIsUpdate(false);
    setIsView(false);
    setIsAddAddress(false);
    setIsAddDocument(false);
  };

  const onAdd = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(true);
    setIsUpdate(false);
    setIsView(false);
    setIsAddAddress(false);
    setIsAddDocument(false);
  };

  const onUpdate = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(true);
    setIsView(false);
    setIsAddAddress(false);
    setIsAddDocument(false);
  };

  const onView = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
    setIsView(true);
    setIsAddAddress(false);
    setIsAddDocument(false);
  };

  const onAddAddress = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
    setIsView(false);
    setIsAddAddress(true);
    setIsAddDocument(false);
  };

  const onAddDocument = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
    setIsView(false);
    setIsAddAddress(false);
    setIsAddDocument(true);
  };

  const onIsReady = (): void => {
    setIsReady(true);
  };

  const notReady = (): void => {
    setIsReady(false);
  };

  const goUpdate = (id: number): void => {
    infoReset();
    setEntityId(id);
    onUpdate();
  };

  const goAddPersonal = (): void => {
    infoReset();
    setType('personal');
    setFormType('personal');
    onAdd();
  };

  const goAddLegal = (): void => {
    infoReset();
    setType('legal');
    setFormType('legal');
    onAdd();
  };

  const goView = (id: number): void => {
    infoReset();
    setEntityId(id);
    onView();
  };

  // Funciones de Validacion
  const validationButtonNext = (): void => {
    if (
      nameValid &&
      lastNameValid &&
      typeDocumentIdIdValid &&
      indexValid &&
      digitValid &&
      addressTypeValid &&
      address1Valid &&
      address2Valid &&
      cityValid &&
      stateCountryValid &&
      countryValid &&
      postCodeValid &&
      emailValid &&
      phoneValid &&
      typeValid &&
      photoValid &&
      statusValid
    ) {
      removeClass('buttonNext', 'gs-disabled');
    } else {
      addClass('buttonNext', 'gs-disabled');
    }
  };

  const validationButtonNextAddress = (): void => {
    if (
      addressTypeValid &&
      address1Valid &&
      address2Valid &&
      cityValid &&
      stateCountryValid &&
      countryValid &&
      postCodeValid
    ) {
      removeClass('buttonNext', 'gs-disabled');
    } else {
      addClass('buttonNext', 'gs-disabled');
    }
  };

  const validationButtonNextDocument = (): void => {
    if (
      typeDocumentIdIdValid &&
      indexValid &&
      digitValid &&
      documentPhotoValid
    ) {
      removeClass('buttonNext', 'gs-disabled');
    } else {
      addClass('buttonNext', 'gs-disabled');
    }
  };

  const validationButtonNextUpdate = (): void => {
    if (
      nameValid &&
      lastNameValid &&
      emailValid &&
      phoneValid &&
      typeValid &&
      photoValid &&
      statusValid
    ) {
      removeClass('buttonNext', 'gs-disabled');
    } else {
      addClass('buttonNext', 'gs-disabled');
    }
  };

  const validationName = (value: string): boolean => {
    return validationInputName({
      name: value,
      inputId: 'userName',
      setValid: setNameValid,
    });
  };

  const validationLastName = (value: string): boolean => {
    return validationInputName({
      name: value,
      inputId: 'userLastName',
      setValid: setLastNameValid,
      required: false,
    });
  };

  const validationTypeDocumentIdId = (value: string): boolean => {
    const validation: boolean = validationSelect(
      value,
      'entityTypeDocumentIdId'
    );
    setTypeDocumentIdIdValid(validation);
    return validation;
  };

  const validationIndex = (value: string): boolean => {
    const validation: boolean = validationSelect(value, 'entityDocumentIndex');
    setIndexValid(validation);
    return validation;
  };

  const validationDigit = (value: string): boolean => {
    const valid = validationInput(
      value,
      /^\d{1,12}(-\d{1,12})?$/,
      'entityDocumentDigit',
      true
    );
    setDigitValid(valid);
    return valid;
  };

  const validationAddressType = (value: string): boolean => {
    const validation: boolean = validationSelect(value, 'addressType');
    setAddressTypeValid(validation);
    return validation;
  };

  const validationAddress1 = (value: string): boolean => {
    return validationInputAddress({
      value,
      inputId: 'address1',
      setValid: setAddress1Valid,
    });
  };

  const validationAddress2 = (value: string): boolean => {
    return validationInputAddress({
      value,
      inputId: 'address2',
      setValid: setAddress2Valid,
      required: false,
    });
  };

  const validationCity = (value: string): boolean => {
    const validation: boolean = validationSelect(value, 'entityCity');
    setCityValid(validation);
    return validation;
  };

  const validationStateCountry = (value: string): boolean => {
    const validation: boolean = validationSelect(value, 'entityStateCountry');
    setStateCountryValid(validation);
    return validation;
  };

  const validationCountry = (value: string): boolean => {
    const validation: boolean = validationSelect(value, 'entityCountry');
    setCountryValid(validation);
    return validation;
  };

  const validationPostCode = (value: string): boolean => {
    const valid = validationInput(
      value,
      /^[a-zA-Z0-9]+[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_#()\-.\s]+$/,
      'entityCodePost'
    );
    setPostCodeValid(valid);
    return valid;
  };

  const validationEmail = (value: string): boolean => {
    const valid = validationInput(
      value,
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'entityEmail',
      false
    );
    setEmailValid(valid);
    return valid;
  };

  const validationPhone = (value: string): boolean => {
    const valid = validationInput(value, /^[0-9]{10,20}/, 'entityPhone');
    setPhoneValid(valid);
    return valid;
  };

  const validationType = (value: string): boolean => {
    const validation: boolean = validationSelect(value, 'roleUser');
    setTypeValid(validation);
    return validation;
  };

  const validationPhoto = (value: string): boolean => {
    const valid = validationInput(
      value,
      /^(?:(?:[a-z][a-z0-9+-.]*):\/\/)?(?:[a-z0-9_-]+(?::[a-z0-9_-]+)*@)?(?:[a-z0-9.-]+|(?:\[[a-f0-9:.]+\]))(?::\d+)?(?:\/[^\s#?]*(?:\?[^\s#?]*)?(?:#[^\s#?]*)?)?$/i,
      'entityPhoto'
    );
    setPhotoValid(valid);
    return valid;
  };

  const validationDocumentPhoto = (value: string): boolean => {
    const valid = validationInput(
      value,
      /^(?:(?:[a-z][a-z0-9+-.]*):\/\/)?(?:[a-z0-9_-]+(?::[a-z0-9_-]+)*@)?(?:[a-z0-9.-]+|(?:\[[a-f0-9:.]+\]))(?::\d+)?(?:\/[^\s#?]*(?:\?[^\s#?]*)?(?:#[^\s#?]*)?)?$/i,
      'entityDocumentPhoto'
    );
    setDocumentPhotoValid(valid);
    return valid;
  };

  const validationStatus = (value: string): boolean => {
    const validation: boolean = validationSelect(value, 'isActiveUser');
    setStatusValid(validation);
    return validation;
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

  const changeLastName = (value: string): void => {
    const newValue = toTitleCase(value);
    changeInputText({
      value: newValue,
      validation: validationLastName,
      setValue: setLastName,
    });
  };

  const changeTypeDocumentIdId = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    changeSelect({
      newValue: options,
      validation: validationTypeDocumentIdId,
      setDefault: setTypeDocumentIdIdDefault,
      setValue: setTypeDocumentIdId,
    });
  };

  const changeIndex = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    changeSelect({
      newValue: options,
      validation: validationIndex,
      setDefault: setIndexDefault,
      setValue: setIndex,
    });
  };

  const changeDigit = (newDigit: string): void => {
    changeInputText({
      value: newDigit,
      validation: validationDigit,
      setValue: setDigit,
    });
  };

  const changeAddressType = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    changeSelect({
      newValue: options,
      validation: validationAddressType,
      setDefault: setAddressTypeDefault,
      setValue: setAddressType,
    });
  };

  const changeAddress1 = (value: string): void => {
    const newAddress = toTitleCase(value);
    changeInputText({
      value: newAddress,
      validation: validationAddress1,
      setValue: setAddress1,
    });
  };

  const changeAddress2 = (value: string): void => {
    const newAddress = toTitleCase(value);
    changeInputText({
      value: newAddress,
      validation: validationAddress2,
      setValue: setAddress2,
    });
  };

  const changeTypeInAllAddresses = (
    addresses: AddressAttributes[],
    newType: string
  ): AddressAttributes[] => {
    return addresses.map((item) => ({
      ...item,
      type: newType,
    }));
  };

  const updateAddressTypeById = (
    addresses: AddressAttributes[],
    id: number,
    newType: string
  ): AddressAttributes[] => {
    return addresses.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          type: newType,
        };
      }
      return item;
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

  const changeType = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    changeSelect({
      newValue: options,
      validation: validationType,
      setDefault: setTypeDefault,
      setValue: setType,
    });
  };

  const changePhoto = async (
    e: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const newFile = e.target.files && e.target.files[0];

    if (!newFile) return;

    // Obtén el tipo MIME en función de la extensión del archivo
    const mimeType = getMimeTypeByExtension(newFile.name);
    if (!mimeType) {
      useError.actions.changeError([
        'El archivo no es una imagen válida. Asegúrate de subir un archivo JPG, JPEG o PNG.',
      ]);
      return;
    }

    const formData = new FormData();
    formData.append('file', newFile);
    formData.append('fileName', newFile.name);

    setSubmitting(true);

    const config: AxiosRequestConfig = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };

    try {
      const response = await axios.post('/api/upload', formData, config);

      if (response.status === 200) {
        setPhoto(response.data.imageUrl);
        validationPhoto(response.data.imageUrl);
      } else {
        setSubmitting(false);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (event: any) {
      useError.actions.changeError([`${event.message}`]);
      setSubmitting(false);
    }
  };

  const changeDocumentPhoto = async (
    e: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const newFile = e.target.files && e.target.files[0];

    if (!newFile) return;

    // Obtén el tipo MIME en función de la extensión del archivo
    const mimeType = getMimeTypeByExtension(newFile.name);
    if (!mimeType) {
      useError.actions.changeError([
        'El archivo no es una imagen válida. Asegúrate de subir un archivo JPG, JPEG o PNG.',
      ]);
      return;
    }

    const formData = new FormData();
    formData.append('file', newFile);
    formData.append('fileName', newFile.name);

    setDocumentSubmitting(true);

    const config: AxiosRequestConfig = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };

    try {
      const response = await axios.post('/api/upload', formData, config);

      if (response.status === 200) {
        setDocumentPhoto(response.data.imageUrl);
        validationDocumentPhoto(response.data.imageUrl);
      } else {
        setDocumentSubmitting(false);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (event: any) {
      useError.actions.changeError([`${event.message}`]);
      setDocumentSubmitting(false);
    }
  };

  const changeStatus = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    changeSelect({
      newValue: options,
      validation: validationStatus,
      setDefault: setStatusDefault,
      setValue: setStatus,
    });
  };

  const changeSearchBy = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    const label = options?.label ? options.label : 'Nombre';
    const value =
      options?.value &&
      (options.value === 'name' ||
        options.value === 'lastName' ||
        options.value === 'email' ||
        options.value === 'phone' ||
        options.value === 'digit')
        ? options.value
        : 'name';
    const newDefaulValue = {
      label,
      value,
    };
    setSearchByDefault(newDefaulValue);
    setSearchBy(value);
  };

  // Manejo de la data en DB
  const getLastItem: EntityAttributes | null = entities.data?.items
    ? entities.data.items.sort(
        (a, b) =>
          new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime()
      )[0]
    : null;

  const setDataStorage = (newData: EntityData): void => {
    saveItem('GS_ENTITY_V2', newData.data.items);
  };

  const setData = (newData: EntityData): void => {
    setEntities(newData);
    setDataStorage(newData);
  };

  const onEntity = (newData: EntityData): void => {
    setData(newData);
    onIsReady();
  };

  const offEntity = (): void => {
    const newData = {
      data: {
        items: null,
      },
    };
    setData(newData);
    notReady();
  };

  const getEntities = async (): Promise<void> => {
    const lastEntryDateAndCount = await getLastEntryDateAndCount('entity');
    const lastDate = getLastItem?.modifiedAt || null;
    const count = entities.data.items?.length || 0;

    if (
      entities.data.items === null ||
      `${lastEntryDateAndCount?.date}` !== `${lastDate}` ||
      `${lastEntryDateAndCount?.count}` !== `${count}`
    ) {
      if (token) {
        gafpriFetch({
          initMethod: 'GET',
          initApi: 'http://localhost:4000',
          initRoute: 'api/v1/entity',
          initToken: { token },
          functionFetching: notReady,
          functionSuccess: onEntity,
        });
      } else {
        notReady();
      }
    } else {
      onIsReady();
    }
  };

  const handleNewEntity = (newItem: EntityAttributes): void => {
    setEntities((prevState) => {
      const newData = {
        data: {
          items: [...(prevState.data.items || []), newItem],
        },
      };
      setDataStorage(newData);
      return newData;
    });
  };

  const handleUpdatedEntity = (itemUpdate: EntityAttributes): void => {
    setEntities((prevState) => {
      const updatedItems =
        prevState.data.items?.map((item) =>
          `${item.id}` === `${itemUpdate.id}` ? itemUpdate : item
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

  const returnInit = (): void => {
    infoReset();
    onInit();
  };

  const newError = (
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
  ): void => {
    useError.actions.newError({
      newErrorValue,
      functionAction: onAdd,
    });
  };

  const newErrorUpdate = (
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
  ): void => {
    useError.actions.newError({
      newErrorValue,
      functionAction: onUpdate,
    });
  };

  const add = (): void => {
    if (
      nameValid &&
      lastNameValid &&
      typeDocumentIdIdValid &&
      indexValid &&
      digitValid &&
      addressTypeValid &&
      address1Valid &&
      address2Valid &&
      cityValid &&
      stateCountryValid &&
      countryValid &&
      postCodeValid &&
      emailValid &&
      phoneValid &&
      typeValid &&
      photoValid &&
      statusValid &&
      token
    ) {
      const payload = {
        name,
        type,
        status,
        ...(lastName ? { lastName } : {}),
        ...(email ? { email } : {}),
        ...(phone ? { phone } : {}),
        ...(photo ? { photo } : {}),
        documentId: {
          typeDocumentIdId,
          ...(index !== 'null' ? { index } : {}),
          digit,
        },
        address: {
          type: addressType,
          address1,
          ...(address2 ? { address2 } : {}),
          city,
          state,
          country,
          ...(postCode ? { postCode } : {}),
        },
      };

      gafpriFetch({
        initMethod: 'POST',
        initApi: 'http://localhost:4000',
        initRoute: 'api/v1/entity',
        initCredentials: payload,
        initToken: { token },
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newError,
      });
    }
  };

  function getById(id: number): EntityAttributes | null {
    return entities.data.items?.find((item) => item.id === id) || null;
  }

  const update = (): void => {
    if (
      nameValid &&
      lastNameValid &&
      typeValid &&
      photoValid &&
      statusValid &&
      phoneValid &&
      emailValid &&
      token
    ) {
      const payload = {
        ...(name ? { name } : {}),
        ...(type ? { type } : {}),
        ...(status ? { status } : {}),
        ...(lastName ? { lastName } : {}),
        ...(email ? { email } : {}),
        ...(phone ? { phone } : {}),
        ...(photo ? { photo } : {}),
      };

      gafpriFetch({
        initMethod: 'PATCH',
        initApi: 'http://localhost:4000',
        initRoute: `api/v1/entity/${entityId}`,
        initCredentials: payload,
        initToken: { token },
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newErrorUpdate,
      });
    }
  };

  const updateAddress = (newAddress: AddressAttributes[]): void => {
    if (token) {
      const payload = {
        address: newAddress,
      };

      gafpriFetch({
        initMethod: 'PATCH',
        initApi: 'http://localhost:4000',
        initRoute: `api/v1/entity/${entityId}`,
        initCredentials: payload,
        initToken: { token },
        functionFetching: onFetching,
        functionSuccess: () => goUpdate(entityId),
        functionError: newErrorUpdate,
      });
    }
  };

  const updateDocument = (newDocument: DocumentIdAttributes[]): void => {
    if (token) {
      const payload = {
        documentId: newDocument,
      };

      gafpriFetch({
        initMethod: 'PATCH',
        initApi: 'http://localhost:4000',
        initRoute: `api/v1/entity/${entityId}`,
        initCredentials: payload,
        initToken: { token },
        functionFetching: onFetching,
        functionSuccess: () => goUpdate(entityId),
        functionError: newErrorUpdate,
      });
    }
  };

  const addAddress = (): void => {
    if (
      addressTypeValid &&
      address1Valid &&
      address2Valid &&
      cityValid &&
      stateCountryValid &&
      countryValid &&
      postCodeValid
    ) {
      let updateNewAddress = address;
      if (addressType === 'bill') {
        updateNewAddress = changeTypeInAllAddresses(address, 'shipping');
      }
      const newAddress = {
        type: addressType,
        address1,
        ...(address2 ? { address2 } : {}),
        city,
        state,
        country,
        ...(postCode ? { postCode } : {}),
        entityId,
      };
      updateNewAddress.push(newAddress);

      updateAddress(updateNewAddress);
    }
  };

  const addDocument = (): void => {
    if (
      typeDocumentIdIdValid &&
      indexValid &&
      digitValid &&
      documentPhotoValid
    ) {
      const newDocument = [
        {
          typeDocumentIdId,
          ...(index !== 'null' ? { index } : {}),
          digit,
          photo: documentPhoto,
        },
      ];
      updateDocument(newDocument);
    }
  };

  const changeAddress = (id: number): void => {
    const newAddress = changeTypeInAllAddresses(address, 'shipping');
    const updateNewAddress = updateAddressTypeById(newAddress, id, 'bill');
    setAddress(updateNewAddress);
    updateAddress(updateNewAddress);
  };

  const deleteAddress = (id: number): void => {
    if (token) {
      const payload = {
        address: [
          {
            id,
          },
        ],
      };

      gafpriFetch({
        initMethod: 'DELETE',
        initApi: 'http://localhost:4000',
        initRoute: `api/v1/entity/${entityId}`,
        initCredentials: payload,
        initToken: { token },
        functionFetching: onFetching,
        functionSuccess: () => goUpdate(entityId),
        functionError: newErrorUpdate,
      });
    }
  };

  const deleteDocument = (id: number): void => {
    if (documentId.length > 1 && token) {
      const payload = {
        documentId: [
          {
            id,
          },
        ],
      };

      gafpriFetch({
        initMethod: 'DELETE',
        initApi: 'http://localhost:4000',
        initRoute: `api/v1/entity/${entityId}`,
        initCredentials: payload,
        initToken: { token },
        functionFetching: onFetching,
        functionSuccess: () => goUpdate(entityId),
        functionError: newErrorUpdate,
      });
    } else {
      // eslint-disable-next-line no-alert
      alert('No se puede borrar el documento principal');
    }
  };

  function sortByName(
    items: EntityAttributes[] | null,
    order: 'asc' | 'desc'
  ): EntityAttributes[] | null {
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

  const filterByName = (search: string): EntityAttributes[] | null => {
    if (entities.data.items) {
      return entities.data.items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return null;
  };

  const getPaginated = (
    items:
      | EntityAttributes[]
      | AddressAttributes[]
      | DocumentIdAttributes[]
      | null,
    page: number,
    itemPerPage: number
  ):
    | EntityAttributes[]
    | AddressAttributes[]
    | DocumentIdAttributes[]
    | null => {
    const startIndex = (page - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;

    if (items) {
      return items.slice(startIndex, endIndex);
    }

    return null;
  };

  function sortByProperty(
    items: EntityAttributes[] | null,
    search: 'name' | 'lastName' | 'email' | 'phone' | 'digit',
    order: 'asc' | 'desc'
  ): EntityAttributes[] | null {
    if (items) {
      return items.slice().sort((a, b) => {
        let aValue: string;
        let bValue: string;

        if (search === 'digit') {
          const aDocumentsWithDigit = a.documentId?.filter((doc) =>
            Object.prototype.hasOwnProperty.call(doc, 'digit')
          );
          const bDocumentsWithDigit = b.documentId?.filter((doc) =>
            Object.prototype.hasOwnProperty.call(doc, 'digit')
          );
          aValue = aDocumentsWithDigit.map((doc) => doc.digit).join(' ');
          bValue = bDocumentsWithDigit.map((doc) => doc.digit).join(' ');
        } else {
          aValue = a[search] ?? '';
          bValue = b[search] ?? '';
        }

        const comparison = aValue.localeCompare(bValue, undefined, {
          sensitivity: 'base',
        });
        return order === 'asc' ? comparison : -comparison;
      });
    }
    return null;
  }

  const filterBySearch = (
    search: string,
    searchType: 'name' | 'lastName' | 'email' | 'phone' | 'digit'
  ): EntityAttributes[] | null => {
    if (entities.data.items) {
      return entities.data.items.filter((item) => {
        if (searchType === 'digit') {
          const documentsWithDigit = item.documentId?.filter((doc) =>
            Object.prototype.hasOwnProperty.call(doc, 'digit')
          );
          return documentsWithDigit.some((doc) =>
            doc.digit.toLowerCase().includes(search.toLowerCase())
          );
        }
        const value = item[searchType] as string | null;
        return value
          ? value.toLowerCase().includes(search.toLowerCase())
          : false;
      });
    }
    return null;
  };

  // Efects
  React.useEffect(() => {
    getEntities();
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    setCurrentPage(1);
    setDocumentCurrentPage(1);
  }, [searchTerm]);

  const states = {
    isReady,
    isFetching,
    isInit,
    isAdd,
    isUpdate,
    isView,
    isAddAddress,
    isAddDocument,
    formType,

    name,
    nameValid,

    lastName,
    lastNameValid,

    typeDocumentIdId,
    typeDocumentIdIdValid,
    typeDocumentIdIdDefault,
    typeDocumentIdIdOptions,

    index,
    indexValid,
    indexDefault,
    indexOptions,

    digit,
    digitValid,

    addressType,
    addressTypeValid,
    addressTypeDefault,
    addressTypeOptions,

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

    type,
    typeValid,
    typeDefault,
    typeOptions,

    photo,
    photoValid,
    submitting,

    documentPhoto,
    documentPhotoValid,
    documentSubmitting,

    status,
    statusValid,
    statusDefault,
    statusOptions,

    documentId,

    address,
    addressValid,

    entities,

    error,
    entityId,
    orderList,
    searchTerm,
    currentPage,
    documentCurrentPage,
    searchBy,
    searchByDefault,
    searchByOptions,
    itemsPerPage,
  };

  // Define las acciones necesarias para los atributos de Site
  const actions = {
    onFetching,
    onInit,
    onAdd,
    onUpdate,
    onIsReady,
    notReady,
    goUpdate,
    goAddPersonal,
    goAddLegal,
    goView,
    onAddAddress,
    onAddDocument,

    validationButtonNext,
    validationButtonNextAddress,
    validationButtonNextDocument,
    validationButtonNextUpdate,
    validationName,
    validationLastName,
    validationTypeDocumentIdId,
    validationIndex,
    validationDigit,
    validationAddressType,
    validationAddress1,
    validationAddress2,
    validationCity,
    validationStateCountry,
    validationCountry,
    validationPostCode,
    validationEmail,
    validationPhone,
    validationType,
    validationPhoto,
    validationDocumentPhoto,
    validationStatus,

    changeName,
    changeLastName,
    changeTypeDocumentIdId,
    changeIndex,
    changeDigit,
    changeAddressType,
    changeAddress1,
    changeAddress2,
    changeCity,
    changeCityOptions,
    changeStateCountry,
    changeStateCountryOptions,
    changeCountry,
    changePostCode,
    changeEmail,
    changePhone,
    changeType,

    changeError,
    changePhoto,
    setPhoto,
    changeDocumentPhoto,
    setDocumentPhoto,
    setSubmitting,
    setDocumentSubmitting,
    changeStatus,
    setAddress,
    setDocumentId,
    addAddress,
    changeAddress,
    infoReset,

    onEntity,
    offEntity,
    handleNewEntity,
    handleUpdatedEntity,
    returnInit,
    newError,
    newErrorUpdate,
    add,
    addDocument,
    deleteAddress,
    deleteDocument,
    getById,
    update,

    sortByName,
    filterByName,
    getPaginated,
    sortByProperty,
    filterBySearch,
    changeSearchBy,
    setOrderList,
    setSearchTerm,
    setCurrentPage,
    setDocumentCurrentPage,
  };

  return {
    states,
    actions,
  };
};
