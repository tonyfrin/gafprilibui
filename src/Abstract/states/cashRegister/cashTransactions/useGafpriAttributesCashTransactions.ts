import { useState } from 'react';

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

export function useGafpriAttributesCashTransactions(): UseGafpriAttributesCashTransactionsReturn {
  const [cashRegisterTypePostsId, setCashRegisterTypePostsId] = useState('');
  const [cashRegisterPostsId, setCashRegisterPostsId] = useState('');
  const [type, setType] = useState('');
  const [amount, setAmount] = useState('');
  const [change, setChange] = useState('');
  const [currenciesId, setCurrenciesId] = useState('');
  const [note, setNote] = useState('');

  const infoReset = (): void => {
    setCashRegisterTypePostsId('');
    setCashRegisterPostsId('');
    setType('');
    setAmount('');
    setChange('');
    setCurrenciesId('');
    setNote('');
  };

  /**
   * Export
   *
   *
   */
  const states = {
    cashRegisterTypePostsId,
    cashRegisterPostsId,
    type,
    amount,
    change,
    currenciesId,
    note,
  };

  const actions = {
    infoReset,
    setCashRegisterTypePostsId,
    setCashRegisterPostsId,
    setType,
    setAmount,
    setChange,
    setCurrenciesId,
    setNote,
  };

  return {
    states,
    actions,
  };
}
