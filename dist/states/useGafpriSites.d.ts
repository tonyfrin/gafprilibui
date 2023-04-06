import { SingleValue } from 'react-select';
type SelectDefault = {
    value: string;
    label: string;
};
type State = {
    siteName: string;
    validSiteName: boolean;
    siteDocumentIndex: string;
    validSiteDocumentIndex: boolean;
    siteDocumentIndexOptions: SelectDefault[];
    siteDocumentIndexDefault: SelectDefault;
    document: string;
    validDocument: boolean;
    address1: string;
    validAddress1: boolean;
    address2: string;
    validAddress2: boolean;
    city: string;
    validCity: boolean;
    cityOptions: SelectDefault[];
    cityDefault: SelectDefault;
    stateCountry: string;
    validStateCountry: boolean;
    stateCountryOptions: SelectDefault[];
    stateCountryDefault: SelectDefault;
    country: string;
    validCountry: boolean;
    countryOptions: SelectDefault[];
    countryDefault: SelectDefault;
    postcode: string;
    validPostcode: boolean;
    phone: string;
    validPhone: boolean;
    email: string;
    validEmail: boolean;
};
type Actions = {
    changeSiteName: (value: string) => void;
    validationSiteName: (value: string) => void;
    changeSiteDocumentIndex: (newValue: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    validationSiteDocumentIndex: (value: string) => void;
    changeDocument: (value: string) => void;
    validationDocument: (value: string) => void;
    changeAddres1: (value: string) => void;
    validationAddress1: (value: string) => void;
    changeAddres2: (value: string) => void;
    validationAddress2: (value: string) => void;
    changeCity: (newValue: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    validationCity: (value: string) => void;
    changeStateCountry: (newValue: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    validationStateCountry: (value: string) => void;
    changeCountry: (newValue: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    validationCountry: (value: string) => void;
    changePostcode: (value: string) => void;
    validationPostcode: (value: string) => void;
    changePhone: (value: string) => void;
    validationPhone: (value: string) => void;
    changeEmail: (value: string) => void;
    validationEmail: (value: string) => void;
    validationButtonNext: () => void;
};
export type UseSites = {
    states: State;
    actions: Actions;
};
export declare function useGafpriSites(): UseSites;
export {};
