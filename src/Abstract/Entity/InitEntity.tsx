import React from 'react';
import { FaUser, FaBuilding } from 'react-icons/fa';
import { css } from '@emotion/css';
import { Button } from '../Button';
import type { ButtonPropsExtended } from '../Button';
import { List } from '../List';
import type { ListProps } from '../List';
import { Error } from '../Error';
import type { ErrorProps } from '../Error';
import { Header } from '../Header';
import { HeaderPropsExtended } from '../Header';
import type { EntityAttributes, UseEntityReturn } from '../../states';

export type InitEntityProps = {
  use: UseEntityReturn;
  optionButtonContainerStyle?: string;
  updateButtonProps?: ButtonPropsExtended;
  viewButtonProps?: ButtonPropsExtended;
  headerProps?: HeaderPropsExtended;
  errorProps?: ErrorProps;
  listProps?: ListProps;
};

export type InitEntityPropsExtended = {
  use: UseEntityReturn;
  optionButtonContainerStyle?: string;
  updateButtonProps?: ButtonPropsExtended;
  viewButtonProps?: ButtonPropsExtended;
  headerProps?: HeaderPropsExtended;
  errorProps?: ErrorProps;
  listProps?: ListProps;
};

const defaultOptionButtonContainerStyle = css`
  display: flex;
  justify-content: space-evenly;
`;

export const InitEntity = ({
  use,
  optionButtonContainerStyle = defaultOptionButtonContainerStyle,
  updateButtonProps,
  viewButtonProps,
  headerProps,
  errorProps = {
    error: use.states.error,
  },
  listProps,
}: InitEntityProps): JSX.Element => {
  const ButtonUpdate: React.FC<{ id: number }> = ({ id }) => {
    return (
      <div className={css(optionButtonContainerStyle)}>
        <Button
          title="Actualizar"
          buttonProps={{
            onClick: () => use.actions.goUpdate(id),
          }}
          styles={{
            fontSize: '10px',
          }}
          {...updateButtonProps}
        />
        <Button
          title="Ver"
          buttonProps={{
            onClick: () => use.actions.goView(id),
          }}
          styles={{
            fontSize: '10px',
          }}
          {...viewButtonProps}
        />
      </div>
    );
  };

  const allowedValues: Array<
    'name' | 'lastName' | 'email' | 'phone' | 'digit'
  > = ['name', 'lastName', 'email', 'phone', 'digit'];

  const searchBy: 'name' | 'lastName' | 'email' | 'phone' | 'digit' =
    allowedValues.includes(
      use.states.searchBy as 'name' | 'lastName' | 'email' | 'phone' | 'digit'
    )
      ? (use.states.searchBy as
          | 'name'
          | 'lastName'
          | 'email'
          | 'phone'
          | 'digit')
      : 'name';

  const filtered = use.actions.filterBySearch(use.states.searchTerm, searchBy);

  const entities =
    use.actions.sortByProperty(filtered, searchBy, use.states.orderList) || [];

  const paginated = use.actions.getPaginated(
    entities,
    use.states.currentPage,
    use.states.itemsPerPage
  );

  const items =
    paginated?.map((item) => {
      const entityItem = item as EntityAttributes;
      const lastName = entityItem?.lastName || '';
      const fullName = `${entityItem.name} ${lastName}`;
      const documentId = entityItem.documentId[0].index
        ? `${entityItem.documentId[0].index}-${entityItem.documentId[0].digit}`
        : entityItem.documentId[0].digit;
      const type =
        entityItem.type === 'legal'
          ? 'Jurídica'
          : entityItem.type === 'personal'
          ? 'Natural'
          : '';
      return [
        fullName,
        type,
        documentId,
        entityItem.email,
        entityItem.phone,
        <ButtonUpdate id={entityItem.id} />,
      ];
    }) ?? [];

  const headers = [
    'Nombre',
    'Tipo',
    'Documento Legal',
    'Email',
    'Teléfono',
    'Opciones',
  ];

  const options = [
    { value: 'asc', label: 'Ascendente' },
    { value: 'desc', label: 'Descendente' },
  ];

  const valueDefaul =
    use.states.orderList === 'asc'
      ? { value: 'asc', label: 'Ascendente' }
      : { value: 'desc', label: 'Descendente' };

  const totalPages = Math.ceil(entities.length / use.states.itemsPerPage);

  const itemsButton = [
    {
      id: 'button-tdi-1',
      label: 'Agregar persona natural',
      onClick: () => use.actions.goAddPersonal(),
      icon: FaUser,
    },
    {
      id: 'button-tdi-2',
      label: 'Agregar persona jurídica',
      onClick: () => use.actions.goAddLegal(),
      icon: FaBuilding,
    },
  ];

  return (
    <>
      <Header
        title="Entidades"
        menuButtonProps={{
          items: itemsButton,
        }}
        {...headerProps}
      />
      <Error {...errorProps} />
      <List
        title="Entidades"
        items={items}
        headers={headers}
        columns={6}
        selectProps={{
          options: options,
          onChange: (event) => {
            if (event?.value) {
              use.actions.setOrderList(event.value as 'asc' | 'desc');
            }
          },
          defaultValue: valueDefaul,
          styles: {
            width: '50%',
          },
        }}
        selectByProps={{
          options: use.states.searchByOptions,
          onChange: (event) => {
            use.actions.changeSearchBy(event);
          },
          defaultValue: use.states.searchByDefault,
          styles: {
            width: '100%',
          },
        }}
        inputProps={{
          value: use.states.searchTerm,
          onChange: (e) => use.actions.setSearchTerm(e.target.value),
          placeholder: 'Buscar...',
        }}
        propsPagination={{
          currentPage: use.states.currentPage,
          setCurrentPage: use.actions.setCurrentPage,
          totalPages: totalPages,
        }}
        {...listProps}
      />
    </>
  );
};
