/// <reference types="react" />
import { InputProps } from './Input';
export type InputWebSiteProps = {
    changeWebSite: (email: string) => void;
    props?: InputProps;
};
export declare const InputWebSite: ({ changeWebSite, props }: InputWebSiteProps) => JSX.Element;
