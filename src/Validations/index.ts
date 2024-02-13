import {
  validationInput,
  removeClass,
  addClass,
  validationHidden,
} from '../helpers';
import { ALERT } from '../Constans';

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

export { generalValidationDescription } from './generalValidationDescription';
export type { GeneralValidationDescriptionProps } from './generalValidationDescription';
export { generalValidationName } from './generalValidationName';
export type { GeneralValidationNameProps } from './generalValidationName';
export { generalValidationLastName } from './generalValidationLastName';
export type { GeneralValidationLastNameProps } from './generalValidationLastName';
export { generalValidationUserName } from './generalValidationUserName';
export type { GeneralValidationUserNameProps } from './generalValidationUserName';
export { generalValidationPassword } from './generalValidationPassword';
export type { GeneralValidationPasswordProps } from './generalValidationPassword';
export { generalValidationSinglePassword } from './generalValidationSinglePassword';
export type { GeneralValidationSinglePasswordProps } from './generalValidationSinglePassword';
export { generalValidationButtonNext } from './generalValidationButtonNext';
export type { GeneralValidationButtonNextProps } from './generalValidationButtonNext';
export { generalValidationAddress1 } from './generalValidationAddress1';
export type { GeneralValidationAddress1Props } from './generalValidationAddress1';
export { generalValidationAddress2 } from './generalValidationAddress2';
export type { GeneralValidationAddress2Props } from './generalValidationAddress2';
export { generalValidationAddressType } from './generalValidationAddressType';
export type { GeneralValidationAddressTypeProps } from './generalValidationAddressType';
export { generalValidationSelectCity } from './generalValidationSelectCity';
export type { GeneralValidationSelectCityProps } from './generalValidationSelectCity';
export { generalValidationSelectStateCountry } from './generalValidationSelectStateCountry';
export type { GeneralValidationSelectStateCountryProps } from './generalValidationSelectStateCountry';
export { generalValidationSelectCountry } from './generalValidationSelectCountry';
export type { GeneralValidationSelectCountryProps } from './generalValidationSelectCountry';
export { generalValidationPostCode } from './generalValidationPostCode';
export type { GeneralValidationPostCodeProps } from './generalValidationPostCode';
export { generalValidationSelectSite } from './generalValidationSelectSite';
export type { GeneralValidationSelectSiteProps } from './generalValidationSelectSite';
export { generalValidationSku } from './generalValidationSku';
export type { GeneralValidationSkuProps } from './generalValidationSku';
export { generalValidationPhotoCategory } from './generalValidationPhotoCategory';
export type { GeneralValidationPhotoCategoryProps } from './generalValidationPhotoCategory';
export { generalValidationPhotoEntity } from './generalValidationPhotoEntity';
export type { GeneralValidationPhotoEntityProps } from './generalValidationPhotoEntity';
export { generalValidationPhotoDocumentId } from './generalValidationPhotoDocumentId';
export type { GeneralValidationPhotoDocumentIdProps } from './generalValidationPhotoDocumentId';
export { generalValidationGalleryImage } from './generalValidationGalleryImage';
export type { GeneralValidationGalleryImageProps } from './generalValidationGalleryImage';
export { generalValidationParentId } from './generalValidationParentId';
export type { GeneralValidationParentIdProps } from './generalValidationParentId';
export { generalValidationStatus } from './generalValidationStatus';
export type { GeneralValidationStatusProps } from './generalValidationStatus';
export { generalValidationCurrenciesSymbol } from './generalValidationCurrenciesSymbol';
export type { GeneralValidationCurrenciesSymbolProps } from './generalValidationCurrenciesSymbol';
export { generalValidationTypeDocumentIdId } from './generalValidationTypeDocumentIdId';
export type { GeneralValidationTypeDocumentIdIdProps } from './generalValidationTypeDocumentIdId';
export { generalValidationTypeDocumentIdIndex } from './generalValidationTypeDocumentIdIndex';
export type { GeneralValidationTypeDocumentIdIndexProps } from './generalValidationTypeDocumentIdIndex';
export { generalValidationTypeDocumentIdDigit } from './generalValidationTypeDocumentIdDigit';
export type { GeneralValidationTypeDocumentIdDigitProps } from './generalValidationTypeDocumentIdDigit';
export { generalValidationEmail } from './generalValidationEmail';
export type { GeneralValidationEmailProps } from './generalValidationEmail';
export { generalValidationPhone } from './generalValidationPhone';
export type { GeneralValidationPhoneProps } from './generalValidationPhone';
export { generalValidationType } from './generalValidationType';
export type { GeneralValidationTypeProps } from './generalValidationType';
export { generalValidationSelectCurrencies } from './generalValidationSelectCurrencies';
export type { GeneralValidationSelectCurrenciesProps } from './generalValidationSelectCurrencies';
export { generalValidationSelectCurrenciesLocations } from './generalValidationSelectCurrenciesLocations';
export type { GeneralValidationSelectCurrenciesLocationsProps } from './generalValidationSelectCurrenciesLocations';
export { generalValidationSelectCurrenciesSeparator } from './generalValidationSelectCurrenciesSeparator';
export type { GeneralValidationSelectCurrenciesSeparatorProps } from './generalValidationSelectCurrenciesSeparator';
export { generalValidationSelectCurrenciesDecimalNumbers } from './generalValidationSelectCurrenciesDecimalNumbers';
export type { GeneralValidationSelectCurrenciesDecimalNumbersProps } from './generalValidationSelectCurrenciesDecimalNumbers';
export { generalValidationSelectTaxes } from './generalValidationSelectTaxes';
export type { GeneralValidationSelectTaxesProps } from './generalValidationSelectTaxes';
export { generalValidationWebSite } from './generalValidationWebSite';
export type { GeneralValidationWebSiteProps } from './generalValidationWebSite';
export { generalValidationAreaCode } from './generalValidationAreaCode';
export type { GeneralValidationAreaCodeProps } from './generalValidationAreaCode';
export { generalValidationRoles } from './generalValidationRoles';
export type { GeneralValidationRolesProps } from './generalValidationRoles';
export { generalValidationPhotoUsers } from './generalValidationPhotoUsers';
export type { GeneralValidationPhotoUsersProps } from './generalValidationPhotoUsers';
