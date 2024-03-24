import { useState } from 'react';

type State = {
  isFetching: boolean;
  isCash: boolean;
  isTransfer: boolean;
  isCredit: boolean;
  isAuthorization: boolean;
};

type Actions = {
  onFetching: () => void;

  onCash: () => void;

  onTransfer: () => void;

  onCredit: () => void;

  onAuthorization: () => void;
};

export type UseGafpriPagesPaymentMethodsReturn = {
  states: State;
  actions: Actions;
};

export function useGafpriPagesPaymentMethods(): UseGafpriPagesPaymentMethodsReturn {
  const [isFetching, setIsFetching] = useState(false);
  const [isCash, setIsCash] = useState(true);
  const [isTransfer, setIsTransfer] = useState(false);
  const [isCredit, setIsCredit] = useState(false);
  const [isAuthorization, setIsAuthorization] = useState(false);

  const onFetching = (): void => {
    setIsFetching(true);
    setIsCash(false);
    setIsTransfer(false);
    setIsCredit(false);
    setIsAuthorization(false);
  };

  const onCash = (): void => {
    setIsFetching(false);
    setIsCash(true);
    setIsTransfer(false);
    setIsCredit(false);
    setIsAuthorization(false);
  };

  const onTransfer = (): void => {
    setIsFetching(false);
    setIsCash(false);
    setIsTransfer(true);
    setIsCredit(false);
    setIsAuthorization(false);
  };

  const onCredit = (): void => {
    setIsFetching(false);
    setIsCash(false);
    setIsTransfer(false);
    setIsCredit(true);
    setIsAuthorization(false);
  };

  const onAuthorization = (): void => {
    setIsFetching(false);
    setIsCash(false);
    setIsTransfer(false);
    setIsCredit(false);
    setIsAuthorization(true);
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
    isCredit,
    isAuthorization,
  };

  const actions = {
    onFetching,

    onCash,

    onTransfer,

    onCredit,

    onAuthorization,
  };

  return {
    states,
    actions,
  };
}
