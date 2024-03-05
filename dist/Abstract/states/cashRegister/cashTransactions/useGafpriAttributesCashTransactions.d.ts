export type CashTransactionsAttributes = {
    cashRegisterTypePostsId: number;
    cashRegisterPostsId: number;
    type: 'deposit' | 'debit';
    amount: number;
    change: number;
    currenciesId: number;
    note?: string;
};
type State = {
    cashRegisterTypePostsId: string;
    cashRegisterPostsId: string;
    type: string;
    amount: string;
    change: string;
    currenciesId: string;
    note: string;
};
type Actions = {
    infoReset: () => void;
    setCashRegisterTypePostsId: (value: string) => void;
    setCashRegisterPostsId: (value: string) => void;
    setType: (value: string) => void;
    setAmount: (value: string) => void;
    setChange: (value: string) => void;
    setCurrenciesId: (value: string) => void;
    setNote: (value: string) => void;
};
export type UseGafpriAttributesCashTransactionsReturn = {
    states: State;
    actions: Actions;
};
export declare function useGafpriAttributesCashTransactions(): UseGafpriAttributesCashTransactionsReturn;
export {};
