/// <reference types="react" />
import type { UseInstall } from '../../states';
type Use = {
    actions: UseInstall['actions'];
    useTypeDocument: UseInstall['useTypeDocument'];
};
export declare const TypesDocument: ({ actions, useTypeDocument, }: Use) => JSX.Element;
export {};
