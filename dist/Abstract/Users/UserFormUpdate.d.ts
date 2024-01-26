/// <reference types="react" />
import type { InputProps, GsSelectPropsExtended } from '../Input';
import type { ContainerButtonPropsExtended } from '../Containers';
import type { ModelFormPropsExtended, PhotoUserProps } from '../Form';
import type { UseUserReturn } from '../../states';
export type UserFormUpdateProps = {
    use: UseUserReturn;
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
    roleContainerProps?: ContainerButtonPropsExtended;
    roleSelectProps?: GsSelectPropsExtended;
    propsPhoto?: PhotoUserProps['props'];
};
export type UserFormUpdatePropsExtended = {
    use?: UseUserReturn;
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
    roleContainerProps?: ContainerButtonPropsExtended;
    roleSelectProps?: GsSelectPropsExtended;
    propsPhoto?: PhotoUserProps['props'];
};
export declare const UserFormUpdate: ({ use, photoMainContainerStyle, photoContainerStyle, nameContainerStyle, modelFormProps, nameInputProps, lastNameInputProps, emailInputProps, phoneContainerProps, areaCodeSelectProps, phoneInputProps, roleContainerProps, roleSelectProps, propsPhoto, }: UserFormUpdateProps) => JSX.Element;
