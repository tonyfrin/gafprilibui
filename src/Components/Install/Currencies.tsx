import React from 'react';
import { ContainerForm } from '../../Abstract';
import { Step } from '../../Abstract';
import { GsSelect } from '../../Abstract';
import type { UseGafpri } from '../../states';

type Use = {
  states: UseGafpri['states'],
  actions: UseGafpri['actions'],
  useCurrency: UseGafpri['useCurrency']
}

export const Curriencies = ({
  states,
  actions,
  useCurrency,
}: Use): JSX.Element => {
  React.useEffect(() => {
    useCurrency.actions.validationCurrencyValue(
      useCurrency.states.currenciesDefault.value
    );
    useCurrency.actions.validationButtonCurrency(
      useCurrency.states.validationCurrency
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Step
        step="1"
        title="Tipo de Moneda Principal"
        buttonNextTitle="Siguiente"
        buttonNextProps={{
          onClick: actions.nextCurrency,
          id: 'nextCurrency',
        }}
      />
      <ContainerForm>
        <>
          <GsSelect
            id="currencyName"
            onChange={(event) => useCurrency.actions.currencyChange(event)}
            options={useCurrency.states.currenciesOptions}
            defaultValue={useCurrency.states.currenciesDefault}
          />
        </>
      </ContainerForm>
    </>
  );
};
