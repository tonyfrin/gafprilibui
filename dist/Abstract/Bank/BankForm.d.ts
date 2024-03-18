import { UseGafpriBankTypeReturn, SiteOptions, UseCurrenciesReturn } from '../../states';
import { MainMenuItems } from '../Menu';
export type BankFormProps = {
    use: UseGafpriBankTypeReturn;
    siteOptions: SiteOptions;
    useCurrencies: UseCurrenciesReturn;
    entityMenu: MainMenuItems[];
};
export declare const BankForm: ({ use, siteOptions, useCurrencies, entityMenu, }: BankFormProps) => JSX.Element;
