/// <reference types="react" />
import type { InitRolesPropsExtended, RolesFormPropsExtended } from '../../Abstract';
import type { UseRolesProps } from '../../states';
export type MainRolesProps = {
    use: UseRolesProps;
    initProps?: InitRolesPropsExtended;
    addFormProps?: RolesFormPropsExtended;
    updateFormProps?: RolesFormPropsExtended;
};
export type MainRolesPropsExtended = {
    use?: UseRolesProps;
    initProps?: InitRolesPropsExtended;
    addFormProps?: RolesFormPropsExtended;
    updateFormProps?: RolesFormPropsExtended;
};
export declare const MainRoles: ({ use, initProps, addFormProps, updateFormProps, }: MainRolesProps) => JSX.Element;
