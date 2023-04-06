import React from 'react';
import { Step } from '../../Abstract';
import type { UseInstall } from '../../states';
import { AddCategoryProjects } from '../../Abstract';

type Use = {
  actions: UseInstall['actions'];
  useCategory: UseInstall['useCategory'];
};

export const Category = ({ actions, useCategory }: Use): JSX.Element => {
  return (
    <>
      <Step
        step="6"
        title="Agregar Categoría de Producto"
        buttonReturnTitle="Atrás"
        buttonReturnStyles={{
          backgroundColor: '#c12429',
        }}
        buttonReturnProps={{
          onClick: actions.onUser,
        }}
        buttonNextTitle="Siguiente"
        buttonNextProps={{
          onClick: actions.nextCategory,
          id: 'buttonNextCategory',
        }}
      />
      <AddCategoryProjects use={useCategory} type={'Category'} />
    </>
  );
};
