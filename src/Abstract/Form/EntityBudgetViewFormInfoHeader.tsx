import React from 'react';
import { ContainerHeaderInfo } from '../Containers';
import { LineInfoTwo } from '../Li';
import type { BudgetAttributes } from '../states';

export type EntityBudgetViewFormInfoHeaderProps = {
  budget: BudgetAttributes;
};

export const EntityBudgetViewFormInfoHeader = ({
  budget,
}: EntityBudgetViewFormInfoHeaderProps) => {
  return (
    <>
      <ContainerHeaderInfo>
        <LineInfoTwo
          title="Nombre: "
          info={`${budget.budgetCustomer[0].name} ${
            budget.budgetCustomer[0]?.lastName || ''
          }`}
        />
        <LineInfoTwo
          title="Dirección: "
          info={budget.budgetCustomer[0].address[0].address1 || ''}
        />
        <LineInfoTwo
          title="Teléfono: "
          info={budget.budgetCustomer[0].phone || ''}
        />
      </ContainerHeaderInfo>
    </>
  );
};
