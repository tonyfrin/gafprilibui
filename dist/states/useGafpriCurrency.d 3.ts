import { SingleValue } from 'react-select';
type SelectDefault = {
    value: string;
    label: string;
};
type State = {
    currencyName: string;
    currencySymbol: string;
    currenciesDefault: SelectDefault;
    currenciesOptions: SelectDefault[];
    validationCurrency: boolean;
    buttonCurrency: boolean;
};
type Actions = {
    currencyChange: (newValue: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    validationCurrencyValue: (value: string) => void;
    validationButtonCurrency: (value: boolean) => void;
};
export interface UseCurrency {
    states: State;
    actions: Actions;
}
export declare function useGafpriCurrency(): UseCurrency;
export {};
