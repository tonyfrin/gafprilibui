/// <reference types="react" />
import type { UseInstall } from '../../states';
type Use = {
    actions: UseInstall['actions'];
    useSitesConfig: UseInstall['useSitesConfig'];
};
export declare const SitesConfig: ({ actions, useSitesConfig }: Use) => JSX.Element;
export {};
