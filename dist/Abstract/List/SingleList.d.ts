import React from 'react';
import { PaginationProps } from '../Pagination';
type ReactNodeArray = React.ReactNode[][];
export interface SingleListProps {
    items: ReactNodeArray;
    headers: string[];
    propsPagination: PaginationProps;
    breakContainerStyle?: string;
}
export declare const SingleList: React.FC<SingleListProps>;
export {};
