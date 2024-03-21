import type { UseErrorReturn } from './useGafpriError';
import { UseCurrenciesReturn } from './useGafpriCurrencies';
import { UseGafpriBankTypeReturn } from './useGafpriBankType';
import { UseGafpriAttributesPaymentReturn, UseGafpriPagesPaymentReturn, UseGafpriSubPagesDepositPaymentReturn } from '../Abstract';
export interface UseGafpriPaymentReturn {
    attributes: UseGafpriAttributesPaymentReturn;
    pages: UseGafpriPagesPaymentReturn;
    subPagesDeposit: UseGafpriSubPagesDepositPaymentReturn;
    error: UseErrorReturn;
}
export type UseGafpriPaymentProps = {
    currencies: UseCurrenciesReturn;
    useBankType: UseGafpriBankTypeReturn;
};
export declare function useGafpriPayment({ currencies, useBankType, }: UseGafpriPaymentProps): UseGafpriPaymentReturn;
