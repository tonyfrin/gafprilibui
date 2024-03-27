import { SiteOptions } from '../../states';
import { PaymentMethodsAttributes } from '../states/paymentMethods';
export type PaymentOrderSectionsProps = {
    payments: PaymentMethodsAttributes[];
    siteOptions: SiteOptions;
    images?: {
        zelle: string;
        pagoMovil: string;
        transfer: string;
        cash: string;
    };
    paymentType: string;
    total: number;
};
export declare const PaymentOrderSections: ({ payments, siteOptions, images, paymentType, total, }: PaymentOrderSectionsProps) => JSX.Element;
