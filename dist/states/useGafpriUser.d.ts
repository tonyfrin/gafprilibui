import { ChangeEvent } from 'react';
import { SingleValue } from 'react-select';
import type { SelectDefault, RoleArray } from '../helpers';
import type { UseRolesReturn } from './useGafpriRoles';
import type { UseSitesReturn } from './useGafpriSites';
interface Role {
    [key: number]: string;
}
export interface UserAttributes {
    id: number;
    login: string;
    email: string;
    phone: string;
    role: Role;
    name: string;
    lastName?: string;
    photo?: string;
    isActive: boolean;
    emailConfirmation: boolean;
    phoneConfirmation: boolean;
    createdAt: Date;
    modifiedAt: Date;
}
interface UserData {
    data: {
        items: UserAttributes[] | [] | null;
    };
}
export type UseUserReturn = {
    states: {
        isReady: boolean;
        isFetching: boolean;
        isInit: boolean;
        isAdd: boolean;
        isView: boolean;
        isUpdate: boolean;
        name: string;
        nameValid: boolean;
        lastName: string;
        lastNameValid: boolean;
        email: string;
        emailValid: boolean;
        phoneNumber: string;
        phoneNumberValid: boolean;
        role: string;
        roleValid: boolean;
        roleDefault: SelectDefault;
        roleOptions: SelectDefault[];
        site: string;
        siteValid: boolean;
        siteDefault: SelectDefault;
        siteOptions: SelectDefault[];
        photo: string;
        photoValid: boolean;
        submitting: boolean;
        areaCode: string;
        areaCodeValid: boolean;
        areaCodeDefault: SelectDefault;
        areaCodeOptions: SelectDefault[];
        isActive: boolean;
        isActiveValid: boolean;
        isActiveDefault: SelectDefault;
        isActiveOptions: SelectDefault[];
        users: UserData;
        error: string[];
        userId: number;
        orderList: 'asc' | 'desc';
        searchTerm: string;
        currentPage: number;
        itemsPerPage: number;
        searchBy: string;
        searchByDefault: SelectDefault;
        searchByOptions: SelectDefault[];
    };
    actions: {
        onFetching: () => void;
        onInit: () => void;
        onAdd: () => void;
        onUpdate: () => void;
        goView: (id: number) => void;
        onIsReady: () => void;
        notReady: () => void;
        goUpdate: (id: number) => void;
        goAdd: () => void;
        validationButtonNext: () => void;
        validationName: (value: string) => boolean;
        validationLastName: (value: string) => boolean;
        validationEmail: (value: string) => boolean;
        validationPhoneNumber: (value: string) => boolean;
        validationAreaCode: (value: string) => boolean;
        validationRole: (value: string) => boolean;
        validationSite: (value: string) => boolean;
        validationPhoto: (value: string) => boolean;
        validationIsActive: (value: string) => boolean;
        changeName: (value: string) => void;
        changeLastName: (value: string) => void;
        changeEmail: (inputValue: string) => void;
        changePhoneNumber: (newPhone: string) => void;
        changeAreaCode: (options: SingleValue<{
            value: string;
            label: string;
        }>) => void;
        changeRole: (options: SingleValue<{
            value: string;
            label: string;
        }>) => void;
        changeSite: (options: SingleValue<{
            value: string;
            label: string;
        }>) => void;
        changeError: (value: string[]) => void;
        changePhoto: (e: ChangeEvent<HTMLInputElement>) => void;
        setSubmitting: (value: boolean) => void;
        setPhoto: (value: string) => void;
        changeIsActive: (options: SingleValue<{
            value: string;
            label: string;
        }>) => void;
        infoReset: () => void;
        resetData: () => void;
        handleNewUsers: (newItem: UserAttributes) => void;
        handleUpdatedUsers: (itemUpdate: UserAttributes) => void;
        returnInit: () => void;
        add: () => void;
        getById: (id: number) => UserAttributes | null;
        update: () => void;
        sortByName: (items: UserAttributes[] | null, order: 'asc' | 'desc') => UserAttributes[] | null;
        filterByName: (search: string) => UserAttributes[] | null;
        getPaginated: (items: UserAttributes[] | null, page: number, itemsPerPage: number) => UserAttributes[] | null;
        setOrderList: (value: 'asc' | 'desc') => void;
        setSearchTerm: (value: string) => void;
        setCurrentPage: (value: number) => void;
        changeSearchBy: (options: SingleValue<{
            value: string;
            label: string;
        }>) => void;
        sortByProperty: (items: UserAttributes[] | null, searchBy: 'name' | 'email' | 'phone' | 'login', order: 'asc' | 'desc') => UserAttributes[] | null;
        filterBySearch: (search: string, searchBy: 'name' | 'email' | 'phone' | 'login') => UserAttributes[] | null;
        filterRoleByName: (roleArray: RoleArray[], search: string) => RoleArray[] | null;
        sortRoleByName: (items: RoleArray[] | null, order: 'asc' | 'desc') => RoleArray[] | null;
        getRolePaginated: (items: RoleArray[] | null, page: number, itemsPerPage: number) => RoleArray[] | null;
    };
};
export type UseUserProps = {
    useRoles: UseRolesReturn;
    useSites: UseSitesReturn;
};
export declare const useGafpriUsers: ({ useRoles, useSites, }: UseUserProps) => UseUserReturn;
export {};
