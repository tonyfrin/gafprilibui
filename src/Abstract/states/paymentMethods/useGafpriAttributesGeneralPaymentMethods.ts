import React, { useState } from 'react';
import {
  PaymentMethodsAttributes,
  useGafpriAttributesPaymentMethods,
  UseGafpriAttributesPaymentMethodsReturn,
} from './useGafpriAttributesPaymentMethods';
import {
  CashTransactionsAttributes,
  useGafpriAttributesCashTransactions,
  UseGafpriAttributesCashTransactionsReturn,
} from '../cashRegister';

export type GeneralPaymentMethodsAttributes = {
  paymentMethod: PaymentMethodsAttributes;
  cashTransactions?: CashTransactionsAttributes;
};

type State = {
  arrayPaymentMethod: GeneralPaymentMethodsAttributes[];
  totalPaymentMethod: number;
  totalMethods: number;
};

type Actions = {
  infoReset: () => void;
  addCashTransaction: () => void;
  emptyPaymentMethodArray: () => void;
  deletePaymentMethod: (index: number) => void;
};

export type UseGafpriAttributesGeneralPaymentMethodsReturn = {
  states: State;
  actions: Actions;
  usePaymentMethods: UseGafpriAttributesPaymentMethodsReturn;
  useCashTransactions: UseGafpriAttributesCashTransactionsReturn;
};

export function useGafpriAttributesGeneralPaymentMethods(): UseGafpriAttributesGeneralPaymentMethodsReturn {
  const [arrayPaymentMethod, setArrayPaymentMethod] = useState<
    GeneralPaymentMethodsAttributes[]
  >([]);
  const usePaymentMethods = useGafpriAttributesPaymentMethods();
  const useCashTransactions = useGafpriAttributesCashTransactions();
  const [totalPaymentMethod, setTotalPaymentMethod] = useState(0);
  const [totalMethods, setTotalMethods] = useState(0);

  const infoReset = (): void => {
    usePaymentMethods.actions.infoReset();
    useCashTransactions.actions.infoReset();
    setArrayPaymentMethod([]);
  };

  const addCashTransaction = (): void => {
    setArrayPaymentMethod([
      {
        ...arrayPaymentMethod,
        paymentMethod: usePaymentMethods.states,
        cashTransactions: useCashTransactions.states,
      },
    ]);
    usePaymentMethods.actions.infoReset();
    useCashTransactions.actions.infoReset();
  };

  const deletePaymentMethod = (index: number): void => {
    const newArray = [...arrayPaymentMethod];

    if (index >= 0 && index < newArray.length) {
      const updatedArray = [
        ...newArray.slice(0, index),
        ...newArray.slice(index + 1),
      ];

      setArrayPaymentMethod(updatedArray);
    } else {
      console.error('Índice fuera de los límites del array'); // eslint-disable-line no-console
    }
  };

  const emptyPaymentMethodArray = (): void => {
    setArrayPaymentMethod([]);
  };

  const calculateTotalPaymentMethod = (): number => {
    return arrayPaymentMethod.reduce((acc, item) => {
      const newSubTotal = parseFloat(`${item.paymentMethod.change}`);
      return acc + newSubTotal;
    }, 0);
  };

  const calculateTotalCashTransactions = (): number => {
    return arrayPaymentMethod.reduce((acc, item) => {
      if (!item.cashTransactions) return acc;
      const newSubTotal = parseFloat(`${item.cashTransactions.change}`);
      return acc + newSubTotal;
    }, 0);
  };

  const calculateTotalMethods = (): number => {
    const totalCashTransactions = calculateTotalCashTransactions();
    const total = totalCashTransactions;
    return total;
  };

  const calculateTotal = (): void => {
    const newTotalPaymentMethod = calculateTotalPaymentMethod();
    const newTotalMethods = calculateTotalMethods();
    setTotalPaymentMethod(newTotalPaymentMethod);
    setTotalMethods(newTotalMethods);
  };

  React.useEffect(() => {
    calculateTotal();
  }, [arrayPaymentMethod]); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * Export
   *
   *
   */
  const states = {
    arrayPaymentMethod,
    totalPaymentMethod,
    totalMethods,
  };

  const actions = {
    infoReset,
    addCashTransaction,
    emptyPaymentMethodArray,
    deletePaymentMethod,
  };

  return {
    states,
    actions,
    usePaymentMethods,
    useCashTransactions,
  };
}
