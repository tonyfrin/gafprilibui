import { useState } from 'react';
import { UseGafpriOrderReturn } from '../../../states';

type State = {
  isFetching: boolean;
  isOrder: boolean;
  isOrderView: boolean;
  isCredits: boolean;
  isPayment: boolean;
  modalPage: boolean;
};

type Actions = {
  onFetching: () => void;

  onOrder: () => void;

  onOrderView: () => void;

  goOrderView: (id: number) => void;

  onCredits: () => void;

  onPayment: () => void;

  openModalPage: () => void;

  closeModalPage: () => void;
};

export type UseGafpriSubPagesDepositPaymentReturn = {
  states: State;
  actions: Actions;
};

export type UseGafpriSubPagesDepositPaymentProps = {
  useOrder: UseGafpriOrderReturn;
};

export function useGafpriSubPagesDepositPayment({
  useOrder,
}: UseGafpriSubPagesDepositPaymentProps): UseGafpriSubPagesDepositPaymentReturn {
  const [isFetching, setIsFetching] = useState(false);
  const [isOrder, setIsOrder] = useState(true);
  const [isOrderView, setIsOrderView] = useState(false);
  const [isCredits, setIsCredits] = useState(false);
  const [isPayment, setIsPayment] = useState(false);
  const [modalPage, setModalPage] = useState(false);

  const onFetching = (): void => {
    setIsFetching(true);
    setIsOrder(false);
    setIsOrderView(false);
    setIsCredits(false);
    setIsPayment(false);
    setModalPage(false);
  };

  const onOrder = (): void => {
    setIsFetching(false);
    setIsOrder(true);
    setIsOrderView(false);
    setIsCredits(false);
    setIsPayment(false);
    setModalPage(false);
  };

  const onOrderView = (): void => {
    setIsFetching(false);
    setIsOrder(false);
    setIsOrderView(true);
    setIsCredits(false);
    setIsPayment(false);
    setModalPage(false);
  };

  const onCredits = (): void => {
    setIsFetching(false);
    setIsOrder(false);
    setIsCredits(true);
    setIsPayment(false);
    setModalPage(false);
  };

  const onPayment = (): void => {
    setIsFetching(false);
    setIsOrder(false);
    setIsCredits(false);
    setIsPayment(true);
    setModalPage(false);
  };

  const goOrderView = (id: number): void => {
    useOrder.attributes.actions.setCurrentId(id);
    onOrderView();
  };

  const openModalPage = (): void => {
    setModalPage(true);
  };

  const closeModalPage = (): void => {
    setModalPage(false);
  };

  /**
   * Export
   *
   *
   */
  const states = {
    isFetching,
    isOrder,
    isOrderView,
    isCredits,
    isPayment,
    modalPage,
  };

  const actions = {
    onFetching,

    onOrder,

    onOrderView,

    goOrderView,

    onCredits,

    onPayment,

    openModalPage,

    closeModalPage,
  };

  return {
    states,
    actions,
  };
}
