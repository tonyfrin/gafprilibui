import type { UseErrorReturn } from './useGafpriError';
import { UseCurrenciesReturn } from './useGafpriCurrencies';
import { UseGafpriBankTypeReturn } from './useGafpriBankType';
import { UseGafpriAttributesPaymentReturn, UseGafpriPagesPaymentReturn, UseGafpriSubPagesDepositPaymentReturn } from '../Abstract';
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
export declare function useGafpriPayment({ currencies, useBankType, useOrder, }: UseGafpriPaymentProps): UseGafpriPaymentReturn;
