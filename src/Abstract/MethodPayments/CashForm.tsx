import React from 'react';
import { Input, SelectCurrencies } from '../Input';
import { ContainerButton } from '../Containers';
import { ModelForm } from '../Form';
import type {
  CurrenciesAttributes,
  SiteOptions,
  UseCurrenciesReturn,
  UseErrorReturn,
} from '../../states';
import { SelectDefault } from '../../helpers';
import { SingleValue } from 'react-select';
import { UseGafpriAttributesPaymentReturn } from '../states/payment';

export type CurrentPaymentInfo = {
  currencyId: number;
  validationCurrencyId: (value: string) => void;
  currencyIdValid: boolean;
  validationButtonNext: () => void;
  changeCurrencyId: (
    value: SingleValue<{ label: string; value: string }>
  ) => void;
  currencyIdOptions: SelectDefault[];
  currencyIdDefault: SelectDefault;
  returnInit: () => void;
  buttonNextId: string;
  add: () => void;
};

export type CashFormProps = {
  useError: UseErrorReturn;
  siteOptions: SiteOptions;
  useCurrencies: UseCurrenciesReturn;
  currentPaymentInfo: CurrentPaymentInfo;
  usePayment: UseGafpriAttributesPaymentReturn;
};

export const CashForm = ({
  useError,
  siteOptions,
  useCurrencies,
  currentPaymentInfo,
  usePayment,
}: CashFormProps): JSX.Element => {
  const [InputCurrencies, setInputCurrencies] = React.useState(<></>);
  const [currentCurrency, setCurrentCurrency] =
    React.useState<CurrenciesAttributes | null>(null);
  const siteCurrency = useCurrencies.actions.getById(siteOptions.currencyId);

  const changeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (siteOptions.currencyId === currentPaymentInfo.currencyId) {
      //cashTransactions
      usePayment.useGeneralPaymentMethods.useCashTransactions.actions.setAmount(
        parseFloat(value)
      );
      usePayment.useGeneralPaymentMethods.useCashTransactions.actions.setChange(
        parseFloat(value)
      );

      //paymentMethods
      usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setAmount(
        parseFloat(value)
      );
      usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setChange(
        parseFloat(value)
      );

      //Payment
      usePayment.actions.setTotal(value);
    } else {
      //cashTransactions
      usePayment.useGeneralPaymentMethods.useCashTransactions.actions.setAmount(
        parseFloat(value)
      );

      //paymentMethods
      usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setAmount(
        parseFloat(value)
      );
    }
  };

  const setChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (siteOptions.currencyId !== currentPaymentInfo.currencyId) {
      //cashTransactions
      usePayment.useGeneralPaymentMethods.useCashTransactions.actions.setChange(
        parseFloat(value)
      );

      //paymentMethods
      usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setChange(
        parseFloat(value)
      );

      //Payment
      usePayment.actions.setTotal(value);
    }
  };

  React.useEffect(() => {
    if (currentPaymentInfo.currencyId !== 0) {
      setCurrentCurrency(
        useCurrencies.actions.getById(currentPaymentInfo.currencyId)
      );
    }
  }, [currentPaymentInfo.currencyId]);

  React.useEffect(() => {
    currentPaymentInfo.validationCurrencyId(`${currentPaymentInfo.currencyId}`);
  }, [
    currentPaymentInfo.currencyId,
    currentPaymentInfo.currencyIdValid,
    InputCurrencies,
  ]);

  React.useEffect(() => {
    currentPaymentInfo.validationButtonNext();
  }, [
    currentPaymentInfo.currencyIdValid,
    usePayment.useGeneralPaymentMethods.useCashTransactions.states.change,
    usePayment.useGeneralPaymentMethods.usePaymentMethods.states.change,
    usePayment.states.total,
  ]);

  React.useEffect(() => {
    setInputCurrencies((): JSX.Element => {
      return (
        <SelectCurrencies
          changeCurrencies={(e) => currentPaymentInfo.changeCurrencyId(e)}
          props={{
            options: currentPaymentInfo.currencyIdOptions,
            defaultValue: currentPaymentInfo.currencyIdDefault,
            title: 'Moneda',
            styles: {
              width: '100%',
            },
          }}
        />
      );
    });
  }, []);

  const title1Text = 'Pago en efectivo';
  const title2Text = 'Agrega un nuevo pago en efectivo';

  const buttonTitle = 'Procesar';
  const buttonAction = currentPaymentInfo.add;

  const handleActions = (action: string, value: any) => {
    switch (action) {
      case 'submit':
        buttonAction();
        break;
      case 'return':
        currentPaymentInfo.returnInit();
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
      error={useError.states.error}
      buttonNextId={currentPaymentInfo.buttonNextId}
    >
      <>
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
