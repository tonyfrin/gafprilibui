/// <reference types="react" />
import type { UseTypeDocumentIdProps } from '../../states';
import type { InitTypeDocumentIdPropsExtended, TypeDocumentIdFormPropsExtended } from '../../Abstract';
export type MainTypeDocumentIdProps = {
    use: UseTypeDocumentIdProps;
    initProps?: InitTypeDocumentIdPropsExtended;
    addFormProps?: TypeDocumentIdFormPropsExtended;
    updateFormProps?: TypeDocumentIdFormPropsExtended;
};
export type MainTypeDocumentIdPropsExtend = {
    use: UseTypeDocumentIdProps;
    initProps?: InitTypeDocumentIdPropsExtended;
    addFormProps?: TypeDocumentIdFormPropsExtended;
    updateFormProps?: TypeDocumentIdFormPropsExtended;
};
export declare const MainTypeDocumentId: ({ use, initProps, addFormProps, updateFormProps, }: MainTypeDocumentIdProps) => JSX.Element;
