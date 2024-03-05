export type CashPMAttributes = {
    type: 'deposit' | 'debit';
    currenciesId: number;
    amount: number;
    change: number;
    note?: string;
};
type State = {
    type: 'deposit' | 'debit' | '';
    currenciesId: string;
    amount: string;
    change: string;
    note: string;
};
type Actions = {
    infoReset: () => void;
    setCurrenciesId: (value: string) => void;
    setType: (value: 'deposit' | 'debit') => void;
    setAmount: (value: string) => void;
    setChange: (value: string) => void;
    setNote: (value: string) => void;
};
export type UseGafpriAttributesCashPMReturn = {
    states: State;
    actions: Actions;
};
export declare function useGafpriAttributesCashPM(): UseGafpriAttributesCashPMReturn;
export {};
