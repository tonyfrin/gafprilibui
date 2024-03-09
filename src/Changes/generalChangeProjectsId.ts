export type GeneralChangeProjectsIdProps = {
  value: number;
  validation?: (valueValid: number) => boolean;
  setValue: (transformedValue: number) => void;
};

export const generalChangeProjectsId = ({
  value,
  validation,
  setValue,
}: GeneralChangeProjectsIdProps): void => {
  const defaultValidation = (): boolean => {
    return true;
  };

  const newValidations = validation || defaultValidation;

  const valid = newValidations(value);
  if (valid) {
    setValue(value);
  }
};
