import React from 'react';
import type { UseInstall } from './../../states';
import { ContainerForm, ContainerButton, GsSelect, Input } from './../index';

type Use = {
  useSitesConfig: UseInstall['useSitesConfig'];
};

export const SiteConfig = ({ useSitesConfig }: Use): JSX.Element => {
  const [InputCurrency, setInputCurrency] = React.useState(<></>);
  const [InputCurrencyLocation, setInputCurrencyLocation] = React.useState(
    <></>
  );
  const [InputSeparator, setInputSeparator] = React.useState(<></>);
  const [InputDecimalNumbers, setInputDecimalNumbers] = React.useState(<></>);
  const [InputTaxes, setInputTaxes] = React.useState(<></>);

  React.useEffect(() => {
    setInputCurrency((): JSX.Element => {
      return (
        <GsSelect
          id="currencySite"
          onChange={(event) => useSitesConfig.actions.changeCurrency(event)}
          options={useSitesConfig.states.currencyOptions}
          defaultValue={useSitesConfig.states.currencyDefault}
          styles={{
            width: '90%',
          }}
        />
      );
    });

    setInputCurrencyLocation((): JSX.Element => {
      return (
        <GsSelect
          id="currencyLocationSite"
          onChange={(event) =>
            useSitesConfig.actions.changeCurrencyLocation(event)
          }
          options={useSitesConfig.states.currencyLocationOptions}
          defaultValue={useSitesConfig.states.currencyLocationDefault}
          styles={{
            width: '90%',
          }}
        />
      );
    });

    setInputSeparator((): JSX.Element => {
      return (
        <GsSelect
          id="separatorSite"
          onChange={(event) => useSitesConfig.actions.changeSeparator(event)}
          options={useSitesConfig.states.separatorOptions}
          defaultValue={useSitesConfig.states.separatorDefault}
          styles={{
            width: '90%',
          }}
        />
      );
    });

    setInputDecimalNumbers((): JSX.Element => {
      return (
        <GsSelect
          id="decimalNumbersSite"
          onChange={(event) =>
            useSitesConfig.actions.changeDecimalNumbers(event)
          }
          options={useSitesConfig.states.decimalNumbersOptions}
          defaultValue={useSitesConfig.states.decimalNumbersDefault}
          styles={{
            width: '90%',
          }}
        />
      );
    });

    setInputTaxes((): JSX.Element => {
      return (
        <GsSelect
          id="taxesSite"
          onChange={(event) => useSitesConfig.actions.changeTaxes(event)}
          options={useSitesConfig.states.taxesOptions}
          defaultValue={useSitesConfig.states.taxesDefault}
          styles={{
            width: '90%',
          }}
        />
      );
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    useSitesConfig.actions.validationCurrency(useSitesConfig.states.currency);
    useSitesConfig.actions.validationCurrencyLocation(
      useSitesConfig.states.currencyLocation
    );
    useSitesConfig.actions.validationSeparator(
      useSitesConfig.states.thousandsSeparator
    );
    useSitesConfig.actions.validationSeparator(
      useSitesConfig.states.decimalSeparator
    );
    useSitesConfig.actions.validationDecimalNumbers(
      useSitesConfig.states.decimalNumbers
    );
    useSitesConfig.actions.validationTaxes(useSitesConfig.states.taxes);
    useSitesConfig.actions.validationHost(useSitesConfig.states.host);
  }, [
    InputCurrency,
    InputCurrencyLocation,
    InputDecimalNumbers,
    InputSeparator,
    InputTaxes,
  ]);

  React.useEffect(() => {
    useSitesConfig.actions.validationButtonNext();
  }, [
    useSitesConfig.states.currencyValid,
    useSitesConfig.states.currencyLocationValid,
    useSitesConfig.states.separatorValid,
    useSitesConfig.states.decimalNumbersValid,
    useSitesConfig.states.taxesValid,
    useSitesConfig.states.hostValid,
  ]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <ContainerForm>
        <>
          <ContainerButton
            styles={{
              width: '96.5%',
            }}
          >
            <>
              {InputCurrency}
              {InputCurrencyLocation}
            </>
          </ContainerButton>
          <ContainerButton
            styles={{
              width: '96.5%',
            }}
          >
            <>
              {InputSeparator}
              {InputDecimalNumbers}
            </>
          </ContainerButton>
          <ContainerButton
            styles={{
              width: '96.5%',
            }}
          >
            <>
              {InputTaxes}
              <Input
                inputProps={{
                  placeholder: 'Host',
                  type: 'text',
                  id: 'hostSite',
                  onKeyUp: (event) =>
                    useSitesConfig.actions.changeHost(
                      (event.target as HTMLInputElement).value
                    ),
                  defaultValue: useSitesConfig.states.host,
                }}
                styles={{
                  padding: '10px 19px',
                  width: '90%',
                }}
              />
            </>
          </ContainerButton>
        </>
      </ContainerForm>
    </>
  );
};
