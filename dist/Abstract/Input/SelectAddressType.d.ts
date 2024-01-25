/// <reference types="react" />
import type { SingleValue } from 'react-select';
import { GsSelectProps } from './Input';
export type SelectAddressTypeProps = {
    changeAddressType: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props: GsSelectProps;
};
export declare const SelectAddressType: ({ changeAddressType, props, }: SelectAddressTypeProps) => JSX.Element;
