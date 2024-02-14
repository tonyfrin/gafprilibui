import { SingleValue } from 'react-select';
import { SelectDefault, changeSelect } from '../helpers';

export type GeneralChangeParentIdProps = {
  options: SingleValue<{ value: string; label: string }>;
  validation?: (valueValid: string) => boolean;
  setDefault: (valueDefault: SelectDefault) => void;
  setValue: (transformedValue: number) => void;
};

export const generalChangeParentId = ({
  options,
  validation,
  setDefault,
  setValue,
}: GeneralChangeParentIdProps): void => {
  let value: number | null = null;
  if (options && options.value !== 'null') {
    value = parseInt(options.value, 10);
  }
  const label = options?.label || 'Sin categoría padre';
  const newOptions = { value, label };

  const defaultValidation = (): boolean => {
    return true;
  };

  changeSelect({
    newValue: newOptions,
    validation: validation || defaultValidation,
    setDefault,
    setValue,
  });
};
