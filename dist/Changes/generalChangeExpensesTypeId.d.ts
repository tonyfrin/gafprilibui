export type GeneralChangeExpensesTypeIdProps = {
    value: number;
    validation?: (valueValid: number) => boolean;
    setValue: (transformedValue: number) => void;
};
export declare const generalChangeExpensesTypeId: ({ value, validation, setValue, }: GeneralChangeExpensesTypeIdProps) => void;
