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
import type { ButtonPropsExtended } from '../Button';
import type { ListProps } from '../List';
import type { ErrorProps } from '../Error';
import { BudgetPdf } from '../Pdf';
import { Loading } from '../../Components';

export type BudgetSearchPrintProps = {
  useBudget: UseGafpriBudgetReturn;
  siteOptions: SiteOptions;
  optionButtonContainerStyle?: string;
  updateButtonProps?: ButtonPropsExtended;
  errorProps?: ErrorProps;
  listProps?: ListProps;
  logoPdf: string;
};

export type BudgetSearchPrintExtended = {
  optionButtonContainerStyle?: string;
  updateButtonProps?: ButtonPropsExtended;
  errorProps?: ErrorProps;
  listProps?: ListProps;
};

const defaultOptionButtonContainerStyle = css`
  display: flex;
  justify-content: space-evenly;
`;

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
  optionButtonContainerStyle = defaultOptionButtonContainerStyle,
  updateButtonProps,
  errorProps = {
    error: useBudget.error.states.error,
  },
  listProps,
  logoPdf,
}: BudgetSearchPrintProps): JSX.Element => {
  const [shouldRenderButtonUpdate, setShouldRenderButtonUpdate] =
    useState(true);

  useEffect(() => {
    setShouldRenderButtonUpdate(false);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const ButtonUpdate: React.FC<{ id: number }> = ({ id }) => {
    const budget = useBudget.data.actions.getById(id);
    return (
      { shouldRenderButtonUpdate } && (
        <div className={css(optionButtonContainerStyle)}>
          {budget && (
            <PDFDownloadLink
              document={
                <BudgetPdf
                  budget={budget}
                  logo={logoPdf}
                  siteOptions={siteOptions}
                />
              }
              fileName={`presupuesto${budget.postsId}.pdf`}
            >
              {({ blob, url, loading, error }) => {
                return loading ? (
                  <Loading />
                ) : (
                  <Button
                    title="Imprimir"
                    styles={{
                      fontSize: '10px',
                    }}
                  />
                );
              }}
            </PDFDownloadLink>
          )}
        </div>
      )
    );
  };

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
        <ButtonUpdate id={item.postsId} />,
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
