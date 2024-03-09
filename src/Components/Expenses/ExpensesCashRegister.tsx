import React, { KeyboardEvent } from 'react';
import { Loading } from '../Loading';
import {
  UseGafpriExpensesReturn,
  UseGafpriEntityReturn,
  SiteOptions,
} from '../../states';
import {
  FadeIn,
  MainMenuItems,
  ExpensesInit,
  EntityExpensesSearch,
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
      {use.pages.states.isExpensesForm && (
        <FadeIn keyName="sales" isVisible={use.pages.states.isExpensesForm}>
          <>
            {/* <Sales
                useOrder={use}
                sitesOptions={sitesOptions}
                useProducts={useProducts}
                uploadOrder={uploadOrderOnlyProducts}
              /> */}
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
