import React, { useState } from 'react';
import { SingleValue } from 'react-select';
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
import { UseCurrenciesReturn } from '../../../states';
import { SelectDefault } from '../../../helpers';
import { generalValidationSelectCurrencies } from '../../../Validations';

export type GeneralPaymentMethodsAttributes = {
  paymentMethod: PaymentMethodsAttributes;
  cashTransactions?: CashTransactionsAttributes;
};

type State = {
  arrayPaymentMethod: GeneralPaymentMethodsAttributes[];
  totalPaymentMethod: number;
  totalMethods: number;
  currenciesId: number;
  currenciesIdValid: boolean;
  currenciesIdDefault: SelectDefault;
  currenciesIdOptions: SelectDefault[];
};

type Actions = {
  infoReset: () => void;
  addCashTransaction: (
    cashRegisterTypePostsId: number,
    cashRegisterPostsId: number,
    type: 'deposit' | 'debit'
  ) => void;
  emptyPaymentMethodArray: () => void;
  deletePaymentMethod: (index: number) => void;
  validationCurrenciesId: (value: string) => boolean;
  changeCashCurrenciesId: (
    value: SingleValue<{ label: string; value: string }>
  ) => void;
};

export type UseGafpriAttributesGeneralPaymentMethodsReturn = {
  states: State;
  actions: Actions;
  usePaymentMethods: UseGafpriAttributesPaymentMethodsReturn;
  useCashTransactions: UseGafpriAttributesCashTransactionsReturn;
};

export type UseGafpriAttributesGeneralPaymentMethodsProps = {
  currencies: UseCurrenciesReturn;
};

export function useGafpriAttributesGeneralPaymentMethods({
  currencies,
}: UseGafpriAttributesGeneralPaymentMethodsProps): UseGafpriAttributesGeneralPaymentMethodsReturn {
  const [arrayPaymentMethod, setArrayPaymentMethod] = useState<
    GeneralPaymentMethodsAttributes[]
  >([]);
  const usePaymentMethods = useGafpriAttributesPaymentMethods();
  const useCashTransactions = useGafpriAttributesCashTransactions();
  const [totalPaymentMethod, setTotalPaymentMethod] = useState(0);
  const [totalMethods, setTotalMethods] = useState(0);
  const [currenciesId, setCurrenciesId] = useState(0);
  const [currenciesIdValid, setCurrenciesIdValid] = useState(false);
  const [currenciesIdDefault, setCurrenciesIdDefault] = useState<SelectDefault>(
    {
      value: '',
      label: 'Selecciona la Moneda',
    }
  );
  const currenciesIdOptions: SelectDefault[] =
    currencies.actions.getOptionsItems();

  const infoReset = (): void => {
    usePaymentMethods.actions.infoReset();
    useCashTransactions.actions.infoReset();
    setArrayPaymentMethod([]);
  };

  const validationCurrenciesId = (value: string): boolean => {
    let newValue;
    if (value) {
      newValue = value === '' || value === '0' ? '' : value;
    } else {
      newValue = '';
    }
    return generalValidationSelectCurrencies({
      value: newValue,
      setValid: setCurrenciesIdValid,
      currentValid: currenciesIdValid,
    });
  };

  const addCashTransaction = (
    cashRegisterTypePostsId: number,
    cashRegisterPostsId: number,
    type: 'deposit' | 'debit'
  ): void => {
    useCashTransactions.actions.setCashRegisterTypePostsId(
      cashRegisterTypePostsId
    );
    useCashTransactions.actions.setCashRegisterPostsId(cashRegisterPostsId);
    useCashTransactions.actions.setType(type);

    usePaymentMethods.actions.setMethodType('cash');
    usePaymentMethods.actions.setType(type);

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

  const changeCashCurrenciesId = (
    value: SingleValue<{ label: string; value: string }>
  ): void => {
    let newValue;

    if (value?.value) {
      newValue = value.value === '' || value.value === '0' ? '' : value.value;
    } else {
      newValue = '';
    }
    const valid = validationCurrenciesId(newValue);
    if (valid) {
      setCurrenciesId(newValue === '' ? 0 : parseInt(newValue, 10));
      setCurrenciesIdDefault({
        value: newValue,
        label: value?.label ? value.label : 'Selecciona la Moneda',
      });
      useCashTransactions.actions.setCurrenciesId(
        newValue === '' ? 0 : parseInt(newValue, 10)
      );
      usePaymentMethods.actions.setCurrenciesId(
        newValue === '' ? 0 : parseInt(newValue, 10)
      );
    }
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
    currenciesId,
    currenciesIdValid,
    currenciesIdDefault,
    currenciesIdOptions,
  };

  const actions = {
    infoReset,
    addCashTransaction,
    emptyPaymentMethodArray,
    deletePaymentMethod,
    validationCurrenciesId,
    changeCashCurrenciesId,
  };

  return {
    states,
    actions,
    usePaymentMethods,
    useCashTransactions,
  };
}
