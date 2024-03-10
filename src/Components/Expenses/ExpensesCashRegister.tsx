import React, { KeyboardEvent } from 'react';
import { Loading } from '../Loading';
import {
  UseGafpriExpensesReturn,
  UseGafpriEntityReturn,
  SiteOptions,
  UseCurrenciesReturn,
} from '../../states';
import {
  FadeIn,
  MainMenuItems,
  ExpensesInit,
  EntityExpensesSearch,
  ExpensesCrForm,
} from '../../Abstract';
import { EntityExpenses } from '../Entity';

export type ExpensesCashRegisterStylesContainerProps = {
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundRepeat?: string;
  height?: string;
  custom?: string;
};

export type ExpensesCashRegisterProps = {
  use: UseGafpriExpensesReturn;
  useEntity: UseGafpriEntityReturn;
  useCurrencies: UseCurrenciesReturn;
  returnInitModule: () => void;
  sitesOptions: SiteOptions;
  containerStyles?: ExpensesCashRegisterStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  menuEntity: MainMenuItems[];
  uploadOrderOnlyProducts: (event: KeyboardEvent<HTMLInputElement>) => void;
};

export const ExpensesCashRegister = ({
  use,
  useEntity,
  useCurrencies,
  returnInitModule,
  containerProps = {},
  sitesOptions,
  menuEntity,
}: ExpensesCashRegisterProps): JSX.Element => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  return (
    <>
      {use.pages.states.isFetching && (
        <Loading
          mainStyles={{
            custom: 'height: 100vh;',
          }}
        />
      )}
      {use.pages.states.isInit && (
        <FadeIn keyName="init" isVisible={use.pages.states.isInit}>
          <ExpensesInit
            useEntity={useEntity}
            useExpenses={use}
            returnInitModule={returnInitModule}
          />
        </FadeIn>
      )}
      {use.pages.states.isAddEntity && (
        <FadeIn keyName="addEntity" isVisible={use.pages.states.isAddEntity}>
          <EntityExpenses use={useEntity} useExpenses={use} menu={menuEntity} />
        </FadeIn>
      )}
      {use.pages.states.isExpensesCrForm && (
        <FadeIn
          keyName="ExpensesCrForm"
          isVisible={use.pages.states.isExpensesCrForm}
        >
          <>
            <ExpensesCrForm
              use={use}
              siteOptions={sitesOptions}
              useCurrencies={useCurrencies}
            />
          </>
        </FadeIn>
      )}
      {use.pages.states.isEntitySearch && (
        <FadeIn
          keyName="entitySearch"
          isVisible={use.pages.states.isEntitySearch}
        >
          <EntityExpensesSearch use={useEntity} useExpenses={use} />
        </FadeIn>
      )}
    </>
  );
};
