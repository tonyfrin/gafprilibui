import React from 'react';
import { css } from '@emotion/css';
import {
  Input,
  GsSelect,
  SelectAreaCode,
  SelectRoles,
  SelectSite,
  InputName,
  InputLastName,
  InputEmail,
  InputPhone,
} from '../Input';
import type { InputProps, GsSelectPropsExtended } from '../Input';
import { ContainerButton } from '../Containers';
import type { ContainerButtonPropsExtended } from '../Containers';
import { Button } from '../Button';
import type { ButtonPropsExtended } from '../Button';
import { Loading } from '../../Components';
import type { LoadingProps } from '../../Components';
import { List } from '../List';
import type { ListPropsExtended } from '../List';
import { ModelForm, PhotoUser } from '../Form';
import type { ModelFormPropsExtended, PhotoUserProps } from '../Form';
import { RoleArray } from '../../helpers';
import type { UseUserReturn, UseSitesReturn } from '../../states';

export type UserFormUpdateProps = {
  use: UseUserReturn;
  useSites: UseSitesReturn;
  photoMainContainerStyle?: string;
  photoContainerStyle?: string;
  nameContainerStyle?: string;
  modelFormProps?: ModelFormPropsExtended;
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
  propsPhoto?: PhotoUserProps['props'];
};

export type UserFormUpdatePropsExtended = {
  use?: UseUserReturn;
  useSites?: UseSitesReturn;
  photoMainContainerStyle?: string;
  photoContainerStyle?: string;
  nameContainerStyle?: string;
  modelFormProps?: ModelFormPropsExtended;
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
  propsPhoto?: PhotoUserProps['props'];
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

export const UserFormUpdate = ({
  use,
  useSites,
  photoMainContainerStyle = defaultPhotoMainContainerStyle,
  photoContainerStyle = defaultPhotoContainerStyle,
  nameContainerStyle = defaultNameContainerStyle,
  modelFormProps,
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
  propsPhoto,
}: UserFormUpdateProps): JSX.Element => {
  const [InputAreaCode, setInputAreaCode] = React.useState(<></>);

  const [InputRole, setInputRole] = React.useState(<></>);

  const [InputSite, setInputSite] = React.useState(<></>);

  const currentUser = use.actions.getById(use.states.userId);

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
    setInputRole((): JSX.Element => {
      return (
        <SelectRoles
          changeRoles={(e) => use.actions.changeRole(e)}
          props={{
            options: use.states.roleOptions,
            defaultValue: use.states.roleDefault,
            styles: {
              width: '96%',
            },
            ...roleSelectProps,
          }}
        />
      );
    });

    setInputSite((): JSX.Element => {
      return (
        <SelectSite
          changeSite={(e) => use.actions.changeSite(e)}
          props={{
            options: use.states.siteOptions,
            defaultValue: use.states.siteDefault,
            styles: {
              width: '96%',
            },
            ...siteSelectProps,
          }}
        />
      );
    });
  }, []);

  React.useEffect(() => {
    if (use.states.name !== '') {
      setInputAreaCode((): JSX.Element => {
        return (
          <SelectAreaCode
            changeAreaCode={(e) => use.actions.changeAreaCode(e)}
            props={{
              options: use.states.areaCodeOptions,
              defaultValue: use.states.areaCodeDefault,
              styles: {
                width: '96%',
              },
              ...areaCodeSelectProps,
            }}
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

  const sites: RoleArray[] = [
    {
      id: `${useSites.actions.getMainSite()?.id}`,
      name: useSites.actions.getMainSite()?.name || '',
      role: currentUser?.roles?.name || '',
    },
  ];

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
            <PhotoUser
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
                changeName={(e) => use.actions.changeName(e)}
                props={{
                  inputProps: {
                    defaultValue: use.states.name,
                  },
                  styles: {
                    width: '100%',
                  },
                  ...nameInputProps,
                }}
              />
              <InputLastName
                changeLastName={(e) => use.actions.changeLastName(e)}
                props={{
                  inputProps: {
                    defaultValue: use.states.lastName,
                  },
                  styles: {
                    width: '100%',
                  },
                  ...lastNameInputProps,
                }}
              />
              <InputEmail
                changeEmail={(e) => use.actions.changeEmail(e)}
                props={{
                  inputProps: {
                    defaultValue: use.states.email,
                  },
                  styles: {
                    width: '100%',
                  },
                  ...emailInputProps,
                }}
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
            <InputPhone
              changePhone={(e) => use.actions.changePhoneNumber(e)}
              props={{
                inputProps: {
                  defaultValue: use.states.phoneNumber,
                },
                styles: {
                  width: '96%',
                },
                ...phoneInputProps,
              }}
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
