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
  required = true
): boolean => {
  return validationInputNameLastNameUserName({
    value,
    inputId: NAME_INPUT,
    setValid,
    currentValid,
    required,
  });
};

export const generalValidationLastName = (
  value: string,
  setValid: (valueValid: boolean) => void,
  currentValid: boolean,
  required = true
): boolean => {
  return validationInputNameLastNameUserName({
    value,
    inputId: LAST_NAME_INPUT,
    setValid,
    currentValid,
    required,
  });
};

export const generalValidationUserName = (
  value: string,
  setValid: (valueValid: boolean) => void,
  currentValid: boolean,
  required = true
): boolean => {
  return validationInputNameLastNameUserName({
    value,
    inputId: USER_NAME_INPUT,
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
  required = true
): boolean => {
  return validationInputPassword({
    value,
    inputId: PASSWORD_INPUT,
    setValid,
    currentValid,
    required,
  });
};

export const generalValidationSinglePassword = (
  value: string,
  setValid: (valueValid: boolean) => void,
  currentValid: boolean,
  required = true
): boolean => {
  return validationInputSinglePassword({
    value,
    inputId: PASSWORD_INPUT,
    setValid,
    currentValid,
    required,
  });
};

export const generalValidationButtonNext = (
  ...validations: boolean[]
): void => {
  const isAllValid = validations.every((validation) => validation);

  if (isAllValid) {
    removeClass(BUTTON_NEXT_INPUT, DISABLED);
  } else {
    addClass(BUTTON_NEXT_INPUT, DISABLED);
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
  required = true
): boolean => {
  return validationInputDescription({
    value,
    inputId: DESCRIPTION_INPUT,
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
  required = true
): boolean => {
  return validationInputAddress({
    value,
    inputId: ADDRESS1_INPUT,
    setValid,
    currentValid,
    required,
  });
};

export const generalValidationAddress2 = (
  value: string,
  setValid: (valueValid: boolean) => void,
  currentValid: boolean,
  required = false
): boolean => {
  return validationInputAddress({
    value,
    inputId: ADDRESS2_INPUT,
    setValid,
    currentValid,
    required,
  });
};

export const generalValidationSelectCity = (
  value: string,
  setValid: (valueValid: boolean) => void,
  currentValid: boolean
): boolean => {
  const validation: boolean = validationSelect(value, CITY_INPUT);
  if (validation !== currentValid) {
    setValid(validation);
  }
  return validation;
};

export const generalValidationSelectStateCountry = (
  value: string,
  setValid: (valueValid: boolean) => void,
  currentValid: boolean
): boolean => {
  const validation: boolean = validationSelect(value, STATE_COUNTRY_INPUT);
  if (validation !== currentValid) {
    setValid(validation);
  }
  return validation;
};

export const generalValidationSelectCountry = (
  value: string,
  setValid: (valueValid: boolean) => void,
  currentValid: boolean
): boolean => {
  const validation: boolean = validationSelect(value, COUNTRY_INPUT);
  if (validation !== currentValid) {
    setValid(validation);
  }
  return validation;
};

export const generalValidationPostCode = (
  value: string,
  setValid: (valueValid: boolean) => void,
  currentValid: boolean,
  required = false
): boolean => {
  const valid = validationInput(
    value,
    /^[a-zA-Z0-9]+[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_#()\-.\s]+$/,
    ZIP_CODE_INPUT,
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
  currentValid: boolean
): boolean => {
  const validation: boolean = validationSelect(value, SITE_INPUT);
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
  required = true
): boolean => {
  return validationInputSku({
    value,
    inputId: SKU_INPUT,
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
  required = true
): boolean => {
  return validationPhoto({
    value,
    inputId: PHOTO_CATEGORY_INPUT,
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
  required = false
): boolean => {
  const valid = validationInputArray(
    value,
    /^(?:(?:[a-z][a-z0-9+-.]*):\/\/)?(?:[a-z0-9_-]+(?::[a-z0-9_-]+)*@)?(?:[a-z0-9.-]+|(?:\[[a-f0-9:.]+\]))(?::\d+)?(?:\/[^\s#?]*(?:\?[^\s#?]*)?(?:#[^\s#?]*)?)?$/i,
    GALLERY_IMAGE_INPUT,
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
  currentValid: boolean
): boolean => {
  const valid = validationSelect(newValue, PARENT_ID_INPUT);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};

export const generalValidationStatus = (
  newValue: string,
  setValid: (value: boolean) => void,
  currentValid: boolean
): boolean => {
  const valid = validationSelect(newValue, STATUS_INPUT);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};
