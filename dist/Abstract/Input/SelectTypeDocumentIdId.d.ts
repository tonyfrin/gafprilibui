/// <reference types="react" />
import type { SingleValue } from 'react-select';
import { GsSelectProps } from './Input';
export type SelectTypeDocumentIdIdProps = {
    changeTypeDocumentIdId: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props: GsSelectProps;
};
export declare const SelectTypeDocumentIdId: ({ changeTypeDocumentIdId, props, }: SelectTypeDocumentIdIdProps) => JSX.Element;
