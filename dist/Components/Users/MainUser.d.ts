/// <reference types="react" />
import type { UseUserReturn, UseSitesReturn } from '../../states';
import type { InitUserPropsExtended, UserFormPropsExtended, UserFormUpdatePropsExtended, UserViewPropsExtended } from '../../Abstract';
export type MainUserProps = {
    use: UseUserReturn;
    useSites: UseSitesReturn;
    initProps?: InitUserPropsExtended;
    addFormProps?: UserFormPropsExtended;
    updateFormProps?: UserFormUpdatePropsExtended;
    viewFormProps?: UserViewPropsExtended;
};
export type MainUserPropsExtended = {
    use?: UseUserReturn;
    useSites?: UseSitesReturn;
    initProps?: InitUserPropsExtended;
    addFormProps?: UserFormPropsExtended;
    updateFormProps?: UserFormUpdatePropsExtended;
    viewFormProps?: UserViewPropsExtended;
};
export declare const MainUser: ({ use, useSites, initProps, addFormProps, updateFormProps, viewFormProps, }: MainUserProps) => JSX.Element;
