/// <reference types="react" />
import type { UseInstall } from './../../states';
type Use = {
    use: UseInstall['useCategory'];
    type: string;
};
export declare const AddCategoryProjects: ({ use, type }: Use) => JSX.Element;
export {};
