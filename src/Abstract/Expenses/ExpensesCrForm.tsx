import React from 'react';
import {
  Input,
  SelectProjectId,
  SelectExpensesType,
  InputNote,
  InputInvoice,
  SelectCurrencies,
} from '../Input';
import { ContainerButton } from '../Containers';
import { ModelForm } from '../Form';
import type {
  CurrenciesAttributes,
  SiteOptions,
  UseCurrenciesReturn,
  UseGafpriExpensesReturn,
} from '../../states';
import { SpanValue } from '../Span';
import { decimalFormatPriceConverter } from '../../helpers';
import { EXPENSES_ROUTE } from '../../constants';

export type ExpensesCrFormProps = {
  use: UseGafpriExpensesReturn;
  siteOptions: SiteOptions;
  useCurrencies: UseCurrenciesReturn;
};

export const ExpensesCrForm = ({
  use,
  siteOptions,
  useCurrencies,
}: ExpensesCrFormProps): JSX.Element => {
  const [InputProjects, setInputProjects] = React.useState(<></>);
  const [InputExpensesType, setInputExpensesType] = React.useState(<></>);
  const [InputCurrencies, setInputCurrencies] = React.useState(<></>);
  const [currentCurrency, setCurrentCurrency] =
    React.useState<CurrenciesAttributes | null>(null);
  const supplierName = use.attributes.states?.entity
    ? use.attributes.states.entity?.lastName
      ? `${use.attributes.states.entity?.name} ${use.attributes.states.entity?.lastName}`
      : use.attributes.states.entity?.name
    : '';
  const siteCurrency = useCurrencies.actions.getById(siteOptions.currencyId);

  const changeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (siteOptions.currencyId === use.attributes.states.currencyId) {
      //cashTransactions
      use.attributes.usePayment.useGeneralPaymentMethods.useCashTransactions.actions.setAmount(
        parseFloat(value)
      );
      use.attributes.usePayment.useGeneralPaymentMethods.useCashTransactions.actions.setChange(
        parseFloat(value)
      );

      //paymentMethods
      use.attributes.usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setAmount(
        parseFloat(value)
      );
      use.attributes.usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setChange(
        parseFloat(value)
      );

      //Payment
      use.attributes.usePayment.actions.setTotal(value);
      use.attributes.actions.addCashTransaction();
    }

    if (siteOptions.currencyId !== use.attributes.states.currencyId) {
      //cashTransactions
      use.attributes.usePayment.useGeneralPaymentMethods.useCashTransactions.actions.setAmount(
        parseFloat(value)
      );

      //paymentMethods
      use.attributes.usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setAmount(
        parseFloat(value)
      );
    }
  };

  const setChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (siteOptions.currencyId !== use.attributes.states.currencyId) {
      //cashTransactions
      use.attributes.usePayment.useGeneralPaymentMethods.useCashTransactions.actions.setChange(
        parseFloat(value)
      );

      //paymentMethods
      use.attributes.usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setChange(
        parseFloat(value)
      );

      //Payment
      use.attributes.usePayment.actions.setTotal(value);
      use.attributes.actions.addCashTransaction();
    }
  };

  const add = () => {
    use.api.actions.add();
  };

  React.useEffect(() => {
    if (use.attributes.states.currencyId !== 0) {
      setCurrentCurrency(
        useCurrencies.actions.getById(use.attributes.states.currencyId)
      );
    }
  }, [use.attributes.states.currencyId]);

  React.useEffect(() => {
    use.attributes.actions.validationSupplierId(
      use.attributes.states.supplierId
    );
    use.attributes.actions.validationExpensesTypeId(
      use.attributes.states.expensesTypeId
    );
    use.attributes.actions.validationProjectsPostsId(
      use.attributes.states.projectsPostsId
    );
    use.attributes.actions.validationCurrencyId(
      `${use.attributes.states.currencyId}`
    );
  }, [
    use.attributes.states.supplierId,
    use.attributes.states.expensesTypeId,
    use.attributes.states.projectsPostsId,
    use.attributes.states.currencyId,
    use.attributes.states.supplierIdValid,
    use.attributes.states.expensesTypeIdValid,
    use.attributes.states.projectsPostsIdValid,
    use.attributes.states.currencyIdValid,
    InputCurrencies,
    InputExpensesType,
    InputProjects,
  ]);

  React.useEffect(() => {
    use.attributes.actions.validationButtonNext();
  }, [
    use.attributes.states.supplierIdValid,
    use.attributes.states.expensesTypeIdValid,
    use.attributes.states.projectsPostsIdValid,
    use.attributes.states.currencyIdValid,
    use.attributes.states.total,
    use.attributes.usePayment.states.total,
    use.attributes.usePayment.useGeneralPaymentMethods.states
      .totalPaymentMethod,
  ]);

  React.useEffect(() => {
    setInputProjects((): JSX.Element => {
      return (
        <SelectProjectId
          change={(e) => use.attributes.actions.changeProjectsPostsId(e)}
          props={{
            options: use.attributes.states.projectsPostsIdOptions,
            defaultValue: use.attributes.states.projectsPostsIdDefault,
            styles: {
              width: '100%',
            },
          }}
        />
      );
    });

    setInputExpensesType((): JSX.Element => {
      return (
        <SelectExpensesType
          change={(e) => use.attributes.actions.changeExpensesTypeId(e)}
          props={{
            options: use.attributes.states.expensesTypeIdOptions,
            defaultValue: use.attributes.states.expensesTypeIdDefault,
            styles: {
              width: '100%',
            },
          }}
        />
      );
    });

    setInputCurrencies((): JSX.Element => {
      return (
        <SelectCurrencies
          changeCurrencies={(e) => use.attributes.actions.changeCurrencyIdCr(e)}
          props={{
            options: use.attributes.states.currencyIdOptions,
            defaultValue: use.attributes.states.currencyIdDefault,
            title: 'Moneda',
            styles: {
              width: '100%',
            },
          }}
        />
      );
    });
  }, []);

  const title1Text = 'Nuevo Egreso';
  const title2Text = 'Agrega un nuevo engreso';

  const buttonTitle = 'Procesar';
  const buttonAction = add;

  const handleActions = (action: string, value: any) => {
    switch (action) {
      case 'submit':
        buttonAction();
        break;
      case 'return':
        use.pages.actions.returnInit();
        break;
      default:
        console.log('Acción desconocida:', action);
    }
  };

  return (
    <ModelForm
      titles={{
        title1: title1Text,
        title2: title2Text,
      }}
      buttonTitles={{
        mainButton: buttonTitle,
        returnButton: 'Volver',
      }}
      handleActions={handleActions}
      error={use.error.states.error}
      buttonNextId={EXPENSES_ROUTE}
    >
      <>
        <ContainerButton
          styles={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            custom: `
              margin: 20px 0px;
              padding-left: 5%;
            `,
          }}
        >
          <>
            <SpanValue
              value="Proveedor: "
              containerStyles={{
                margin: '0px 15px 0px 0px',
                custom: `
                  font-weight: 700;
                  font-size: 20px;
                `,
              }}
            />
            <SpanValue
              containerStyles={{
                margin: '0',
                custom: `
                  font-weight: 700;
                  font-size: 20px;
                `,
              }}
              value={supplierName}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
          }}
        >
          <>{InputProjects}</>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
          }}
        >
          <>{InputExpensesType}</>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
          }}
        >
          <>
            <InputNote
              change={(e) => use.attributes.actions.changeNote(e)}
              props={{
                inputProps: {
                  placeholder: 'Motivo del gasto',
                  title: 'Motivo del gasto',
                },
                styles: {
                  width: '100%',
                },
              }}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
          }}
        >
          <>
            <InputInvoice
              change={(e) => use.attributes.actions.changeInvoice(e)}
              props={{
                styles: {
                  width: '100%',
                },
              }}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
          }}
        >
          <>
            <Input
              inputProps={{
                onChange: (e) =>
                  use.attributes.actions.changeSubTotal(e.target.value),
                title: 'Sub-Total',
                placeholder: 'Sub-Total',
                type: 'number',
                step: '0.01',
              }}
              styles={{
                width: '100%',
              }}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
          }}
        >
          <>
            <Input
              inputProps={{
                onChange: (e) =>
                  use.attributes.actions.changeSubTotalTax(e.target.value),
                title: 'Impuestos',
                placeholder: 'Impuestos',
                type: 'number',
                step: '0.01',
              }}
              styles={{
                width: '100%',
              }}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            custom: `
              margin: 20px 0px;
              padding-left: 5%;
            `,
          }}
        >
          <>
            <SpanValue
              value="Total: "
              containerStyles={{
                margin: '0px 15px 0px 0px',
                custom: `
                  font-weight: 700;
                  font-size: 20px;
                `,
              }}
            />
            <SpanValue
              containerStyles={{
                margin: '0',
                custom: `
                  font-weight: 700;
                  font-size: 20px;
                `,
              }}
              value={decimalFormatPriceConverter(
                use.attributes.states.total,
                siteOptions.DECIMAL_NUMBERS,
                siteOptions.CURRENCY_SYMBOL,
                siteOptions.CURRENCY_LOCATION,
                siteOptions.CURRENCY_FORMAT
              )}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
          }}
        >
          <>{InputCurrencies}</>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
          }}
        >
          <>
            {currentCurrency && (
              <Input
                inputProps={{
                  onChange: (e) => changeAmount(e),
                  title: `Monto en ${currentCurrency.name} ${currentCurrency.symbol}`,
                  type: 'number',
                  step: '0.01',
                }}
                styles={{
                  width: '100%',
                }}
              />
            )}

            {currentCurrency &&
              siteCurrency &&
              currentCurrency.id !== siteCurrency.id && (
                <Input
                  inputProps={{
                    onChange: (e) => setChange(e),
                    title: `Monto en ${siteCurrency.name} ${siteCurrency.symbol}`,
                    type: 'number',
                    step: '0.01',
                  }}
                  styles={{
                    width: '100%',
                  }}
                />
              )}
          </>
        </ContainerButton>
      </>
    </ModelForm>
  );
};
