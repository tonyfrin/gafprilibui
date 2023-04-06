import React from 'react';
import { Step, User } from '../../Abstract';
import type { UseInstall } from '../../states';

type Use = {
  actions: UseInstall['actions'];
  useUser: UseInstall['useUser'];
};

export const Users = ({ actions, useUser }: Use): JSX.Element => {
  return (
    <>
      <Step
        step="5"
        title="Agregar Usuario"
        buttonReturnTitle="Atrás"
        buttonReturnStyles={{
          backgroundColor: '#c12429',
        }}
        buttonReturnProps={{
          onClick: actions.onTypeDucument,
        }}
        buttonNextTitle="Siguiente"
        buttonNextProps={{
          onClick: actions.nextUser,
          id: 'buttonNextUser',
        }}
      />
      <User useUser={useUser} />
    </>
  );
};
