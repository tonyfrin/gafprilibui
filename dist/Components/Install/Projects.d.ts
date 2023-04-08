/// <reference types="react" />
import type { UseInstall } from '../../states';
type Use = {
    actions: UseInstall['actions'];
    useProjects: UseInstall['useProjects'];
};
export declare const Projects: ({ actions, useProjects }: Use) => JSX.Element;
export {};
