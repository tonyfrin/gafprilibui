export type ValidationInput = {
    value: string;
    currentValid: boolean;
    inputId: string;
    setValid: (value: boolean) => void;
    required?: boolean;
};
export declare const validationInputNameLastNameUserName: ({ value, currentValid, inputId, setValid, required, }: ValidationInput) => boolean;
export declare const generalValidationName: (value: string, setValid: (valueValid: boolean) => void, currentValid: boolean, required?: boolean) => boolean;
export declare const generalValidationLastName: (value: string, setValid: (valueValid: boolean) => void, currentValid: boolean, required?: boolean) => boolean;
export declare const generalValidationUserName: (value: string, setValid: (valueValid: boolean) => void, currentValid: boolean, required?: boolean) => boolean;
export declare const validationInputPassword: ({ value, inputId, setValid, currentValid, required, }: ValidationInput) => boolean;
export declare const validationInputSinglePassword: ({ value, inputId, setValid, required, }: ValidationInput) => boolean;
export declare const generalValidationPassword: (value: string, setValid: (valueValid: boolean) => void, currentValid: boolean, required?: boolean) => boolean;
export declare const generalValidationSinglePassword: (value: string, setValid: (valueValid: boolean) => void, currentValid: boolean, required?: boolean) => boolean;
export declare const generalValidationButtonNext: (...validations: boolean[]) => void;
export declare const validationInputDescription: ({ value, inputId, setValid, currentValid, required, }: ValidationInput) => boolean;
export declare const generalValidationDescription: (value: string, setValid: (valueValid: boolean) => void, currentValid: boolean, required?: boolean) => boolean;
export declare const validationInputAddress: ({ value, currentValid, inputId, setValid, required, }: ValidationInput) => boolean;
export declare const generalValidationAddress1: (value: string, setValid: (valueValid: boolean) => void, currentValid: boolean, required?: boolean) => boolean;
export declare const generalValidationAddress2: (value: string, setValid: (valueValid: boolean) => void, currentValid: boolean, required?: boolean) => boolean;
export declare const generalValidationSelectCity: (value: string, setValid: (valueValid: boolean) => void, currentValid: boolean) => boolean;
export declare const generalValidationSelectStateCountry: (value: string, setValid: (valueValid: boolean) => void, currentValid: boolean) => boolean;
export declare const generalValidationSelectCountry: (value: string, setValid: (valueValid: boolean) => void, currentValid: boolean) => boolean;
export declare const generalValidationPostCode: (value: string, setValid: (valueValid: boolean) => void, currentValid: boolean, required?: boolean) => boolean;
export declare const generalValidationSelectSite: (value: string, setValid: (valueValid: boolean) => void, currentValid: boolean) => boolean;
export declare const validationInputSku: ({ value, inputId, currentValid, setValid, required, }: ValidationInput) => boolean;
export declare const generalValidationSku: (value: string, setValid: (valueValid: boolean) => void, currentValid: boolean, required?: boolean) => boolean;
export declare const validationPhoto: ({ value, inputId, currentValid, setValid, required, }: ValidationInput) => boolean;
export declare const generalValidationPhoto: (value: string, setValid: (valueValid: boolean) => void, currentValid: boolean, required: boolean, inputId: string) => boolean;
export declare const generalValidationPhotoCategory: (value: string, setValid: (valueValid: boolean) => void, currentValid: boolean, required?: boolean) => boolean;
export declare const validationInputArray: (values: string[], match: RegExp, componentId: string, required?: boolean) => boolean;
export declare const generalValidationGalleryImage: (value: string[], setValid: (valueValid: boolean) => void, currentValid: boolean, required?: boolean) => boolean;
export declare const generalValidationParentId: (newValue: string, setValid: (value: boolean) => void, currentValid: boolean) => boolean;
export declare const generalValidationStatus: (newValue: string, setValid: (value: boolean) => void, currentValid: boolean) => boolean;
