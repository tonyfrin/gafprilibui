import React from 'react';
import { css, cx } from '@emotion/css';
import {
  Loading,
  ExpensesCashRegister,
  PaymentTransferCashRegister,
  IncomeCashRegister,
} from '../../Components';
import {
  UseGafpriBankTypeReturn,
  SiteOptions,
  UseCurrenciesReturn,
} from '../../states';
import { MainMenuItems } from '../Menu';
import { Button } from '../Button';
import { Modal } from '../Modal';
import { BankHeader } from '../Header';
import {
  CashTransationsTable,
  ConciliateTable,
  CashBalanceTable,
  BankTransationsTable,
} from '../Table';
import { decimalFormatPriceConverter } from '../../helpers';

const bodyMainContainerStyle = () => css`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
`;

const bodyContainerStyle = () => css`
  display: flex;
  justify-content: center;
  width: 95%;
`;

const leftMainBodyContainerStyle = () => css`
  width: 60%;
  display: block;
`;

const rigthMainBodyContainerStyle = () => css`
  width: 40%;
  display: block;
`;

const leftBodyContainerStyle = () => css`
  display: flex;
`;

const rightBodyContainerStyle = () => css``;

const expensesContainerStyle = () => css`
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 10px;
  margin: 1em 0.5em;
  width: 95%;
  height: auto;
`;

const conciliatedContainerStyle = () => css`
  background: linear-gradient(
    to bottom,
    rgb(77, 174, 205, 0.75),
    rgb(96, 100, 124, 0.55)
  );
  border-radius: 10px;
  margin: 1em 0.5em;
  color: #fff;
  height: auto;
  padding: 20px;
`;

const expensesBodyContainerStyle = () => css`
  width: 90%;
  margin: auto;
  padding: 10px 0px;
`;

export type BankFormProps = {
  use: UseGafpriBankTypeReturn;
  siteOptions: SiteOptions;
  useCurrencies: UseCurrenciesReturn;
  entityMenu: MainMenuItems[];
};

export const BankForm = ({
  use,
  siteOptions,
  useCurrencies,
  entityMenu,
}: BankFormProps): JSX.Element => {
  const current = use.data.actions.getById(use.attributes.states.currentId);

  if (!current) return <Loading />;

  const transactions = current.bankTransactions;
  const currency = useCurrencies.actions.getById(current.currenciesId);

  if (!currency) return <Loading />;

  return (
    <>
      <BankHeader
        error={use.error.states.error}
        name={current.name}
        bankName={current.bankName}
        account={current.account}
        balance={decimalFormatPriceConverter(
          current.balanceChange || 0,
          siteOptions.DECIMAL_NUMBERS,
          siteOptions.CURRENCY_SYMBOL,
          siteOptions.CURRENCY_LOCATION
        )}
      />
      <div className={cx(bodyMainContainerStyle())}>
        <div className={cx(bodyContainerStyle())}>
          <BankTransationsTable
            use={use}
            siteOptions={siteOptions}
            transactions={transactions}
            title="Transacciones"
            currentPage={use.paginations.states.currentPage}
            setCurrentPage={use.paginations.actions.setCurrentPage}
            bankCurrency={currency}
          />
        </div>
      </div>
    </>
  );
};
