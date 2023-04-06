import { UseSites } from './useGafpriSites';
import type { UseCurrency } from './useGafpriCurrency';
type State = {
    isConfig: boolean;
    isSites: boolean;
    isTypeDucument: boolean;
    isRoles: boolean;
    isUser: boolean;
    isCategory: boolean;
    isProjects: boolean;
};
type Actions = {
    onConfig: () => void;
    nextCurrency: () => void;
};
export interface UseGafpri {
    states: State;
    actions: Actions;
    useCurrency: UseCurrency;
    useSites: UseSites;
}
export declare function useGafpriInstall(): UseGafpri;
export {};
