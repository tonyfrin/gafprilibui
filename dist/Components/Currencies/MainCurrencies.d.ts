/// <reference types="react" />
import type { InitCurrenciesPropsExtended, CurrencyFormPropsExtended } from '../../Abstract';
import type { UseCurrenciesProps } from '../../states';
export type MainCurrenciesProps = {
    useCurrencies: UseCurrenciesProps;
    initCurrenciesProps?: InitCurrenciesPropsExtended;
    addFormProps?: CurrencyFormPropsExtended;
    updateFormProps?: CurrencyFormPropsExtended;
};
export type MainCurrenciesPropsExtended = {
    useCurrencies?: UseCurrenciesProps;
    initCurrenciesProps?: InitCurrenciesPropsExtended;
    addFormProps?: CurrencyFormPropsExtended;
    updateFormProps?: CurrencyFormPropsExtended;
};
export declare const MainCurrencies: ({ useCurrencies, initCurrenciesProps, addFormProps, updateFormProps, }: MainCurrenciesProps) => JSX.Element;
