import React from 'react';
import { IconType } from 'react-icons';
export interface IconItem {
    id: string;
    label?: string;
    onClick: () => void;
    icon: IconType;
}
export interface IconProps {
    item: IconItem;
    mainContainerStyle?: string;
    itemContainerStyle?: string;
    iconGeneralContainerStyle?: string;
    iconContainerStyle?: string;
    iconStyle?: string;
    titleContainer?: string;
    titleStyle?: string;
}
export declare const Icon: React.FC<IconProps>;
