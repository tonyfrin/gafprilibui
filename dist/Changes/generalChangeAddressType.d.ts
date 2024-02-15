import { SingleValue } from 'react-select';
import { SelectDefault } from '../helpers';
export type GeneralChangeAddressTypeProps = {
    options: SingleValue<{
        value: string;
        label: string;
    }>;
    validation?: (valueValid: string) => boolean;
    setDefault: (valueDefault: SelectDefault) => void;
    setValue: (transformedValue: string) => void;
};
export declare const generalChangeAddressType: ({ options, validation, setDefault, setValue, }: GeneralChangeAddressTypeProps) => void;