/// <reference types="react" />
import type { SingleValue } from 'react-select';
import { GsSelectProps } from './Input';
export type SelectStatusProps = {
    changeStatus: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props: GsSelectProps;
};
export declare const SelectStatus: ({ changeStatus, props }: SelectStatusProps) => JSX.Element;
