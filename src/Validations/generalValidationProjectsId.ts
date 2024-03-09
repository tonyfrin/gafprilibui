import { PROJECTS_ID_INPUT } from '../constants';
import { validationInputNumbersWithValue } from './index';

export type GeneralValidationProjectsIdProps = {
  value: number | null;
  setValid: (value: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationProjectsId = ({
  value,
  setValid,
  currentValid,
  required = true,
  inputId = '',
}: GeneralValidationProjectsIdProps): boolean => {
  const valid = value !== null ? value : 0;
  return validationInputNumbersWithValue({
    value: valid,
    inputId: `${PROJECTS_ID_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
