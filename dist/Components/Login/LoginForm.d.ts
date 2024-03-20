import type { UseLoginReturn } from 'src/states';
export type LoginFormProps = {
    use: UseLoginReturn;
    titleContainerStyle?: string;
    nameContainerStyle?: string;
    actionButtonContainerStyle?: string;
    imageLogin: string;
};
export declare const LoginForm: ({ use, titleContainerStyle, nameContainerStyle, actionButtonContainerStyle, imageLogin, }: LoginFormProps) => JSX.Element;
