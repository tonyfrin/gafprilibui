import { HTMLAttributes } from 'react';
import type { MainMenuProps } from '../../Abstract';
export type InitMainMenuStylesContainerProps = {
    padding?: string;
    custom?: string;
    backgroundImage?: string;
    height?: string;
    backgroundRepeat?: string;
    backgroundSize?: string;
};
export type InitMainMenuProps = {
    stylesContainer?: InitMainMenuStylesContainerProps;
    containerProps?: HTMLAttributes<HTMLDivElement>;
    contentProps: MainMenuProps;
};
export declare const InitMainMenu: ({ stylesContainer, containerProps, contentProps, }: InitMainMenuProps) => JSX.Element;
