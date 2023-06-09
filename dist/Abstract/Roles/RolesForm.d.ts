/// <reference types="react" />
import type { InputProps } from '../Input';
import { ButtonProps } from '../Button';
import type { ContainerButtonPropsExtended } from '../Containers';
import type { UseRolesReturn } from 'src/states';
import type { ModelFormPropsExtended } from '../Form';
import type { RolePermissionsPropsExtended } from './RolePermissions';
export type RolesFormProps = {
    use: UseRolesReturn;
    formType: 'add' | 'update';
    permissionsContainerStyle?: string;
    optionButtonContainerStyle?: string;
    modelFormProps?: ModelFormPropsExtended;
    nameContainerProps?: ContainerButtonPropsExtended;
    nameInputProps?: InputProps;
    selectAllButtonProps?: ButtonProps;
    deselectAllButtonProps?: ButtonProps;
    permissionsProps?: RolePermissionsPropsExtended;
};
export type RolesFormPropsExtended = {
    use: UseRolesReturn;
    formType: 'add' | 'update';
    permissionsContainerStyle?: string;
    optionButtonContainerStyle?: string;
    modelFormProps?: ModelFormPropsExtended;
    nameContainerProps?: ContainerButtonPropsExtended;
    nameInputProps?: InputProps;
    selectAllButtonProps?: ButtonProps;
    deselectAllButtonProps?: ButtonProps;
    permissionsProps?: RolePermissionsPropsExtended;
};
export declare const RolesForm: ({ use, formType, permissionsContainerStyle, optionButtonContainerStyle, modelFormProps, nameContainerProps, nameInputProps, selectAllButtonProps, deselectAllButtonProps, permissionsProps, }: RolesFormProps) => JSX.Element;
