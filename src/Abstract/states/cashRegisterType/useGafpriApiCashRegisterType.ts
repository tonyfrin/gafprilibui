import { UseErrorReturn } from '../../../states';
import {
  gafpriFetch,
  ErrorResponseProps,
  CustomErrorResponseProps,
} from '../../../helpers';
import { UseGafpriPagesCashRegisterTypeReturn } from './useGafpriPagesCashRegisterType';
import { UseGafpriAttributesCashRegisterTypeReturn } from './useGafpriAttributesCashRegisterType';
import { UseGafpriAttributesCashRegisterTypeUserReturn } from './cashRegisterTypeUser';
import { CASH_REGISTER_TYPE_ROUTE } from '../../../constants';

type Actions = {
  update: () => void;

  add: () => void;

  erase: (id: number) => void;
};

export type UseGafpriApiCashRegisterTypeReturn = {
  actions: Actions;
};

export type UseGafpriApiCashRegisterTypeProps = {
  token: string | null;
  useError: UseErrorReturn;
  pages: UseGafpriPagesCashRegisterTypeReturn;
  attributes: UseGafpriAttributesCashRegisterTypeReturn;
  crtu: UseGafpriAttributesCashRegisterTypeUserReturn;
};

export function useGafpriApiCashRegisterType({
  token,
  useError,
  pages,
  attributes,
  crtu,
}: UseGafpriApiCashRegisterTypeProps): UseGafpriApiCashRegisterTypeReturn {
  const newErrorAdd = (
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
  ): void => {
    useError.actions.newError({
      newErrorValue,
      functionAction: pages.actions.onAdd,
    });
  };

  const add = (): void => {
    if (attributes.states.nameValid && attributes.states.siteValid && token) {
      gafpriFetch({
        initMethod: 'POST',
        initRoute: CASH_REGISTER_TYPE_ROUTE,
        initCredentials: {
          name: attributes.states.name,
          sitesId: attributes.states.site,
          cashRegisterUser: [
            ...crtu.states.authorized,
            ...crtu.states.supervisor,
          ],
        },
        initToken: { token },
        functionFetching: pages.actions.onFetching,
        functionSuccess: pages.actions.returnInit,
        functionError: newErrorAdd,
      });
    }
  };

  const newErrorUpdate = (
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
  ): void => {
    useError.actions.newError({
      newErrorValue,
      functionAction: pages.actions.onUpdate,
    });
  };

  const update = (): void => {
    if (attributes.states.nameValid && attributes.states.siteValid && token) {
      gafpriFetch({
        initMethod: 'PATCH',
        initRoute: `${CASH_REGISTER_TYPE_ROUTE}/${attributes.states.currentId}`,
        initCredentials: {
          name: attributes.states.name,
          cashRegisterUser: [
            ...crtu.states.authorized,
            ...crtu.states.supervisor,
          ],
        },
        initToken: { token },
        functionFetching: pages.actions.onFetching,
        functionSuccess: pages.actions.returnInit,
        functionError: newErrorUpdate,
      });
    }
  };

  const newErrorDelete = (
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
  ): void => {
    useError.actions.newError({
      newErrorValue,
      functionAction: pages.actions.returnInit,
    });
  };

  const erase = (id: number): void => {
    if (token) {
      gafpriFetch({
        initMethod: 'DELETE',
        initRoute: `${CASH_REGISTER_TYPE_ROUTE}/${id}`,
        initToken: { token },
        functionFetching: pages.actions.onFetching,
        functionSuccess: pages.actions.returnInit,
        functionError: newErrorDelete,
      });
    }
  };

  /**
   * Export
   *
   *
   */

  const actions = {
    update,
    add,
    erase,
  };

  return {
    actions,
  };
}