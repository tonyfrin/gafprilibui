import React from 'react';
import { css } from '@emotion/css';
import { Pagination, PaginationProps } from '../Pagination';
import { SingleTable } from '../Table';

const defaultBreakContainerStyle = css`
  transition: all 1s ease 0s;
  background: transparent;
  font-size: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: top;
  border-spacing: 0;
  border-collapse: collapse;
`;

type ReactNodeArray = React.ReactNode[][];

export interface SingleListProps {
  items: ReactNodeArray;
  headers: string[];
  propsPagination: PaginationProps;
  breakContainerStyle?: string;
}

export const SingleList: React.FC<SingleListProps> = ({
  items,
  headers,
  propsPagination,
  breakContainerStyle = defaultBreakContainerStyle,
}) => {
  return (
    <div className={css(breakContainerStyle)}>
      <SingleTable headers={headers} data={items} />
      <Pagination {...propsPagination} />
    </div>
  );
};
