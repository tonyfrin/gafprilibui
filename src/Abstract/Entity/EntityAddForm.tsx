import React from 'react';
import { css } from '@emotion/css';
import type { UseEntityReturn } from '../../states';
import {
  InputName,
  InputLastName,
  InputDocumentiIdDigit,
  InputAddress1,
  InputAddress2,
  InputZipCode,
  InputEmail,
  InputPhone,
  SelectDocumentIdIndex,
  SelectCity,
  InputCity as InputCityGeneral,
  SelectStateCountry,
  InputStateCountry,
  SelectCountry,
  SelectTypeDocumentIdId,
} from '../Input';
import type { InputProps, GsSelectPropsExtended } from '../Input';
import { ContainerButton } from '../Containers';
import type { ContainerButtonPropsExtended } from '../Containers';
import { ModelForm, PhotoEntity } from '../Form';
import type { ModelFormPropsExtended, PhotoEntityProps } from '../Form';

export type EntityAddFormProps = {
  use: UseEntityReturn;
  formType: 'personal' | 'legal';
  photoMainContainerStyle?: string;
  photoContainerStyle?: string;
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
  propsPhoto?: PhotoEntityProps['props'];
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
  propsPhoto,
}: EntityAddFormProps): JSX.Element => {
  const [InputTypeDocumentIdId, setInputTypeDocumentIdId] = React.useState(
    <></>
  );
  const [InputIndex, setInputIndex] = React.useState(<></>);
  const [InputCity, setInputCity] = React.useState(<></>);
  const [InputState, setInputState] = React.useState(<></>);
  const [InputCountry, setInputCountry] = React.useState(<></>);
  const isPersonalForm = formType === 'personal';

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

  const returnInit = () => {
    setInputState(<></>);
    setInputCountry(<></>);
    use.actions.returnInit();
  };

  const handleActions = (action: string, value: any) => {
    switch (action) {
      case 'submit':
        use.actions.add();
        break;
      case 'return':
        returnInit();
        break;
      default:
        console.log('Acción desconocida:', action);
    }
  };

  React.useEffect(() => {
    setInputTypeDocumentIdId((): JSX.Element => {
      return (
        <SelectTypeDocumentIdId
          changeTypeDocumentIdId={(e) => use.actions.changeTypeDocumentIdId(e)}
          props={{
            options: use.states.typeDocumentIdIdOptions,
            defaultValue: use.states.typeDocumentIdIdDefault,
            styles: {
              width: '100%',
            },
            ...typeDocumentIdIdProps,
          }}
        />
      );
    });

    setInputIndex((): JSX.Element => {
      return (
        <SelectDocumentIdIndex
          changeIndex={(e) => use.actions.changeIndex(e)}
          props={{
            options: use.states.indexOptions,
            defaultValue: use.states.indexDefault,
            styles: {
              width: '92%',
            },
            ...indexProps,
          }}
        />
      );
    });

    setInputCountry((): JSX.Element => {
      return (
        <SelectCountry
          changeCountry={(e) => use.actions.changeCountry(e)}
          props={{
            options: use.states.countryOptions,
            defaultValue: use.states.countryDefault,
            styles: {
              width: '92%',
            },
            ...countryProps,
          }}
        />
      );
    });
  }, []);

  React.useEffect(() => {
    if (use.states.stateCountryOptions.length > 0) {
      setInputState((): JSX.Element => {
        return (
          <SelectStateCountry
            changeStateCountry={(e) => use.actions.changeStateCountry(e)}
            props={{
              options: use.states.stateCountryOptions,
              defaultValue: use.states.stateCountryDefault,
              styles: {
                width: '90%',
              },
              ...stateSelectProps,
            }}
          />
        );
      });
    } else {
      setInputState((): JSX.Element => {
        return (
          <InputStateCountry
            changeStateCountry={(e) => use.actions.changeStateCountry(e)}
            props={{
              inputProps: {
                defaultValue: use.states.state,
              },
              styles: {
                padding: '10px 19px',
                width: '90%',
              },
              ...stateInputProps,
            }}
          />
        );
      });
    }

    if (use.states.cityOptions.length > 0) {
      setInputCity((): JSX.Element => {
        return (
          <SelectCity
            changeCity={(e) => use.actions.changeCity(e)}
            props={{
              options: use.states.cityOptions,
              defaultValue: use.states.cityDefault,
              styles: {
                width: '90%',
              },
              ...citySelectProps,
            }}
          />
        );
      });
    } else {
      setInputCity((): JSX.Element => {
        return (
          <>
            <InputCityGeneral
              changeCity={use.actions.changeCity}
              props={{
                inputProps: {
                  defaultValue: use.states.city,
                },
                styles: {
                  padding: '10px 19px',
                  width: '90%',
                },
                ...cityInputProps,
              }}
            />
          </>
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
            <PhotoEntity
              photo={use.states.photo}
              changePhoto={use.actions.changePhoto}
              submitting={use.states.submitting}
              changeError={use.actions.changeError}
              setSubmitting={use.actions.setSubmitting}
              props={propsPhoto}
            />
          </div>
          <div className={css(nameContainerStyle)}>
            <>
              <InputName
                changeName={use.actions.changeName}
                props={{
                  inputProps: {
                    defaultValue: use.states.name,
                  },
                  styles: {
                    width: '100%',
                  },
                  ...nameProps,
                }}
              />
              {isPersonalForm && (
                <InputLastName
                  changeLastName={use.actions.changeLastName}
                  props={{
                    inputProps: {
                      defaultValue: use.states.lastName,
                    },
                    styles: {
                      width: '100%',
                    },
                    ...lastNameProps,
                  }}
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
            <InputDocumentiIdDigit
              changeDocumentiIdDigit={use.actions.changeDigit}
              props={{
                inputProps: {
                  defaultValue: use.states.digit,
                },
                styles: {
                  width: '92%',
                  padding: '09px 19px',
                },
                ...digitProps,
              }}
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
            <InputAddress1
              changeAddress1={use.actions.changeAddress1}
              props={{
                inputProps: {
                  defaultValue: use.states.address1,
                },
                styles: {
                  width: '92%',
                  padding: '09px 19px',
                },
                ...address1Props,
              }}
            />
            <InputAddress2
              changeAddress2={use.actions.changeAddress2}
              props={{
                inputProps: {
                  defaultValue: use.states.address2,
                },
                styles: {
                  width: '92%',
                  padding: '09px 19px',
                },
                ...address2Props,
              }}
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
            <InputZipCode
              changeZipCode={use.actions.changePostCode}
              props={{
                inputProps: {
                  defaultValue: use.states.postCode,
                },
                styles: {
                  width: '92%',
                  padding: '09px 19px',
                },
                ...codePostProps,
              }}
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
            <InputEmail
              changeEmail={use.actions.changeEmail}
              props={{
                inputProps: {
                  defaultValue: use.states.email,
                },
                styles: {
                  width: '92%',
                  padding: '09px 19px',
                },
                ...emailProps,
              }}
            />
            <InputPhone
              changePhone={use.actions.changePhone}
              props={{
                inputProps: {
                  defaultValue: use.states.phone,
                },
                styles: {
                  width: '92%',
                  padding: '09px 19px',
                },
                ...phoneProps,
              }}
            />
          </>
        </ContainerButton>
      </>
    </ModelForm>
  );
};
