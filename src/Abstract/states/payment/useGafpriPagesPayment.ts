import { useState } from 'react';
import { UseGafpriAttributesPaymentReturn } from './useGafpriAttributesPayment';
import { UseGafpriSubPagesDepositPaymentReturn } from './useGafpriSubPagesDepositPayment';

type State = {
  isFetching: boolean;
  isInit: boolean;
  isDeposit: boolean;
};

type Actions = {
  onFetching: () => void;

  onInit: () => void;

  returnInit: () => void;

  onDeposit: () => void;
};

export type UseGafpriPagesPaymentReturn = {
  states: State;
  actions: Actions;
};

export type UseGafpriPagesPaymentProps = {
  attributes: UseGafpriAttributesPaymentReturn;
  subPagesDeposit: UseGafpriSubPagesDepositPaymentReturn;
};

export function useGafpriPagesPayment({
  attributes,
  subPagesDeposit,
}: UseGafpriPagesPaymentProps): UseGafpriPagesPaymentReturn {
  const [isFetching, setIsFetching] = useState(false);
  const [isInit, setIsInit] = useState(true);
  const [isDeposit, setIsDeposit] = useState(false);

  const onFetching = (): void => {
    setIsFetching(true);
    setIsInit(false);
    setIsDeposit(false);
  };

  const onInit = (): void => {
    setIsFetching(false);
    setIsInit(true);
    setIsDeposit(false);
  };

  const onDeposit = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsDeposit(true);
  };

  const returnInit = (): void => {
    attributes.actions.infoReset();
    subPagesDeposit.actions.onOrder();
    onInit();
  };

  /**
   * Export
   *
   *
   */
  const states = {
    isFetching,
    isInit,
    isDeposit,
  };

  const actions = {
    onFetching,

    onInit,

    onDeposit,

    returnInit,
  };

  return {
    states,
    actions,
  };
}
