import React from 'react';
import { css } from '@emotion/css';
import { Input } from '../Input';
import type { InputProps } from '../Input';
import { formatPhoneNumber } from '../../helpers';
import { Button } from '../Button';
import type { ButtonPropsExtended } from '../Button';
import { List } from '../List';
import type { ListPropsExtended } from '../List';
import { ModelForm } from '../Form';
import type { ModelFormPropsExtended } from '../Form';
import type { UseUserReturn, UseSitesReturn } from '../../states';
import type { RoleArray } from '../../helpers';

export type UserViewProps = {
  use: UseUserReturn;
  useSites: UseSitesReturn;
  photoMainContainerStyle?: string;
  photoContainerStyle?: string;
  photoFormStyle?: string;
  photoStyle?: string;
  nameContainerStyle?: string;
  optionButtonContainerStyle?: string;
  emailPhoneButtonProps?: ButtonPropsExtended;
  modelFormProps?: ModelFormPropsExtended;
  nameInputProps?: InputProps;
  lastNameInputProps?: InputProps;
  roleListProps?: ListPropsExtended;
};

export type UserViewPropsExtended = {
  use?: UseUserReturn;
  useSites?: UseSitesReturn;
  photoMainContainerStyle?: string;
  photoContainerStyle?: string;
  photoFormStyle?: string;
  photoStyle?: string;
  nameContainerStyle?: string;
  optionButtonContainerStyle?: string;
  emailPhoneButtonProps?: ButtonPropsExtended;
  modelFormProps?: ModelFormPropsExtended;
  nameInputProps?: InputProps;
  lastNameInputProps?: InputProps;
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

const defaultPhotoStyle = css`
  transition: all 1s ease 0s;
  width: 100%;
  max-width: 180px;
  max-height: 180px;
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

const defaultOptionButtonContainerStyle = css`
  display: flex;
  justify-content: space-evenly;
  width: 91.66667%;
  margin: 10px 0px;
`;

export const UserView = ({
  use,
  useSites,
  photoMainContainerStyle = defaultPhotoMainContainerStyle,
  photoContainerStyle = defaultPhotoContainerStyle,
  photoFormStyle = defaultPhotoFormStyle,
  photoStyle = defaultPhotoStyle,
  nameContainerStyle = defaultNameContainerStyle,
  optionButtonContainerStyle = defaultOptionButtonContainerStyle,
  emailPhoneButtonProps,
  modelFormProps,
  nameInputProps,
  lastNameInputProps,
  roleListProps,
}: UserViewProps): JSX.Element => {
  const currentUser = use.actions.getById(use.states.userId);

  const handleActions = (action: string, value: any) => {
    switch (action) {
      case 'return':
        use.actions.returnInit();
        break;
      default:
        console.log('Acción desconocida:', action);
    }
  };

  const ButtonEmailPhone: React.FC<{ email: string; isActive: boolean }> = ({
    email,
    isActive,
  }) => {
    const color = isActive ? '#439b57' : '#c12429';
    return (
      <div className={css(optionButtonContainerStyle)}>
        <Button
          title={email}
          styles={{
            fontSize: '15px',
            backgroundColor: color,
            cursor: 'off',
            padding: '8px 19px',
          }}
          Class="email-button"
          buttonProps={{
            title: `${email}`,
          }}
          {...emailPhoneButtonProps}
        />
      </div>
    );
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
        title1: 'Ver',
        title2: `Información del usuario #${currentUser?.id}`,
      }}
      buttonTitles={{
        returnButton: 'Volver',
      }}
      handleActions={handleActions}
      error={use.states.error}
      {...modelFormProps}
    >
      <>
        <div className={css(photoMainContainerStyle)}>
          <div className={css(photoContainerStyle)}>
            <div className={css(photoFormStyle)}>
              <img
                className={css(photoStyle)}
                src={
                  currentUser?.photo ||
                  'https://categorygafpri.s3.us-east-2.amazonaws.com/fotousuariogafpri.png'
                }
                alt="Category"
              />
            </div>
          </div>
          <div className={css(nameContainerStyle)}>
            <>
              <ButtonEmailPhone
                email={currentUser?.isActive ? 'Activo' : 'Inactivo'}
                isActive={currentUser?.isActive || false}
              />
              <Input
                inputProps={{
                  placeholder: 'Nombre',
                  type: 'text',
                  id: `userName`,
                  readOnly: true,
                  defaultValue: currentUser?.name,
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
                  readOnly: true,
                  defaultValue: currentUser?.lastName,
                }}
                styles={{
                  width: '100%',
                }}
                {...lastNameInputProps}
              />
              <ButtonEmailPhone
                email={currentUser?.email || ''}
                isActive={currentUser?.emailConfirmation || false}
              />
              <ButtonEmailPhone
                email={
                  currentUser?.phone ? formatPhoneNumber(currentUser.phone) : ''
                }
                isActive={currentUser?.phoneConfirmation || false}
              />
            </>
          </div>
        </div>
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
