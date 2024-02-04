/// <reference types="react" />
import type { ButtonProps, ButtonPropsExtended } from '../Button';
import type { ListPropsExtended } from '../List';
import type { ErrorProps } from '../Error';
import { HeaderProps } from '../Header';
import type { UseUserReturn } from '../../states';
export type InitUserProps = {
    use: UseUserReturn;
    optionButtonContainerStyle?: string;
    updateButtonProps?: ButtonProps;
    viewButtonProps?: ButtonProps;
    emailButtonProps?: ButtonPropsExtended;
    phoneButtonProps?: ButtonPropsExtended;
    statusButtonProps?: ButtonPropsExtended;
    headerProps?: HeaderProps;
    errorProps?: ErrorProps;
    listProps?: ListPropsExtended;
};
export type InitUserPropsExtended = {
    use?: UseUserReturn;
    optionButtonContainerStyle?: string;
    updateButtonProps?: ButtonProps;
    viewButtonProps?: ButtonProps;
    emailButtonProps?: ButtonPropsExtended;
    phoneButtonProps?: ButtonPropsExtended;
    statusButtonProps?: ButtonPropsExtended;
    headerProps?: HeaderProps;
    errorProps?: ErrorProps;
    listProps?: ListPropsExtended;
};
export declare const InitUser: ({ use, optionButtonContainerStyle, updateButtonProps, viewButtonProps, emailButtonProps, phoneButtonProps, statusButtonProps, headerProps, errorProps, listProps, }: InitUserProps) => JSX.Element;
