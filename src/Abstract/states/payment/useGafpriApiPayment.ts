import { gafpriFetch } from '../../../helpers';
import type {
  ErrorResponseProps,
  CustomErrorResponseProps,
} from '../../../helpers';
import type { UseErrorReturn, UseGafpriOrderReturn } from '../../../states';
import type { UseGafpriPagesPaymentReturn } from './useGafpriPagesPayment';
import type { UseGafpriAttributesPaymentReturn } from './useGafpriAttributesPayment';
import { PAYMENT_ORDER_ROUTE } from '../../../constants';

export type UseGafpriApiPaymentReturn = {
  actions: {
    addOrderPayment: () => void;
  };
};

export type UseGafpriApiPaymentProps = {
  useOrder: UseGafpriOrderReturn;
  usePages: UseGafpriPagesPaymentReturn;
  useAttributes: UseGafpriAttributesPaymentReturn;
  useError: UseErrorReturn;
  token: string | null;
};

export const useGafpriApiPayment = ({
  usePages,
  useOrder,
  useAttributes,
  useError,
  token,
}: UseGafpriApiPaymentProps): UseGafpriApiPaymentReturn => {
  const returnOrderPayment = (): void => {
    usePages.actions.onDeposit();
    useOrder.pages.actions.onOrderPayment();
  };

  const newErrorOrderPayment = (
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
  ): void => {
    useError.actions.newError({
      newErrorValue,
      functionAction: returnOrderPayment,
    });
  };

  const addOrderPayment = (): void => {
    if (useOrder.attributes.states.currentId > 0 && token) {
      const payload = {
        orderPostsId: useOrder.attributes.states.currentId,
        total: useAttributes.states.total,
        type: useAttributes.states.type,
        note: useAttributes.states.note,
        paymentMethod:
          useAttributes.useGeneralPaymentMethods.states.arrayPaymentMethod,
      };
      gafpriFetch({
        initMethod: 'POST',
        initRoute: PAYMENT_ORDER_ROUTE,
        initCredentials: payload,
        initToken: { token },
        functionFetching: usePages.actions.onFetching,
        functionSuccess: useOrder.pages.actions.onOrderList,
        functionError: newErrorOrderPayment,
      });
    }
  };

  // Define las acciones necesarias para los atributos de Site
  const actions = {
    addOrderPayment,
  };

  return {
    actions,
  };
};
