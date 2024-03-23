import { useState } from 'react';
import {
  GeneralPaymentMethodsAttributes,
  useGafpriAttributesGeneralPaymentMethods,
  UseGafpriAttributesGeneralPaymentMethodsReturn,
} from '../paymentMethods';
import { UseCurrenciesReturn, UseGafpriBankTypeReturn } from '../../../states';
import { generalValidationButtonNext } from '../../../Validations';

export type PaymentAttributes = {
  total: string;
  note?: string;
  type: string;
  paymentMethod: GeneralPaymentMethodsAttributes[];
};

type State = {
  total: string;
  type: string;
  note: string;
};

type Actions = {
  infoReset: () => void;
  setType: (value: string) => void;
  setTotal: (value: string) => void;
  setNote: (value: string) => void;
  validationButtonNextPaymentCash: () => void;
};

export type UseGafpriAttributesPaymentReturn = {
  states: State;
  actions: Actions;
  useGeneralPaymentMethods: UseGafpriAttributesGeneralPaymentMethodsReturn;
};

export type UseGafpriAttributesPaymentProps = {
  currencies?: UseCurrenciesReturn;
  useBankType?: UseGafpriBankTypeReturn;
};

export function useGafpriAttributesPayment({
  currencies,
  useBankType,
}: UseGafpriAttributesPaymentProps): UseGafpriAttributesPaymentReturn {
  const [type, setType] = useState('');
  const [total, setTotal] = useState('');
  const [note, setNote] = useState('');
  const useGeneralPaymentMethods = useGafpriAttributesGeneralPaymentMethods({
    currencies,
    useBankType,
  });

  const infoReset = (): void => {
    setType('');
    setTotal('');
    setNote('');
    useGeneralPaymentMethods.actions.infoReset();
  };

  const validationButtonNextPaymentCash = (): void => {
    generalValidationButtonNext({
      validations: [
        useGeneralPaymentMethods.states.currenciesIdValid,
        parseFloat(total) > 0,
        useGeneralPaymentMethods.useCashTransactions.states.change > 0,
        useGeneralPaymentMethods.usePaymentMethods.states.change > 0,
      ],
      inputId: 'cash',
    });
  };

  /**
   * Export
   *
   *
   */
  const states = {
    type,
    total,
    note,
  };

  const actions = {
    infoReset,
    setType,
    setTotal,
    setNote,
    validationButtonNextPaymentCash,
  };

  return {
    states,
    actions,
    useGeneralPaymentMethods,
  };
}
