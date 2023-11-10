import React from 'react';
import { css } from '@emotion/css';
import { Input, GsSelect } from '../Input';
import type { InputProps, GsSelectPropsExtended } from '../Input';
import { ContainerButton } from '../Containers';
import type { ContainerButtonPropsExtended } from '../Containers';
import { Button } from '../Button';
import type { ButtonPropsExtended } from '../Button';
import { Loading } from '../../Components';
import type { LoadingProps } from '../../Components';
import { ModelForm } from '../Form';
import type { ModelFormPropsExtended } from '../Form';
import type { UseUserReturn } from 'src/states';

export type UserFormProps = {
  use: UseUserReturn;
  formType: 'add' | 'update';
  photoMainContainerStyle?: string;
  photoContainerStyle?: string;
  photoFormStyle?: string;
  loadingContainerStyle?: string;
  photoStyle?: string;
  nameContainerStyle?: string;
  modelFormProps?: ModelFormPropsExtended;
  photoButtonProps?: ButtonPropsExtended;
  loadingProps?: LoadingProps;
  nameInputProps?: InputProps;
  lastNameInputProps?: InputProps;
  emailInputProps?: InputProps;
  phoneContainerProps?: ContainerButtonPropsExtended;
  areaCodeSelectProps?: GsSelectPropsExtended;
  phoneInputProps?: InputProps;
  roleContainerProps?: ContainerButtonPropsExtended;
  roleSelectProps?: GsSelectPropsExtended;
  siteSelectProps?: GsSelectPropsExtended;
};

export type UserFormPropsExtended = {
  use?: UseUserReturn;
  formType?: 'add' | 'update';
  photoMainContainerStyle?: string;
  photoContainerStyle?: string;
  photoFormStyle?: string;
  loadingContainerStyle?: string;
  photoStyle?: string;
  nameContainerStyle?: string;
  modelFormProps?: ModelFormPropsExtended;
  photoButtonProps?: ButtonPropsExtended;
  loadingProps?: LoadingProps;
  nameInputProps?: InputProps;
  lastNameInputProps?: InputProps;
  emailInputProps?: InputProps;
  phoneContainerProps?: ContainerButtonPropsExtended;
  areaCodeSelectProps?: GsSelectPropsExtended;
  phoneInputProps?: InputProps;
  roleContainerProps?: ContainerButtonPropsExtended;
  roleSelectProps?: GsSelectPropsExtended;
  siteSelectProps?: GsSelectPropsExtended;
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

const defaultPhotoStyle = css`
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

export const UserForm = ({
  use,
  formType,
  photoMainContainerStyle = defaultPhotoMainContainerStyle,
  photoContainerStyle = defaultPhotoContainerStyle,
  photoFormStyle = defaultPhotoFormStyle,
  loadingContainerStyle = defaultLoadingContainerStyle,
  photoStyle = defaultPhotoStyle,
  nameContainerStyle = defaultNameContainerStyle,
  modelFormProps,
  photoButtonProps,
  loadingProps,
  nameInputProps,
  lastNameInputProps,
  emailInputProps,
  phoneContainerProps,
  areaCodeSelectProps,
  phoneInputProps,
  roleContainerProps,
  roleSelectProps,
  siteSelectProps,
}: UserFormProps): JSX.Element => {
  const [InputAreaCode, setInputAreaCode] = React.useState(<></>);
  const [InputRole, setInputRole] = React.useState(<></>);
  const [InputSite, setInputSite] = React.useState(<></>);
  const isAddForm = formType === 'add';
  const isUpdateForm = formType === 'update';
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const currentUser = isUpdateForm
    ? use.actions.getById(use.states.userId)
    : null;

  React.useEffect(() => {
    use.actions.validationName(use.states.name);
    use.actions.validationLastName(use.states.lastName);
    use.actions.validationEmail(use.states.email);
    use.actions.validationAreaCode(use.states.areaCode);
    use.actions.validationPhoneNumber(use.states.phoneNumber);
    use.actions.validationRole(use.states.rolesId);
    use.actions.validationSite(use.states.site);
    use.actions.validationPhoto(use.states.photo);
    use.actions.validationIsActive(`${use.states.isActive}`);
    use.actions.validationButtonNext();
  }, [
    use.states.name,
    use.states.lastName,
    use.states.email,
    use.states.phoneNumber,
    use.states.areaCode,
    use.states.rolesId,
    use.states.site,
    use.states.photo,
    use.states.isActive,
    InputRole,
    InputSite,
    InputAreaCode,
  ]);

  React.useEffect(() => {
    use.actions.validationButtonNext();
  }, [
    use.states.nameValid,
    use.states.lastNameValid,
    use.states.emailValid,
    use.states.phoneNumberValid,
    use.states.areaCodeValid,
    use.states.roleValid,
    use.states.siteValid,
    use.states.photoValid,
    use.states.isActiveValid,
  ]);

  React.useEffect(() => {
    if (isAddForm) {
      setInputAreaCode((): JSX.Element => {
        return (
          <GsSelect
            id="userAreaCode"
            onChange={(e) => use.actions.changeAreaCode(e)}
            options={use.states.areaCodeOptions}
            defaultValue={use.states.areaCodeDefault}
            styles={{
              width: '96%',
            }}
            {...areaCodeSelectProps}
          />
        );
      });

      setInputRole((): JSX.Element => {
        return (
          <GsSelect
            id="userRole"
            onChange={(e) => use.actions.changeRole(e)}
            options={use.states.roleOptions}
            defaultValue={use.states.roleDefault}
            styles={{
              width: '96%',
            }}
            {...roleSelectProps}
          />
        );
      });

      setInputSite((): JSX.Element => {
        return (
          <GsSelect
            id="userSite"
            onChange={(e) => use.actions.changeSite(e)}
            options={use.states.siteOptions}
            defaultValue={use.states.siteDefault}
            styles={{
              width: '96%',
            }}
            {...siteSelectProps}
          />
        );
      });
    }
  }, []);

  const title1Text = isAddForm ? 'Nuevo Usuario' : 'Actualizar Usuario';
  const title2Text = isAddForm
    ? 'Agrega un nuevo usuario'
    : `Actualiza la información del usuario #${currentUser?.id}`;

  const buttonTitle = isAddForm ? 'Agregar' : 'Actualizar';
  const buttonAction = isAddForm ? use.actions.add : use.actions.update;

  const handleActions = (action: string, value: any) => {
    switch (action) {
      case 'submit':
        buttonAction();
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
              id="photoCategory"
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
                  {...photoButtonProps}
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
                    {...loadingProps}
                  />
                </div>
              ) : (
                use.states.photo && (
                  <img
                    className={css(photoStyle)}
                    src={use.states.photo}
                    alt="Foto de usuario"
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
                {...nameInputProps}
              />
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
                {...lastNameInputProps}
              />
              <Input
                inputProps={{
                  placeholder: 'Email',
                  type: 'text',
                  id: `userEmail`,
                  onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
                    use.actions.changeEmail(
                      (event.target as HTMLInputElement).value
                    ),
                  defaultValue: use.states.email,
                }}
                styles={{
                  width: '100%',
                }}
                {...emailInputProps}
              />
            </>
          </div>
        </div>
        <ContainerButton
          styles={{
            width: '100%',
          }}
          {...phoneContainerProps}
        >
          <>
            {InputAreaCode}
            <Input
              inputProps={{
                placeholder: 'Teléfono',
                type: 'number',
                min: '0',
                step: '1',
                id: `userPhone`,
                title: 'Solo números y sin comenzar en 0, ejemplo: 4241234000',
                onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
                  use.actions.changePhoneNumber(
                    (event.target as HTMLInputElement).value
                  ),
                defaultValue: use.states.phoneNumber,
              }}
              styles={{
                width: '96%',
              }}
              {...phoneInputProps}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
          }}
          {...roleContainerProps}
        >
          <>
            {InputRole}
            {InputSite}
          </>
        </ContainerButton>
      </>
    </ModelForm>
  );
};
