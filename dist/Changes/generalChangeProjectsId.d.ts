export type GeneralChangeProjectsIdProps = {
    value: number;
    validation?: (valueValid: number) => boolean;
    setValue: (transformedValue: number) => void;
};
export declare const generalChangeProjectsId: ({ value, validation, setValue, }: GeneralChangeProjectsIdProps) => void;
