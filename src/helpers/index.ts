/* eslint-disable object-shorthand */
import { SingleValue } from 'react-select';
import type { SelectDefault } from '../states';

export const addClass = (element: string, className: string): void => {
  const input = document.getElementById(element);

  if (input && input.classList && !input.classList.contains(className)) {
    input.classList.add(className);
  }
};

export const removeClass = (element: string, className: string): void => {
  const input = document.getElementById(element);

  if (input && input.classList && input.classList.contains(className)) {
    input.classList.remove(className);
  }
};

export const validationSelect = (
  value: string,
  componentId: string,
  className: string
): boolean => {
  if (value === '') {
    addClass(componentId, className);
    return false;
  }

  removeClass(componentId, className);
  return true;
};

export function validationHidden(value: string, validate: RegExp): boolean {
  return validate.test(value);
}

export const validationInput = (
  value: string,
  match: RegExp,
  componentId: string,
  className: string,
  required = false
): boolean => {
  const valid = validationHidden(value, match);

  if (required && (!valid || !value)) {
    addClass(componentId, className);
    return false;
  }

  if (value && valid) {
    removeClass(componentId, className);
    return true;
  }

  if (!required && !value) {
    removeClass(componentId, className);
    return true;
  }

  addClass(componentId, className);
  return false;
};

export type ChangeInputText = {
  value: string;
  validation: (value: string) => boolean;
  setValue: (value: string) => void;
};

export const changeInputText = ({
  value,
  validation,
  setValue,
}: ChangeInputText): void => {
  let newValue = '';
  const valid: boolean = validation(value);
  if (valid) {
    newValue = value;
  }

  setValue(newValue);
};

export function toTitleCase(str: string): string {
  return str
    .toLocaleLowerCase()
    .replace(/(^|\s|\.|,|&)[a-z\u00E0-\u00FF]/g, (match) =>
      match.toUpperCase()
    );
}

export type ChangeSelect = {
  newValue: SingleValue<{
    value: string | number | boolean | null;
    label: string;
  }>;
  validation: (value: string) => boolean;
  setDefault: (newValue: SelectDefault) => void;
  setValue:
    | ((value: string) => void)
    | ((value: number) => void)
    | ((value: boolean) => void)
    | ((value: null) => void);
};

export const changeSelect = ({
  newValue,
  validation,
  setDefault,
  setValue,
}: ChangeSelect): void => {
  if (newValue != null) {
    const valid: boolean = validation(`${newValue.value}`);
    if (valid) {
      const newDefaulValue = {
        label: newValue.label,
        value: `${newValue.value}`,
      };
      setDefault(newDefaulValue);

      if (typeof newValue.value === 'string' && setValue.length === 1) {
        (setValue as (value: string) => void)(newValue.value);
      } else if (typeof newValue.value === 'number' && setValue.length === 1) {
        (setValue as (value: number) => void)(newValue.value);
      } else if (typeof newValue.value === 'boolean' && setValue.length === 1) {
        (setValue as (value: boolean) => void)(newValue.value);
      } else if (typeof newValue.value === 'object' && setValue.length === 1) {
        (setValue as (value: null) => void)(newValue.value);
      }
    }
  }
};

export type ValidationInputName = {
  name: string;
  inputId: string;
  setValid: (value: boolean) => void;
  required?: boolean;
};

export const validationInputName = ({
  name,
  inputId,
  setValid,
  required = true,
}: ValidationInputName): boolean => {
  const valid = validationInput(
    name,
    /^[-a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_,.&'\-\s]+$/,
    inputId,
    'gs-input-alert',
    required
  );
  setValid(valid);
  return valid;
};

export type ValidationInputAdress = {
  value: string;
  inputId: string;
  setValid: (value: boolean) => void;
  required?: boolean;
};

export const validationInputAddress = ({
  value,
  inputId,
  setValid,
  required = true,
}: ValidationInputAdress): boolean => {
  const valid = validationInput(
    value,
    /^[a-zA-Z0-9#]+[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_#'()\-.,\s]+$/,
    inputId,
    'gs-input-alert',
    required
  );
  setValid(valid);
  return valid;
};

export const validationInputPostcode = ({
  value,
  inputId,
  setValid,
  required = true,
}: ValidationInputAdress): boolean => {
  const valid = validationInput(
    value,
    /^[a-zA-Z0-9]+[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_#()\-.\s]+$/,
    inputId,
    'gs-input-alert',
    required
  );
  setValid(valid);
  return valid;
};

export const validationInputEmail = ({
  value,
  inputId,
  setValid,
  required = true,
}: ValidationInputAdress): boolean => {
  const valid = validationInput(
    value,
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    inputId,
    'gs-input-alert',
    required
  );
  setValid(valid);
  return valid;
};

export const validationInputPhone = ({
  value,
  inputId,
  setValid,
  required = true,
}: ValidationInputAdress): boolean => {
  const valid = validationInput(
    value,
    /^[0-9]{10,20}/,
    inputId,
    'gs-input-alert',
    required
  );
  setValid(valid);
  return valid;
};

export const validationInputPassword = ({
  value,
  inputId,
  setValid,
  required = true,
}: ValidationInputAdress): boolean => {
  const valid = validationInput(
    value,
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    inputId,
    'gs-input-alert',
    required
  );
  setValid(valid);
  return valid;
};

interface InitToken {
  token?: string | undefined;
}

interface FetchOptions<T = unknown> {
  initMethod: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE';
  initApi: string;
  initRoute: string;
  initToken?: InitToken;
  initCredentials?: T;
  functionFetching?: () => void;
  functionSuccess?: (data: T) => void;
  functionError?: (data: T) => void;
}

export function gafpriFetch<T = unknown>({
  initMethod,
  initApi,
  initRoute,
  initToken,
  initCredentials,
  functionFetching,
  functionSuccess,
  functionError,
}: FetchOptions<T>): void {
  if (functionFetching !== undefined) {
    functionFetching();
  }

  let headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (initToken !== undefined) {
    headers = {
      ...headers,
      Authorization: `Bearer ${initToken.token}`,
    };
  }

  const options: RequestInit = {
    method: initMethod,
    headers: headers,
    body: JSON.stringify(initCredentials),
  };

  fetch(`${initApi}/${initRoute}`, options)
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        if (functionSuccess !== undefined) {
          functionSuccess(data);
        }
      } else if (functionError !== undefined) {
        functionError(data);
      }
    })
    .catch((error) => {
      if (functionError !== undefined) {
        functionError(error);
      }
    });
}

export const isSelectDefault = (obj: unknown): obj is SelectDefault => {
  if (typeof obj !== 'object' || obj === null) {
    return false;
  }

  const selectDefaultCandidate = obj as SelectDefault;

  return (
    typeof selectDefaultCandidate.value === 'string' &&
    typeof selectDefaultCandidate.label === 'string'
  );
};

export const isSelectDefaultArray = (obj: unknown): obj is SelectDefault[] => {
  if (!Array.isArray(obj)) {
    return false;
  }

  return obj.every(isSelectDefault);
};

export const getLastEntryDateAndCount = async (
  service: string
): Promise<{ date: Date | null; count: number } | null> => {
  try {
    const response = await fetch(
      `http://localhost:4000/api/v1/${service}/date-and-count`
    );
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching last entry date:', error);
  }
  return null;
};

export type ErrorResponseProps = {
  error: string;
  message: string;
  statusCode: number;
  success: boolean;
};

export const isErrorResponse = (obj: unknown): obj is ErrorResponseProps => {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'error' in obj &&
    'message' in obj &&
    'statusCode' in obj &&
    'success' in obj
  );
};

export type ValidationErrorInfo = {
  instance: Record<string, unknown>;
  message: string;
  origin: string;
  path: string;
  type: string;
  validatorArgs: unknown[];
  validatorKey: string;
  validatorName: string | null;
  value: string;
};

export type CustomErrorResponseProps = {
  errors: ValidationErrorInfo[];
  message: string;
  statusCode: number;
  success: boolean;
};

export function isCustomErrorResponse(
  obj: unknown
): obj is CustomErrorResponseProps {
  const customErrorObj = obj as CustomErrorResponseProps;

  return (
    typeof customErrorObj?.statusCode === 'number' &&
    typeof customErrorObj?.success === 'boolean' &&
    typeof customErrorObj?.message === 'string' &&
    Array.isArray(customErrorObj?.errors) &&
    customErrorObj.errors.every((error) => {
      return (
        typeof error.message === 'string' &&
        typeof error.origin === 'string' &&
        typeof error.path === 'string' &&
        typeof error.type === 'string' &&
        Array.isArray(error.validatorArgs) &&
        typeof error.validatorKey === 'string' &&
        (typeof error.validatorName === 'string' ||
          error.validatorName === null) &&
        typeof error.value === 'string' &&
        typeof error.instance === 'object' &&
        error.instance !== null
      );
    })
  );
}

export function getMimeTypeByExtension(filename: string): string | null {
  const extension = filename.split('.').pop()?.toLowerCase();

  switch (extension) {
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg';
    case 'png':
      return 'image/png';
    default:
      return null;
  }
}

export function formatPhoneNumber(phoneNumber: string): string {
  const countryCode = parseInt(
    phoneNumber.slice(0, phoneNumber.length - 10), 10
  ).toString();
  const areaCode = phoneNumber.slice(
    phoneNumber.length - 10,
    phoneNumber.length - 7
  );
  const firstPart = phoneNumber.slice(
    phoneNumber.length - 7,
    phoneNumber.length - 4
  );
  const secondPart = phoneNumber.slice(phoneNumber.length - 4);

  return `+${countryCode} (${areaCode}) ${firstPart}-${secondPart}`;
}
