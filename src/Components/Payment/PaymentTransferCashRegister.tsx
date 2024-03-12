import React from 'react';
import { Loading } from '../Loading';
import {
  UseGafpriPaymentTransferCashRegisterReturn,
  SiteOptions,
  UseCurrenciesReturn,
} from '../../states';
import {
  FadeIn,
  TransferCashRegisterForm,
  FinalPaymentTransferCashRegister,
} from '../../Abstract';
import { PAYMENT_TRANSFER_CASH_REGISTER_ROUTE } from '../../constants';

export type PaymentTransferCashRegisterProps = {
  use: UseGafpriPaymentTransferCashRegisterReturn;
  useCurrencies: UseCurrenciesReturn;
  sitesOptions: SiteOptions;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
};

export const PaymentTransferCashRegister = ({
  use,
  useCurrencies,
  containerProps = {},
  sitesOptions,
}: PaymentTransferCashRegisterProps): JSX.Element => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  return (
    <>
      {use.pages.states.isFetching && (
        <Loading
          mainStyles={{
            custom: 'height: 100vh;',
          }}
        />
      )}

      {use.pages.states.isPaymentCrForm && (
        <FadeIn
          keyName="PaymentCrForm"
          isVisible={use.pages.states.isPaymentCrForm}
        >
          <TransferCashRegisterForm
            useError={use.error}
            siteOptions={sitesOptions}
            useCurrencies={useCurrencies}
            usePayment={use.attributes}
            currentPaymentInfo={{
              validationButtonNext:
                use.attributes.actions.validationButtonNextPaymentCr,
              returnInit: use.pages.actions.onPaymentCrForm,
              buttonNextId: PAYMENT_TRANSFER_CASH_REGISTER_ROUTE,
              next: use.pages.actions.onFinalPaymentCrForm,
              cashRegisterPostsId:
                use.attributes.states.currentCashRegisterPostsId,
              cashRegisterTypePostsId:
                use.attributes.states.currentCashRegisterTypePostsId,
            }}
          />
        </FadeIn>
      )}

      {use.pages.states.isFinalPaymentCrForm && (
        <FadeIn
          keyName="FinalPaymentCrForm"
          isVisible={use.pages.states.isFinalPaymentCrForm}
        >
          <FinalPaymentTransferCashRegister use={use} />
        </FadeIn>
      )}
    </>
  );
};
