/// <reference types="react" />
import type { SingleValue } from 'react-select';
import { GsSelectProps } from './Input';
export type SelectParentIdProps = {
    changeParentId: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props: GsSelectProps;
};
export declare const SelectParentId: ({ changeParentId, props, }: SelectParentIdProps) => JSX.Element;
