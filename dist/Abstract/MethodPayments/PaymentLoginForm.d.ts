export type PaymentLoginFormProps = {
    validationButtonNext: () => void;
    validationAuthorizedLogin: (authorizedLogin: string) => void;
    validationAuthorizedPassword: (authorizedPassword: string) => void;
    authorizedLogin: string;
    authorizedPassword: string;
    changeAuthorizedLogin: (authorizedLogin: string) => void;
    changeAuthorizedPassword: (authorizedPassword: string) => void;
    inputId: string;
    add: () => void;
};
export declare const PaymentLoginForm: ({ validationButtonNext, validationAuthorizedLogin, validationAuthorizedPassword, authorizedLogin, authorizedPassword, changeAuthorizedLogin, changeAuthorizedPassword, inputId, add, }: PaymentLoginFormProps) => JSX.Element;
