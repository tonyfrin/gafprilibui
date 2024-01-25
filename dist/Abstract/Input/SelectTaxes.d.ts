/// <reference types="react" />
import type { SingleValue } from 'react-select';
import { GsSelectProps } from './Input';
export type SelectTaxesProps = {
    changeTaxes: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props: GsSelectProps;
};
export declare const SelectTaxes: ({ changeTaxes, props }: SelectTaxesProps) => JSX.Element;
