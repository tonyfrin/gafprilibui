import React from 'react';
import type { UseInstall } from './../../states';
import { GsSelect, ContainerForm, Input } from './../index';

type Use = {
  useTypeDocument: UseInstall['useTypeDocument'];
};

export const TypeDocument = ({ useTypeDocument }: Use): JSX.Element => {
  const [InputCountry, setInputCountry] = React.useState(<></>);

  React.useEffect(() => {
    setInputCountry((): JSX.Element => {
      return (
        <GsSelect
          id="countryTypeDocument"
          onChange={(event) => useTypeDocument.actions.changeCountry(event)}
          options={useTypeDocument.states.countryOptions}
          defaultValue={useTypeDocument.states.countryDefault}
        />
      );
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    useTypeDocument.actions.validationCountry(useTypeDocument.states.country);
    useTypeDocument.actions.validationName(useTypeDocument.states.name);
  }, [InputCountry]);

  React.useEffect(() => {
    useTypeDocument.actions.validationButtonNext();
  }, [useTypeDocument.states.countryValid, useTypeDocument.states.nameValid]);

  return (
    <>
      <ContainerForm>
        <>
          {InputCountry}
          <Input
            inputProps={{
              placeholder: 'Nombre del tipo de Documento',
              type: 'text',
              id: 'nameTypeDocument',
              onKeyUp: (event) =>
                useTypeDocument.actions.changeName(
                  (event.target as HTMLInputElement).value
                ),
              defaultValue: useTypeDocument.states.name,
            }}
          />
        </>
      </ContainerForm>
    </>
  );
};
