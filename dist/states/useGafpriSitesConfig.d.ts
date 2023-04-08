import { SingleValue } from 'react-select';
export type SelectDefault = {
    value: string;
    label: string;
};
type State = {
    currency: string;
    currencyValid: boolean;
    currencyOptions: SelectDefault[];
    currencyDefault: SelectDefault;
    currencyLocation: string;
    currencyLocationValid: boolean;
    currencyLocationOptions: SelectDefault[];
    currencyLocationDefault: SelectDefault;
    thousandsSeparator: string;
    decimalSeparator: string;
    separatorValid: boolean;
    separatorOptions: SelectDefault[];
    separatorDefault: SelectDefault;
    decimalNumbers: string;
    decimalNumbersValid: boolean;
    decimalNumbersOptions: SelectDefault[];
    decimalNumbersDefault: SelectDefault;
    taxes: string;
    taxesValid: boolean;
    taxesOptions: SelectDefault[];
    taxesDefault: SelectDefault;
    host: string;
    hostValid: boolean;
};
type Actions = {
    changeCurrency: (newValue: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    validationCurrency: (value: string) => void;
    changeCurrencyLocation: (newValue: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    validationCurrencyLocation: (value: string) => void;
    changeSeparator: (newValue: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    validationSeparator: (value: string) => void;
    changeDecimalNumbers: (newValue: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    validationDecimalNumbers: (value: string) => void;
    changeTaxes: (newValue: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    validationTaxes: (value: string) => void;
    changeHost: (value: string) => void;
    validationHost: (value: string) => void;
    validationButtonNext: () => void;
};
export type UseSitesConfig = {
    states: State;
    actions: Actions;
};
export declare function useGafpriSitesConfig(): UseSitesConfig;
export {};
