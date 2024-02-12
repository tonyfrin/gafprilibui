import DOMPurify from 'dompurify';
import { changeInputText } from '../helpers';

export const generalChangeNote = (
    value: string,
    validation: (valueValid: string) => boolean,
    setValue: (transformedValue: string) => void
): void => {
  const valueClean = DOMPurify.sanitize(value);
  changeInputText({
    value: valueClean,
    validation,
    setValue,
  });
};
