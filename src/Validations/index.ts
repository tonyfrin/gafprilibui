import {
  validationInput,
  removeClass,
  addClass,
  validationSelect,
  validationHidden,
} from '../helpers';
import {
  NAME_INPUT,
  LAST_NAME_INPUT,
  USER_NAME_INPUT,
  PASSWORD_INPUT,
  BUTTON_NEXT_INPUT,
  DESCRIPTION_INPUT,
  ADDRESS1_INPUT,
  ADDRESS2_INPUT,
  CITY_INPUT,
  STATE_COUNTRY_INPUT,
  COUNTRY_INPUT,
  ZIP_CODE_INPUT,
  SITE_INPUT,
  SKU_INPUT,
  GALLERY_IMAGE_INPUT,
  PARENT_ID_INPUT,
  STATUS_INPUT,
  ALERT,
  DISABLED,
  PHOTO_CATEGORY_INPUT,
  CURRENCIES_SYMBOL_INPUT,
  TYPE_DOCUMENT_ID_ID_INPUT,
  TYPE_DOCUMENT_ID_INDEX_INPUT,
  TYPE_DOCUMENT_ID_DIGIT_INPUT,
  ADDRESS_TYPE_INPUT,
  EMAIL_INPUT,
  PHONE_INPUT,
  TYPE_INPUT,
  PHOTO_ENTITY_INPUT,
  PHOTO_DOCUMENT_ID_INPUT,
  CURRENCIES_INPUT,
  CURRENCIES_LOCATIONS_INPUT,
  CURRENCIES_SEPARATOR_INPUT,
  CURRENCIES_DECIMAL_NUMBERS_INPUT,
  TAXES_INPUT,
  WEB_SITE_INPUT,
  AREA_CODE_INPUT,
  ROLES_INPUT,
  PHOTO_USERS_INPUT,
} from '../Constans';

export type ValidationInput = {
  value: string;
  currentValid: boolean;
  inputId: string;
  setValid: (value: boolean) => void;
  required?: boolean;
};

export const validationInputNameLastNameUserName = ({
  value,
  currentValid,
  inputId,
  setValid,
  required = true,
}: ValidationInput): boolean => {
  const valid = validationInput(
    value,
    /^[-a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_,.&'@-\s]+$/,
    inputId,
    required
  );
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};

export const generalValidationName = (
  value: string,
  setValid: (valueValid: boolean) => void,
  currentValid: boolean,
  required = true,
  inputId = ''
): boolean => {
  return validationInputNameLastNameUserName({
    value,
    inputId: `${NAME_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};

export const generalValidationLastName = (
  value: string,
  setValid: (valueValid: boolean) => void,
  currentValid: boolean,
  required = true,
  inputId = ''
): boolean => {
  return validationInputNameLastNameUserName({
    value,
    inputId: `${LAST_NAME_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};

export const generalValidationUserName = (
  value: string,
  setValid: (valueValid: boolean) => void,
  currentValid: boolean,
  required = true,
  inputId = ''
): boolean => {
  return validationInputNameLastNameUserName({
    value,
    inputId: `${USER_NAME_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};

export const validationInputPassword = ({
  value,
  inputId,
  setValid,
  currentValid,
  required = true,
}: ValidationInput): boolean => {
  const valid = validationInput(
    value,
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
    inputId,
    required
  );
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};

export const validationInputSinglePassword = ({
  value,
  inputId,
  setValid,
  required = true,
}: ValidationInput): boolean => {
  const valid = validationInput(value, /^.+$/, inputId, required);
  setValid(valid);
  return valid;
};

export const generalValidationPassword = (
  value: string,
  setValid: (valueValid: boolean) => void,
  currentValid: boolean,
  required = true,
  inputId = ''
): boolean => {
  return validationInputPassword({
    value,
    inputId: `${PASSWORD_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};

export const generalValidationSinglePassword = (
  value: string,
  setValid: (valueValid: boolean) => void,
  currentValid: boolean,
  required = true,
  inputId = ''
): boolean => {
  return validationInputSinglePassword({
    value,
    inputId: `${PASSWORD_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};

export const generalValidationButtonNext = (
  validations: boolean[],
  inputId?: string
): void => {
  const isAllValid = validations.every((validation) => validation);

  if (isAllValid) {
    removeClass(`${BUTTON_NEXT_INPUT}${inputId}`, DISABLED);
  } else {
    addClass(`${BUTTON_NEXT_INPUT}${inputId}`, DISABLED);
  }
};

export const validationInputDescription = ({
  value,
  inputId,
  setValid,
  currentValid,
  required = true,
}: ValidationInput): boolean => {
  const valid = validationInput(value, /^[\s\S]*$/, inputId, required);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};

export const generalValidationDescription = (
  value: string,
  setValid: (valueValid: boolean) => void,
  currentValid: boolean,
  required = true,
  inputId = ''
): boolean => {
  return validationInputDescription({
    value,
    inputId: `${DESCRIPTION_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};

export const validationInputAddress = ({
  value,
  currentValid,
  inputId,
  setValid,
  required = true,
}: ValidationInput): boolean => {
  const valid = validationInput(
    value,
    /^[a-zA-Z0-9#]+[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_#'()\-.,\s]+$/,
    inputId,
    required
  );
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};

export const generalValidationAddress1 = (
  value: string,
  setValid: (valueValid: boolean) => void,
  currentValid: boolean,
  required = true,
  inputId = ''
): boolean => {
  return validationInputAddress({
    value,
    inputId: `${ADDRESS1_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};

export const generalValidationAddress2 = (
  value: string,
  setValid: (valueValid: boolean) => void,
  currentValid: boolean,
  required = false,
  inputId = ''
): boolean => {
  return validationInputAddress({
    value,
    inputId: `${ADDRESS2_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};

export const generalValidationAddressType = (
  newValue: string,
  setValid: (value: boolean) => void,
  currentValid: boolean,
  inputId = ''
): boolean => {
  const valid = validationSelect(newValue, `${ADDRESS_TYPE_INPUT}${inputId}`);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};

export const generalValidationSelectCity = (
  value: string,
  setValid: (valueValid: boolean) => void,
  currentValid: boolean,
  inputId = ''
): boolean => {
  const validation: boolean = validationSelect(
    value,
    `${CITY_INPUT}${inputId}`
  );
  if (validation !== currentValid) {
    setValid(validation);
  }
  return validation;
};

export const generalValidationSelectStateCountry = (
  value: string,
  setValid: (valueValid: boolean) => void,
  currentValid: boolean,
  inputId = ''
): boolean => {
  const validation: boolean = validationSelect(
    value,
    `${STATE_COUNTRY_INPUT}${inputId}`
  );
  if (validation !== currentValid) {
    setValid(validation);
  }
  return validation;
};

export const generalValidationSelectCountry = (
  value: string,
  setValid: (valueValid: boolean) => void,
  currentValid: boolean,
  inputId = ''
): boolean => {
  const validation: boolean = validationSelect(
    value,
    `${COUNTRY_INPUT}${inputId}`
  );
  if (validation !== currentValid) {
    setValid(validation);
  }
  return validation;
};

export const generalValidationPostCode = (
  value: string,
  setValid: (valueValid: boolean) => void,
  currentValid: boolean,
  required = false,
  inputId = ''
): boolean => {
  const valid = validationInput(
    value,
    /^[a-zA-Z0-9]+[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_#()\-.\s]+$/,
    `${ZIP_CODE_INPUT}${inputId}`,
    required
  );
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};

export const generalValidationSelectSite = (
  value: string,
  setValid: (valueValid: boolean) => void,
  currentValid: boolean,
  inputId = ''
): boolean => {
  const validation: boolean = validationSelect(
    value,
    `${SITE_INPUT}${inputId}`
  );
  if (validation !== currentValid) {
    setValid(validation);
  }
  return validation;
};

export const validationInputSku = ({
  value,
  inputId,
  currentValid,
  setValid,
  required = true,
}: ValidationInput): boolean => {
  const valid = validationInput(value, /^[\d-]+$/, inputId, required);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};

export const generalValidationSku = (
  value: string,
  setValid: (valueValid: boolean) => void,
  currentValid: boolean,
  required = true,
  inputId = ''
): boolean => {
  return validationInputSku({
    value,
    inputId: `${SKU_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};

export const validationPhoto = ({
  value,
  inputId,
  currentValid,
  setValid,
  required = true,
}: ValidationInput): boolean => {
  const valid = validationInput(
    value,
    /^(?:(?:[a-z][a-z0-9+-.]*):\/\/)?(?:[a-z0-9_-]+(?::[a-z0-9_-]+)*@)?(?:[a-z0-9.-]+|(?:\[[a-f0-9:.]+\]))(?::\d+)?(?:\/[^\s#?]*(?:\?[^\s#?]*)?(?:#[^\s#?]*)?)?$/i,
    inputId,
    required
  );
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};

export const generalValidationPhoto = (
  value: string,
  setValid: (valueValid: boolean) => void,
  currentValid: boolean,
  required: boolean,
  inputId: string
): boolean => {
  return validationPhoto({
    value,
    inputId,
    setValid,
    currentValid,
    required,
  });
};

export const generalValidationPhotoCategory = (
  value: string,
  setValid: (valueValid: boolean) => void,
  currentValid: boolean,
  required = true,
  inputId = ''
): boolean => {
  return validationPhoto({
    value,
    inputId: `${PHOTO_CATEGORY_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};

export const generalValidationPhotoEntity = (
  value: string,
  setValid: (valueValid: boolean) => void,
  currentValid: boolean,
  required = true,
  inputId = ''
): boolean => {
  return validationPhoto({
    value,
    inputId: `${PHOTO_ENTITY_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};

export const generalValidationPhotoDocumentId = (
  value: string,
  setValid: (valueValid: boolean) => void,
  currentValid: boolean,
  required = true,
  inputId = ''
): boolean => {
  return validationPhoto({
    value,
    inputId: `${PHOTO_DOCUMENT_ID_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};

export const validationInputArray = (
  values: string[],
  match: RegExp,
  componentId: string,
  required = false
): boolean => {
  let allValid = true;

  values.forEach((value) => {
    const isValid = value && validationHidden(value, match);

    if (required && !isValid) {
      allValid = false;
    }

    if (!required && value && !isValid) {
      allValid = false;
    }
  });

  if (allValid) {
    removeClass(componentId, ALERT);
  } else {
    addClass(componentId, ALERT);
  }

  return allValid;
};

export const generalValidationGalleryImage = (
  value: string[],
  setValid: (valueValid: boolean) => void,
  currentValid: boolean,
  required = false,
  inputId = ''
): boolean => {
  const valid = validationInputArray(
    value,
    /^(?:(?:[a-z][a-z0-9+-.]*):\/\/)?(?:[a-z0-9_-]+(?::[a-z0-9_-]+)*@)?(?:[a-z0-9.-]+|(?:\[[a-f0-9:.]+\]))(?::\d+)?(?:\/[^\s#?]*(?:\?[^\s#?]*)?(?:#[^\s#?]*)?)?$/i,
    `${GALLERY_IMAGE_INPUT}${inputId}`,
    required
  );
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};

export const generalValidationParentId = (
  newValue: string,
  setValid: (value: boolean) => void,
  currentValid: boolean,
  inputId = ''
): boolean => {
  const valid = validationSelect(newValue, `${PARENT_ID_INPUT}${inputId}`);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};

export const generalValidationStatus = (
  newValue: string,
  setValid: (value: boolean) => void,
  currentValid: boolean,
  inputId = ''
): boolean => {
  const valid = validationSelect(newValue, `${STATUS_INPUT}${inputId}`);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};

export const generalValidationCurrenciesSymbol = (
  newValue: string,
  setValid: (value: boolean) => void,
  currentValid: boolean,
  required = true,
  inputId = ''
): boolean => {
  const valid = validationInput(
    newValue,
    /\$|Bs|€/,
    `${CURRENCIES_SYMBOL_INPUT}${inputId}`,
    required
  );
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};

export const generalValidationTypeDocumentIdId = (
  newValue: string,
  setValid: (value: boolean) => void,
  currentValid: boolean,
  inputId = ''
): boolean => {
  const valid = validationSelect(
    newValue,
    `${TYPE_DOCUMENT_ID_ID_INPUT}${inputId}`
  );
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};

export const generalValidationTypeDocumentIdIndex = (
  newValue: string,
  setValid: (value: boolean) => void,
  currentValid: boolean,
  inputId = ''
): boolean => {
  const valid = validationSelect(
    newValue,
    `${TYPE_DOCUMENT_ID_INDEX_INPUT}${inputId}`
  );
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};

export const generalValidationTypeDocumentIdDigit = (
  newValue: string,
  setValid: (value: boolean) => void,
  currentValid: boolean,
  required = true,
  inputId = ''
): boolean => {
  const valid = validationInput(
    newValue,
    /^\d{1,12}(-\d{1,12})?$/,
    `${TYPE_DOCUMENT_ID_DIGIT_INPUT}${inputId}`,
    required
  );
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};

export const generalValidationEmail = (
  newValue: string,
  setValid: (value: boolean) => void,
  currentValid: boolean,
  required = false,
  inputId = ''
): boolean => {
  const valid = validationInput(
    newValue,
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    `${EMAIL_INPUT}${inputId}`,
    required
  );
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};

export const generalValidationPhone = (
  newValue: string,
  setValid: (value: boolean) => void,
  currentValid: boolean,
  required = false,
  inputId = ''
): boolean => {
  const valid = validationInput(
    newValue,
    /^[0-9]{10,20}/,
    `${PHONE_INPUT}${inputId}`,
    required
  );
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};

export const generalValidationType = (
  newValue: string,
  setValid: (value: boolean) => void,
  currentValid: boolean,
  inputId = ''
): boolean => {
  const valid = validationSelect(newValue, `${TYPE_INPUT}${inputId}`);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};

export const generalValidationSelectCurrencies = (
  value: string,
  setValid: (valueValid: boolean) => void,
  currentValid: boolean,
  inputId = ''
): boolean => {
  const validation: boolean = validationSelect(
    value,
    `${CURRENCIES_INPUT}${inputId}`
  );
  if (validation !== currentValid) {
    setValid(validation);
  }
  return validation;
};

export const generalValidationSelectCurrenciesLocations = (
  value: string,
  setValid: (valueValid: boolean) => void,
  currentValid: boolean,
  inputId = ''
): boolean => {
  const validation: boolean = validationSelect(
    value,
    `${CURRENCIES_LOCATIONS_INPUT}${inputId}`
  );
  if (validation !== currentValid) {
    setValid(validation);
  }
  return validation;
};

export const generalValidationSelectCurrenciesSeparator = (
  value: string,
  setValid: (valueValid: boolean) => void,
  currentValid: boolean,
  inputId = ''
): boolean => {
  const validation: boolean = validationSelect(
    value,
    `${CURRENCIES_SEPARATOR_INPUT}${inputId}`
  );
  if (validation !== currentValid) {
    setValid(validation);
  }
  return validation;
};

export const generalValidationSelectCurrenciesDecimalNumbers = (
  value: string,
  setValid: (valueValid: boolean) => void,
  currentValid: boolean,
  inputId = ''
): boolean => {
  const validation: boolean = validationSelect(
    value,
    `${CURRENCIES_DECIMAL_NUMBERS_INPUT}${inputId}`
  );
  if (validation !== currentValid) {
    setValid(validation);
  }
  return validation;
};

export const generalValidationSelectTaxes = (
  value: string,
  setValid: (valueValid: boolean) => void,
  currentValid: boolean,
  inputId = ''
): boolean => {
  const validation: boolean = validationSelect(
    value,
    `${TAXES_INPUT}${inputId}`
  );
  if (validation !== currentValid) {
    setValid(validation);
  }
  return validation;
};

export const generalValidationWebSite = (
  newValue: string,
  setValid: (value: boolean) => void,
  currentValid: boolean,
  required = false,
  inputId = ''
): boolean => {
  const valid = validationInput(
    newValue,
    /^[-a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_,.&:/'\-\s]+$/,
    `${WEB_SITE_INPUT}${inputId}`,
    required
  );
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};

export const generalValidationAreaCode = (
  newValue: string,
  setValid: (value: boolean) => void,
  currentValid: boolean,
  inputId = ''
): boolean => {
  const valid = validationSelect(newValue, `${AREA_CODE_INPUT}${inputId}`);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};

export const generalValidationRoles = (
  newValue: string,
  setValid: (value: boolean) => void,
  currentValid: boolean,
  inputId = ''
): boolean => {
  const valid = validationSelect(newValue, `${ROLES_INPUT}${inputId}`);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};

export const generalValidationPhotoUsers = (
  value: string,
  setValid: (valueValid: boolean) => void,
  currentValid: boolean,
  required = true,
  inputId = ''
): boolean => {
  return validationPhoto({
    value,
    inputId: `${PHOTO_USERS_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
