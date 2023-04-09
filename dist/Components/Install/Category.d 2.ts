/// <reference types="react" />
import type { UseInstall } from '../../states';
type Use = {
    actions: UseInstall['actions'];
    useCategory: UseInstall['useCategory'];
};
export declare const Category: ({ actions, useCategory }: Use) => JSX.Element;
export {};
