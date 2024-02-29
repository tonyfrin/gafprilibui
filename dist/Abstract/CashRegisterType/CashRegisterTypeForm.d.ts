import { UseGafpriCashRegisterTypeReturn, UseSitesReturn } from '../../states';
import { UseUserReturn } from '../../states';
export type CashRegisterTypeFormProps = {
    use: UseGafpriCashRegisterTypeReturn;
    useSites: UseSitesReturn;
    formType: 'add' | 'update';
    useUser: UseUserReturn;
};
export declare const CashRegisterTypeForm: ({ use, useSites, formType, useUser, }: CashRegisterTypeFormProps) => JSX.Element;
