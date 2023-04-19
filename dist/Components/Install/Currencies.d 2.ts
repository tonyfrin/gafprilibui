/// <reference types="react" />
import type { UseInstall } from '../../states';
type Use = {
    states: UseInstall['states'];
    actions: UseInstall['actions'];
    useCurrency: UseInstall['useCurrency'];
};
export declare const Curriencies: ({ actions, useCurrency }: Use) => JSX.Element;
export {};
