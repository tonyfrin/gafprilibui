import { ChangeEvent } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { SingleValue } from 'react-select';
import DOMPurify from 'dompurify';
import {
  changeInputText,
  toTitleCase,
  changeSelect,
  SelectDefault,
  getMimeTypeByExtension,
} from '../helpers';
import {
  STATE_COUNTRY_DEFAULT,
  CITY_DEFAULT,
  Cities,
  StatesCountries,
  UPLOAD_PHOTO_ROUTE,
} from '../Constans';

export const generalChangeUserName = (
  value: string,
  validation: (valueValid: string) => boolean,
  setValue: (transformedValue: string) => void
): void => {
  const valueClean = DOMPurify.sanitize(value);
  const userName = valueClean.toLowerCase();
  changeInputText({
    value: userName,
    validation,
    setValue,
  });
};

export const generalChangeName = (
  value: string,
  validation: (valueValid: string) => boolean,
  setValue: (transformedValue: string) => void
): void => {
  const valueClean = DOMPurify.sanitize(value);
  const name = toTitleCase(valueClean);
  changeInputText({
    value: name,
    validation,
    setValue,
  });
};

export const generalChangeLastName = (
  value: string,
  validation: (valueValid: string) => boolean,
  setValue: (transformedValue: string) => void
): void => {
  const valueClean = DOMPurify.sanitize(value);
  const lastName = toTitleCase(valueClean);
  changeInputText({
    value: lastName,
    validation,
    setValue,
  });
};

export const generalChangePassword = (
  value: string,
  validation: (valueValid: string) => boolean,
  setValue: (transformedValue: string) => void
): void => {
  const valueClean = DOMPurify.sanitize(value);
  changeInputText({
    value: valueClean,
    validation,
    setValue,
  });
};

export const generalChangeDescription = (
  value: string,
  validation: (valueValid: string) => boolean,
  setValue: (transformedValue: string) => void
): void => {
  const valueClean = DOMPurify.sanitize(value);
  changeInputText({
    value: valueClean,
    validation,
    setValue,
  });
};

export const generalChangeAddress = (
  value: string,
  validation: (valueValid: string) => boolean,
  setValue: (transformedValue: string) => void
): void => {
  const valueClean = DOMPurify.sanitize(value);
  const newAddress = toTitleCase(valueClean);
  changeInputText({
    value: newAddress,
    validation,
    setValue,
  });
};

export const generalChangeAddressType = (
  options: SingleValue<{ value: string; label: string }>,
  validation: (valueValid: string) => boolean,
  setDefault: (valueDefault: SelectDefault) => void,
  setValue: (transformedValue: string) => void
): void => {
  changeSelect({
    newValue: options,
    validation,
    setDefault,
    setValue,
  });
};

export const generalChangeCityStateCountry = (
  options: SingleValue<{ value: string; label: string }>,
  validation: (valueValid: string) => boolean,
  setDefault: (valueDefault: SelectDefault) => void,
  setValue: (transformedValue: string) => void,
  setIsReset: (valueReset: boolean) => void
): void => {
  setIsReset(false);
  changeSelect({
    newValue: options,
    validation,
    setDefault,
    setValue,
  });
};

export const generalChangeCityOptions = (
  country: string,
  state: string,
  setCityDefault: (valueDefault: SelectDefault) => void,
  setCity: (transformedValue: string) => void,
  setCityOptions: (valueOptions: SelectDefault[]) => void,
  isReset: boolean
): void => {
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
  if (isReset) {
    setCityDefault(CITY_DEFAULT);
    setCity(CITY_DEFAULT.value);
  } else {
    setCityDefault({ label: 'Elija la ciudad', value: '' });
    setCity('');
  }
  setCityOptions(newValueCity);
};

export const generalChangeStateCountryOptions = (
  country: string,
  setStateCountryDefault: (valueDefault: SelectDefault) => void,
  setStateCountry: (transformedValue: string) => void,
  setStateCountryOptions: (valueOptions: SelectDefault[]) => void,
  isReset: boolean
): void => {
  const newValueState: SelectDefault[] = [];
  if (country && StatesCountries[0][country]?.length > 0) {
    StatesCountries[0][country].forEach((item) => {
      Object.keys(item).forEach((key) => {
        newValueState.push({ value: key, label: item[key] });
      });
    });
  }
  if (isReset) {
    setStateCountryDefault(STATE_COUNTRY_DEFAULT);
    setStateCountry(STATE_COUNTRY_DEFAULT.value);
  } else {
    setStateCountryDefault({ label: 'Elija el Estado', value: '' });
    setStateCountry('');
  }
  setStateCountryOptions(newValueState);
};

export const generalChangePostCode = (
  value: string,
  validation: (valueValid: string) => boolean,
  setValue: (transformedValue: string) => void
): void => {
  const valueClean = DOMPurify.sanitize(value);
  changeInputText({
    value: valueClean,
    validation,
    setValue,
  });
};

export const generalChangeSite = (
  options: SingleValue<{ value: string; label: string }>,
  validation: (valueValid: string) => boolean,
  setDefault: (valueDefault: SelectDefault) => void,
  setValue: (transformedValue: number) => void
): void => {
  changeSelect({
    newValue: options,
    validation,
    setDefault,
    setValue,
  });
};

export const generalChangeParentId = (
  options: SingleValue<{ value: string; label: string }>,
  validation: (valueValid: string) => boolean,
  setDefault: (valueDefault: SelectDefault) => void,
  setValue: (transformedValue: number) => void
): void => {
  let value: number | null = null;
  if (options && options.value !== 'null') {
    value = parseInt(options.value, 10);
  }
  const label = options?.label || 'Sin categoría padre';
  const newOptions = { value, label };
  changeSelect({
    newValue: newOptions,
    validation,
    setDefault,
    setValue,
  });
};

export const generalChangePhoto = async (
  e: ChangeEvent<HTMLInputElement>,
  changeError: (valueError: string[]) => void,
  setSubmitting: (valueSubmitting: boolean) => void,
  setPhoto: (valuePhoto: string) => void
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
    const response = await axios.post(UPLOAD_PHOTO_ROUTE, formData, config);

    if (response.status === 200) {
      setPhoto(response.data.imageUrl);
    } else {
      setSubmitting(false);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (newErrorValue: any) {
    changeError([`${newErrorValue.message}`]);
    setSubmitting(false);
  }
};

export const generalChangeStatus = (
  options: SingleValue<{ value: string; label: string }>,
  validation: (valueValid: string) => boolean,
  setDefault: (valueDefault: SelectDefault) => void,
  setValue: (transformedValue: string) => void
): void => {
  changeSelect({
    newValue: options,
    validation,
    setDefault,
    setValue,
  });
};

export const generalChangeCurrenciesSymbol = (
  value: string,
  validation: (valueValid: string) => boolean,
  setValue: (transformedValue: string) => void
): void => {
  const valueClean = DOMPurify.sanitize(value);
  const name = toTitleCase(valueClean);
  changeInputText({
    value: name,
    validation,
    setValue,
  });
};

export const generalChangeTypeDocumentIdId = (
  options: SingleValue<{ value: string; label: string }>,
  validation: (valueValid: string) => boolean,
  setDefault: (valueDefault: SelectDefault) => void,
  setValue: (transformedValue: number | null) => void
): void => {
  changeSelect({
    newValue: options,
    validation,
    setDefault,
    setValue,
  });
};

export const generalChangeDocumentIdIndex = (
  options: SingleValue<{ value: string; label: string }>,
  validation: (valueValid: string) => boolean,
  setDefault: (valueDefault: SelectDefault) => void,
  setValue: (transformedValue: string) => void
): void => {
  changeSelect({
    newValue: options,
    validation,
    setDefault,
    setValue,
  });
};

export const generalChangeDocumentIdDigit = (
  value: string,
  validation: (valueValid: string) => boolean,
  setValue: (transformedValue: string) => void
): void => {
  const valueClean = DOMPurify.sanitize(value);
  changeInputText({
    value: valueClean,
    validation,
    setValue,
  });
};

export const generalChangeEmail = (
  value: string,
  validation: (valueValid: string) => boolean,
  setValue: (transformedValue: string) => void
): void => {
  const valueClean = DOMPurify.sanitize(value);
  const name = toTitleCase(valueClean);
  changeInputText({
    value: name,
    validation,
    setValue,
  });
};

export const generalChangePhone = (
  value: string,
  validation: (valueValid: string) => boolean,
  setValue: (transformedValue: string) => void
): void => {
  const valueClean = DOMPurify.sanitize(value);
  changeInputText({
    value: valueClean,
    validation,
    setValue,
  });
};

export const generalChangeType = (
  options: SingleValue<{ value: string; label: string }>,
  validation: (valueValid: string) => boolean,
  setDefault: (valueDefault: SelectDefault) => void,
  setValue: (transformedValue: string) => void
): void => {
  changeSelect({
    newValue: options,
    validation,
    setDefault,
    setValue,
  });
};
