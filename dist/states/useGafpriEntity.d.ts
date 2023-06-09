import { ChangeEvent } from 'react';
import { SingleValue } from 'react-select';
import type { ErrorResponseProps, CustomErrorResponseProps, SelectDefault } from '../helpers';
import type { UseTypeDocumentIdReturn } from './useGafpriTypeDocumentId';
interface typeDocumentId {
    id: number;
    country: string;
    name: string;
}
export interface DocumentIdAttributes {
    id?: number;
    index?: string;
    digit: string;
    photo?: string;
    entityId?: number;
    typeDocumentIdId: number | null;
    typeDocumentId?: typeDocumentId;
}
export interface AddressAttributes {
    id?: number;
    type: string;
    address1: string;
    address2?: string;
    city: string;
    state: string;
    postCode?: string;
    country: string;
    entityId?: number;
}
export interface EntityAttributes {
    id: number;
    login: string;
    email?: string;
    phone?: string;
    type: string;
    name: string;
    lastName?: string;
    status: string;
    photo?: string;
    createdAt: Date;
    modifiedAt: Date;
    address: AddressAttributes[];
    documentId: DocumentIdAttributes[];
}
interface EntityData {
    data: {
        items: EntityAttributes[] | [] | null;
    };
}
export type UseEntityReturn = {
    states: {
        isReady: boolean;
        isFetching: boolean;
        isInit: boolean;
        isAdd: boolean;
        isUpdate: boolean;
        isView: boolean;
        isAddAddress: boolean;
        isAddDocument: boolean;
        formType: 'personal' | 'legal';
        name: string;
        nameValid: boolean;
        lastName: string;
        lastNameValid: boolean;
        typeDocumentIdId: number | null;
        typeDocumentIdIdValid: boolean;
        typeDocumentIdIdDefault: SelectDefault;
        typeDocumentIdIdOptions: SelectDefault[];
        index: string;
        indexValid: boolean;
        indexDefault: SelectDefault;
        indexOptions: SelectDefault[];
        digit: string;
        digitValid: boolean;
        addressType: string;
        addressTypeValid: boolean;
        addressTypeDefault: SelectDefault;
        addressTypeOptions: SelectDefault[];
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
        type: string;
        typeValid: boolean;
        typeDefault: SelectDefault;
        typeOptions: SelectDefault[];
        photo: string;
        photoValid: boolean;
        submitting: boolean;
        documentPhoto: string;
        documentPhotoValid: boolean;
        documentSubmitting: boolean;
        status: string;
        statusValid: boolean;
        statusDefault: SelectDefault;
        statusOptions: SelectDefault[];
        documentId: DocumentIdAttributes[];
        address: AddressAttributes[];
        addressValid: boolean;
        entities: EntityData;
        error: string[];
        entityId: number;
        orderList: 'asc' | 'desc';
        searchTerm: string;
        currentPage: number;
        documentCurrentPage: number;
        searchBy: string;
        searchByDefault: SelectDefault;
        searchByOptions: SelectDefault[];
        itemsPerPage: number;
    };
    actions: {
        onFetching: () => void;
        onInit: () => void;
        onAdd: () => void;
        onUpdate: () => void;
        onIsReady: () => void;
        notReady: () => void;
        goUpdate: (id: number) => void;
        goAddPersonal: () => void;
        goAddLegal: () => void;
        goView: (id: number) => void;
        onAddAddress: () => void;
        onAddDocument: () => void;
        validationButtonNext: () => void;
        validationButtonNextAddress: () => void;
        validationButtonNextDocument: () => void;
        validationButtonNextUpdate: () => void;
        validationName: (value: string) => boolean;
        validationLastName: (value: string) => boolean;
        validationTypeDocumentIdId: (value: string) => boolean;
        validationIndex: (value: string) => boolean;
        validationDigit: (value: string) => boolean;
        validationAddressType: (value: string) => boolean;
        validationAddress1: (value: string) => boolean;
        validationAddress2: (value: string) => boolean;
        validationCity: (value: string) => boolean;
        validationStateCountry: (value: string) => boolean;
        validationCountry: (value: string) => boolean;
        validationPostCode: (value: string) => boolean;
        validationEmail: (value: string) => boolean;
        validationPhone: (value: string) => boolean;
        validationType: (value: string) => boolean;
        validationPhoto: (value: string) => boolean;
        validationDocumentPhoto: (value: string) => boolean;
        validationStatus: (value: string) => boolean;
        changeName: (value: string) => void;
        changeLastName: (value: string) => void;
        changeTypeDocumentIdId: (options: SingleValue<{
            value: string;
            label: string;
        }>) => void;
        changeIndex: (options: SingleValue<{
            value: string;
            label: string;
        }>) => void;
        changeDigit: (newDigit: string) => void;
        changeAddressType: (options: SingleValue<{
            value: string;
            label: string;
        }>) => void;
        changeAddress1: (value: string) => void;
        changeAddress2: (value: string) => void;
        changeCity: (options: SingleValue<{
            value: string;
            label: string;
        }>) => void;
        changeCityOptions: () => void;
        changeStateCountry: (options: SingleValue<{
            value: string;
            label: string;
        }>) => void;
        changeStateCountryOptions: () => void;
        changeCountry: (options: SingleValue<{
            value: string;
            label: string;
        }>) => void;
        changePostCode: (newPostCode: string) => void;
        changeEmail: (inputValue: string) => void;
        changePhone: (newPhone: string) => void;
        changeType: (options: SingleValue<{
            value: string;
            label: string;
        }>) => void;
        changeError: (value: string[]) => void;
        changePhoto: (e: ChangeEvent<HTMLInputElement>) => void;
        changeDocumentPhoto: (e: ChangeEvent<HTMLInputElement>) => void;
        setPhoto: (value: string) => void;
        setDocumentPhoto: (value: string) => void;
        setSubmitting: (value: boolean) => void;
        setDocumentSubmitting: (value: boolean) => void;
        changeStatus: (options: SingleValue<{
            value: string;
            label: string;
        }>) => void;
        setAddress: (value: AddressAttributes[]) => void;
        setDocumentId: (value: DocumentIdAttributes[]) => void;
        addAddress: () => void;
        changeAddress: (id: number) => void;
        infoReset: () => void;
        onSites: (newData: EntityData) => void;
        resetData: () => void;
        handleNewEntity: (newItem: EntityAttributes) => void;
        handleUpdatedEntity: (itemUpdate: EntityAttributes) => void;
        returnInit: () => void;
        newError: (newError: unknown | ErrorResponseProps | CustomErrorResponseProps) => void;
        newErrorUpdate: (newError: unknown | ErrorResponseProps | CustomErrorResponseProps) => void;
        add: () => void;
        deleteAddress: (id: number) => void;
        deleteDocument: (id: number) => void;
        getById: (id: number) => EntityAttributes | null;
        update: () => void;
        addDocument: () => void;
        sortByName: (items: EntityAttributes[] | null, order: 'asc' | 'desc') => EntityAttributes[] | null;
        filterByName: (search: string) => EntityAttributes[] | null;
        getPaginated: (items: EntityAttributes[] | AddressAttributes[] | DocumentIdAttributes[] | null, page: number, itemsPerPage: number) => EntityAttributes[] | AddressAttributes[] | DocumentIdAttributes[] | null;
        sortByProperty: (items: EntityAttributes[] | null, searchBy: 'name' | 'lastName' | 'email' | 'phone' | 'digit', order: 'asc' | 'desc') => EntityAttributes[] | null;
        filterBySearch: (search: string, searchBy: 'name' | 'lastName' | 'email' | 'phone' | 'digit') => EntityAttributes[] | null;
        changeSearchBy: (options: SingleValue<{
            value: string;
            label: string;
        }>) => void;
        setOrderList: (value: 'asc' | 'desc') => void;
        setSearchTerm: (value: string) => void;
        setCurrentPage: (value: number) => void;
        setDocumentCurrentPage: (value: number) => void;
    };
};
export type UseEntityProps = {
    useTypeDocumentId: UseTypeDocumentIdReturn;
};
export declare const useGafpriEntity: ({ useTypeDocumentId, }: UseEntityProps) => UseEntityReturn;
export {};
