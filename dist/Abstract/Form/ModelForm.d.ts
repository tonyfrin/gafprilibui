import React from 'react';
import type { ContainerFormProps } from '../Containers';
import type { Title1Props, Title2Props } from '../Title';
import type { ButtonProps } from '../Button';
import type { ErrorProps } from '../Error';
import type { Box1Props } from '../Box';
export type ModelFormProps = {
    boxProps?: Box1Props;
    titles: {
        title1: string;
        title2: string;
    };
    title1Props?: Title1Props;
    title2Props?: Title2Props;
    handleActions: (action: string, value: any) => void;
    buttonTitles: {
        mainButton?: string;
        returnButton: string;
    };
    mainButtonProps?: ButtonProps;
    returnButtonStyle?: ButtonProps['styles'];
    returnButtonProps?: ButtonProps;
    children: React.ReactElement;
    error: string[] | null;
    errorProps?: ErrorProps;
    childrenContainerProps?: ContainerFormProps;
    titleContainerStyle?: string;
    actionButtonContainerStyle?: string;
    returnButtonConatinerStyle?: string;
};
export declare const ModelForm: ({ boxProps, titles, title1Props, title2Props, handleActions, buttonTitles, mainButtonProps, returnButtonStyle, returnButtonProps, children, error, errorProps, childrenContainerProps, titleContainerStyle, actionButtonContainerStyle, returnButtonConatinerStyle, }: ModelFormProps) => JSX.Element;
