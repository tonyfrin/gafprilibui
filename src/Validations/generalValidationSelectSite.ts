import { SITE_INPUT } from '../Constans';
import { validationSelect } from '../helpers';

export type GeneralValidationSelectSiteProps = {
  value: string;
  setValid: (valueValid: boolean) => void;
  currentValid: boolean;
  inputId?: string;
};

export const generalValidationSelectSite = ({
  value,
  setValid,
  currentValid,
  inputId = '',
}: GeneralValidationSelectSiteProps): boolean => {
  const validation: boolean = validationSelect(
    value,
    `${SITE_INPUT}${inputId}`
  );
  if (validation !== currentValid) {
    setValid(validation);
  }
  return validation;
};
