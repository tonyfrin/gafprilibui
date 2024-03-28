import React from 'react';
import { css, cx } from '@emotion/css';
import {
  UseGafpriPaymentReturn,
  UseGafpriOrderReturn,
  SiteOptions,
  UseCurrenciesReturn,
  UseGafpriBankTypeReturn,
  UseGafpriAccountsReceivableReturn,
} from '../../states';
import { PaymentDeposit } from './PaymentDeposit';
import { Loading } from '../Loading';
import {
  HeaderMenu,
  HeaderMenuItem,
  MainMenu,
  MainMenuItems,
  PaymentMethodsImages,
} from '../../Abstract';

export type OrderStylesContainerProps = {
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundRepeat?: string;
  minHeight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  custom?: string;
};

const orderStylesContainer = (stayles: OrderStylesContainerProps) => css`
  padding-top: ${stayles.paddingTop || '60px'};
  padding-bottom: ${stayles.paddingBottom || '50px'};
  min-height: ${stayles.minHeight || '100vh'};
  ${stayles.backgroundImage &&
  `background-image: url(${stayles.backgroundImage});`}
  background-repeat: ${stayles.backgroundRepeat || 'no-repeat'};
  background-size: ${stayles.backgroundSize || '345vh'};
  ${stayles.custom || ''}
`;

export type PaymentProps = {
  use: UseGafpriPaymentReturn;
  useOrder: UseGafpriOrderReturn;
  useCurrencies: UseCurrenciesReturn;
  useBankType: UseGafpriBankTypeReturn;
  useCredits: UseGafpriAccountsReceivableReturn;
  siteOptions: SiteOptions;
  logoPdf: string;
  containerStyles?: OrderStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  itemsMain: MainMenuItems[];
  headerMenuItems: HeaderMenuItem[];
  images: PaymentMethodsImages;
};

export const Payment = ({
  use,
  useOrder,
  siteOptions,
  useCurrencies,
  useBankType,
  useCredits,
  logoPdf,
  containerStyles = {},
  containerProps = {},
  itemsMain,
  headerMenuItems,
  images,
}: PaymentProps): JSX.Element => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  return (
    <>
      <div
        className={cx(
          orderStylesContainer(containerStyles),
          containerClassName
        )}
        {...restContainerProps}
      >
        {use.pages.states.isFetching && (
          <Loading
            mainStyles={{
              custom: 'height: 100vh;',
            }}
          />
        )}

        {use.pages.states.isInit && (
          <>
            <HeaderMenu items={headerMenuItems} />
            <MainMenu items={itemsMain} />
          </>
        )}

        {use.pages.states.isDeposit && (
          <>
            <PaymentDeposit
              use={use}
              useOrder={useOrder}
              useCredits={useCredits}
              siteOptions={siteOptions}
              logoPdf={logoPdf}
              useCurrencies={useCurrencies}
              useBankType={useBankType}
              images={images}
            />
          </>
        )}
      </div>
    </>
  );
};
