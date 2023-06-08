/// <reference types="react" />
import type { InputProps } from '../Input';
import type { ContainerButtonPropsExtended } from '../Containers';
import { ModelFormPropsExtended } from '../Form';
import type { UseTypeDocumentIdProps } from 'src/states';
export type TypeDocumentIdFormProps = {
    use: UseTypeDocumentIdProps;
    formType: 'add' | 'update';
    modelFormProps?: ModelFormPropsExtended;
    infoContainerProps?: ContainerButtonPropsExtended;
    nameInputProps?: InputProps;
};
export type TypeDocumentIdFormPropsExtended = {
    use?: UseTypeDocumentIdProps;
    formType?: 'add' | 'update';
    modelFormProps?: ModelFormPropsExtended;
    infoContainerProps?: ContainerButtonPropsExtended;
    nameInputProps?: InputProps;
};
export declare const TypeDocumentIdForm: ({ use, formType, modelFormProps, infoContainerProps, nameInputProps, }: TypeDocumentIdFormProps) => JSX.Element;
