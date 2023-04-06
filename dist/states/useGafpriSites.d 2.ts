import { SingleValue } from 'react-select';
type State = {
    siteName: string;
    validSiteName: boolean;
    siteNameDefault: string;
    siteDocumentIndex: string;
    validSiteDocumentIndex: boolean;
    siteDocumentIndexOptions: SelectDefault[];
    siteDocumentIndexDefault: SelectDefault;
};
type Actions = {
    changeSiteName: (value: string) => void;
    validationSiteName: (value: string) => void;
    changeSiteDocumentIndex: (newValue: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    validationSiteDocumentIndex: (value: string) => void;
};
type SelectDefault = {
    value: string;
    label: string;
};
export type UseSites = {
    states: State;
    actions: Actions;
};
declare function useGafpriSites(): UseSites;
export { useGafpriSites };
