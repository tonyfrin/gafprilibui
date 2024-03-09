import React, { useState } from 'react';
import {
  generalValidationSupplierId,
  generalValidationExpensesTypeId,
  generalValidationProjectsId,
} from '../../../Validations';
import {
  generalChangeSupplierId,
  generalChangeExpensesTypeId,
  generalChangeProjectsId,
  generalChangeNote,
} from '../../../Changes';
import { EntityAttributes } from '../entity';
import {
  UseGafpriAttributesPaymentReturn,
  useGafpriAttributesPayment,
} from '../payment';

type State = {
  supplierId: number;
  supplierIdValid: boolean;
  expensesTypeId: number;
  expensesTypeIdValid: boolean;
  invoice: string;
  projectsPostsId: number;
  projectsPostsIdValid: boolean;
  note: string;
  subTotal: string;
  subTotalTax: string;
  total: string;
};

type Actions = {
  infoReset: () => void;
  validationSupplierId: (value: number) => boolean;
  validationExpensesTypeId: (value: number) => boolean;
  validationProjectsPostsId: (value: number) => boolean;
  changeSupplierId: (value: number) => void;
  changeExpensesTypeId: (value: number) => void;
  changeProjectsPostsId: (value: number) => void;
  changeNote: (value: string) => void;
  changeInvoice: (value: string) => void;
  changeSubTotal: (value: string) => void;
  changeSubTotalTax: (value: string) => void;
  changeTotal: () => void;
  setEntity: (value: EntityAttributes | null) => void;
};

export type UseGafpriAttributesExpensesReturn = {
  states: State;
  actions: Actions;
  usePayment: UseGafpriAttributesPaymentReturn;
};

export function useGafpriAttributesExpenses(): UseGafpriAttributesExpensesReturn {
  const [supplierId, setSupplierId] = useState(0);
  const [supplierIdValid, setSupplierIdValid] = useState(false);

  const [expensesTypeId, setExpensesTypeId] = useState(0);
  const [expensesTypeIdValid, setExpensesTypeIdValid] = useState(false);

  const [invoice, setInvoice] = useState('');

  const [projectsPostsId, setProjectsPostsId] = useState(0);
  const [projectsPostsIdValid, setProjectsPostsIdValid] = useState(false);

  const [note, setNote] = useState('');

  const [subTotal, setSubTotal] = useState('');

  const [subTotalTax, setSubTotalTax] = useState('');

  const [total, setTotal] = useState('');

  const [currentId, setCurrentId] = useState(0);
  const [entity, setEntity] = useState<EntityAttributes | null>(null);
  const usePayment = useGafpriAttributesPayment();

  const infoReset = (): void => {
    setSupplierId(0);
    setSupplierIdValid(false);
    setExpensesTypeId(0);
    setExpensesTypeIdValid(false);
    setInvoice('');
    setProjectsPostsId(0);
    setProjectsPostsIdValid(false);
    setNote('');
    setSubTotal('');
    setSubTotalTax('');
    setTotal('');
    setCurrentId(0);
    setEntity(null);
    usePayment.actions.infoReset();
  };

  // Funciones de Validacion
  const validationSupplierId = (value: number): boolean => {
    generalValidationSupplierId({
      value,
      setValid: setSupplierIdValid,
      currentValid: supplierIdValid,
    });
    return true;
  };

  const validationExpensesTypeId = (value: number): boolean => {
    generalValidationExpensesTypeId({
      value,
      setValid: setExpensesTypeIdValid,
      currentValid: expensesTypeIdValid,
    });
    return true;
  };

  const validationProjectsPostsId = (value: number): boolean => {
    generalValidationProjectsId({
      value,
      setValid: setProjectsPostsIdValid,
      currentValid: projectsPostsIdValid,
    });
    return true;
  };

  // Funciones de Change
  const changeSupplierId = (value: number): void => {
    generalChangeSupplierId({
      value,
      validation: validationSupplierId,
      setValue: setSupplierId,
    });
  };

  const changeExpensesTypeId = (value: number): void => {
    generalChangeExpensesTypeId({
      value,
      validation: validationExpensesTypeId,
      setValue: setExpensesTypeId,
    });
  };

  const changeProjectsPostsId = (value: number): void => {
    generalChangeProjectsId({
      value,
      validation: validationProjectsPostsId,
      setValue: setProjectsPostsId,
    });
  };

  const changeNote = (value: string): void => {
    generalChangeNote({
      value,
      setValue: setNote,
    });
  };

  const changeInvoice = (value: string): void => {
    setInvoice(value);
  };

  const changeSubTotal = (value: string): void => {
    setSubTotal(value);
  };

  const changeSubTotalTax = (value: string): void => {
    setSubTotalTax(value);
  };

  const changeTotal = (): void => {
    const newTotal = parseFloat(subTotal) + parseFloat(subTotalTax);
    setTotal(`${newTotal}`);
  };

  /**
   * Effects
   *
   *
   */

  React.useEffect(() => {
    changeTotal();
  }, [subTotal, subTotalTax]); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * Export
   *
   *
   */
  const states = {
    supplierId,
    supplierIdValid,
    expensesTypeId,
    expensesTypeIdValid,
    invoice,
    projectsPostsId,
    projectsPostsIdValid,
    note,
    subTotal,
    subTotalTax,
    total,
    currentId,
    entity,
  };

  const actions = {
    infoReset,
    validationSupplierId,
    validationExpensesTypeId,
    validationProjectsPostsId,
    changeSupplierId,
    changeExpensesTypeId,
    changeProjectsPostsId,
    changeNote,
    changeInvoice,
    changeSubTotal,
    changeSubTotalTax,
    changeTotal,
    setEntity,
  };

  return {
    states,
    actions,
    usePayment,
  };
}
