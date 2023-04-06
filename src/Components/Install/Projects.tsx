import React from 'react';
import { Step, AddCategoryProjects } from '../../Abstract';
import type { UseInstall } from '../../states';

type Use = {
  actions: UseInstall['actions'];
  useProjects: UseInstall['useProjects'];
};

export const Projects = ({ actions, useProjects }: Use): JSX.Element => {
  return (
    <>
      <Step
        step="7"
        title="Agregar Proyecto"
        buttonReturnTitle="Atrás"
        buttonReturnStyles={{
          backgroundColor: '#c12429',
        }}
        buttonReturnProps={{
          onClick: actions.onCategory,
        }}
        buttonNextTitle="Instalar"
        buttonNextProps={{
          onClick: actions.install,
          id: 'buttonNextCategory',
        }}
      />
      <AddCategoryProjects use={useProjects} type={'Projects'} />
    </>
  );
};
