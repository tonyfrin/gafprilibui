import React from 'react';
import { SingleValue } from 'react-select';
import { css, cx } from '@emotion/css';
import {
  UseGafpriPaymentReturn,
  SiteOptions,
  UseGafpriOrderReturn,
  UseCurrenciesReturn,
  UseGafpriBankTypeReturn,
  UseGafpriAccountsReceivableReturn,
} from '../../states';
import { OrderPayment } from '../Order';
import { CreditPayment } from '../Credits';
import { Loading } from '../Loading';
import {
  Modal,
  CashForm,
  ElectronicForm,
  CreditForm,
  PaymentLoginForm,
  SingleForm,
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

export type PaymentDepositProps = {
  use: UseGafpriPaymentReturn;
  siteOptions: SiteOptions;
  useOrder: UseGafpriOrderReturn;
  useCredits: UseGafpriAccountsReceivableReturn;
  useCurrencies: UseCurrenciesReturn;
  useBankType: UseGafpriBankTypeReturn;
  logoPdf: string;
  containerStyles?: OrderStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  images: PaymentMethodsImages;
};

export const PaymentDeposit = ({
  use,
  siteOptions,
  useOrder,
  useCredits,
  useCurrencies,
  useBankType,
  logoPdf,
  containerStyles = {},
  containerProps = {},
  images,
}: PaymentDepositProps): JSX.Element => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  console.log(
    use.attributes.useGeneralPaymentMethods.states.arrayPaymentMethod
  );

  const returnPayment = () => {
    use.attributes.useGeneralPaymentMethods.pages.actions.onFetching();
    use.attributes.useGeneralPaymentMethods.actions.partiallyInfoReset();
    use.subPagesDeposit.actions.closeModalPage();
  };

  const nextCash = () => {
    use.attributes.useGeneralPaymentMethods.actions.partiallyInfoReset();
    use.subPagesDeposit.actions.closeModalPage();
  };

  const changeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    use.attributes.useGeneralPaymentMethods.usePaymentMethods.actions.setNumber(
      e.target.value
    );
  };

  const changeNote = (e: React.ChangeEvent<HTMLInputElement>) => {
    use.attributes.useGeneralPaymentMethods.usePaymentMethods.actions.setNote(
      e.target.value
    );
  };

  const addElectronic = () => {
    if (
      use.attributes.useGeneralPaymentMethods.usePaymentMethods.states.amount >
        0 &&
      use.attributes.useGeneralPaymentMethods.usePaymentMethods.states.change >
        0 &&
      use.attributes.useGeneralPaymentMethods.useBankTransactions.states
        .amount > 0 &&
      use.attributes.useGeneralPaymentMethods.useBankTransactions.states
        .change > 0 &&
      use.attributes.useGeneralPaymentMethods.useBankTransactions.states
        .bankTypePostsId !== 0
    ) {
      use.attributes.useGeneralPaymentMethods.actions.addElectronicPaymentMethod();
      use.attributes.useGeneralPaymentMethods.actions.partiallyInfoReset();
      use.subPagesDeposit.actions.closeModalPage();
    }
  };

  const nextCredit = () => {
    use.attributes.useGeneralPaymentMethods.pages.actions.onAuthorization();
  };

  const addCredit = () => {
    use.attributes.useGeneralPaymentMethods.actions.addCreditPaymentMethod(
      useOrder.attributes.states.customerId,
      siteOptions.currencyId
    );
    use.attributes.useGeneralPaymentMethods.actions.partiallyInfoReset();
    use.subPagesDeposit.actions.closeModalPage();
  };

  const addSingle = () => {
    use.attributes.useGeneralPaymentMethods.actions.addSinglePaymentMethod(
      siteOptions.currencyId
    );
    use.attributes.useGeneralPaymentMethods.actions.partiallyInfoReset();
    use.subPagesDeposit.actions.closeModalPage();
  };

  const changeBankTypePostsId = (
    e: SingleValue<{
      value: string;
      label: string;
    }>
  ) => {
    if (e === null) {
      use.attributes.useGeneralPaymentMethods.useBankTransactions.actions.setBankTypePostsId(
        0
      );
      return;
    }
    const value = parseInt(e.value, 10);
    if (isNaN(value)) {
      use.attributes.useGeneralPaymentMethods.useBankTransactions.actions.setBankTypePostsId(
        0
      );
      return;
    }
    use.attributes.useGeneralPaymentMethods.useBankTransactions.actions.setBankTypePostsId(
      value
    );
  };

  return (
    <>
      <div
        className={cx(
          orderStylesContainer(containerStyles),
          containerClassName
        )}
        {...restContainerProps}
      >
        {use.subPagesDeposit.states.isFetching && (
          <Loading
            mainStyles={{
              custom: 'height: 100vh;',
            }}
          />
        )}

        {use.subPagesDeposit.states.isOrder && (
          <>
            <OrderPayment
              use={use}
              useOrder={useOrder}
              siteOptions={siteOptions}
              logoPdf={logoPdf}
            />
          </>
        )}

        {use.subPagesDeposit.states.isCredits && (
          <>
            <CreditPayment
              use={use}
              useCredits={useCredits}
              siteOptions={siteOptions}
              logoPdf={logoPdf}
              useOrder={useOrder}
              images={images}
            />
          </>
        )}

        {use.subPagesDeposit.states.modalPage && (
          <Modal open={use.subPagesDeposit.states.modalPage}>
            <>
              {use.attributes.useGeneralPaymentMethods.pages.states
                .isFetching && <Loading />}

              {use.attributes.useGeneralPaymentMethods.pages.states.isCash && (
                <CashForm
                  useError={use.error}
                  siteOptions={siteOptions}
                  useCurrencies={useCurrencies}
                  currentPaymentInfo={{
                    validationButtonNext: () =>
                      use.attributes.actions.validationButtonNextPaymentCash(),

                    returnInit: () => returnPayment(),

                    next: () => nextCash(),
                    buttonNextId: 'cash',
                    cashRegisterTypePostsId: 6,
                    cashRegisterPostsId: 7,
                    type: use.attributes.useGeneralPaymentMethods.states.type,
                  }}
                  usePayment={use.attributes}
                />
              )}
              {use.attributes.useGeneralPaymentMethods.pages.states
                .isTransfer && (
                <>
                  <ElectronicForm
                    useError={use.error}
                    siteOptions={siteOptions}
                    useCurrencies={useCurrencies}
                    usePayment={use.attributes}
                    useBankType={useBankType}
                    currentPaymentInfo={{
                      paymentType:
                        use.attributes.useGeneralPaymentMethods
                          .usePaymentMethods.states.paymentType,
                      changeNumber,
                      changeBankTypePostsId,
                      bankTypePostsId:
                        use.attributes.useGeneralPaymentMethods
                          .useBankTransactions.states.bankTypePostsId,
                      changeNote,
                      add: addElectronic,
                      infoReset: () =>
                        use.attributes.useGeneralPaymentMethods.actions.partiallyInfoReset(),
                      returnInit: () => returnPayment(),
                      buttonNextId: 'electronic',
                      changeNameSend: (
                        e: React.ChangeEvent<HTMLInputElement>
                      ) =>
                        use.attributes.useGeneralPaymentMethods.useBankTransactions.actions.setNameSend(
                          e.target.value
                        ),
                    }}
                  />
                </>
              )}

              {use.attributes.useGeneralPaymentMethods.pages.states
                .isCredit && (
                <>
                  <CreditForm
                    useError={use.error}
                    siteOptions={siteOptions}
                    useOrder={useOrder}
                    usePayment={use.attributes}
                    useCurrencies={useCurrencies}
                    currentPaymentInfo={{
                      orderPostsId: useOrder.attributes.states.currentId,
                      difference: use.attributes.states.difference,
                      amount:
                        use.attributes.useGeneralPaymentMethods
                          .usePaymentMethods.states.amount,
                      validationButtonNext:
                        use.attributes.actions
                          .validationButtonNextPaymentCredit,
                      add: () => nextCredit(),
                      infoReset: () =>
                        use.attributes.useGeneralPaymentMethods.actions.partiallyInfoReset(),
                      returnInit: () => returnPayment(),
                      buttonNextId: 'credit-next',
                    }}
                  />
                </>
              )}

              {use.attributes.useGeneralPaymentMethods.pages.states
                .isAuthorization && (
                <>
                  <PaymentLoginForm
                    validationButtonNext={
                      use.attributes.actions
                        .validationButtonNextPaymentCreditAdd
                    }
                    validationAuthorizedLogin={
                      use.attributes.useGeneralPaymentMethods.useCreditOpening
                        .actions.validationAuthorizedLogin
                    }
                    validationAuthorizedPassword={
                      use.attributes.useGeneralPaymentMethods.useCreditOpening
                        .actions.validationAuthorizedPassword
                    }
                    authorizedLogin={
                      use.attributes.useGeneralPaymentMethods.useCreditOpening
                        .states.authorizedLogin
                    }
                    authorizedPassword={
                      use.attributes.useGeneralPaymentMethods.useCreditOpening
                        .states.authorizedPassword
                    }
                    changeAuthorizedLogin={
                      use.attributes.useGeneralPaymentMethods.useCreditOpening
                        .actions.setAuthorizedLogin
                    }
                    changeAuthorizedPassword={
                      use.attributes.useGeneralPaymentMethods.useCreditOpening
                        .actions.setAuthorizedPassword
                    }
                    inputId="credit-add"
                    add={addCredit}
                  />
                </>
              )}

              {use.attributes.useGeneralPaymentMethods.pages.states
                .isSingle && (
                <>
                  <SingleForm
                    useError={use.error}
                    siteOptions={siteOptions}
                    currentPaymentInfo={{
                      difference: use.attributes.states.difference,
                      amount:
                        use.attributes.useGeneralPaymentMethods
                          .usePaymentMethods.states.amount,
                      add: addSingle,
                      validationButtonNext:
                        use.attributes.actions
                          .validationButtonNextPaymentSingle,
                      infoReset:
                        use.attributes.useGeneralPaymentMethods.actions
                          .partiallyInfoReset,
                      returnInit: returnPayment,
                      buttonNextId: 'single-add',
                      paymentType:
                        use.attributes.useGeneralPaymentMethods
                          .usePaymentMethods.states.paymentType,
                    }}
                    usePayment={use.attributes}
                    useCurrencies={useCurrencies}
                  />
                </>
              )}
            </>
          </Modal>
        )}
      </div>
    </>
  );
};
