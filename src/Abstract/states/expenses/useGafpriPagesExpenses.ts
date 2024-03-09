import { useState, KeyboardEvent } from 'react';
import { EntityAttributes } from '../entity';
import { UseGafpriEntityReturn } from '../../../states';
import { scrollToTop } from '../../../helpers';
import { UseGafpriAttributesExpensesReturn } from './useGafpriAttributesExpenses';

export type UseGafpriPagesExpensesReturn = {
  states: {
    isFetching: boolean;
    isInit: boolean;
    isEntitySearch: boolean;
    isAddEntity: boolean;
    isExpensesForm: boolean;
  };
  actions: {
    onFetching: () => void;
    onInit: () => void;
    onEntitySearch: () => void;
    onAddEntity: () => void;
    onExpensesForm: () => void;
    returnInit: () => void;
    processEntityBydocumentId: (event: KeyboardEvent<HTMLInputElement>) => void;
    processEntityByName: (event: KeyboardEvent<HTMLInputElement>) => void;
    selectEntity: (id: number) => void;
    processEntityByPhone: (event: KeyboardEvent<HTMLInputElement>) => void;
    processEntityByEmail: (event: KeyboardEvent<HTMLInputElement>) => void;
    goExpensesEntity: (entity: EntityAttributes) => void;
  };
};

export type UseGafpriPagesExpensesProps = {
  useAttributes: UseGafpriAttributesExpensesReturn;
  useEntity: UseGafpriEntityReturn;
};

export const useGafpriPagesExpenses = ({
  useAttributes,
  useEntity,
}: UseGafpriPagesExpensesProps): UseGafpriPagesExpensesReturn => {
  const [isFetching, setIsFetching] = useState(false);
  const [isInit, setIsInit] = useState(true); // busqueda del cliente
  const [isEntitySearch, setIsEntitySearch] = useState(false); // tabla de busqueda del cliente
  const [isAddEntity, setIsAddEntity] = useState(false); // formulario de Add Entity
  const [isExpensesForm, setIsExpensesForm] = useState(false); // formulario de ventas

  // Funciones de paginas
  const onFetching = (): void => {
    setIsFetching(true);
    setIsInit(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsExpensesForm(false);
    scrollToTop();
  };

  const onInit = (): void => {
    setIsFetching(false);
    setIsInit(true);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsExpensesForm(false);
    scrollToTop();
  };

  const onEntitySearch = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsEntitySearch(true);
    setIsAddEntity(false);
    setIsExpensesForm(false);
    scrollToTop();
  };

  const onAddEntity = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsEntitySearch(false);
    setIsAddEntity(true);
    setIsExpensesForm(false);
    scrollToTop();
  };

  const onExpensesForm = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsExpensesForm(true);
    scrollToTop();
  };

  const onProductSearch = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsExpensesForm(false);
    scrollToTop();
  };

  const goExpensesEntity = (entity: EntityAttributes): void => {
    useAttributes.actions.setEntity(entity);
    useAttributes.actions.changeSupplierId(entity.id);
    onExpensesForm();
  };

  const returnInit = (): void => {
    useAttributes.actions.infoReset();
    onInit();
  };

  const processEntityBydocumentId = (
    event: KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === 'Enter') {
      const currentEntity = useEntity.data.actions.findByDocumentIdDigit(
        useEntity.attributes.states.digit
      );
      if (currentEntity) {
        goExpensesEntity(currentEntity);
      } else {
        onAddEntity();
      }
    }
  };

  const processEntityByName = (
    event: KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === 'Enter') {
      useEntity.paginations.actions.changeSearchBy({
        value: 'name',
        label: 'Nombre',
      });
      useEntity.paginations.actions.setSearchTerm(
        useEntity.attributes.states.name
      );
      onEntitySearch();
    }
  };

  const selectEntity = (id: number): void => {
    const currentEntity = useEntity.data.actions.getById(id);
    if (currentEntity) {
      goExpensesEntity(currentEntity);
    }
  };

  const processEntityByPhone = (
    event: KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === 'Enter') {
      const currentEntity = useEntity.data.actions.findByPhone(
        useEntity.attributes.states.phone
      );
      if (currentEntity) {
        goExpensesEntity(currentEntity);
      } else {
        onAddEntity();
      }
    }
  };

  const processEntityByEmail = (
    event: KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === 'Enter') {
      const currentEntity = useEntity.data.actions.findByEmail(
        useEntity.attributes.states.email
      );
      if (currentEntity) {
        goExpensesEntity(currentEntity);
      } else {
        onAddEntity();
      }
    }
  };

  const states = {
    isFetching,
    isInit,
    isEntitySearch,
    isAddEntity,
    isExpensesForm,
  };

  // Define las acciones necesarias para los atributos de Site
  const actions = {
    onFetching,
    onInit,
    onEntitySearch,
    onAddEntity,
    onExpensesForm,
    onProductSearch,
    returnInit,
    processEntityBydocumentId,
    processEntityByName,
    selectEntity,
    processEntityByPhone,
    processEntityByEmail,
    goExpensesEntity,
  };

  return {
    states,
    actions,
  };
};
