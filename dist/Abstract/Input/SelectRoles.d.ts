/// <reference types="react" />
import type { SingleValue } from 'react-select';
import { GsSelectProps } from './Input';
export type SelectRolesProps = {
    changeRoles: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props: GsSelectProps;
};
export declare const SelectRoles: ({ changeRoles, props }: SelectRolesProps) => JSX.Element;
