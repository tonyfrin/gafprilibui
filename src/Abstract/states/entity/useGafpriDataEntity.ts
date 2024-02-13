import React, { useState } from 'react';
import { gafpriFetch, getLastEntryDateAndCount } from '../../../helpers';
import { saveItem, getItem } from '../../../Context';
import { ENTITY_STORAGE, ENTITY_ROUTE } from '../../../constants';
import type { EntityAttributes } from './useGafpriAttributesEntity';

interface EntityData {
  data: {
    items: EntityAttributes[] | [] | null;
  };
}

export type UseGafpriDataEntityReturn = {
  states: {
    isReady: boolean;
    items: EntityData;
  };
  actions: {
    onIsReady: () => void;
    notReady: () => void;
    offItems: () => void;
    handleNewItem: (newItem: EntityAttributes) => void;
    handleUpdatedItem: (itemUpdate: EntityAttributes) => void;
    getById: (id: number) => EntityAttributes | null;
  };
};

export type UseGafpriDataEntityProps = {
  token: string | null;
};

export const useGafpriDataEntity = ({
  token,
}: UseGafpriDataEntityProps): UseGafpriDataEntityReturn => {
  const [isReady, setIsReady] = useState(false);

  const [items, setItems] = useState<EntityData>({
    data: {
      items: getItem(ENTITY_STORAGE, null),
    },
  });

  const onIsReady = (): void => {
    setIsReady(true);
  };

  const notReady = (): void => {
    setIsReady(false);
  };

  // Manejo de la data en DB
  const getLastItem: EntityAttributes | null = items.data?.items
    ? items.data.items.sort(
        (a, b) =>
          new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime()
      )[0]
    : null;

  const setDataStorage = (newData: EntityData): void => {
    saveItem(ENTITY_STORAGE, newData.data.items);
  };

  const setData = (newData: EntityData): void => {
    setItems(newData);
    setDataStorage(newData);
  };

  const onItems = (newData: EntityData): void => {
    setData(newData);
    onIsReady();
  };

  const offItems = (): void => {
    const newData = {
      data: {
        items: null,
      },
    };
    setData(newData);
    notReady();
  };

  const getItems = async (): Promise<void> => {
    const lastEntryDateAndCount = await getLastEntryDateAndCount(ENTITY_ROUTE);
    const lastDate = getLastItem?.modifiedAt || null;
    const count = items.data.items?.length || 0;

    if (
      items.data.items === null ||
      `${lastEntryDateAndCount?.date}` !== `${lastDate}` ||
      `${lastEntryDateAndCount?.count}` !== `${count}`
    ) {
      if (token) {
        gafpriFetch({
          initMethod: 'GET',
          initRoute: ENTITY_ROUTE,
          initToken: { token },
          functionFetching: notReady,
          functionSuccess: onItems,
        });
      } else {
        notReady();
      }
    } else {
      onIsReady();
    }
  };

  const handleNewItem = (newItem: EntityAttributes): void => {
    setItems((prevState) => {
      const newData = {
        data: {
          items: [...(prevState.data.items || []), newItem],
        },
      };
      setDataStorage(newData);
      return newData;
    });
  };

  const handleUpdatedItem = (itemUpdate: EntityAttributes): void => {
    setItems((prevState) => {
      const updatedItems =
        prevState.data.items?.map((item) =>
          `${item.id}` === `${itemUpdate.id}` ? itemUpdate : item
        ) || [];
      const newData = {
        data: {
          items: updatedItems,
        },
      };
      setDataStorage(newData);
      return newData;
    });
  };

  function getById(id: number): EntityAttributes | null {
    return items.data.items?.find((item) => item.id === id) || null;
  }

  // Efects
  React.useEffect(() => {
    getItems();
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  const states = {
    isReady,
    items,
  };

  const actions = {
    onIsReady,
    notReady,
    getById,
    handleNewItem,
    handleUpdatedItem,
    offItems,
  };

  return {
    states,
    actions,
  };
};
