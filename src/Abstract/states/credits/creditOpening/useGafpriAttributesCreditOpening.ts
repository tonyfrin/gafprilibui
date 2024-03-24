import { useState } from 'react';

export type CreditOpeningAttributes = {
  postsId?: number;
  accountsReceivablePostsId?: number;
  paymentMethodsPostsId?: number;
  entityId?: number;
  authorizedLogin?: string;
  authorizedPassword?: string;
  description?: string;
  amount: number;
  balance?: number;
  payDayLimit?: string;
  defaulted?: boolean;
};

type State = {
  entityId: number;
  authorizedLogin: string;
  authorizedPassword: string;
  amount: number;
};

type Actions = {
  infoReset: () => void;
  setEntityId: (value: number) => void;
  setAuthorizedLogin: (value: string) => void;
  setAuthorizedPassword: (value: string) => void;
  setAmount: (value: number) => void;
};

export type UseGafpriAttributesCreditOpeningReturn = {
  states: State;
  actions: Actions;
};

export function useGafpriAttributesCreditOpening(): UseGafpriAttributesCreditOpeningReturn {
  const [entityId, setEntityId] = useState(0);
  const [authorizedLogin, setAuthorizedLogin] = useState('');
  const [authorizedPassword, setAuthorizedPassword] = useState('');
  const [amount, setAmount] = useState(0);

  const infoReset = (): void => {
    setEntityId(0);
    setAuthorizedLogin('');
    setAuthorizedPassword('');
    setAmount(0);
  };

  /**
   * Export
   *
   *
   */
  const states = {
    entityId,
    authorizedLogin,
    authorizedPassword,
    amount,
  };

  const actions = {
    infoReset,
    setEntityId,
    setAuthorizedLogin,
    setAuthorizedPassword,
    setAmount,
  };

  return {
    states,
    actions,
  };
}
