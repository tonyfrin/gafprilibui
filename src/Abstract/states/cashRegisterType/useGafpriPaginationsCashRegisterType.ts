import React, { useState } from 'react';
import {
  CashRegisterTypeAttributes,
  UseGafpriDataCashRegisterTypeReturn,
} from './useGafpriDataCashRegisterType';

type State = {
  orderList: 'asc' | 'desc';

  searchTerm: string;

  currentPage: number;

  itemsPerPage: number;
};

type Actions = {
  sortByName: (
    storages: CashRegisterTypeAttributes[] | null,
    order: 'asc' | 'desc'
  ) => CashRegisterTypeAttributes[] | null;

  setOrderList: (order: 'asc' | 'desc') => void;

  setSearchTerm: (value: string) => void;

  filterByName: (search: string) => CashRegisterTypeAttributes[] | null;

  setCurrentPage: (value: number) => void;

  getPaginated: (
    itemStorages: CashRegisterTypeAttributes[] | null,
    page: number,
    itemsPerPage: number
  ) => CashRegisterTypeAttributes[] | null;
};

export type UseGafpriPaginationsCashRegisterTypeReturn = {
  states: State;
  actions: Actions;
};

export type UseGafpriPaginationsCashRegisterTypeProps = {
  data: UseGafpriDataCashRegisterTypeReturn;
};

export function useGafpriPaginationsCashRegisterType({
  data,
}: UseGafpriPaginationsCashRegisterTypeProps): UseGafpriPaginationsCashRegisterTypeReturn {
  const [orderList, setOrderList] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  function sortByName(
    itemStorages: CashRegisterTypeAttributes[] | null,
    order: 'asc' | 'desc'
  ): CashRegisterTypeAttributes[] | null {
    if (itemStorages) {
      return itemStorages.slice().sort((a, b) => {
        const comparison = a.name.localeCompare(b.name, undefined, {
          sensitivity: 'base',
        });
        return order === 'asc' ? comparison : -comparison;
      });
    }
    return null;
  }

  const filterByName = (
    search: string
  ): CashRegisterTypeAttributes[] | null => {
    if (data.states.items.data.items) {
      return data.states.items.data.items.filter((storage) =>
        storage.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return null;
  };

  const getPaginated = (
    itemStorages: CashRegisterTypeAttributes[] | null,
    page: number,
    itemPerPage: number
  ): CashRegisterTypeAttributes[] | null => {
    const startIndex = (page - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;

    if (itemStorages) {
      return itemStorages.slice(startIndex, endIndex);
    }

    return null;
  };

  /**
   * Effects
   *
   *
   */

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  /**
   * Export
   *
   *
   */
  const states = {
    orderList,

    searchTerm,

    currentPage,

    itemsPerPage,
  };

  const actions = {
    sortByName,

    setOrderList,

    setSearchTerm,

    filterByName,

    setCurrentPage,

    getPaginated,
  };

  return {
    states,
    actions,
  };
}
