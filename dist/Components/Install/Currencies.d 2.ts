/// <reference types="react" />
import type { UseGafpri } from '../../states';
type Use = {
    states: UseGafpri['states'];
    actions: UseGafpri['actions'];
    useCurrency: UseGafpri['useCurrency'];
};
export declare const Curriencies: ({ states, actions, useCurrency, }: Use) => JSX.Element;
export {};
