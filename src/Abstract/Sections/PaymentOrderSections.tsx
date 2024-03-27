import React from 'react';
import { css, cx } from '@emotion/css';
import { SiteOptions } from '../../states';
import { decimalFormatPriceConverter } from '../../helpers';
import { SingleBodyTable } from '../Table';
import { CircleButton } from '../Button';
import { PaymentMethodsAttributes } from '../states/paymentMethods';
import { Title1 } from '../Title';

export type PaymentOrderSectionsProps = {
  payments: PaymentMethodsAttributes[];
  siteOptions: SiteOptions;
  images?: {
    zelle: string;
    pagoMovil: string;
    transfer: string;
    cash: string;
  };
  paymentType: string;
  total: number;
};

const orderStylesMainContainer = () => css`
  display: flex;
  margin-top: 20px;
  width: 45%;
  align-items: flex-start;
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
  images,
  paymentType,
  total,
}: PaymentOrderSectionsProps): JSX.Element => {
  const items = payments.map((item, index) => {
    const title =
      item.methodType === 'bank'
        ? 'Transacción Electrónica'
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
          {images && (
            <span className={cx(creditHeaderLineColStyles('50%'))}>
              <CircleButton
                image={images[item.paymentType as keyof typeof images]}
                imageStyles={{
                  width: '20px',
                  padding: '2px',
                }}
              />
            </span>
          )}
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

  items.push([
    <div className={cx(creditHeaderLineContainerStyles())}>
      <span className={cx(creditHeaderLineColStyles('16.66666666%'))}></span>

      <span className={cx(creditHeaderLineColStyles('50%'))}></span>
      <span className={cx(creditHeaderLineColStyles('25%'))}>
        {' '}
        Total:
        {decimalFormatPriceConverter(
          total || 0,
          siteOptions.DECIMAL_NUMBERS,
          siteOptions.CURRENCY_SYMBOL || '',
          siteOptions.CURRENCY_LOCATION
        )}
      </span>
    </div>,
  ]);

  return (
    <>
      <div className={cx(orderStylesMainContainer())}>
        <div className={cx(orderStylesContainer())}>
          <Title1 title={paymentType} />
          <SingleBodyTable
            data={items}
            containerStyles={{
              minHeight: 'auto',
            }}
          />
        </div>
      </div>
    </>
  );
};
