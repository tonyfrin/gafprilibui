/// <reference types="react" />
import type { UseGafpri } from '../../states';
type Props = {
    mainActions: UseGafpri['actions'];
    mainState: UseGafpri['states'];
};
export declare const Install: ({ mainActions, mainState }: Props) => JSX.Element;
export {};
