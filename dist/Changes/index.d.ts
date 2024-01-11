import { ChangeEvent } from 'react';
import { SingleValue } from 'react-select';
import { SelectDefault } from '../helpers';
export declare const generalChangeUserName: (value: string, validation: (valueValid: string) => boolean, setValue: (transformedValue: string) => void) => void;
export declare const generalChangeName: (value: string, validation: (valueValid: string) => boolean, setValue: (transformedValue: string) => void) => void;
export declare const generalChangeLastName: (value: string, validation: (valueValid: string) => boolean, setValue: (transformedValue: string) => void) => void;
export declare const generalChangePassword: (value: string, validation: (valueValid: string) => boolean, setValue: (transformedValue: string) => void) => void;
export declare const generalChangeDescription: (value: string, validation: (valueValid: string) => boolean, setValue: (transformedValue: string) => void) => void;
export declare const generalChangeAddress: (value: string, validation: (valueValid: string) => boolean, setValue: (transformedValue: string) => void) => void;
export declare const generalChangeCityStateCountry: (options: SingleValue<{
    value: string;
    label: string;
}>, validation: (valueValid: string) => boolean, setDefault: (valueDefault: SelectDefault) => void, setValue: (transformedValue: string) => void, setIsReset: (valueReset: boolean) => void) => void;
export declare const generalChangeCityOptions: (country: string, state: string, setCityDefault: (valueDefault: SelectDefault) => void, setCity: (transformedValue: string) => void, setCityOptions: (valueOptions: SelectDefault[]) => void, isReset: boolean) => void;
export declare const generalChangeStateCountryOptions: (country: string, setStateCountryDefault: (valueDefault: SelectDefault) => void, setStateCountry: (transformedValue: string) => void, setStateCountryOptions: (valueOptions: SelectDefault[]) => void, isReset: boolean) => void;
export declare const generalChangePostCode: (value: string, validation: (valueValid: string) => boolean, setValue: (transformedValue: string) => void) => void;
export declare const generalChangeSite: (options: SingleValue<{
    value: string;
    label: string;
}>, validation: (valueValid: string) => boolean, setDefault: (valueDefault: SelectDefault) => void, setValue: (transformedValue: number) => void) => void;
export declare const generalChangeParentId: (options: SingleValue<{
    value: string;
    label: string;
}>, validation: (valueValid: string) => boolean, setDefault: (valueDefault: SelectDefault) => void, setValue: (transformedValue: number) => void) => void;
export declare const generalChangePhoto: (e: ChangeEvent<HTMLInputElement>, changeError: (valueError: string[]) => void, setSubmitting: (valueSubmitting: boolean) => void, setPhoto: (valuePhoto: string) => void) => Promise<void>;
export declare const generalChangeStatus: (options: SingleValue<{
    value: string;
    label: string;
}>, validation: (valueValid: string) => boolean, setDefault: (valueDefault: SelectDefault) => void, setValue: (transformedValue: string) => void) => void;
export declare const generalChangeCurrenciesSymbol: (value: string, validation: (valueValid: string) => boolean, setValue: (transformedValue: string) => void) => void;
