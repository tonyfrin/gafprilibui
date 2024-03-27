import React from 'react';
import { css, cx } from '@emotion/css';
import { SiteOptions } from '../../states';
import { decimalFormatPriceConverter } from '../../helpers';
import { SingleBodyTable } from '../Table';
import { PaymentAttributesReturn } from '../states/payment';
import { CircleButton } from '../Button';
import Zelle from '../../../assets/img/logo-zelle.png';

export type PaymentOrderSectionsProps = {
  payments: PaymentAttributesReturn;
  siteOptions: SiteOptions;
};

const orderStylesMainContainer = () => css`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const orderStylesContainer = () => css`
  background-color: #fff;
  padding: 10px 40px;
  width: 90%;
  border-radius: 10px;
  height: auto;
  margin: 0;
`;

const creditHeaderLineContainerStyles = () => css`
  background-color: #eaeaea;
  margin: 1%;
  border-radius: 5px;
  padding: 1%;
  display: flex;
  font-size: 12px;
`;

const creditHeaderLineColStyles = (width: string, custom?: string) => css`
  text-align: center;
  width: ${width};
  margin: auto 0px;
  ${custom || ''};
`;

export const PaymentOrderSections = ({
  payments,
  siteOptions,
}: PaymentOrderSectionsProps): JSX.Element => {
  const items = payments.paymentMethod.map((item, index) => {
    const title =
      item.methodType === 'bank'
        ? 'Banco'
        : item.methodType === 'credit'
        ? 'Crédito'
        : item.methodType === 'cash'
        ? 'Efectivo'
        : '';
    item.methodType === 'single' && item.paymentType === 'discount'
      ? 'Descuento'
      : item.methodType === 'single' && item.paymentType === 'surplus'
      ? 'Sobrante'
      : '';
    const number = item.number || '';

    return [
      <>
        <div className={cx(creditHeaderLineContainerStyles())}>
          <span className={cx(creditHeaderLineColStyles('16.66666666%'))}>
            {title}
          </span>
          <span className={cx(creditHeaderLineColStyles('50%'))}>
            <CircleButton image={Zelle} />
          </span>
          <span className={cx(creditHeaderLineColStyles('50%'))}>{number}</span>
          <span className={cx(creditHeaderLineColStyles('25%'))}>
            {decimalFormatPriceConverter(
              item.change || 0,
              siteOptions.DECIMAL_NUMBERS,
              siteOptions.CURRENCY_SYMBOL || '',
              siteOptions.CURRENCY_LOCATION
            )}
          </span>
        </div>
      </>,
    ];
  });

  return (
    <>
      <div className={cx(orderStylesMainContainer())}>
        <div className={cx(orderStylesContainer())}>
          <SingleBodyTable data={items} />
        </div>
      </div>
    </>
  );
};
