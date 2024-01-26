/// <reference types="react" />
import type { InputProps, GsSelectPropsExtended } from '../Input';
import type { ContainerButtonPropsExtended } from '../Containers';
import type { ModelFormPropsExtended } from '../Form';
import type { UseUserReturn } from '../../states';
import type { PhotoUserProps } from '../Form';
export type UserFormProps = {
    use: UseUserReturn;
    formType: 'add' | 'update';
    photoMainContainerStyle?: string;
    photoContainerStyle?: string;
    nameContainerStyle?: string;
    modelFormProps?: ModelFormPropsExtended;
    nameInputProps?: InputProps;
    lastNameInputProps?: InputProps;
    emailInputProps?: InputProps;
    phoneContainerProps?: ContainerButtonPropsExtended;
    areaCodeSelectProps?: GsSelectPropsExtended;
    phoneInputProps?: InputProps;
    roleSelectProps?: GsSelectPropsExtended;
    propsPhoto?: PhotoUserProps['props'];
};
export type UserFormPropsExtended = {
    use?: UseUserReturn;
    formType?: 'add' | 'update';
    photoMainContainerStyle?: string;
    photoContainerStyle?: string;
    nameContainerStyle?: string;
    modelFormProps?: ModelFormPropsExtended;
    nameInputProps?: InputProps;
    lastNameInputProps?: InputProps;
    emailInputProps?: InputProps;
    phoneContainerProps?: ContainerButtonPropsExtended;
    areaCodeSelectProps?: GsSelectPropsExtended;
    phoneInputProps?: InputProps;
    roleSelectProps?: GsSelectPropsExtended;
    propsPhoto?: PhotoUserProps['props'];
};
export declare const UserForm: ({ use, formType, photoMainContainerStyle, photoContainerStyle, nameContainerStyle, modelFormProps, nameInputProps, lastNameInputProps, emailInputProps, phoneContainerProps, areaCodeSelectProps, phoneInputProps, roleSelectProps, propsPhoto, }: UserFormProps) => JSX.Element;
