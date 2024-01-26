/// <reference types="react" />
import type { SingleValue } from 'react-select';
import { GsSelectProps } from './Input';
export type SelectAreaCodeProps = {
    changeAreaCode: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props: GsSelectProps;
};
export declare const SelectAreaCode: ({ changeAreaCode, props, }: SelectAreaCodeProps) => JSX.Element;
