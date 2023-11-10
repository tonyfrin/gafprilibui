import React, { useState, ChangeEvent } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { SingleValue } from 'react-select';
import {
  getMimeTypeByExtension,
  isCustomErrorResponse,
  isErrorResponse,
  removeClass,
  addClass,
  validationInputName,
  toTitleCase,
  changeInputText,
  validationSelect,
  changeSelect,
  validationInput,
  gafpriFetch,
  getLastEntryDateAndCount,
} from '../helpers';
import type {
  SelectDefault,
  ErrorResponseProps,
  CustomErrorResponseProps,
  RoleArray,
} from '../helpers';
import { getItem, saveItem } from '../Context';
import type { UseRolesReturn, RolesAttributes } from './useGafpriRoles';
import type { UseSitesReturn } from './useGafpriSites';

export interface UserAttributes {
  id: number;
  login: string;
  email: string;
  phone: string;
  rolesId: string;
  name: string;
  lastName?: string;
  photo?: string;
  isActive: boolean;
  emailConfirmation: boolean;
  phoneConfirmation: boolean;
  createdAt: Date;
  modifiedAt: Date;
  roles: RolesAttributes;
}

interface UserData {
  data: {
    items: UserAttributes[] | [] | null;
  };
}

export type UseUserReturn = {
  states: {
    isReady: boolean;
    isFetching: boolean;
    isInit: boolean;
    isAdd: boolean;
    isView: boolean;
    isUpdate: boolean;

    name: string;
    nameValid: boolean;

    lastName: string;
    lastNameValid: boolean;

    email: string;
    emailValid: boolean;

    phoneNumber: string;
    phoneNumberValid: boolean;

    rolesId: string;
    roleValid: boolean;
    roleDefault: SelectDefault;
    roleOptions: SelectDefault[];

    site: string;
    siteValid: boolean;
    siteDefault: SelectDefault;
    siteOptions: SelectDefault[];

    photo: string;
    photoValid: boolean;
    submitting: boolean;
    areaCode: string;
    areaCodeValid: boolean;
    areaCodeDefault: SelectDefault;
    areaCodeOptions: SelectDefault[];

    isActive: boolean;
    isActiveValid: boolean;
    isActiveDefault: SelectDefault;
    isActiveOptions: SelectDefault[];

    users: UserData;

    error: string[];
    userId: number;
    orderList: 'asc' | 'desc';
    searchTerm: string;
    currentPage: number;
    itemsPerPage: number;

    searchBy: string;
    searchByDefault: SelectDefault;
    searchByOptions: SelectDefault[];
  };
  actions: {
    onFetching: () => void;
    onInit: () => void;
    onAdd: () => void;
    onUpdate: () => void;
    goView: (id: number) => void;
    onIsReady: () => void;
    notReady: () => void;
    goUpdate: (id: number) => void;
    goAdd: () => void;

    validationButtonNext: () => void;
    validationName: (value: string) => boolean;
    validationLastName: (value: string) => boolean;
    validationEmail: (value: string) => boolean;
    validationPhoneNumber: (value: string) => boolean;
    validationAreaCode: (value: string) => boolean;
    validationRole: (value: string) => boolean;
    validationSite: (value: string) => boolean;
    validationPhoto: (value: string) => boolean;
    validationIsActive: (value: string) => boolean;

    changeName: (value: string) => void;
    changeLastName: (value: string) => void;
    changeEmail: (inputValue: string) => void;
    changePhoneNumber: (newPhone: string) => void;
    changeAreaCode: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    changeRole: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    changeSite: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    changeError: (value: string[]) => void;
    changePhoto: (e: ChangeEvent<HTMLInputElement>) => void;
    setSubmitting: (value: boolean) => void;
    setPhoto: (value: string) => void;
    changeIsActive: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    infoReset: () => void;

    resetData: () => void;
    handleNewUsers: (newItem: UserAttributes) => void;
    handleUpdatedUsers: (itemUpdate: UserAttributes) => void;
    returnInit: () => void;
    add: () => void;
    getById: (id: number) => UserAttributes | null;
    update: () => void;
    sortByName: (
      items: UserAttributes[] | null,
      order: 'asc' | 'desc'
    ) => UserAttributes[] | null;
    filterByName: (search: string) => UserAttributes[] | null;
    getPaginated: (
      items: UserAttributes[] | null,
      page: number,
      itemsPerPage: number
    ) => UserAttributes[] | null;
    setOrderList: (value: 'asc' | 'desc') => void;
    setSearchTerm: (value: string) => void;
    setCurrentPage: (value: number) => void;
    changeSearchBy: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    sortByProperty: (
      items: UserAttributes[] | null,
      searchBy: 'name' | 'email' | 'phone' | 'login',
      order: 'asc' | 'desc'
    ) => UserAttributes[] | null;
    filterBySearch: (
      search: string,
      searchBy: 'name' | 'email' | 'phone' | 'login'
    ) => UserAttributes[] | null;
    filterRoleByName: (
      roleArray: RoleArray[],
      search: string
    ) => RoleArray[] | null;
    sortRoleByName: (
      items: RoleArray[] | null,
      order: 'asc' | 'desc'
    ) => RoleArray[] | null;
    getRolePaginated: (
      items: RoleArray[] | null,
      page: number,
      itemsPerPage: number
    ) => RoleArray[] | null;
  };
};

export type UseUserProps = {
  useRoles: UseRolesReturn;
  useSites: UseSitesReturn;
};

export const useGafpriUsers = ({
  useRoles,
  useSites,
}: UseUserProps): UseUserReturn => {
  // Define los estados necesarios para los atributos de Site
  const [isReady, setIsReady] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [isInit, setIsInit] = useState(true);
  const [isAdd, setIsAdd] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isView, setIsView] = useState(false);

  const [name, setName] = useState('');
  const [nameValid, setNameValid] = useState(false);

  const [lastName, setLastName] = useState('');
  const [lastNameValid, setLastNameValid] = useState(true);

  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberValid, setPhoneNumberValid] = useState(false);
  const [areaCode, setAreaCode] = useState('0058');
  const [areaCodeValid, setAreaCodeValid] = useState(false);
  const [areaCodeDefault, setAreaCodeDefault] = useState<SelectDefault>({
    value: '0058',
    label: '(+58) Venezuela',
  });
  const areaCodeOptions = [
    { value: '0058', label: '(+58) Venezuela' },
    { value: '001', label: '(+1) Estados Unidos' },
  ];

  const [rolesId, setRole] = useState('');
  const [roleValid, setRoleValid] = useState(false);
  const [roleDefault, setRoleDefault] = useState<SelectDefault>({
    value: '',
    label: 'Elija el rol del usuario',
  });
  const roleOptions =
    useRoles.states.roles.data?.items?.map((item) => {
      return { value: `${item.id}`, label: item.name };
    }) || [];

  const [site, setSite] = useState('');
  const [siteValid, setSiteValid] = useState(false);
  const [siteDefault, setSiteDefault] = useState<SelectDefault>({
    value: '',
    label: 'Elija el sitio web',
  });
  const siteOptions =
    useSites.states.sites.data?.items?.map((item) => {
      return { value: `${item.id}`, label: item.name };
    }) || [];

  const [photo, setPhoto] = useState(
    'https://categorygafpri.s3.us-east-2.amazonaws.com/fotousuariogafpri.png'
  );
  const [photoValid, setPhotoValid] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [isActive, setIsActive] = useState(true);
  const [isActiveValid, setIsActiveValid] = useState(false);
  const [isActiveDefault, setIsActiveDefault] = useState<SelectDefault>({
    value: 'true',
    label: 'Activo',
  });
  const isActiveOptions = [
    { label: 'Activo', value: 'true' },
    { label: 'Inactivo', value: 'false' },
  ];

  const [users, setUsers] = useState<UserData>({
    data: {
      items: getItem('GS_USERS_V2', null),
    },
  });
  const [error, setError] = useState<string[]>([]);
  const [userId, setUserId] = useState(0);
  const [orderList, setOrderList] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchBy, setSearchBy] = useState<
    'name' | 'email' | 'phone' | 'login'
  >('name');
  const [searchByDefault, setSearchByDefault] = useState<SelectDefault>({
    value: 'name',
    label: 'Nombre',
  });
  const searchByOptions = [
    { value: 'name', label: 'Nombre' },
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Teléfono' },
    { value: 'login', label: 'Login' },
  ];
  const itemsPerPage = 6;

  const infoReset = (): void => {
    setName('');
    setNameValid(false);

    setLastName('');
    setLastNameValid(true);

    setEmail('');
    setEmailValid(false);

    setPhoneNumber('');
    setPhoneNumberValid(false);

    setAreaCode('0058');
    setAreaCodeValid(false);
    setAreaCodeDefault({ value: '0058', label: '(+58) Venezuela' });

    setRole('');
    setRoleValid(false);
    setRoleDefault({ value: '', label: 'Elija el rol del usuario' });

    setSite('');
    setSiteValid(false);
    setSiteDefault({ value: '', label: 'Elija el sitio web' });

    setPhoto(
      'https://categorygafpri.s3.us-east-2.amazonaws.com/fotousuariogafpri.png'
    );
    setPhotoValid(false);
    setSubmitting(false);

    setIsActive(true);
    setIsActiveValid(false);
    setIsActiveDefault({ value: 'true', label: 'Activo' });

    setError([]);
    setUserId(0);
    setOrderList('asc');
    setSearchTerm('');
    setCurrentPage(1);
  };

  // Funciones de paginas
  const onFetching = (): void => {
    setIsFetching(true);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
    setIsView(false);
  };

  const onInit = (): void => {
    setIsFetching(false);
    setIsInit(true);
    setIsAdd(false);
    setIsUpdate(false);
    setIsView(false);
  };

  const onAdd = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(true);
    setIsUpdate(false);
    setIsView(false);
  };

  const onUpdate = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(true);
    setIsView(false);
  };

  const onView = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
    setIsView(true);
  };

  const onIsReady = (): void => {
    setIsReady(true);
  };

  const notReady = (): void => {
    setIsReady(false);
  };

  const goUpdate = (id: number): void => {
    infoReset();
    setUserId(id);
    onUpdate();
  };

  const goView = (id: number): void => {
    setUserId(id);
    onView();
  };

  const goAdd = (): void => {
    infoReset();
    onAdd();
  };

  // Funciones de Validacion
  const validationButtonNext = (): void => {
    if (
      nameValid &&
      lastNameValid &&
      emailValid &&
      areaCodeValid &&
      phoneNumberValid &&
      roleValid &&
      siteValid &&
      photoValid &&
      isActiveValid
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

  const validationEmail = (value: string): boolean => {
    const valid = validationInput(
      value,
      /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/,
      'userEmail',
      'gs-input-alert',
      true
    );
    setEmailValid(valid);
    return valid;
  };

  const validationPhoneNumber = (value: string): boolean => {
    const valid = validationInput(
      value,
      /^[0-9]{10}$/,
      'userPhone',
      'gs-input-alert',
      true
    );
    setPhoneNumberValid(valid);
    return valid;
  };

  const validationAreaCode = (value: string): boolean => {
    const validation: boolean = validationSelect(
      value,
      'areaCodeUser',
      'gs-input-alert'
    );
    setAreaCodeValid(validation);
    return validation;
  };

  const validationSite = (value: string): boolean => {
    const validation: boolean = validationSelect(
      value,
      'userSite',
      'gs-input-alert'
    );
    setSiteValid(validation);
    return validation;
  };

  const validationRole = (value: string): boolean => {
    const validation: boolean = validationSelect(
      value,
      'userRole',
      'gs-input-alert'
    );
    setRoleValid(validation);
    return validation;
  };

  const validationPhoto = (value: string): boolean => {
    const valid = validationInput(
      value,
      /^(?:(?:[a-z][a-z0-9+-.]*):\/\/)?(?:[a-z0-9_-]+(?::[a-z0-9_-]+)*@)?(?:[a-z0-9.-]+|(?:\[[a-f0-9:.]+\]))(?::\d+)?(?:\/[^\s#?]*(?:\?[^\s#?]*)?(?:#[^\s#?]*)?)?$/i,
      'photoUser',
      'gs-input-alert'
    );
    setPhotoValid(valid);
    return valid;
  };

  const validationIsActive = (value: string): boolean => {
    const validation: boolean = validationSelect(
      value,
      'isActiveUser',
      'gs-input-alert'
    );
    setIsActiveValid(validation);
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

  const changeEmail = (inputValue: string): void => {
    const newEmail = inputValue.toLocaleLowerCase();
    changeInputText({
      value: newEmail,
      validation: validationEmail,
      setValue: setEmail,
    });
  };

  const changePhoneNumber = (newPhone: string): void => {
    const newValue = newPhone.startsWith('0') ? newPhone.slice(1) : newPhone;
    changeInputText({
      value: newValue,
      validation: validationPhoneNumber,
      setValue: setPhoneNumber,
    });
  };

  const changeAreaCode = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    changeSelect({
      newValue: options,
      validation: validationAreaCode,
      setDefault: setAreaCodeDefault,
      setValue: setAreaCode,
    });
  };

  const changeRole = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    changeSelect({
      newValue: options,
      validation: validationRole,
      setDefault: setRoleDefault,
      setValue: setRole,
    });
  };

  const changeSite = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    changeSelect({
      newValue: options,
      validation: validationSite,
      setDefault: setSiteDefault,
      setValue: setSite,
    });
  };

  const changeError = (value: string[]): void => {
    setError(value);
    setTimeout(() => {
      setError([]);
    }, 5000);
  };

  const changePhoto = async (
    e: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const newFile = e.target.files && e.target.files[0];

    if (!newFile) return;

    // Obtén el tipo MIME en función de la extensión del archivo
    const mimeType = getMimeTypeByExtension(newFile.name);
    if (!mimeType) {
      changeError([
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
      changeError([`${event.message}`]);
      setSubmitting(false);
    }
  };

  const changeIsActive = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    changeSelect({
      newValue: options,
      validation: validationIsActive,
      setDefault: setIsActiveDefault,
      setValue: setIsActive,
    });
  };

  const changeSearchBy = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    const label = options?.label ? options.label : 'Nombre';
    const value =
      options?.value &&
      (options.value === 'name' ||
        options.value === 'email' ||
        options.value === 'phone' ||
        options.value === 'login')
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
  const getLastItem: UserAttributes | null = users.data?.items
    ? users.data.items.sort(
        (a, b) =>
          new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime()
      )[0]
    : null;

  const setDataStorage = (newData: UserData): void => {
    saveItem('GS_USERS_V2', newData.data.items);
  };

  const setData = (newData: UserData): void => {
    setUsers(newData);
    setDataStorage(newData);
  };

  const onSites = (newData: UserData): void => {
    setData(newData);
    onIsReady();
  };

  const resetData = (): void => {
    const newData = {
      data: {
        items: null,
      },
    };
    setData(newData);
    notReady();
  };

  const getUsers = async (): Promise<void> => {
    const lastEntryDateAndCount = await getLastEntryDateAndCount('users');
    const lastDate = getLastItem?.modifiedAt || null;
    const count = users.data.items?.length || 0;

    if (
      users.data.items === null ||
      `${lastEntryDateAndCount?.date}` !== `${lastDate}` ||
      `${lastEntryDateAndCount?.count}` !== `${count}`
    ) {
      gafpriFetch({
        initMethod: 'GET',
        initApi: 'http://localhost:4000',
        initRoute: 'api/v1/users',
        functionFetching: notReady,
        functionSuccess: onSites,
      });
    } else {
      onIsReady();
    }
  };

  const handleNewUsers = (newItem: UserAttributes): void => {
    setUsers((prevState) => {
      const newData = {
        data: {
          items: [...(prevState.data.items || []), newItem],
        },
      };
      setDataStorage(newData);
      return newData;
    });
  };

  const handleUpdatedUsers = (itemUpdate: UserAttributes): void => {
    setUsers((prevState) => {
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

  const add = (): void => {
    if (
      nameValid &&
      lastNameValid &&
      emailValid &&
      phoneNumberValid &&
      areaCodeValid &&
      roleValid &&
      siteValid &&
      photoValid &&
      isActiveValid
    ) {
      const payload = {
        name,
        email,
        phone: `${areaCode}${phoneNumber}`,
        rolesId,
        isActive,
      };

      const updatedPayload = {
        ...payload,
        ...(lastName ? { lastName } : {}),
        ...(photo ? { photo } : {}),
        ...(site ? { site } : {}),
      };

      gafpriFetch({
        initMethod: 'POST',
        initApi: 'http://localhost:4000',
        initRoute: 'api/v1/users',
        initCredentials: updatedPayload,
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newError,
      });
    }
  };

  function getById(id: number): UserAttributes | null {
    return users.data.items?.find((item) => item.id === id) || null;
  }

  const update = (): void => {
    if (
      nameValid &&
      lastNameValid &&
      emailValid &&
      phoneNumberValid &&
      areaCodeValid &&
      roleValid &&
      siteValid &&
      photoValid &&
      isActiveValid
    ) {
      const payload = {
        name,
        email,
        phone: `${areaCode}${phoneNumber}`,
        rolesId,
        isActive,
      };

      const updatedPayload = {
        ...payload,
        ...(lastName ? { lastName } : {}),
        ...(photo ? { photo } : {}),
        ...(site ? { site } : {}),
      };

      gafpriFetch({
        initMethod: 'PATCH',
        initApi: 'http://localhost:4000',
        initRoute: `api/v1/users/${userId}`,
        initCredentials: updatedPayload,
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newErrorUpdate,
      });
    }
  };

  function sortByName(
    items: UserAttributes[] | null,
    order: 'asc' | 'desc'
  ): UserAttributes[] | null {
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

  function sortRoleByName(
    items: RoleArray[] | null,
    order: 'asc' | 'desc'
  ): RoleArray[] | null {
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

  function sortByProperty(
    items: UserAttributes[] | null,
    search: 'name' | 'email' | 'phone' | 'login',
    order: 'asc' | 'desc'
  ): UserAttributes[] | null {
    if (items) {
      return items.slice().sort((a, b) => {
        const comparison = a[search].localeCompare(b[search], undefined, {
          sensitivity: 'base',
        });
        return order === 'asc' ? comparison : -comparison;
      });
    }
    return null;
  }

  const filterByName = (search: string): UserAttributes[] | null => {
    if (users.data.items) {
      return users.data.items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return null;
  };

  const filterRoleByName = (
    roleArray: RoleArray[],
    search: string
  ): RoleArray[] | null => {
    if (roleArray) {
      return roleArray.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return null;
  };

  const filterBySearch = (
    search: string,
    searchType: 'name' | 'email' | 'phone' | 'login'
  ): UserAttributes[] | null => {
    if (users.data.items) {
      return users.data.items.filter((item) =>
        item[searchType].toLowerCase().includes(search.toLowerCase())
      );
    }
    return null;
  };

  const getPaginated = (
    items: UserAttributes[] | null,
    page: number,
    itemPerPage: number
  ): UserAttributes[] | null => {
    const startIndex = (page - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;

    if (items) {
      return items.slice(startIndex, endIndex);
    }

    return null;
  };

  const getRolePaginated = (
    items: RoleArray[] | null,
    page: number,
    itemPerPage: number
  ): RoleArray[] | null => {
    const startIndex = (page - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;

    if (items) {
      return items.slice(startIndex, endIndex);
    }

    return null;
  };

  // Efects
  React.useEffect(() => {
    getUsers();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const states = {
    isReady,
    isFetching,
    isInit,
    isAdd,
    isUpdate,
    isView,

    name,
    nameValid,

    lastName,
    lastNameValid,

    email,
    emailValid,

    phoneNumber,
    phoneNumberValid,
    areaCode,
    areaCodeValid,
    areaCodeDefault,
    areaCodeOptions,

    rolesId,
    roleValid,
    roleDefault,
    roleOptions,

    site,
    siteValid,
    siteDefault,
    siteOptions,

    photo,
    photoValid,
    submitting,

    isActive,
    isActiveValid,
    isActiveDefault,
    isActiveOptions,

    users,

    error,
    userId,
    orderList,
    searchTerm,
    currentPage,
    itemsPerPage,
    searchBy,
    searchByDefault,
    searchByOptions,
  };

  // Define las acciones necesarias para los atributos de Site
  const actions = {
    onFetching,
    onInit,
    onAdd,
    onUpdate,
    goView,
    onIsReady,
    notReady,
    goUpdate,
    goAdd,

    validationButtonNext,
    validationName,
    validationLastName,
    validationEmail,
    validationPhoneNumber,
    validationAreaCode,
    validationRole,
    validationSite,
    validationPhoto,
    validationIsActive,

    changeName,
    changeLastName,
    changeEmail,
    changePhoneNumber,
    changeAreaCode,
    changeRole,
    changeSite,
    changeError,
    changePhoto,
    setSubmitting,
    setPhoto,
    changeIsActive,
    infoReset,

    resetData,
    handleNewUsers,
    handleUpdatedUsers,
    returnInit,
    add,
    getById,
    update,
    sortByName,
    filterByName,
    getPaginated,
    setOrderList,
    setSearchTerm,
    setCurrentPage,
    changeSearchBy,
    sortByProperty,
    filterBySearch,
    filterRoleByName,
    sortRoleByName,
    getRolePaginated,
  };

  return {
    states,
    actions,
  };
};
