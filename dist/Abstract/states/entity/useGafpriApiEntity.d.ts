import type { ErrorResponseProps, CustomErrorResponseProps } from '../../../helpers';
import type { UseErrorReturn } from '../../../states';
import type { UseGafpriPagesEntityReturn } from './useGafpriPagesEntity';
import type { UseGafpriAttributesEntityReturn } from './useGafpriAttributesEntity';
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
};
export declare const useGafpriApiEntity: ({ usePages, useAttributes, useError, token, }: UseGafpriApiEntityProps) => UseGafpriApiEntityReturn;
