import React from 'react';
import { Input, GsSelect } from '../Input';
import type { InputProps, GsSelectPropsExtended } from '../Input';
import { ContainerButton } from '../Containers';
import type { ContainerButtonPropsExtended } from '../Containers';
import { ModelForm } from '../Form';
import type { ModelFormPropsExtended } from '../Form';
import type { UseEntityReturn } from 'src/states';

export type AddressFormProps = {
  use: UseEntityReturn;
  inputCityProps?: InputProps;
  selectCityProps?: GsSelectPropsExtended;
  inputStateProps?: InputProps;
  selectStateProps?: GsSelectPropsExtended;
  selectCountryProps?: GsSelectPropsExtended;
  selectTypeProps?: GsSelectPropsExtended;
  mainTitle?: string;
  subTitle?: string;
  modelFormProps?: ModelFormPropsExtended;
  containerAddressProps?: ContainerButtonPropsExtended;
  inputAddress1Props?: InputProps;
  inputAddress2Props?: InputProps;
  containerCountryProps?: ContainerButtonPropsExtended;
  containerPostCodeProps?: ContainerButtonPropsExtended;
  inputPostCodeProps?: InputProps;
};

export type AddressFormPropsExtended = {
  inputCityProps?: InputProps;
  selectCityProps?: GsSelectPropsExtended;
  inputStateProps?: InputProps;
  selectStateProps?: GsSelectPropsExtended;
  selectCountryProps?: GsSelectPropsExtended;
  selectTypeProps?: GsSelectPropsExtended;
  mainTitle?: string;
  subTitle?: string;
  modelFormProps?: ModelFormPropsExtended;
  containerAddressProps?: ContainerButtonPropsExtended;
  inputAddress1Props?: InputProps;
  inputAddress2Props?: InputProps;
  containerCountryProps?: ContainerButtonPropsExtended;
  containerPostCodeProps?: ContainerButtonPropsExtended;
  inputPostCodeProps?: InputProps;
};

export const AddressAddForm = ({
  use,
  inputCityProps,
  selectCityProps,
  inputStateProps,
  selectStateProps,
  selectCountryProps,
  selectTypeProps,
  mainTitle = 'Nueva dirección',
  subTitle = 'Agregar nueva dirección',
  modelFormProps,
  containerAddressProps,
  inputAddress1Props,
  inputAddress2Props,
  containerCountryProps,
  containerPostCodeProps,
  inputPostCodeProps,
}: AddressFormProps): JSX.Element => {
  const [InputCity, setInputCity] = React.useState(<></>);
  const [InputState, setInputState] = React.useState(<></>);
  const [InputCountry, setInputCountry] = React.useState(<></>);
  const [InputType, setInputType] = React.useState(<></>);

  React.useEffect(() => {
    use.actions.validationAddressType(use.states.addressType);
    use.actions.validationAddress1(use.states.address1);
    use.actions.validationAddress2(use.states.address2);
    use.actions.validationCity(use.states.city);
    use.actions.validationStateCountry(use.states.state);
    use.actions.validationCountry(use.states.country);
    use.actions.validationPostCode(use.states.postCode);
  }, [
    use.states.address1,
    use.states.address2,
    use.states.city,
    InputCity,
    use.states.state,
    InputState,
    use.states.country,
    InputCountry,
    use.states.postCode,
    use.states.addressType,
  ]);

  React.useEffect(() => {
    use.actions.validationButtonNextAddress();
  }, [
    use.states.address1Valid,
    use.states.address2Valid,
    use.states.cityValid,
    use.states.stateCountryValid,
    use.states.countryValid,
    use.states.postCodeValid,
    use.states.addressTypeValid,
  ]);

  const buttonTitle = 'Agregar';

  const handleActions = (action: string, value: any) => {
    switch (action) {
      case 'submit':
        use.actions.addAddress();
        break;
      case 'return':
        use.actions.goUpdate(use.states.entityId);
        break;
      default:
        console.log('Acción desconocida:', action);
    }
  };

  React.useEffect(() => {
    setInputCountry((): JSX.Element => {
      return (
        <GsSelect
          id="entityCountry"
          onChange={(event) => use.actions.changeCountry(event)}
          options={use.states.countryOptions}
          defaultValue={use.states.countryDefault}
          styles={{
            width: '89%',
          }}
          {...selectCountryProps}
        />
      );
    });

    setInputType((): JSX.Element => {
      return (
        <GsSelect
          id="entityAddressType"
          onChange={(event) => use.actions.changeAddressType(event)}
          options={use.states.addressTypeOptions}
          defaultValue={use.states.addressTypeDefault}
          styles={{
            width: '92%',
          }}
          {...selectTypeProps}
        />
      );
    });
  }, []);

  React.useEffect(() => {
    if (use.states.stateCountryOptions.length > 0) {
      setInputState((): JSX.Element => {
        return (
          <GsSelect
            id="entityStateCountry"
            onChange={(event) => use.actions.changeStateCountry(event)}
            options={use.states.stateCountryOptions}
            defaultValue={use.states.stateCountryDefault}
            styles={{
              width: '89%',
            }}
            {...selectStateProps}
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
              id: 'entityStateCountry',
              onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
                use.actions.changeStateCountry({
                  label: (event.target as HTMLInputElement).value,
                  value: (event.target as HTMLInputElement).value,
                }),
              defaultValue: use.states.state,
            }}
            styles={{
              padding: '10px 19px',
              width: '89%',
            }}
            {...inputStateProps}
          />
        );
      });
    }

    if (use.states.cityOptions.length > 0) {
      setInputCity((): JSX.Element => {
        return (
          <GsSelect
            id="entityCity"
            onChange={(event) => use.actions.changeCity(event)}
            options={use.states.cityOptions}
            defaultValue={use.states.cityDefault}
            styles={{
              width: '89%',
            }}
            {...selectCityProps}
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
              id: 'entityCity',
              onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
                use.actions.changeCity({
                  label: (event.target as HTMLInputElement).value,
                  value: (event.target as HTMLInputElement).value,
                }),
              defaultValue: use.states.city,
            }}
            styles={{
              padding: '10px 19px',
              width: '89%',
            }}
            {...inputCityProps}
          />
        );
      });
    }
  }, [
    use.states.country,
    use.states.stateCountryOptions,
    use.states.cityOptions,
  ]);

  React.useEffect(() => {
    use.actions.changeCityOptions();
  }, [use.actions.changeCityOptions]);

  React.useEffect(() => {
    use.actions.changeStateCountryOptions();
  }, [use.actions.changeStateCountryOptions]);

  return (
    <ModelForm
      titles={{
        title1: mainTitle,
        title2: subTitle,
      }}
      buttonTitles={{
        mainButton: buttonTitle,
        returnButton: 'Volver',
      }}
      handleActions={handleActions}
      error={use.states.error}
      {...modelFormProps}
    >
      <>
        <ContainerButton
          styles={{
            width: '100%',
            justifyContent: 'start',
          }}
          {...containerAddressProps}
        >
          <>
            <Input
              inputProps={{
                placeholder: 'Dirección 1',
                type: 'text',
                id: 'address1',
                onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
                  use.actions.changeAddress1(
                    (event.target as HTMLInputElement).value
                  ),
                defaultValue: use.states.address1,
              }}
              styles={{
                width: '92%',
                padding: '09px 19px',
              }}
              {...inputAddress1Props}
            />
            <Input
              inputProps={{
                placeholder: 'Dirección 2',
                type: 'text',
                id: 'address2',
                onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
                  use.actions.changeAddress2(
                    (event.target as HTMLInputElement).value
                  ),
                defaultValue: use.states.address2,
              }}
              styles={{
                width: '92%',
                padding: '09px 19px',
              }}
              {...inputAddress2Props}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
            justifyContent: 'start',
          }}
          {...containerCountryProps}
        >
          <>
            {InputCity}
            {InputState}
            {InputCountry}
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
            justifyContent: 'start',
          }}
          {...containerPostCodeProps}
        >
          <>
            <Input
              inputProps={{
                placeholder: 'Código Postal',
                type: 'text',
                id: 'entityCodePost',
                onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
                  use.actions.changePostCode(
                    (event.target as HTMLInputElement).value
                  ),
                defaultValue: use.states.postCode,
              }}
              styles={{
                width: '92%',
                padding: '09px 19px',
              }}
              {...inputPostCodeProps}
            />
            {InputType}
          </>
        </ContainerButton>
      </>
    </ModelForm>
  );
};
