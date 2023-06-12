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
import { List } from '../List';
import type { ListPropsExtended } from '../List';
import { ModelForm } from '../Form';
import type { ModelFormPropsExtended } from '../Form';
import { RoleArray } from '../../helpers';
import type { UseUserReturn, UseSitesReturn } from '../../states';

export type UserFormUpdateProps = {
  use: UseUserReturn;
  useSites: UseSitesReturn;
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
  roleListProps?: ListPropsExtended;
};

export type UserFormUpdatePropsExtended = {
  use?: UseUserReturn;
  useSites?: UseSitesReturn;
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
  roleListProps?: ListPropsExtended;
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

export const UserFormUpdate = ({
  use,
  useSites,
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
  roleListProps,
}: UserFormUpdateProps): JSX.Element => {
  const [InputAreaCode, setInputAreaCode] = React.useState(<></>);

  const [InputRole, setInputRole] = React.useState(<></>);

  const [InputSite, setInputSite] = React.useState(<></>);

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const currentUser = use.actions.getById(use.states.userId);

  React.useEffect(() => {
    use.actions.validationName(use.states.name);
    use.actions.validationLastName(use.states.lastName);
    use.actions.validationEmail(use.states.email);
    use.actions.validationAreaCode(use.states.areaCode);
    use.actions.validationPhoneNumber(use.states.phoneNumber);
    use.actions.validationRole(use.states.role);
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
    use.states.role,
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
  }, []);

  React.useEffect(() => {
    if (use.states.name !== '') {
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
    }
  }, [use.states.name]);

  React.useEffect(() => {
    if (currentUser) {
      use.actions.changeName(currentUser.name);
      if (currentUser?.lastName)
        use.actions.changeLastName(currentUser.lastName);
      use.actions.changeEmail(currentUser.email);
      if (currentUser?.photo) use.actions.setPhoto(currentUser.photo);
      const countryCode = currentUser.phone.slice(0, -10);
      const countryCodeLabel =
        countryCode === '0058'
          ? '(+58) Venezuela'
          : countryCode === '001'
          ? '(+1) Estados Unidos'
          : '';
      const countryCodeDefault = {
        label: countryCodeLabel,
        value: countryCode,
      };
      use.actions.changeAreaCode(countryCodeDefault);
      const phoneNumber = currentUser.phone.slice(-10);
      use.actions.changePhoneNumber(phoneNumber);
    }
  }, []);

  const handleActions = (action: string, value: any) => {
    switch (action) {
      case 'submit':
        use.actions.update();
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

  const sites: RoleArray[] = [];

  if (currentUser?.role) {
    for (const key in currentUser.role) {
      const currentSite = useSites.actions.getById(parseInt(key, 10));
      if (currentSite?.name) {
        sites.push({
          id: key,
          name: currentSite?.name,
          role: currentUser?.role[key],
        });
      }
    }
  }

  const filtered = use.actions.filterRoleByName(sites, use.states.searchTerm);

  const roles =
    use.actions.sortRoleByName(filtered, use.states.orderList) || [];

  const paginated = use.actions.getRolePaginated(
    roles,
    use.states.currentPage,
    use.states.itemsPerPage
  );

  const items =
    paginated?.map((item) => {
      return [item.id, item.name, item.role];
    }) ?? [];

  const headers = ['# Sitio', 'Nombre del Sitio', 'Rol'];

  const options = [
    { value: 'asc', label: 'Ascendente' },
    { value: 'desc', label: 'Descendente' },
  ];

  const valueDefaul =
    use.states.orderList === 'asc'
      ? { value: 'asc', label: 'Ascendente' }
      : { value: 'desc', label: 'Descendente' };

  const totalPages = Math.ceil(roles.length / use.states.itemsPerPage);

  return (
    <ModelForm
      titles={{
        title1: 'Actualizar Usuario',
        title2: `Actualiza la información del usuario #${currentUser?.id}`,
      }}
      buttonTitles={{
        mainButton: 'Actualizar',
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
                  <Loading {...loadingProps} />
                </div>
              ) : (
                use.states.photo && (
                  <img
                    className={css(photoStyle)}
                    src={use.states.photo}
                    alt="Foto de usuarios"
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
        <div>
          <List
            title="Roles"
            items={items}
            headers={headers}
            columns={3}
            selectProps={{
              options: options,
              onChange: (event) => {
                if (event?.value) {
                  use.actions.setOrderList(event.value as 'asc' | 'desc');
                }
              },
              defaultValue: valueDefaul,
              styles: {
                width: '100%',
              },
            }}
            inputProps={{
              value: use.states.searchTerm,
              onChange: (e) => use.actions.setSearchTerm(e.target.value),
              placeholder: 'Buscar por nombre...',
            }}
            propsPagination={{
              currentPage: use.states.currentPage,
              setCurrentPage: use.actions.setCurrentPage,
              totalPages: totalPages,
            }}
            {...roleListProps}
          />
        </div>
      </>
    </ModelForm>
  );
};
