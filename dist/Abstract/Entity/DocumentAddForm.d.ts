/// <reference types="react" />
import type { InputProps, GsSelectPropsExtended } from '../Input';
import type { ModelFormPropsExtended, PhotoDocumentIdProps } from '../Form';
import type { UseEntityReturn } from '../../states';
export type DocumentAddFormProps = {
    use: UseEntityReturn;
    photoMainContainerStyle?: string;
    photoInfoContainerStyle?: string;
    nameLastNameContainerStyle?: string;
    inputTypeDocumentIdIdProps?: GsSelectPropsExtended;
    inputIndexProps?: GsSelectPropsExtended;
    mainTitle?: string;
    subTitle?: string;
    modelFormProps?: ModelFormPropsExtended;
    inputDigitProps?: InputProps;
    propsPhoto?: PhotoDocumentIdProps['props'];
};
export type DocumentAddFormPropsExtended = {
    use: UseEntityReturn;
    photoMainContainerStyle?: string;
    photoInfoContainerStyle?: string;
    nameLastNameContainerStyle?: string;
    inputTypeDocumentIdIdProps?: GsSelectPropsExtended;
    inputIndexProps?: GsSelectPropsExtended;
    mainTitle?: string;
    subTitle?: string;
    modelFormProps?: ModelFormPropsExtended;
    inputDigitProps?: InputProps;
    propsPhoto?: PhotoDocumentIdProps['props'];
};
export declare const DocumentAddForm: ({ use, photoMainContainerStyle, photoInfoContainerStyle, nameLastNameContainerStyle, inputTypeDocumentIdIdProps, inputIndexProps, mainTitle, subTitle, modelFormProps, inputDigitProps, propsPhoto, }: DocumentAddFormProps) => JSX.Element;