import type { UseSites } from './useGafpriSites';
import type { UseCurrency } from './useGafpriCurrency';
import type { UseSitesConfig } from './useGafpriSitesConfig';
import type { UseTypeDocument } from './useGafpriTypeDocument';
import type { UseUser } from './useGafpriUser';
import type { UseCategoryProjects } from './useGafpriCategoryProjects';
import type { UseGafpri } from './useGafpri';
type State = {
    isConfig: boolean;
    isSites: boolean;
    isConfigSite: boolean;
    isTypeDucument: boolean;
    isRoles: boolean;
    isUser: boolean;
    isCategory: boolean;
    isProjects: boolean;
    isFinal: boolean;
};
type Actions = {
    onConfig: () => void;
    onSites: () => void;
    onConfigSite: () => void;
    onTypeDucument: () => void;
    onUser: () => void;
    onCategory: () => void;
    onProjects: () => void;
    nextCurrency: () => void;
    nextInfoSite: () => void;
    nextConfigSite: () => void;
    nextTypeDocument: () => void;
    nextUser: () => void;
    nextCategory: () => void;
    install: () => void;
};
export interface UseInstall {
    states: State;
    actions: Actions;
    useCurrency: UseCurrency;
    useSites: UseSites;
    useSitesConfig: UseSitesConfig;
    useTypeDocument: UseTypeDocument;
    useUser: UseUser;
    useCategory: UseCategoryProjects;
    useProjects: UseCategoryProjects;
    useGafpri: UseGafpri;
}
export declare function useGafpriInstall(useGafpri: UseGafpri): UseInstall;
export {};
