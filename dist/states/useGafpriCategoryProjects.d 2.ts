type State = {
    name: string;
    nameValid: boolean;
    description: string;
    descriptionValid: boolean;
};
type Actions = {
    changeName: (value: string) => void;
    validationName: (value: string) => void;
    changeDescription: (value: string) => void;
    validationDescription: (value: string) => void;
    validationButtonNext: () => void;
};
export type UseCategoryProjects = {
    states: State;
    actions: Actions;
};
type Props = {
    type: string;
};
export declare function useGafpriCategoryProjects({ type, }: Props): UseCategoryProjects;
export {};
