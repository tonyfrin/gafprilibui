type State = {
    isFetching: boolean;
    isCash: boolean;
    isTransfer: boolean;
    isCredit: boolean;
    isAuthorization: boolean;
};
type Actions = {
    onFetching: () => void;
    onCash: () => void;
    onTransfer: () => void;
    onCredit: () => void;
    onAuthorization: () => void;
};
export type UseGafpriPagesPaymentMethodsReturn = {
    states: State;
    actions: Actions;
};
export declare function useGafpriPagesPaymentMethods(): UseGafpriPagesPaymentMethodsReturn;
export {};
