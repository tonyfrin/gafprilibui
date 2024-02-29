import { CashRegisterTypeAttributes, UseGafpriDataCashRegisterTypeReturn } from './useGafpriDataCashRegisterType';
type State = {
    orderList: 'asc' | 'desc';
    searchTerm: string;
    currentPage: number;
    itemsPerPage: number;
};
type Actions = {
    sortByName: (storages: CashRegisterTypeAttributes[] | null, order: 'asc' | 'desc') => CashRegisterTypeAttributes[] | null;
    setOrderList: (order: 'asc' | 'desc') => void;
    setSearchTerm: (value: string) => void;
    filterByName: (search: string) => CashRegisterTypeAttributes[] | null;
    setCurrentPage: (value: number) => void;
    getPaginated: (itemStorages: CashRegisterTypeAttributes[] | null, page: number, itemsPerPage: number) => CashRegisterTypeAttributes[] | null;
};
export type UseGafpriPaginationsCashRegisterTypeReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriPaginationsCashRegisterTypeProps = {
    data: UseGafpriDataCashRegisterTypeReturn;
};
export declare function useGafpriPaginationsCashRegisterType({ data, }: UseGafpriPaginationsCashRegisterTypeProps): UseGafpriPaginationsCashRegisterTypeReturn;
export {};
