import type { ErrorResponseProps, CustomErrorResponseProps } from '../../../helpers';
import type { UseErrorReturn } from '../../../states';
import type { UseGafpriPagesEntityReturn } from './useGafpriPagesEntity';
import type { UseGafpriAttributesEntityReturn, DocumentIdAttributes, AddressAttributes, EntityAttributes } from './useGafpriAttributesEntity';
export type UseGafpriApiEntityReturnDataCreate = {
    data?: {
        items?: EntityAttributes[] | [] | null;
    };
    success?: boolean;
    name?: string;
    type?: string;
    status?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    photo?: string;
    documentId?: {
        id?: number;
        typeDocumentIdId?: number | null;
        index?: string | undefined;
        digit?: string;
    };
    address?: {
        id?: number;
        type?: string;
        address1?: string;
        address2?: string | undefined;
        city?: string;
        state?: string;
        country?: string;
        postCode?: string | undefined;
    };
};
export type UseGafpriApiEntityReturnDataUpdate = {
    data?: {
        items?: EntityAttributes[] | [] | null;
    };
    success?: boolean;
    documentId?: DocumentIdAttributes[];
    address?: AddressAttributes[];
};
export type UseGafpriApiEntityReturnDataDelete = {
    data?: {
        items?: EntityAttributes[] | [] | null;
    };
    success?: boolean;
    documentId?: {
        id?: number;
    }[];
    address?: {
        id?: number;
    }[];
};
export type UseGafpriApiEntityReturn = {
    actions: {
        addAddress: () => void;
        changeAddress: (id: number) => void;
        newError: (newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps) => void;
        newErrorUpdate: (newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps) => void;
        add: () => void;
        addDocument: () => void;
        deleteAddress: (id: number) => void;
        deleteDocument: (id: number) => void;
        update: () => void;
    };
};
export type UseGafpriApiEntityProps = {
    usePages: UseGafpriPagesEntityReturn;
    useAttributes: UseGafpriAttributesEntityReturn;
    useError: UseErrorReturn;
    token: string | null;
    getAddData?: (data: UseGafpriApiEntityReturnDataCreate) => void;
    getUpdateData?: (data: UseGafpriApiEntityReturnDataCreate | UseGafpriApiEntityReturnDataUpdate | UseGafpriApiEntityReturnDataDelete) => void;
};
export declare const useGafpriApiEntity: ({ usePages, useAttributes, useError, token, getAddData, getUpdateData, }: UseGafpriApiEntityProps) => UseGafpriApiEntityReturn;
