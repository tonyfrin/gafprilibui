import React, { useState } from 'react';
import {
  BankTypeAttributes,
  UseGafpriDataBankTypeReturn,
} from './useGafpriDataBankType';

type State = {
  orderList: 'asc' | 'desc';

  searchTerm: string;

  currentPage: number;

  itemsPerPage: number;
};

type Actions = {
  sortByName: (
    storages: BankTypeAttributes[] | null,
    order: 'asc' | 'desc'
  ) => BankTypeAttributes[] | null;

  setOrderList: (order: 'asc' | 'desc') => void;

  setSearchTerm: (value: string) => void;

  filterByName: (search: string) => BankTypeAttributes[] | null;

  setCurrentPage: (value: number) => void;

  getPaginated: (
    itemStorages: BankTypeAttributes[] | null,
    page: number,
    itemsPerPage: number
  ) => BankTypeAttributes[] | null;
};

export type UseGafpriPaginationsBankTypeReturn = {
  states: State;
  actions: Actions;
};

export type UseGafpriPaginationsBankTypeProps = {
  data: UseGafpriDataBankTypeReturn;
};

export function useGafpriPaginationsBankType({
  data,
}: UseGafpriPaginationsBankTypeProps): UseGafpriPaginationsBankTypeReturn {
  const [orderList, setOrderList] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  function sortByName(
    itemStorages: BankTypeAttributes[] | null,
    order: 'asc' | 'desc'
  ): BankTypeAttributes[] | null {
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

  const filterByName = (search: string): BankTypeAttributes[] | null => {
    if (data.states.items.data.items) {
      return data.states.items.data.items.filter((storage) =>
        storage.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return null;
  };

  const getPaginated = (
    items: BankTypeAttributes[] | null,
    page: number,
    itemPerPage: number
  ): BankTypeAttributes[] | null => {
    const startIndex = (page - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;

    if (items) {
      return items.slice(startIndex, endIndex);
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
