import { EXPENSES_TYPE_INPUT } from '../constants';
import { validationInputNumbersWithValue } from './index';

export type GeneralValidationExpensesTypeIdProps = {
  value: number | null;
  setValid: (value: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationExpensesTypeId = ({
  value,
  setValid,
  currentValid,
  required = true,
  inputId = '',
}: GeneralValidationExpensesTypeIdProps): boolean => {
  const valid = value !== null ? value : 0;
  return validationInputNumbersWithValue({
    value: valid,
    inputId: `${EXPENSES_TYPE_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
