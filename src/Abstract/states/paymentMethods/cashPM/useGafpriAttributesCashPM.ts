import { useState } from 'react';

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

export function useGafpriAttributesCashPM(): UseGafpriAttributesCashPMReturn {
  const [type, setType] = useState<'deposit' | 'debit' | ''>('');
  const [currenciesId, setCurrenciesId] = useState('');
  const [amount, setAmount] = useState('');
  const [change, setChange] = useState('');
  const [note, setNote] = useState('');

  const infoReset = (): void => {
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
    type,
    amount,
    change,
    currenciesId,
    note,
  };

  const actions = {
    infoReset,
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
