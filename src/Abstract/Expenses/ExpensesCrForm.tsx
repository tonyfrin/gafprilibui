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
    }
  };

  const add = () => {
    use.attributes.actions.addCashTransaction();
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
    use.attributes.actions.validationButtonNext();
  }, [
    use.attributes.states.supplierIdValid,
    use.attributes.states.expensesTypeIdValid,
    use.attributes.states.projectsPostsIdValid,
    use.attributes.states.currencyIdValid,
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
    >
      <>
        <ContainerButton
          styles={{
            width: '100%',
          }}
        >
          <>
            <Input
              inputProps={{
                readOnly: true,
                value: supplierName,
                title: 'Proveedor',
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
                readOnly: true,
                value: use.attributes.states.total,
                title: 'Total',
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
