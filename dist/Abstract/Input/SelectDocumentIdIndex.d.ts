/// <reference types="react" />
import type { SingleValue } from 'react-select';
import { GsSelectProps } from './Input';
export type SelectDocumentIdIndexProps = {
    changeIndex: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props: GsSelectProps;
};
export declare const SelectDocumentIdIndex: ({ changeIndex, props, }: SelectDocumentIdIndexProps) => JSX.Element;
