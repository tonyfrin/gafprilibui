import React from 'react';
import { Step, SiteInfo } from '../../Abstract';
import type { UseInstall } from '../../states';

type Use = {
  actions: UseInstall['actions'];
  useSites: UseInstall['useSites'];
};

export const SitesInfo = ({ actions, useSites }: Use): JSX.Element => {
  return (
    <>
      <Step
        step="2"
        title="Información del sitio"
        buttonReturnTitle="Atrás"
        buttonReturnStyles={{
          backgroundColor: '#c12429',
        }}
        buttonReturnProps={{
          onClick: actions.onConfig,
        }}
        buttonNextTitle="Siguiente"
        buttonNextProps={{
          onClick: actions.nextInfoSite,
          id: 'buttonNextInfoSite',
        }}
      />
      <SiteInfo useSites={useSites} />
    </>
  );
};
