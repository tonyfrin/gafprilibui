import { SiteOptions } from '../../states';
import { PaymentMethodsAttributes } from '../states/paymentMethods';
export type PaymentMethodsImages = {
    zelle: string;
    pagoMovil: string;
    transfer: string;
    cash: string;
    discount: string;
    surplus: string;
};
export type PaymentOrderSectionsProps = {
    payments: PaymentMethodsAttributes[];
    siteOptions: SiteOptions;
    images?: PaymentMethodsImages;
    paymentType: string;
    total: number;
};
export declare const PaymentOrderSections: ({ payments, siteOptions, images, paymentType, total, }: PaymentOrderSectionsProps) => JSX.Element;
