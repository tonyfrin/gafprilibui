/// <reference types="react" />
import { InputProps } from './Input';
export type InputCurrenciesSymbolProps = {
    changeSymbol: (symbol: string) => void;
    props?: InputProps;
    inputId?: string;
};
export declare const InputCurrenciesSymbol: ({ changeSymbol, props, inputId, }: InputCurrenciesSymbolProps) => JSX.Element;
