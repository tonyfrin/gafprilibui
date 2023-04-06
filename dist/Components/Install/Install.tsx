import React from 'react';
import { Box1, Title1, Title2 } from '../../Abstract';
import { useGafpriInstall } from '../../states';
import { Curriencies } from '../index';
import { SitesInfo } from './SitesInfo';
import { SitesConfig } from './SitesConfig';
import { TypesDocument } from './TypesDocument';
import { Users } from './Users';
import { Category } from './Category';
import { Projects } from './Projects';
import type { UseGafpri } from '../../states';

type Props = {
  mainActions: UseGafpri['actions'];
  mainState: UseGafpri['states'];
};

export const Install = ({ mainActions, mainState }: Props): JSX.Element => {
  const useGafpri = {
    actions: mainActions,
    states: mainState,
  };
  const {
    states,
    actions,
    useSites,
    useCurrency,
    useSitesConfig,
    useTypeDocument,
    useUser,
    useCategory,
    useProjects,
  } = useGafpriInstall(useGafpri);

  return (
    <Box1>
      <>
        <Title1 title="Configuración" />
        <Title2 title="Nueva tienda Gafpri" />
        {states.isConfig ? (
          <Curriencies
            states={states}
            actions={actions}
            useCurrency={useCurrency}
          />
        ) : (
          ''
        )}
        {states.isSites ? (
          <SitesInfo actions={actions} useSites={useSites} />
        ) : (
          ''
        )}
        {states.isConfigSite ? (
          <SitesConfig actions={actions} useSitesConfig={useSitesConfig} />
        ) : (
          ''
        )}
        {states.isTypeDucument ? (
          <TypesDocument actions={actions} useTypeDocument={useTypeDocument} />
        ) : (
          ''
        )}
        {states.isUser ? <Users actions={actions} useUser={useUser} /> : ''}
        {states.isCategory ? (
          <Category actions={actions} useCategory={useCategory} />
        ) : (
          ''
        )}
        {states.isProjects ? (
          <Projects actions={actions} useProjects={useProjects} />
        ) : (
          ''
        )}

        {states.isFinal ? <h1>Se instalado la tienda</h1> : ''}
      </>
    </Box1>
  );
};
