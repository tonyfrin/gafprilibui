/// <reference types="react" />
import type { InputProps, GsSelectPropsExpanded } from '../Input';
import type { ContainerButtonPropsExtended } from '../Containers';
import type { ModelFormPropsExtended } from '../Form';
import type { UseCategoryReturn } from '../../states';
import { ListPropsExtended } from '../List';
import type { LoadingProps } from '../../Components';
import type { ButtonProps } from '../Button';
export type CategoryFormProps = {
    use: UseCategoryReturn;
    formType: 'add' | 'update';
    optionsButtonMainContainerStyle?: string;
    formContainerStyle?: string;
    imageContainerStyle?: string;
    imageFormConatinerStyle?: string;
    loadingContainerStyle?: string;
    imageStyle?: string;
    infoContainerStyle?: string;
    deleteButtonProps?: ButtonProps;
    modelFormProps?: ModelFormPropsExtended;
    changePhotoButtonProps?: ButtonProps;
    loadingProps?: LoadingProps;
    nameContainerProps?: ContainerButtonPropsExtended;
    nameInputProps?: InputProps;
    descriptionContainerProps?: ContainerButtonPropsExtended;
    descriptionInputProps?: InputProps;
    parentIdContainerProps?: ContainerButtonPropsExtended;
    parentIdInputProps?: GsSelectPropsExpanded;
    statusContainerProps?: ContainerButtonPropsExtended;
    statusInputProps?: GsSelectPropsExpanded;
    dependentsListProps?: ListPropsExtended;
};
export type CategoryFormPropsExtended = {
    use?: UseCategoryReturn;
    formType?: 'add' | 'update';
    optionsButtonMainContainerStyle?: string;
    formContainerStyle?: string;
    imageContainerStyle?: string;
    imageFormConatinerStyle?: string;
    loadingContainerStyle?: string;
    imageStyle?: string;
    infoContainerStyle?: string;
    deleteButtonProps?: ButtonProps;
    modelFormProps?: ModelFormPropsExtended;
    changePhotoButtonProps?: ButtonProps;
    loadingProps?: LoadingProps;
    nameContainerProps?: ContainerButtonPropsExtended;
    nameInputProps?: InputProps;
    descriptionContainerProps?: ContainerButtonPropsExtended;
    descriptionInputProps?: InputProps;
    parentIdContainerProps?: ContainerButtonPropsExtended;
    parentIdInputProps?: GsSelectPropsExpanded;
    statusContainerProps?: ContainerButtonPropsExtended;
    statusInputProps?: GsSelectPropsExpanded;
    dependentsListProps?: ListPropsExtended;
};
export declare const CategoryForm: ({ use, formType, optionsButtonMainContainerStyle, formContainerStyle, imageContainerStyle, imageFormConatinerStyle, loadingContainerStyle, imageStyle, infoContainerStyle, deleteButtonProps, modelFormProps, changePhotoButtonProps, loadingProps, nameContainerProps, nameInputProps, descriptionContainerProps, descriptionInputProps, parentIdContainerProps, parentIdInputProps, statusContainerProps, statusInputProps, dependentsListProps, }: CategoryFormProps) => JSX.Element;