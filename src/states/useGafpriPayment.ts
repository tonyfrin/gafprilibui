import { useGafpriError } from './useGafpriError';
import type { UseErrorReturn } from './useGafpriError';
import { UseCurrenciesReturn } from './useGafpriCurrencies';
import { UseGafpriBankTypeReturn } from './useGafpriBankType';
import {
  UseGafpriAttributesPaymentReturn,
  useGafpriAttributesPayment,
  UseGafpriPagesPaymentReturn,
  useGafpriPagesPayment,
  useGafpriSubPagesDepositPayment,
  UseGafpriSubPagesDepositPaymentReturn,
  UseGafpriApiPaymentReturn,
  useGafpriApiPayment,
} from '../Abstract';
import { UseGafpriOrderReturn } from './useGafpriOrder';
import { UseGafpriAccountsReceivableReturn } from './useGafpriAccountsReceivable';

export interface UseGafpriPaymentReturn {
  attributes: UseGafpriAttributesPaymentReturn;
  pages: UseGafpriPagesPaymentReturn;
  subPagesDeposit: UseGafpriSubPagesDepositPaymentReturn;
  api: UseGafpriApiPaymentReturn;
  error: UseErrorReturn;
}

export type UseGafpriPaymentProps = {
  currencies: UseCurrenciesReturn;
  useBankType: UseGafpriBankTypeReturn;
  useOrder: UseGafpriOrderReturn;
  useCredit: UseGafpriAccountsReceivableReturn;
  token: string | null;
};

export function useGafpriPayment({
  currencies,
  useBankType,
  useOrder,
  useCredit,
  token,
}: UseGafpriPaymentProps): UseGafpriPaymentReturn {
  const error = useGafpriError();

  const attributes = useGafpriAttributesPayment({
    currencies,
    useBankType,
    useOrder,
  });
  const subPagesDeposit = useGafpriSubPagesDepositPayment();
  const pages = useGafpriPagesPayment({
    attributes,
    subPagesDeposit,
  });
  const api = useGafpriApiPayment({
    useOrder,
    usePages: pages,
    useAttributes: attributes,
    useError: error,
    useCredit,
    token,
  });

  return {
    attributes,
    pages,
    subPagesDeposit,
    error,
    api,
  };
}
