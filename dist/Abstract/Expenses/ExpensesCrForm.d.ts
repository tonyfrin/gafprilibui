import type { SiteOptions, UseCurrenciesReturn, UseGafpriExpensesReturn } from '../../states';
export type ExpensesCrFormProps = {
    use: UseGafpriExpensesReturn;
    siteOptions: SiteOptions;
    useCurrencies: UseCurrenciesReturn;
};
export declare const ExpensesCrForm: ({ use, siteOptions, useCurrencies, }: ExpensesCrFormProps) => JSX.Element;
