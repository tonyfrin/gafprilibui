/// <reference types="react" />
import type { ButtonProps } from '../Button';
import { ListPropsExtended } from '../List';
import type { ErrorProps } from '../Error';
import type { HeaderPropsExtended } from '../Header';
import type { UseCategoryProps } from 'src/states';
export type InitCategoryProps = {
    use: UseCategoryProps;
    optionsButtonMainContainerStyle?: string;
    updateButtonProps?: ButtonProps;
    deleteButtonProps?: ButtonProps;
    headerProps?: HeaderPropsExtended;
    errorProps?: ErrorProps;
    listProps?: ListPropsExtended;
};
export type InitCategoryPropsExtended = {
    use: UseCategoryProps;
    optionsButtonMainContainerStyle?: string;
    updateButtonProps?: ButtonProps;
    deleteButtonProps?: ButtonProps;
    headerProps?: HeaderPropsExtended;
    errorProps?: ErrorProps;
    listProps?: ListPropsExtended;
};
export declare const InitCategory: ({ use, optionsButtonMainContainerStyle, updateButtonProps, deleteButtonProps, headerProps, errorProps, listProps, }: InitCategoryProps) => JSX.Element;
