/// <reference types="react" />
import type { InputProps } from '../Input';
import type { ButtonPropsExtended } from '../Button';
import type { ListPropsExtended } from '../List';
import type { ModelFormPropsExtended } from '../Form';
import type { UseUserReturn } from '../../states';
export type UserViewProps = {
    use: UseUserReturn;
    photoMainContainerStyle?: string;
    photoContainerStyle?: string;
    photoFormStyle?: string;
    photoStyle?: string;
    nameContainerStyle?: string;
    optionButtonContainerStyle?: string;
    emailPhoneButtonProps?: ButtonPropsExtended;
    modelFormProps?: ModelFormPropsExtended;
    nameInputProps?: InputProps;
    lastNameInputProps?: InputProps;
    roleListProps?: ListPropsExtended;
};
export type UserViewPropsExtended = {
    use?: UseUserReturn;
    photoMainContainerStyle?: string;
    photoContainerStyle?: string;
    photoFormStyle?: string;
    photoStyle?: string;
    nameContainerStyle?: string;
    optionButtonContainerStyle?: string;
    emailPhoneButtonProps?: ButtonPropsExtended;
    modelFormProps?: ModelFormPropsExtended;
    nameInputProps?: InputProps;
    lastNameInputProps?: InputProps;
    roleListProps?: ListPropsExtended;
};
export declare const UserView: ({ use, photoMainContainerStyle, photoContainerStyle, photoFormStyle, photoStyle, nameContainerStyle, optionButtonContainerStyle, emailPhoneButtonProps, modelFormProps, nameInputProps, lastNameInputProps, roleListProps, }: UserViewProps) => JSX.Element;
