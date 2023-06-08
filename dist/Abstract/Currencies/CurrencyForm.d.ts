/// <reference types="react" />
import type { InputProps } from '../Input';
import type { ContainerButtonPropsExtended } from '../Containers';
import type { ModelFormPropsExtended } from '../Form';
import type { UseCurrenciesProps } from '../../states';
export type CurrencyFormProps = {
    use: UseCurrenciesProps;
    formType: 'add' | 'update';
    modelFormProps?: ModelFormPropsExtended;
    infoContainerProps?: ContainerButtonPropsExtended;
    nameInputProps?: InputProps;
    symbolInputProps?: InputProps;
};
export type CurrencyFormPropsExtended = {
    use?: UseCurrenciesProps;
    formType?: 'add' | 'update';
    modelFormProps?: ModelFormPropsExtended;
    infoContainerProps?: ContainerButtonPropsExtended;
    nameInputProps?: InputProps;
    symbolInputProps?: InputProps;
};
export declare const CurrencyForm: ({ use, formType, modelFormProps, infoContainerProps, nameInputProps, symbolInputProps, }: CurrencyFormProps) => JSX.Element;
