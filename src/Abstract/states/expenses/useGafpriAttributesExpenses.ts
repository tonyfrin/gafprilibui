import React, { useState } from 'react';
import { SingleValue } from 'react-select';
import {
  generalValidationSupplierId,
  generalValidationExpensesTypeId,
  generalValidationProjectsId,
  generalValidationSelectCurrencies,
  generalValidationButtonNext,
} from '../../../Validations';
import {
  generalChangeSupplierId,
  generalChangeExpensesTypeId,
  generalChangeProjectsId,
  generalChangeNote,
  generalChangeCurrenciesId,
} from '../../../Changes';
import { EntityAttributes } from '../entity';
import {
  UseGafpriAttributesPaymentReturn,
  useGafpriAttributesPayment,
} from '../payment';
import { SelectDefault } from '../../../helpers';
import {
  UseGafpriProjectsReturn,
  UseGafpriExpensesTypeReturn,
  UseCurrenciesReturn,
} from '../../../states';
import { EXPENSES_ROUTE } from '../../../constants';

type State = {
  supplierId: number;
  supplierIdValid: boolean;

  expensesTypeId: string;
  expensesTypeIdValid: boolean;
  expensesTypeIdDefault: SelectDefault;
  expensesTypeIdOptions: SelectDefault[];

  invoice: string;

  projectsPostsId: string;
  projectsPostsIdValid: boolean;
  projectsPostsIdDefault: SelectDefault;
  projectsPostsIdOptions: SelectDefault[];

  note: string;

  currencyId: number;
  currencyIdValid: boolean;
  currencyIdDefault: SelectDefault;
  currencyIdOptions: SelectDefault[];

  subTotal: string;

  subTotalTax: string;

  total: string;

  entity: EntityAttributes | null;
};

type Actions = {
  infoReset: () => void;
  validationSupplierId: (value: number) => boolean;
  validationExpensesTypeId: (value: string) => boolean;
  validationProjectsPostsId: (value: string) => boolean;
  validationCurrencyId: (value: string) => boolean;
  changeSupplierId: (value: number) => void;
  changeExpensesTypeId: (
    value: SingleValue<{ value: string; label: string }>
  ) => void;
  changeProjectsPostsId: (
    value: SingleValue<{ value: string; label: string }>
  ) => void;
  changeCurrencyId: (
    value: SingleValue<{ value: string; label: string }>
  ) => void;
  changeNote: (value: string) => void;
  changeInvoice: (value: string) => void;
  changeSubTotal: (value: string) => void;
  changeSubTotalTax: (value: string) => void;
  changeTotal: () => void;
  setEntity: (value: EntityAttributes | null) => void;
  validationButtonNext: () => void;
  changeCurrencyIdCr: (
    options: SingleValue<{ value: string; label: string }>
  ) => void;
  addCashTransaction: () => void;
  setCashRegisterTypePostsId: (value: number) => void;
  setCashRegisterPostsId: (value: number) => void;
};

export type UseGafpriAttributesExpensesReturn = {
  states: State;
  actions: Actions;
  usePayment: UseGafpriAttributesPaymentReturn;
};

export type UseGafpriAttributesExpensesProps = {
  projects: UseGafpriProjectsReturn;
  expensesType: UseGafpriExpensesTypeReturn;
  currencies: UseCurrenciesReturn;
};

export function useGafpriAttributesExpenses({
  projects,
  expensesType,
  currencies,
}: UseGafpriAttributesExpensesProps): UseGafpriAttributesExpensesReturn {
  const [supplierId, setSupplierId] = useState(0);
  const [supplierIdValid, setSupplierIdValid] = useState(false);

  const [expensesTypeId, setExpensesTypeId] = useState('');
  const [expensesTypeIdValid, setExpensesTypeIdValid] = useState(false);
  const [expensesTypeIdDefault, setExpensesTypeIdDefault] =
    useState<SelectDefault>({
      value: '',
      label: 'Selecciona tipo de egreso',
    });
  const expensesTypeIdOptions: SelectDefault[] =
    expensesType.data.actions.getOptionsItems();

  const [invoice, setInvoice] = useState('');

  const [projectsPostsId, setProjectsPostsId] = useState('');
  const [projectsPostsIdValid, setProjectsPostsIdValid] = useState(false);
  const [projectsPostsIdDefault, setProjectsPostsIdDefault] =
    useState<SelectDefault>({
      value: '',
      label: 'Selecciona un proyecto',
    });
  const projectsPostsIdOptions: SelectDefault[] =
    projects.data.actions.getOptionsItems();

  const [note, setNote] = useState('');

  const [subTotal, setSubTotal] = useState('');

  const [subTotalTax, setSubTotalTax] = useState('');

  const [total, setTotal] = useState('');

  const [currencyId, setCurrencyId] = useState(0);
  const [currencyIdValid, setCurrencyIdValid] = useState(false);
  const [currencyIdDefault, setCurrencyIdDefault] = useState<SelectDefault>({
    value: '',
    label: 'Selecciona la Moneda',
  });
  const currencyIdOptions: SelectDefault[] =
    currencies.actions.getOptionsItems();

  const [entity, setEntity] = useState<EntityAttributes | null>(null);
  const [cashRegisterTypePostsId, setCashRegisterTypePostsId] = useState(0);
  const [cashRegisterPostsId, setCashRegisterPostsId] = useState(0);
  const usePayment = useGafpriAttributesPayment();

  const infoReset = (): void => {
    setSupplierId(0);
    setSupplierIdValid(false);

    setExpensesTypeId('');
    setExpensesTypeIdValid(false);

    setInvoice('');

    setProjectsPostsId('');
    setProjectsPostsIdValid(false);
    setProjectsPostsIdDefault({
      value: '',
      label: 'Selecciona un proyecto',
    });

    setNote('');

    setCurrencyId(0);
    setCurrencyIdValid(false);
    setCurrencyIdDefault({
      value: '',
      label: 'Selecciona la Moneda',
    });

    setSubTotal('');
    setSubTotalTax('');
    setTotal('');

    setEntity(null);
    setCashRegisterPostsId(0);
    setCashRegisterTypePostsId(0);
    usePayment.actions.infoReset();
  };

  // Funciones de Validacion
  const validationSupplierId = (value: number): boolean => {
    return generalValidationSupplierId({
      value,
      setValid: setSupplierIdValid,
      currentValid: supplierIdValid,
    });
  };

  const validationExpensesTypeId = (value: string): boolean => {
    return generalValidationExpensesTypeId({
      value,
      setValid: setExpensesTypeIdValid,
      currentValid: expensesTypeIdValid,
    });
  };

  const validationProjectsPostsId = (value: string): boolean => {
    return generalValidationProjectsId({
      value,
      setValid: setProjectsPostsIdValid,
      currentValid: projectsPostsIdValid,
    });
  };

  const validationCurrencyId = (value: string): boolean => {
    return generalValidationSelectCurrencies({
      value,
      setValid: setCurrencyIdValid,
      currentValid: currencyIdValid,
    });
  };

  const validationButtonNext = (): void => {
    generalValidationButtonNext({
      validations: [
        supplierIdValid,
        expensesTypeIdValid,
        projectsPostsIdValid,
        parseFloat(total) > 0,
      ],
      inputId: EXPENSES_ROUTE,
    });
  };

  // Funciones de Change
  const changeSupplierId = (value: number): void => {
    generalChangeSupplierId({
      value,
      validation: validationSupplierId,
      setValue: setSupplierId,
    });
  };

  const changeExpensesTypeId = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    generalChangeExpensesTypeId({
      options,
      validation: validationExpensesTypeId,
      setDefault: setExpensesTypeIdDefault,
      setValue: setExpensesTypeId,
    });
  };

  const changeProjectsPostsId = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    generalChangeProjectsId({
      options,
      validation: validationProjectsPostsId,
      setDefault: setProjectsPostsIdDefault,
      setValue: setProjectsPostsId,
    });
  };

  const changeCurrencyId = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    generalChangeCurrenciesId({
      options,
      validation: validationCurrencyId,
      setDefault: setCurrencyIdDefault,
      setValue: setCurrencyId,
    });
  };

  const changeCurrencyIdCr = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    if (!options) return;
    const value = parseInt(options.value, 10);
    usePayment.useGeneralPaymentMethods.useCashTransactions.actions.setCurrenciesId(
      value
    );
    usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setCurrenciesId(
      value
    );
    changeCurrencyId(options);
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
    const newSubTotal = parseFloat(subTotal) || 0;
    const newSubTotalTax = parseFloat(subTotalTax) || 0;
    const newTotal = newSubTotal + newSubTotalTax;
    setTotal(`${newTotal}`);
  };

  const addCashTransaction = (): void => {
    if (cashRegisterTypePostsId === 0 || cashRegisterPostsId === 0) return;
    usePayment.useGeneralPaymentMethods.actions.emptyPaymentMethodArray();
    usePayment.useGeneralPaymentMethods.actions.addCashTransaction(
      cashRegisterTypePostsId,
      cashRegisterPostsId,
      'debit'
    );
    usePayment.actions.setType('expenses');
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
    expensesTypeIdDefault,
    expensesTypeIdOptions,

    invoice,

    projectsPostsId,
    projectsPostsIdValid,
    projectsPostsIdDefault,
    projectsPostsIdOptions,

    currencyId,
    currencyIdValid,
    currencyIdDefault,
    currencyIdOptions,

    note,
    subTotal,
    subTotalTax,
    total,
    entity,
  };

  const actions = {
    infoReset,
    validationSupplierId,
    validationExpensesTypeId,
    validationProjectsPostsId,
    validationCurrencyId,
    changeSupplierId,
    changeExpensesTypeId,
    changeProjectsPostsId,
    changeCurrencyId,
    changeNote,
    changeInvoice,
    changeSubTotal,
    changeSubTotalTax,
    changeTotal,
    setEntity,
    validationButtonNext,
    changeCurrencyIdCr,
    addCashTransaction,
    setCashRegisterTypePostsId,
    setCashRegisterPostsId,
  };

  return {
    states,
    actions,
    usePayment,
  };
}
