export type GeneralChangeExpensesTypeIdProps = {
  value: number;
  validation?: (valueValid: number) => boolean;
  setValue: (transformedValue: number) => void;
};

export const generalChangeExpensesTypeId = ({
  value,
  validation,
  setValue,
}: GeneralChangeExpensesTypeIdProps): void => {
  const defaultValidation = (): boolean => {
    return true;
  };

  const newValidations = validation || defaultValidation;

  const valid = newValidations(value);
  if (valid) {
    setValue(value);
  }
};
