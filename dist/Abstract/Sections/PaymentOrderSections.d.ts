import { SiteOptions } from '../../states';
import { PaymentAttributesReturn } from '../states/payment';
export type PaymentOrderSectionsProps = {
    payments: PaymentAttributesReturn;
    siteOptions: SiteOptions;
};
export declare const PaymentOrderSections: ({ payments, siteOptions, }: PaymentOrderSectionsProps) => JSX.Element;
