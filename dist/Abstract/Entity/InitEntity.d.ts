/// <reference types="react" />
import type { ButtonPropsExtended } from '../Button';
import type { ListProps } from '../List';
import type { ErrorProps } from '../Error';
import { HeaderPropsExtended } from '../Header';
import type { UseEntityReturn } from '../../states';
export type InitEntityProps = {
    use: UseEntityReturn;
    optionButtonContainerStyle?: string;
    updateButtonProps?: ButtonPropsExtended;
    viewButtonProps?: ButtonPropsExtended;
    headerProps?: HeaderPropsExtended;
    errorProps?: ErrorProps;
    listProps?: ListProps;
};
export type InitEntityPropsExtended = {
    use: UseEntityReturn;
    optionButtonContainerStyle?: string;
    updateButtonProps?: ButtonPropsExtended;
    viewButtonProps?: ButtonPropsExtended;
    headerProps?: HeaderPropsExtended;
    errorProps?: ErrorProps;
    listProps?: ListProps;
};
export declare const InitEntity: ({ use, optionButtonContainerStyle, updateButtonProps, viewButtonProps, headerProps, errorProps, listProps, }: InitEntityProps) => JSX.Element;
