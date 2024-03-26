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

  const fetchingOrderPayment = (): void => {
    usePages.actions.onFetching();
    useOrder.pages.actions.onFetching();
  };

  const successOrderPayment = (): void => {
    useAttributes.actions.infoReset();
    useOrder.attributes.actions.infoReset();
    usePages.actions.onDeposit();
    useOrder.pages.actions.onOrderList();
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
        note: useAttributes.states.note,
        paymentMethods:
          useAttributes.useGeneralPaymentMethods.states.arrayPaymentMethod,
        posts: {
          visibility: 'public',
        },
      };
      gafpriFetch({
        initMethod: 'POST',
        initRoute: PAYMENT_ORDER_ROUTE,
        initCredentials: payload,
        initToken: { token },
        functionFetching: fetchingOrderPayment,
        functionSuccess: successOrderPayment,
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
