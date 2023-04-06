import React from 'react';
import type { UseInstall } from './../../states';
import { GsSelect, ContainerForm, Input, ContainerButton } from './../index';

type Use = {
  useUser: UseInstall['useUser'];
};

export const User = ({ useUser }: Use): JSX.Element => {
  const [InputTypeDocument, setInputTypeDocument] = React.useState(<></>);
  const [InputCity, setInputCity] = React.useState(<></>);
  const [InputState, setInputState] = React.useState(<></>);
  const [InputCountry, setInputCountry] = React.useState(<></>);

  React.useEffect(() => {
    setInputCountry((): JSX.Element => {
      return (
        <GsSelect
          id="countryUser"
          onChange={(event) => useUser.actions.changeCountry(event)}
          options={useUser.states.countryOptions}
          defaultValue={useUser.states.countryDefault}
          styles={{
            width: '85%',
          }}
        />
      );
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    if (useUser.states.stateCountryOptions.length > 0) {
      setInputState((): JSX.Element => {
        return (
          <GsSelect
            id="stateCountryUser"
            onChange={(event) => useUser.actions.changeStateCountry(event)}
            options={useUser.states.stateCountryOptions}
            defaultValue={useUser.states.stateCountryDefault}
            styles={{
              width: '85%',
            }}
          />
        );
      });
    } else {
      setInputState((): JSX.Element => {
        return (
          <Input
            inputProps={{
              placeholder: 'Estado',
              type: 'text',
              id: 'stateCountryUser',
              onKeyUp: (event) =>
                useUser.actions.changeStateCountry({
                  label: (event.target as HTMLInputElement).value,
                  value: (event.target as HTMLInputElement).value,
                }),
              defaultValue: useUser.states.stateCountry,
            }}
            styles={{
              padding: '10px 19px',
              width: '85%',
            }}
          />
        );
      });
    }
  }, [useUser.states.country, useUser.states.stateCountryOptions]);

  React.useEffect(() => {
    if (useUser.states.cityOptions.length > 0) {
      setInputCity((): JSX.Element => {
        return (
          <GsSelect
            id="cityUser"
            onChange={(event) => useUser.actions.changeCity(event)}
            options={useUser.states.cityOptions}
            defaultValue={useUser.states.cityDefault}
            styles={{
              width: '85%',
            }}
          />
        );
      });
    } else {
      setInputCity((): JSX.Element => {
        return (
          <Input
            inputProps={{
              placeholder: 'Ciudad',
              type: 'text',
              id: 'cityUser',
              onKeyUp: (event) =>
                useUser.actions.changeCity({
                  label: (event.target as HTMLInputElement).value,
                  value: (event.target as HTMLInputElement).value,
                }),
              defaultValue: useUser.states.city,
            }}
            styles={{
              padding: '10px 19px',
              width: '85%',
            }}
          />
        );
      });
    }
  }, [
    useUser.states.country,
    useUser.states.stateCountryOptions,
    useUser.states.cityOptions,
  ]);

  React.useEffect(() => {
    if (useUser.states.documentIndexOptions.length > 0) {
      setInputTypeDocument((): JSX.Element => {
        return (
          <GsSelect
            id="typeDocumentUser"
            onChange={(event) => useUser.actions.changeDocumentIndex(event)}
            options={useUser.states.documentIndexOptions}
            defaultValue={useUser.states.documentIndexDefault}
            styles={{
              width: '90%',
            }}
          />
        );
      });
    } else {
      setInputTypeDocument((): JSX.Element => {
        return (
          <Input
            inputProps={{
              placeholder: 'Tipo de documento',
              type: 'text',
              id: 'typeDocumentUser',
              onKeyUp: (event) =>
                useUser.actions.changeDocumentIndex({
                  label: (event.target as HTMLInputElement).value,
                  value: (event.target as HTMLInputElement).value,
                }),
              defaultValue: useUser.states.documentIndex,
            }}
            styles={{
              padding: '10px 19px',
              width: '90%',
            }}
          />
        );
      });
    }
  }, [useUser.states.country, useUser.states.documentIndexOptions]);

  React.useEffect(() => {
    useUser.actions.validationName(useUser.states.name);
    useUser.actions.validationLastName(useUser.states.lastName);
    useUser.actions.validationRole(useUser.states.role);
    useUser.actions.validationDocumentIndex(useUser.states.documentIndex);
    useUser.actions.validationDocument(useUser.states.document);
    useUser.actions.validationAddress1(useUser.states.address1);
    useUser.actions.validationAddress2(useUser.states.address2);
    useUser.actions.validationCity(useUser.states.city);
    useUser.actions.validationStateCountry(useUser.states.stateCountry);
    useUser.actions.validationCountry(useUser.states.country);
    useUser.actions.validationPostcode(useUser.states.postcode);
    useUser.actions.validationPhone(useUser.states.phone);
    useUser.actions.validationEmail(useUser.states.email);
    useUser.actions.validationPassword(useUser.states.password);
  }, [InputCountry, InputTypeDocument, InputCity, InputState]);

  React.useEffect(() => {
    useUser.actions.validationButtonNext();
  }, [
    useUser.states.nameValid,
    useUser.states.lastNameValid,
    useUser.states.roleValid,
    useUser.states.documentIndexValid,
    useUser.states.documentValid,
    useUser.states.address1Valid,
    useUser.states.address2Valid,
    useUser.states.cityValid,
    useUser.states.stateCountryValid,
    useUser.states.countryValid,
    useUser.states.postcodeValid,
    useUser.states.phoneValid,
    useUser.states.emailValid,
    useUser.states.passwordValid,
  ]);

  return (
    <ContainerForm>
      <>
        <ContainerButton
          styles={{
            width: '96.5%',
          }}
        >
          <>
            <Input
              inputProps={{
                placeholder: 'Nombre',
                type: 'text',
                id: 'nameUser',
                onKeyUp: (event) =>
                  useUser.actions.changeName(
                    (event.target as HTMLInputElement).value
                  ),
                defaultValue: useUser.states.name,
              }}
              styles={{
                width: '85%',
              }}
            />
            <Input
              inputProps={{
                placeholder: 'Apellido',
                type: 'text',
                id: 'lastNameUser',
                onKeyUp: (event) =>
                  useUser.actions.changeLastName(
                    (event.target as HTMLInputElement).value
                  ),
                defaultValue: useUser.states.lastName,
              }}
              styles={{
                width: '85%',
              }}
            />
            <Input
              inputProps={{
                placeholder: 'Rol',
                type: 'text',
                id: 'roleUser',
                onKeyUp: (event) =>
                  useUser.actions.changeRole(
                    (event.target as HTMLInputElement).value
                  ),
                defaultValue: useUser.states.role,
              }}
              styles={{
                width: '85%',
              }}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '96.5%',
          }}
        >
          <>
            {InputTypeDocument}
            <Input
              inputProps={{
                placeholder: 'Número de documento',
                type: 'text',
                id: 'documentUser',
                onKeyUp: (event) =>
                  useUser.actions.changeDocument(
                    (event.target as HTMLInputElement).value
                  ),
                defaultValue: useUser.states.document,
              }}
              styles={{
                padding: '10px 19px',
                width: '90%',
              }}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '96.5%',
          }}
        >
          <>
            <Input
              inputProps={{
                placeholder: 'Dirección',
                type: 'text',
                id: 'address1User',
                onKeyUp: (event) =>
                  useUser.actions.changeAddress1(
                    (event.target as HTMLInputElement).value
                  ),
                defaultValue: useUser.states.address1,
              }}
              styles={{
                padding: '10px 19px',
                width: '90%',
              }}
            />
            <Input
              inputProps={{
                placeholder: 'Dirección 2',
                type: 'text',
                id: 'address2User',
                onKeyUp: (event) =>
                  useUser.actions.changeAddress2(
                    (event.target as HTMLInputElement).value
                  ),
                defaultValue: useUser.states.address2,
              }}
              styles={{
                padding: '10px 19px',
                width: '90%',
              }}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '96.5%',
          }}
        >
          <>
            {InputCity}
            {InputState}
            {InputCountry}
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '96.5%',
          }}
        >
          <>
            <Input
              inputProps={{
                placeholder: 'Código Postal',
                type: 'text',
                id: 'postcodeUser',
                onKeyUp: (event) =>
                  useUser.actions.changePostcode(
                    (event.target as HTMLInputElement).value
                  ),
                defaultValue: useUser.states.postcode,
              }}
              styles={{
                padding: '10px 19px',
                width: '90%',
              }}
            />
            <Input
              inputProps={{
                placeholder: 'Teléfono',
                type: 'text',
                id: 'phoneUser',
                onKeyUp: (event) =>
                  useUser.actions.changePhone(
                    (event.target as HTMLInputElement).value
                  ),
                defaultValue: useUser.states.phone,
              }}
              styles={{
                padding: '10px 19px',
                width: '90%',
              }}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '96.5%',
          }}
        >
          <>
            <Input
              inputProps={{
                placeholder: 'Email',
                type: 'text',
                id: 'emailUser',
                onKeyUp: (event) =>
                  useUser.actions.changeEmail(
                    (event.target as HTMLInputElement).value
                  ),
                defaultValue: useUser.states.email,
              }}
              styles={{
                padding: '10px 19px',
                width: '90%',
              }}
            />
            <Input
              inputProps={{
                placeholder: 'Contraceña',
                type: 'text',
                id: 'passwordUser',
                onKeyUp: (event) =>
                  useUser.actions.changePassword(
                    (event.target as HTMLInputElement).value
                  ),
                defaultValue: useUser.states.password,
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
  );
};
