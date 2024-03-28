import { gafpriFetch } from '../../../helpers';
import type {
  ErrorResponseProps,
  CustomErrorResponseProps,
} from '../../../helpers';
import type {
  UseErrorReturn,
  UseGafpriAccountsReceivableReturn,
  UseGafpriOrderReturn,
} from '../../../states';
import type { UseGafpriPagesPaymentReturn } from './useGafpriPagesPayment';
import type { UseGafpriAttributesPaymentReturn } from './useGafpriAttributesPayment';
import { PAYMENT_ORDER_ROUTE, PAYMENT_CREDIT_ROUTE } from '../../../constants';

export type UseGafpriApiPaymentReturn = {
  actions: {
    addOrderPayment: () => void;
    addCreditPayment: () => void;
  };
};

export type UseGafpriApiPaymentProps = {
  useOrder: UseGafpriOrderReturn;
  usePages: UseGafpriPagesPaymentReturn;
  useCredit: UseGafpriAccountsReceivableReturn;
  useAttributes: UseGafpriAttributesPaymentReturn;
  useError: UseErrorReturn;
  token: string | null;
};

export const useGafpriApiPayment = ({
  usePages,
  useOrder,
  useCredit,
  useAttributes,
  useError,
  token,
}: UseGafpriApiPaymentProps): UseGafpriApiPaymentReturn => {
  const returnOrderPayment = (): void => {
    usePages.actions.onDeposit();
    useOrder.pages.actions.onOrderPayment();
  };

  const returnCreditPayment = (): void => {
    usePages.actions.onDeposit();
    useCredit.pages.actions.onCreditPayment();
  };

  const fetchingOrderPayment = (): void => {
    usePages.actions.onFetching();
    useOrder.pages.actions.onFetching();
  };

  const fetchingCreditPayment = (): void => {
    usePages.actions.onFetching();
    useCredit.pages.actions.onFetching();
  };

  const successOrderPayment = (): void => {
    useAttributes.actions.infoReset();
    useOrder.attributes.actions.infoReset();
    usePages.actions.onDeposit();
    useOrder.pages.actions.onOrderList();
  };

  const successCreditPayment = (): void => {
    useAttributes.actions.infoReset();
    useCredit.attributes.actions.infoReset();
    usePages.actions.onDeposit();
    useCredit.pages.actions.onCreditList();
  };

  const newErrorOrderPayment = (
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
  ): void => {
    useError.actions.newError({
      newErrorValue,
      functionAction: returnOrderPayment,
    });
  };

  const newErrorCreditPayment = (
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
  ): void => {
    useError.actions.newError({
      newErrorValue,
      functionAction: returnCreditPayment,
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

  const addCreditPayment = (): void => {
    if (parseFloat(useAttributes.states.total) > 0 && token) {
      const payload = {
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
        initRoute: PAYMENT_CREDIT_ROUTE,
        initCredentials: payload,
        initToken: { token },
        functionFetching: fetchingCreditPayment,
        functionSuccess: successCreditPayment,
        functionError: newErrorCreditPayment,
      });
    }
  };

  // Define las acciones necesarias para los atributos de Site
  const actions = {
    addOrderPayment,
    addCreditPayment,
  };

  return {
    actions,
  };
};
