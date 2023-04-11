import { SingleValue } from 'react-select';
type SelectDefault = {
    value: string;
    label: string;
};
type State = {
    country: string;
    countryValid: boolean;
    countryOptions: SelectDefault[];
    countryDefault: SelectDefault;
    name: string;
    nameValid: boolean;
};
type Actions = {
    changeCountry: (newValue: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    validationCountry: (value: string) => void;
    changeName: (value: string) => void;
    validationName: (value: string) => void;
    validationButtonNext: () => void;
};
export type UseTypeDocument = {
    states: State;
    actions: Actions;
};
export declare function useGafpriTypeDocument(): UseTypeDocument;
export {};
