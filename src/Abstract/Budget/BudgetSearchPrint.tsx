import React, { useState, useEffect } from 'react';
import { css, cx } from '@emotion/css';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Button } from '../Button';
import { List } from '../List';
import { Error } from '../Error';
import { Header } from '../Header';
import type { SiteOptions } from '../../states';
import { formatDate, decimalFormatPriceConverter } from '../../helpers';
import { ContainerButton } from '../Containers';
import { UseGafpriBudgetReturn } from '../../states';
import type { ListProps } from '../List';
import type { ErrorProps } from '../Error';
import { PrintButtonBudget } from '../Pdf';

export type BudgetSearchPrintProps = {
  useBudget: UseGafpriBudgetReturn;
  siteOptions: SiteOptions;
  errorProps?: ErrorProps;
  listProps?: ListProps;
  logoPdf: string;
};

export type BudgetSearchPrintExtended = {
  errorProps?: ErrorProps;
  listProps?: ListProps;
};

const budgetSearchPrintStylesContainer = () => css`
  max-width: 1150px;
  margin: auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
`;

export const BudgetSearchPrint = ({
  useBudget,
  siteOptions,
  errorProps = {
    error: useBudget.error.states.error,
  },
  listProps,
  logoPdf,
}: BudgetSearchPrintProps): JSX.Element => {
  const returnInit = () => {
    useBudget.pages.actions.returnInit();
  };

  const allowedValues: Array<'postsId' | 'status' | 'total' | 'name'> = [
    'postsId',
    'status',
    'total',
    'name',
  ];

  const searchBy: 'postsId' | 'status' | 'total' | 'name' =
    allowedValues.includes(
      useBudget.paginations.states.searchBy as
        | 'postsId'
        | 'status'
        | 'total'
        | 'name'
    )
      ? (useBudget.paginations.states.searchBy as
          | 'postsId'
          | 'status'
          | 'total'
          | 'name')
      : 'name';

  const filtered = useBudget.paginations.actions.filterBySearch(
    useBudget.paginations.states.searchTerm,
    searchBy
  );

  const entities =
    useBudget.paginations.actions.sortByProperty(
      filtered,
      searchBy,
      useBudget.paginations.states.orderList
    ) || [];

  const paginated = useBudget.paginations.actions.getPaginated(
    entities,
    useBudget.paginations.states.currentPage,
    useBudget.paginations.states.itemsPerPage
  );

  const items =
    paginated?.map((item) => {
      const date = formatDate(`${item.posts.createdAt}`);
      const total = decimalFormatPriceConverter(
        item.total || '0',
        siteOptions.DECIMAL_NUMBERS,
        siteOptions.CURRENCY_SYMBOL,
        siteOptions.CURRENCY_LOCATION
      );
      const customer = `${item.customer.name} ${item.customer?.lastName}`;
      return [
        item.postsId,
        date,
        customer,
        total,
        <PrintButtonBudget
          id={item.postsId}
          useBudget={useBudget}
          siteOptions={siteOptions}
          logoPdf={logoPdf}
        />,
      ];
    }) ?? [];

  const headers = ['Número', 'Fecha', 'Cliente', 'Total', 'Opciones'];

  const options = [
    { value: 'asc', label: 'Ascendente' },
    { value: 'desc', label: 'Descendente' },
  ];

  const valueDefaul =
    useBudget.paginations.states.orderList === 'asc'
      ? { value: 'asc', label: 'Ascendente' }
      : { value: 'desc', label: 'Descendente' };

  const totalPages = Math.ceil(
    entities.length / useBudget.paginations.states.itemsPerPage
  );

  return (
    <>
      <div className={cx(budgetSearchPrintStylesContainer())}>
        <Header title="Presupuestos" />
        <Error {...errorProps} />
        <List
          title="Presupuestos"
          items={items}
          headers={headers}
          columns={5}
          selectProps={{
            options: options,
            onChange: (event) => {
              if (event?.value) {
                useBudget.paginations.actions.setOrderList(
                  event.value as 'asc' | 'desc'
                );
              }
            },
            defaultValue: valueDefaul,
            styles: {
              width: '50%',
            },
          }}
          selectByProps={{
            options: useBudget.paginations.states.searchByOptions,
            onChange: (event) => {
              useBudget.paginations.actions.changeSearchBy(event);
            },
            defaultValue: useBudget.paginations.states.searchByDefault,
            styles: {
              width: '100%',
            },
          }}
          inputProps={{
            value: useBudget.paginations.states.searchTerm,
            onChange: (e) =>
              useBudget.paginations.actions.setSearchTerm(e.target.value),
            placeholder: 'Buscar...',
          }}
          propsPagination={{
            currentPage: useBudget.paginations.states.currentPage,
            setCurrentPage: useBudget.paginations.actions.setCurrentPage,
            totalPages: totalPages,
          }}
          {...listProps}
        />
        <ContainerButton
          styles={{
            width: '100%',
            justifyContent: 'flex-start',
            custom: `
                    margin-top: 30px;`,
          }}
        >
          <>
            <Button
              title="regresar"
              buttonProps={{
                onClick: () => returnInit(),
              }}
              styles={{
                backgroundColor: '#c12429',
                margin: '0 20px 0 0',
              }}
            />
            <Button
              title="Agregar"
              buttonProps={{
                onClick: () => useBudget.pages.actions.onAddEntity(),
              }}
            />
          </>
        </ContainerButton>
      </div>
    </>
  );
};
