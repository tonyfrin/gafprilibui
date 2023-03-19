import { SingleValue } from 'react-select';
type State = {
    isConfig: boolean;
    isSites: boolean;
    isTypeDucument: boolean;
    isRoles: boolean;
    isUser: boolean;
    isCategory: boolean;
    isProjects: boolean;
    currencyName: string;
    currencySymbol: string;
    currenciesDefault: CurrencyDefault;
    currenciesOptions: CurrencyDefault[];
    validationCurrency: boolean;
    buttonCurrency: boolean;
};
type Actions = {
    onConfig: () => void;
    nextCurrency: () => void;
    currencyChange: (newValue: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    validationCurrencyValue: (value: string) => void;
    validationButtonCurrency: (value: boolean) => void;
};
type CurrencyDefault = {
    value: string;
    label: string;
};
export interface GafpriConfig {
    states: State;
    actions: Actions;
}
declare function useGafpriConfig(): {
    states: {
        isConfig: boolean;
        isSites: boolean;
        isTypeDucument: boolean;
        isRoles: boolean;
        isUser: boolean;
        isCategory: boolean;
        isProjects: boolean;
        currencyName: string;
        currencySymbol: string;
        currenciesDefault: CurrencyDefault;
        currenciesOptions: CurrencyDefault[];
        validationCurrency: boolean;
        buttonCurrency: boolean;
    };
    actions: {
        onConfig: () => void;
        nextCurrency: () => void;
        currencyChange: (newValue: SingleValue<{
            value: string;
        }>) => void;
        validationCurrencyValue: (value: string) => void;
        validationButtonCurrency: (value: boolean) => void;
    };
};
export { useGafpriConfig };
