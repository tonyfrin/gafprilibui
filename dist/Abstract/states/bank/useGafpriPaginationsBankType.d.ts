import { BankTypeAttributes, UseGafpriDataBankTypeReturn } from './useGafpriDataBankType';
type State = {
    orderList: 'asc' | 'desc';
    searchTerm: string;
    currentPage: number;
    itemsPerPage: number;
};
type Actions = {
    sortByName: (storages: BankTypeAttributes[] | null, order: 'asc' | 'desc') => BankTypeAttributes[] | null;
    setOrderList: (order: 'asc' | 'desc') => void;
    setSearchTerm: (value: string) => void;
    filterByName: (search: string) => BankTypeAttributes[] | null;
    setCurrentPage: (value: number) => void;
    getPaginated: (itemStorages: BankTypeAttributes[] | null, page: number, itemsPerPage: number) => BankTypeAttributes[] | null;
};
export type UseGafpriPaginationsBankTypeReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriPaginationsBankTypeProps = {
    data: UseGafpriDataBankTypeReturn;
};
export declare function useGafpriPaginationsBankType({ data, }: UseGafpriPaginationsBankTypeProps): UseGafpriPaginationsBankTypeReturn;
export {};
