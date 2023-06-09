type State = {
    source: {
        api: string;
        url: string;
    };
    isInstalled: boolean;
    isFetching: boolean;
};
type Actions = {
    onInstalled: () => void;
    onFetching: () => void;
};
export interface UseGafpri {
    states: State;
    actions: Actions;
}
export declare function useGafpri(): UseGafpri;
export {};
