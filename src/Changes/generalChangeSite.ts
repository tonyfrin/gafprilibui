import { SingleValue } from 'react-select';
import { SelectDefault, changeSelect } from '../helpers';

export type GeneralChangeSiteProps = {
  options: SingleValue<{ value: string; label: string }>;
  validation?: (valueValid: string) => boolean;
  setDefault: (valueDefault: SelectDefault) => void;
  setValue: (transformedValue: string) => void;
};

export const generalChangeSite = ({
  options,
  validation,
  setDefault,
  setValue,
}: GeneralChangeSiteProps): void => {
  const defaultValidation = (): boolean => {
    return true;
  };

  changeSelect({
    newValue: options,
    validation: validation || defaultValidation,
    setDefault,
    setValue,
  });
};
