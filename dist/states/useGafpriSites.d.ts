import { SingleValue } from 'react-select';
import type { SelectDefault } from '../helpers';
import type { UseCurrenciesReturn } from './useGafpriCurrencies';
import type { UseErrorReturn } from './useGafpriError';
type DeletedSite = {
    itemId: number;
};
export interface SitesAttributes {
    id: number;
    name: string;
    documentIndex: string;
    documentNumber: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    postCode: string;
    country: string;
    email: string;
    phone: string;
    currenciesId: number;
    currencyLocation: string;
    thousandsSeparator: string;
    decimalSeparator: string;
    decimalNumbers: number;
    taxes: boolean;
    host: string;
    createdAt: Date;
    modifiedAt: Date;
}
interface SitesData {
    data: {
        items: SitesAttributes[] | [] | null;
    };
}
export type UseSitesReturn = {
    states: {
        isReady: boolean;
        isFetching: boolean;
        isInit: boolean;
        isAdd: boolean;
        isUpdate: boolean;
        name: string;
        nameValid: boolean;
        documentIndex: string;
        documentIndexValid: boolean;
        documentIndexDefault: SelectDefault;
        documentIndexOptions: SelectDefault[];
        documentNumber: string;
        documentNumberValid: boolean;
        address1: string;
        address1Valid: boolean;
        address2: string;
        address2Valid: boolean;
        city: string;
        cityValid: boolean;
        cityDefault: SelectDefault;
        cityOptions: SelectDefault[];
        state: string;
        stateCountryValid: boolean;
        stateCountryDefault: SelectDefault;
        stateCountryOptions: SelectDefault[];
        country: string;
        countryValid: boolean;
        countryDefault: SelectDefault;
        countryOptions: SelectDefault[];
        postCode: string;
        postCodeValid: boolean;
        email: string;
        emailValid: boolean;
        phone: string;
        phoneValid: boolean;
        currenciesId: number;
        currenciesIdValid: boolean;
        currenciesIdDefault: SelectDefault;
        currenciesIdOptions: SelectDefault[];
        currencyLocation: string;
        currencyLocationValid: boolean;
        currencyLocationDefault: SelectDefault;
        currencyLocationOptions: SelectDefault[];
        thousandsSeparator: string;
        decimalSeparator: string;
        separatorValid: boolean;
        separatorDefault: SelectDefault;
        separatorOptions: SelectDefault[];
        decimalNumbers: number;
        decimalNumbersValid: boolean;
        decimalNumbersDefault: SelectDefault;
        decimalNumbersOptions: SelectDefault[];
        taxes: boolean;
        taxesValid: boolean;
        taxesDefault: SelectDefault;
        taxesOptions: SelectDefault[];
        host: string;
        hostValid: boolean;
        sites: SitesData;
        error: string[];
        orderList: 'asc' | 'desc';
        searchTerm: string;
        currentPage: number;
        itemsPerPage: number;
        siteId: number;
    };
    actions: {
        onFetching: () => void;
        onInit: () => void;
        returnInit: () => void;
        onAdd: () => void;
        goAdd: () => void;
        onUpdate: () => void;
        changeName: (name: string) => void;
        changeDocumentIndex: (options: SingleValue<{
            value: string;
            label: string;
        }>) => void;
        changeDocumentNumber: (documentNumber: string) => void;
        changeAddress1: (address1: string) => void;
        changeAddress2: (address2: string) => void;
        changeCity: (options: SingleValue<{
            value: string;
            label: string;
        }>) => void;
        changeCityOptions: () => void;
        changeStateCountry: (options: SingleValue<{
            value: string;
            label: string;
        }>) => void;
        setStateCountryDefault: (options: SelectDefault) => void;
        setStateCountry: (value: string) => void;
        changeStateCountryOptions: () => void;
        changeCountry: (options: SingleValue<{
            value: string;
            label: string;
        }>) => void;
        setCountryDefault: (options: SelectDefault) => void;
        setCountry: (value: string) => void;
        changePostCode: (postCode: string) => void;
        changeEmail: (email: string) => void;
        changePhone: (phone: string) => void;
        changeCurrenciesId: (options: SingleValue<{
            value: string;
            label: string;
        }>) => void;
        changeCurrencyLocation: (options: SingleValue<{
            value: string;
            label: string;
        }>) => void;
        changeSeparator: (options: SingleValue<{
            value: string;
            label: string;
        }>) => void;
        changeDecimalNumbers: (options: SingleValue<{
            value: string;
            label: string;
        }>) => void;
        changeTaxes: (options: SingleValue<{
            value: string;
            label: string;
        }>) => void;
        changeHost: (host: string) => void;
        validationButtonNext: () => void;
        setIsReady: (value: boolean) => void;
        update: () => void;
        offSites: () => void;
        add: () => void;
        getById: (id: number) => SitesAttributes | null;
        getMainSite: () => SitesAttributes | null;
        goUpdate: (id: number) => void;
        sortByName: (items: SitesAttributes[] | null, order: 'asc' | 'desc') => SitesAttributes[] | null;
        setOrderList: (order: 'asc' | 'desc') => void;
        setSearchTerm: (value: string) => void;
        filterByName: (search: string) => SitesAttributes[] | null;
        setCurrentPage: (value: number) => void;
        getPaginated: (items: SitesAttributes[] | null, page: number, itemsPerPage: number) => SitesAttributes[] | null;
        deleteSites: (id: number) => void;
        handleNewSite: (newItem: SitesAttributes) => void;
        handleDeletedSite: (value: DeletedSite) => void;
        handleUpdatedSite: (itemUpdate: SitesAttributes) => void;
        validationName: (value: string) => boolean;
        validationDocumentIndex: (value: string) => boolean;
        validationDocumentNumber: (value: string) => boolean;
        validationAddress1: (value: string) => boolean;
        validationAddress2: (value: string) => boolean;
        validationCity: (value: string) => boolean;
        validationStateCountry: (value: string) => boolean;
        validationCountry: (value: string) => boolean;
        validationPostCode: (value: string) => boolean;
        validationEmail: (value: string) => boolean;
        validationPhone: (value: string) => boolean;
        validationCurrenciesId: (value: string) => boolean;
        validationCurrencyLocation: (value: string) => boolean;
        validationSeparator: (value: string) => boolean;
        validationDecimalNumbers: (value: string) => boolean;
        validationTaxes: (value: string) => boolean;
        validationHost: (value: string) => boolean;
    };
};
export type UseSitesProps = {
    useCurrencies: UseCurrenciesReturn;
    token: string | null;
    useError: UseErrorReturn;
};
export declare const useGafpriSites: ({ useCurrencies, token, useError, }: UseSitesProps) => UseSitesReturn;
export {};
