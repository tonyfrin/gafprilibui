/// <reference types="react" />
import type { SingleValue } from 'react-select';
import { GsSelectProps } from './Input';
export type SelectSiteProps = {
    changeSite: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    props: GsSelectProps;
};
export declare const SelectSite: ({ changeSite, props }: SelectSiteProps) => JSX.Element;
