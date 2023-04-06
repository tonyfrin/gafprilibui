/// <reference types="react" />
import type { UseInstall } from '../../states';
type Use = {
    actions: UseInstall['actions'];
    useUser: UseInstall['useUser'];
};
export declare const Users: ({ actions, useUser }: Use) => JSX.Element;
export {};
