import { useState } from 'react';

type State = {
  isFetching: boolean;
  isCash: boolean;
  isTransfer: boolean;
};

type Actions = {
  onFetching: () => void;

  onCash: () => void;

  onTransfer: () => void;
};

export type UseGafpriPagesPaymentMethodsReturn = {
  states: State;
  actions: Actions;
};

export function useGafpriPagesPaymentMethods(): UseGafpriPagesPaymentMethodsReturn {
  const [isFetching, setIsFetching] = useState(false);
  const [isCash, setIsCash] = useState(true);
  const [isTransfer, setIsTransfer] = useState(false);

  const onFetching = (): void => {
    setIsFetching(true);
    setIsCash(false);
    setIsTransfer(false);
  };

  const onCash = (): void => {
    setIsFetching(false);
    setIsCash(true);
    setIsTransfer(false);
  };

  const onTransfer = (): void => {
    setIsFetching(false);
    setIsCash(false);
    setIsTransfer(true);
  };

  /**
   * Export
   *
   *
   */
  const states = {
    isFetching,
    isCash,
    isTransfer,
  };

  const actions = {
    onFetching,

    onCash,

    onTransfer,
  };

  return {
    states,
    actions,
  };
}
