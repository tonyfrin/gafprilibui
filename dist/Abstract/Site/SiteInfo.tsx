import React from 'react';
import { ContainerForm, GsSelect, Input, ContainerButton } from './../index';
import type { UseInstall } from './../../states';

type Use = {
  useSites: UseInstall['useSites'];
};

export const SiteInfo = ({ useSites }: Use): JSX.Element => {
  const [InputTypeDocument, setInputTypeDocument] = React.useState(<></>);
  const [InputCity, setInputCity] = React.useState(<></>);
  const [InputState, setInputState] = React.useState(<></>);
  const [InputCountry, setInputCountry] = React.useState(<></>);

  React.useEffect(() => {
    setInputTypeDocument((): JSX.Element => {
      return (
        <GsSelect
          id="siteDocumentIndex"
          onChange={(event) => useSites.actions.changeSiteDocumentIndex(event)}
          options={useSites.states.siteDocumentIndexOptions}
          defaultValue={useSites.states.siteDocumentIndexDefault}
          styles={{
            width: '90%',
          }}
        />
      );
    });

    setInputCountry((): JSX.Element => {
      return (
        <GsSelect
          id="countrySite"
          onChange={(event) => useSites.actions.changeCountry(event)}
          options={useSites.states.countryOptions}
          defaultValue={useSites.states.countryDefault}
          styles={{
            width: '90%',
          }}
        />
      );
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    if (useSites.states.stateCountryOptions.length > 0) {
      setInputState((): JSX.Element => {
        return (
          <GsSelect
            id="stateCountrySite"
            onChange={(event) => useSites.actions.changeStateCountry(event)}
            options={useSites.states.stateCountryOptions}
            defaultValue={useSites.states.stateCountryDefault}
            styles={{
              width: '90%',
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
              id: 'stateCountrySite',
              onKeyUp: (event) =>
                useSites.actions.changeStateCountry({
                  label: (event.target as HTMLInputElement).value,
                  value: (event.target as HTMLInputElement).value,
                }),
              defaultValue: useSites.states.stateCountry,
            }}
            styles={{
              padding: '10px 19px',
              width: '90%',
            }}
          />
        );
      });
    }

    if (useSites.states.cityOptions.length > 0) {
      setInputCity((): JSX.Element => {
        return (
          <GsSelect
            id="citySite"
            onChange={(event) => useSites.actions.changeCity(event)}
            options={useSites.states.cityOptions}
            defaultValue={useSites.states.cityDefault}
            styles={{
              width: '90%',
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
              id: 'citySite',
              onKeyUp: (event) =>
                useSites.actions.changeCity({
                  label: (event.target as HTMLInputElement).value,
                  value: (event.target as HTMLInputElement).value,
                }),
              defaultValue: useSites.states.city,
            }}
            styles={{
              padding: '10px 19px',
              width: '90%',
            }}
          />
        );
      });
    }
  }, [
    useSites.states.country,
    useSites.states.stateCountryOptions,
    useSites.states.cityOptions,
  ]);

  React.useEffect(() => {
    useSites.actions.validationSiteName(useSites.states.siteName);
    useSites.actions.validationSiteDocumentIndex(
      useSites.states.siteDocumentIndex
    );
    useSites.actions.validationDocument(useSites.states.document);
    useSites.actions.validationAddress1(useSites.states.address1);
    useSites.actions.validationCity(useSites.states.city);
    useSites.actions.validationStateCountry(useSites.states.stateCountry);
    useSites.actions.validationCountry(useSites.states.country);
    useSites.actions.validationPostcode(useSites.states.postcode);
    useSites.actions.validationPhone(useSites.states.phone);
    useSites.actions.validationEmail(useSites.states.email);
  }, [
    InputCountry,
    InputState,
    InputCity,
    useSites.states.country,
    useSites.states.stateCountry,
    useSites.states.city,
  ]);

  React.useEffect(() => {
    useSites.actions.validationButtonNext();
  }, [
    useSites.states.validSiteName,
    useSites.states.validSiteDocumentIndex,
    useSites.states.validDocument,
    useSites.states.validAddress1,
    useSites.states.validAddress2,
    useSites.states.validCity,
    useSites.states.validStateCountry,
    useSites.states.validCountry,
    useSites.states.validPostcode,
    useSites.states.validPhone,
    useSites.states.validEmail,
  ]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <ContainerForm>
        <>
          <Input
            inputProps={{
              placeholder: 'Nombre del sitio',
              type: 'text',
              id: 'siteName',
              onKeyUp: (event) =>
                useSites.actions.changeSiteName(
                  (event.target as HTMLInputElement).value
                ),
              defaultValue: useSites.states.siteName,
            }}
          />
          <ContainerButton
            styles={{
              width: '96.5%',
            }}
          >
            <>
              {InputTypeDocument}

              <Input
                inputProps={{
                  placeholder: 'Numero de documento legal',
                  type: 'text',
                  id: 'siteDocument',
                  onKeyUp: (event) =>
                    useSites.actions.changeDocument(
                      (event.target as HTMLInputElement).value
                    ),
                  defaultValue: useSites.states.document,
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
                  placeholder: 'Dirección 1',
                  type: 'text',
                  id: 'address1',
                  onKeyUp: (event) =>
                    useSites.actions.changeAddres1(
                      (event.target as HTMLInputElement).value
                    ),
                  defaultValue: useSites.states.address1,
                }}
                styles={{
                  width: '90%',
                }}
              />

              <Input
                inputProps={{
                  placeholder: 'Dirección 2',
                  type: 'text',
                  id: 'address2',
                  onKeyUp: (event) =>
                    useSites.actions.changeAddres2(
                      (event.target as HTMLInputElement).value
                    ),
                  defaultValue: useSites.states.address2,
                }}
                styles={{
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
            </>
          </ContainerButton>
          <ContainerButton
            styles={{
              width: '96.5%',
            }}
          >
            <>
              {InputCountry}
              <Input
                inputProps={{
                  placeholder: 'Código Postal',
                  type: 'text',
                  id: 'postcodeSite',
                  onKeyUp: (event) =>
                    useSites.actions.changePostcode(
                      (event.target as HTMLInputElement).value
                    ),
                  defaultValue: useSites.states.postcode,
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
                  placeholder: 'Teléfono',
                  type: 'phone',
                  id: 'phoneSite',
                  onKeyUp: (event) =>
                    useSites.actions.changePhone(
                      (event.target as HTMLInputElement).value
                    ),
                  defaultValue: useSites.states.phone,
                }}
                styles={{
                  padding: '10px 19px',
                  width: '90%',
                }}
              />
              <Input
                inputProps={{
                  placeholder: 'Email',
                  type: 'email',
                  id: 'emailSite',
                  onKeyUp: (event) =>
                    useSites.actions.changeEmail(
                      (event.target as HTMLInputElement).value
                    ),
                  defaultValue: useSites.states.email,
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
