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
} from '../Abstract';
import { UseGafpriOrderReturn } from './useGafpriOrder';

export interface UseGafpriPaymentReturn {
  attributes: UseGafpriAttributesPaymentReturn;
  pages: UseGafpriPagesPaymentReturn;
  subPagesDeposit: UseGafpriSubPagesDepositPaymentReturn;
  error: UseErrorReturn;
}

export type UseGafpriPaymentProps = {
  currencies: UseCurrenciesReturn;
  useBankType: UseGafpriBankTypeReturn;
  useOrder: UseGafpriOrderReturn;
};

export function useGafpriPayment({
  currencies,
  useBankType,
  useOrder,
}: UseGafpriPaymentProps): UseGafpriPaymentReturn {
  const error = useGafpriError();

  const attributes = useGafpriAttributesPayment({
    currencies,
    useBankType,
  });
  const subPagesDeposit = useGafpriSubPagesDepositPayment({ useOrder });
  const pages = useGafpriPagesPayment({
    attributes,
    subPagesDeposit,
  });

  return {
    attributes,
    pages,
    subPagesDeposit,
    error,
  };
}
