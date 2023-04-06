import React from 'react';
import { Step, TypeDocument } from '../../Abstract';
import type { UseInstall } from '../../states';

type Use = {
  actions: UseInstall['actions'];
  useTypeDocument: UseInstall['useTypeDocument'];
};

export const TypesDocument = ({
  actions,
  useTypeDocument,
}: Use): JSX.Element => {
  return (
    <>
      <Step
        step="4"
        title="Agregar Tipo de Documento"
        buttonReturnTitle="Atrás"
        buttonReturnStyles={{
          backgroundColor: '#c12429',
        }}
        buttonReturnProps={{
          onClick: actions.onConfigSite,
        }}
        buttonNextTitle="Siguiente"
        buttonNextProps={{
          onClick: actions.nextTypeDocument,
          id: 'buttonNextTypeDocument',
        }}
      />

      <TypeDocument useTypeDocument={useTypeDocument} />
    </>
  );
};
