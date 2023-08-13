import React from 'react';
import { css } from '@emotion/css';
import type { UseEntityReturn } from '../../states';
import { Input, GsSelect } from '../Input';
import type { InputProps, GsSelectPropsExtended } from '../Input';
import { ContainerButton } from '../Containers';
import type { ContainerButtonPropsExtended } from '../Containers';
import { Button } from '../Button';
import { Loading } from '../../Components';
import { ModelForm } from '../Form';
import type { ModelFormPropsExtended } from '../Form';

export type EntityAddFormProps = {
  use: UseEntityReturn;
  formType: 'personal' | 'legal';
  photoMainContainerStyle?: string;
  photoContainerStyle?: string;
  photoFormStyle?: string;
  loadingContainerStyle?: string;
  photoStyle?: string;
  nameContainerStyle?: string;
  modelFormProps?: ModelFormPropsExtended;
  nameProps?: InputProps;
  lastNameProps?: InputProps;
  typeDocumentIdIdProps?: GsSelectPropsExtended;
  containerDocumentProps?: ContainerButtonPropsExtended;
  indexProps?: GsSelectPropsExtended;
  digitProps?: InputProps;
  containerAddressProps?: ContainerButtonPropsExtended;
  address1Props?: InputProps;
  address2Props?: InputProps;
  containerCityStateProps?: ContainerButtonPropsExtended;
  cityInputProps?: InputProps;
  stateInputProps?: InputProps;
  citySelectProps?: GsSelectPropsExtended;
  stateSelectProps?: GsSelectPropsExtended;
  containerCountryProps?: ContainerButtonPropsExtended;
  countryProps?: GsSelectPropsExtended;
  codePostProps?: InputProps;
  containerEmailPhoneProps?: ContainerButtonPropsExtended;
  emailProps?: InputProps;
  phoneProps?: InputProps;
};

export type EntityAddFormPropsExtended = {
  photoMainContainerStyle?: string;
  photoContainerStyle?: string;
  photoFormStyle?: string;
  loadingContainerStyle?: string;
  photoStyle?: string;
  nameContainerStyle?: string;
  modelFormProps?: ModelFormPropsExtended;
  nameProps?: InputProps;
  lastNameProps?: InputProps;
  typeDocumentIdIdProps?: GsSelectPropsExtended;
  containerDocumentProps?: ContainerButtonPropsExtended;
  indexProps?: GsSelectPropsExtended;
  digitProps?: InputProps;
  containerAddressProps?: ContainerButtonPropsExtended;
  address1Props?: InputProps;
  address2Props?: InputProps;
  containerCityStateProps?: ContainerButtonPropsExtended;
  cityInputProps?: InputProps;
  stateInputProps?: InputProps;
  citySelectProps?: GsSelectPropsExtended;
  stateSelectProps?: GsSelectPropsExtended;
  containerCountryProps?: ContainerButtonPropsExtended;
  countryProps?: GsSelectPropsExtended;
  codePostProps?: InputProps;
  containerEmailPhoneProps?: ContainerButtonPropsExtended;
  emailProps?: InputProps;
  phoneProps?: InputProps;
};

const defaultPhotoContainerStyle = css`
  width: 100%;
`;

const defaultPhotoFormStyle = css`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
`;

const defaultLoadingContainerStyle = css`
  transition: all 1s ease 0s;
  width: 100%;
  max-width: 120px;
  max-height: 120px;
  object-fit: cover;
  border: 1px solid #ebebeb;
  margin: auto;
  border-radius: 100%;
`;

const defaultphotoStyle = css`
  transition: all 1s ease 0s;
  width: 100%;
  max-width: 120px;
  max-height: 120px;
  object-fit: cover;
  border: 1px solid #ebebeb;
  margin: auto;
  border-radius: 100%;
`;

const defaultPhotoMainContainerStyle = css`
  display: flex;
  justify-content: space-between;
`;

const defaultNameContainerStyle = css`
  width: 100%;
`;

export const EntityAddForm = ({
  use,
  formType,
  photoMainContainerStyle = defaultPhotoMainContainerStyle,
  photoContainerStyle = defaultPhotoContainerStyle,
  photoFormStyle = defaultPhotoFormStyle,
  loadingContainerStyle = defaultLoadingContainerStyle,
  photoStyle = defaultphotoStyle,
  nameContainerStyle = defaultNameContainerStyle,
  modelFormProps,
  nameProps,
  lastNameProps,
  typeDocumentIdIdProps,
  containerDocumentProps,
  indexProps,
  digitProps,
  containerAddressProps,
  address1Props,
  address2Props,
  containerCityStateProps,
  cityInputProps,
  stateInputProps,
  citySelectProps,
  stateSelectProps,
  containerCountryProps,
  countryProps,
  codePostProps,
  containerEmailPhoneProps,
  emailProps,
  phoneProps,
}: EntityAddFormProps): JSX.Element => {
  const [InputTypeDocumentIdId, setInputTypeDocumentIdId] = React.useState(
    <></>
  );
  const [InputIndex, setInputIndex] = React.useState(<></>);
  const [InputCity, setInputCity] = React.useState(<></>);
  const [InputState, setInputState] = React.useState(<></>);
  const [InputCountry, setInputCountry] = React.useState(<></>);
  const isPersonalForm = formType === 'personal';
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    use.actions.validationPhoto(use.states.photo);
    use.actions.validationName(use.states.name);
    use.actions.validationLastName(use.states.lastName);
    const typeDocumentIdId =
      use.states.typeDocumentIdId === null
        ? ''
        : `${use.states.typeDocumentIdId}`;
    use.actions.validationTypeDocumentIdId(typeDocumentIdId);
    use.actions.validationIndex(use.states.index);
    use.actions.validationDigit(use.states.digit);
    use.actions.validationAddressType(use.states.addressType);
    use.actions.validationAddress1(use.states.address1);
    use.actions.validationAddress2(use.states.address2);
    use.actions.validationCity(use.states.city);
    use.actions.validationStateCountry(use.states.state);
    use.actions.validationCountry(use.states.country);
    use.actions.validationPostCode(use.states.postCode);
    use.actions.validationEmail(use.states.email);
    use.actions.validationPhone(use.states.phone);
    use.actions.validationStatus(use.states.status);
    use.actions.validationType(use.states.type);
  }, [
    use.states.photo,
    use.states.name,
    use.states.lastName,
    use.states.typeDocumentIdId,
    InputTypeDocumentIdId,
    use.states.index,
    InputIndex,
    use.states.digit,
    use.states.address1,
    use.states.address2,
    use.states.city,
    InputCity,
    use.states.state,
    InputState,
    use.states.country,
    InputCountry,
    use.states.postCode,
    use.states.email,
    use.states.phone,
    use.states.status,
    use.states.type,
    use.states.addressType,
  ]);

  React.useEffect(() => {
    use.actions.validationButtonNext();
  }, [
    use.states.photoValid,
    use.states.nameValid,
    use.states.lastNameValid,
    use.states.typeDocumentIdIdValid,
    use.states.indexValid,
    use.states.digitValid,
    use.states.address1Valid,
    use.states.address2Valid,
    use.states.cityValid,
    use.states.stateCountryValid,
    use.states.countryValid,
    use.states.postCodeValid,
    use.states.emailValid,
    use.states.phoneValid,
    use.states.statusValid,
    use.states.addressTypeValid,
  ]);

  React.useEffect(() => {
    use.actions.changeStatus({ value: 'active', label: 'Activo' });
    use.actions.changeAddressType({ value: 'bill', label: 'Facturación' });
  }, []);

  const title1Text = isPersonalForm
    ? 'Nueva personal natural'
    : 'Nueva persona jurídica';

  const title2Text = isPersonalForm
    ? 'Agrega una nueva persona natural'
    : `Agrega una nueva persona jurídica`;

  const buttonTitle = 'Agregar';

  const handleActions = (action: string, value: any) => {
    switch (action) {
      case 'submit':
        use.actions.add();
        break;
      case 'return':
        use.actions.returnInit();
        break;
      default:
        console.log('Acción desconocida:', action);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  React.useEffect(() => {
    if (use.states.photo) {
      const img = new Image();
      img.src = use.states.photo;
      img.onload = () => {
        use.actions.setSubmitting(false);
      };
      img.onerror = () => {
        use.actions.changeError([
          `Error al cargar la imagen: ${use.states.photo}`,
        ]);
        use.actions.setSubmitting(true);
      };
    }
  }, [use.states.photo]);

  React.useEffect(() => {
    setInputTypeDocumentIdId((): JSX.Element => {
      return (
        <GsSelect
          id="entityTypeDocumentIdId"
          onChange={(e) => use.actions.changeTypeDocumentIdId(e)}
          options={use.states.typeDocumentIdIdOptions}
          defaultValue={use.states.typeDocumentIdIdDefault}
          styles={{
            width: '100%',
          }}
          {...typeDocumentIdIdProps}
        />
      );
    });

    setInputIndex((): JSX.Element => {
      return (
        <GsSelect
          id="entityDocumentIndex"
          onChange={(e) => use.actions.changeIndex(e)}
          options={use.states.indexOptions}
          defaultValue={use.states.indexDefault}
          styles={{
            width: '92%',
          }}
          {...indexProps}
        />
      );
    });

    setInputCountry((): JSX.Element => {
      return (
        <GsSelect
          id="entityCountry"
          onChange={(event) => use.actions.changeCountry(event)}
          options={use.states.countryOptions}
          defaultValue={use.states.countryDefault}
          styles={{
            width: '92%',
          }}
          {...countryProps}
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
              width: '90%',
            }}
            {...stateSelectProps}
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
              width: '90%',
            }}
            {...stateInputProps}
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
              width: '90%',
            }}
            {...citySelectProps}
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
              width: '90%',
            }}
            {...cityInputProps}
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
        title1: title1Text,
        title2: title2Text,
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
        <div className={css(photoMainContainerStyle)}>
          <div className={css(photoContainerStyle)}>
            <form
              className={css(photoFormStyle)}
              onSubmit={handleSubmit}
              id="entityPhoto"
            >
              <>
                <input
                  type="file"
                  id="file-input"
                  ref={fileInputRef}
                  hidden
                  onChange={use.actions.changePhoto}
                />
                <Button
                  title="Cambiar Foto"
                  buttonProps={{
                    onClick: handleButtonClick,
                  }}
                  styles={{
                    fontSize: '6px',
                    margin: '20px auto 40px auto',
                    backgroundColor: '#439b57',
                  }}
                />
              </>
              {use.states.submitting ? (
                <div className={css(loadingContainerStyle)}>
                  <Loading
                    mainStyles={{
                      padding: '38px',
                    }}
                    divStyle={{
                      width: '35px',
                      height: '35px',
                      border: '4px solid #eee',
                      borderTop: '4px solid #077bb4',
                    }}
                  />
                </div>
              ) : (
                use.states.photo && (
                  <img
                    className={css(photoStyle)}
                    src={use.states.photo}
                    alt="Foto de Entidad"
                  />
                )
              )}
            </form>
          </div>
          <div className={css(nameContainerStyle)}>
            <>
              <Input
                inputProps={{
                  placeholder: 'Nombre',
                  type: 'text',
                  id: `userName`,
                  onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
                    use.actions.changeName(
                      (event.target as HTMLInputElement).value
                    ),
                  defaultValue: use.states.name,
                }}
                styles={{
                  width: '100%',
                }}
                {...nameProps}
              />
              {isPersonalForm && (
                <Input
                  inputProps={{
                    placeholder: 'Apellido',
                    type: 'text',
                    id: `userLastName`,
                    onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
                      use.actions.changeLastName(
                        (event.target as HTMLInputElement).value
                      ),
                    defaultValue: use.states.lastName,
                  }}
                  styles={{
                    width: '100%',
                  }}
                  {...lastNameProps}
                />
              )}
              {InputTypeDocumentIdId}
            </>
          </div>
        </div>
        <ContainerButton
          styles={{
            width: '100%',
            justifyContent: 'start',
          }}
          {...containerDocumentProps}
        >
          <>
            {InputIndex}
            <Input
              inputProps={{
                placeholder: 'Número de identificación',
                type: 'number',
                min: '0',
                step: '1',
                id: 'entityDocumentDigit',
                title: 'Solo números, ejemplo: 181234678',
                onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
                  use.actions.changeDigit(
                    (event.target as HTMLInputElement).value
                  ),
                defaultValue: use.states.digit,
              }}
              styles={{
                width: '92%',
                padding: '09px 19px',
              }}
              {...digitProps}
            />
          </>
        </ContainerButton>
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
              {...address1Props}
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
              {...address2Props}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
            justifyContent: 'start',
          }}
          {...containerCityStateProps}
        >
          <>
            {InputCity}
            {InputState}
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
            {InputCountry}
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
              {...codePostProps}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
            justifyContent: 'start',
          }}
          {...containerEmailPhoneProps}
        >
          <>
            <Input
              inputProps={{
                placeholder: 'Email',
                type: 'email',
                id: 'entityEmail',
                onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
                  use.actions.changeEmail(
                    (event.target as HTMLInputElement).value
                  ),
                defaultValue: use.states.email,
              }}
              styles={{
                width: '92%',
                padding: '09px 19px',
              }}
              {...emailProps}
            />
            <Input
              inputProps={{
                placeholder: 'Teléfono',
                type: 'number',
                min: '0',
                step: '1',
                title: 'Solo números y sin comenzar en 0, ejemplo: 4241234000',
                id: 'entityPhone',
                onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
                  use.actions.changePhone(
                    (event.target as HTMLInputElement).value
                  ),
                defaultValue: use.states.phone,
              }}
              styles={{
                width: '92%',
                padding: '09px 19px',
              }}
              {...phoneProps}
            />
          </>
        </ContainerButton>
      </>
    </ModelForm>
  );
};
