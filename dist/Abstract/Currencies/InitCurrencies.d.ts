/// <reference types="react" />
import type { ButtonProps } from '../Button';
import { ListPropsExtended } from '../List';
import type { ErrorProps } from '../Error';
import type { HeaderProps } from '../Header';
import type { UseCurrenciesProps } from 'src/states';
export type InitCurrenciesProps = {
    use: UseCurrenciesProps;
    optionsButtonMainContainerStyle?: string;
    updateButtonProps?: ButtonProps;
    deleteButtonProps?: ButtonProps;
    headerProps?: HeaderProps;
    errorProps?: ErrorProps;
    listProps?: ListPropsExtended;
};
export type InitCurrenciesPropsExtended = {
    use?: UseCurrenciesProps;
    optionsButtonMainContainerStyle?: string;
    updateButtonProps?: ButtonProps;
    deleteButtonProps?: ButtonProps;
    headerProps?: HeaderProps;
    errorProps?: ErrorProps;
    listProps?: ListPropsExtended;
};
export declare const InitCurrencies: ({ use, optionsButtonMainContainerStyle, updateButtonProps, deleteButtonProps, headerProps, errorProps, listProps, }: InitCurrenciesProps) => JSX.Element;
