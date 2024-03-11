import type { SiteOptions, UseCurrenciesReturn, UseGafpriExpensesReturn } from '../../states';
export type ExpensesFormProps = {
    use: UseGafpriExpensesReturn;
    siteOptions: SiteOptions;
    useCurrencies: UseCurrenciesReturn;
};
export declare const ExpensesForm: ({ use, siteOptions, useCurrencies, }: ExpensesFormProps) => JSX.Element;
