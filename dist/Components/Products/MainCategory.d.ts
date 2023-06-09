/// <reference types="react" />
import type { UseCategoryProps } from 'src/states';
import type { InitCategoryPropsExtended, CategoryFormPropsExtended } from '../../Abstract';
export type MainCategoryProps = {
    use: UseCategoryProps;
    initProps?: InitCategoryPropsExtended;
    addFormProps?: CategoryFormPropsExtended;
    updateFromProps?: CategoryFormPropsExtended;
};
export type MainCategoryPropsExtended = {
    use: UseCategoryProps;
    initProps?: InitCategoryPropsExtended;
    addFormProps?: CategoryFormPropsExtended;
    updateFromProps?: CategoryFormPropsExtended;
};
export declare const MainCategory: ({ use, initProps, addFormProps, updateFromProps, }: MainCategoryProps) => JSX.Element;
