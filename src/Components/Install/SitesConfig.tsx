import React from 'react';
import { Step, SiteConfig } from '../../Abstract';
import type { UseInstall } from '../../states';

type Use = {
  actions: UseInstall['actions'];
  useSitesConfig: UseInstall['useSitesConfig'];
};

export const SitesConfig = ({ actions, useSitesConfig }: Use): JSX.Element => {
  return (
    <>
      <Step
        step="3"
        title="Configuración del sitio"
        buttonReturnTitle="Atrás"
        buttonReturnStyles={{
          backgroundColor: '#c12429',
        }}
        buttonReturnProps={{
          onClick: actions.onSites,
        }}
        buttonNextTitle="Siguiente"
        buttonNextProps={{
          onClick: actions.nextConfigSite,
          id: 'buttonNextConfigSite',
        }}
      />
      <SiteConfig useSitesConfig={useSitesConfig} />
    </>
  );
};
