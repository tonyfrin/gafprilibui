/// <reference types="react" />
import type { UseInstall } from '../../states';
type Use = {
    actions: UseInstall['actions'];
    useSites: UseInstall['useSites'];
};
export declare const SitesInfo: ({ actions, useSites }: Use) => JSX.Element;
export {};
