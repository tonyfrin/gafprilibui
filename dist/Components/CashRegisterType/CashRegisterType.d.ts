import type { UseGafpriCashRegisterTypeReturn, UseSitesReturn, UseUserReturn } from '../../states';
export type CashRegisterTypeProps = {
    use: UseGafpriCashRegisterTypeReturn;
    useSites: UseSitesReturn;
    useUser: UseUserReturn;
};
export declare const CashRegisterType: ({ use, useSites, useUser, }: CashRegisterTypeProps) => JSX.Element;
