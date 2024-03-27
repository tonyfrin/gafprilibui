import { SiteOptions } from '../../states';
import { PaymentAttributesReturn } from '../states/payment';
export type PaymentOrderSectionsProps = {
    payments: PaymentAttributesReturn;
    siteOptions: SiteOptions;
    images?: {
        zelle: string;
        pagoMovil: string;
        transfer: string;
        cash: string;
    };
};
export declare const PaymentOrderSections: ({ payments, siteOptions, images, }: PaymentOrderSectionsProps) => JSX.Element;
