export type CreditOpeningAttributes = {
    postsId?: number;
    accountsReceivablePostsId?: number;
    paymentMethodsPostsId?: number;
    entityId?: number;
    authorizedLogin?: string;
    authorizedPassword?: string;
    description?: string;
    amount: number;
    balance?: number;
    payDayLimit?: string;
    defaulted?: boolean;
};
type State = {
    entityId: number;
    authorizedLogin: string;
    authorizedPassword: string;
    amount: number;
};
type Actions = {
    infoReset: () => void;
    setEntityId: (value: number) => void;
    setAuthorizedLogin: (value: string) => void;
    setAuthorizedPassword: (value: string) => void;
    setAmount: (value: number) => void;
};
export type UseGafpriAttributesCreditOpeningReturn = {
    states: State;
    actions: Actions;
};
export declare function useGafpriAttributesCreditOpening(): UseGafpriAttributesCreditOpeningReturn;
export {};
