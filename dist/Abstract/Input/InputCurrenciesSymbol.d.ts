/// <reference types="react" />
import { InputProps } from './Input';
export type InputCurrenciesSymbolProps = {
    changeSymbol: (symbol: string) => void;
    props?: InputProps;
};
export declare const InputCurrenciesSymbol: ({ changeSymbol, props, }: InputCurrenciesSymbolProps) => JSX.Element;
