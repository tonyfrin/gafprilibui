import { ChangeEvent } from 'react';
export type GeneralChangeGalleryPhotoProps = {
    e: ChangeEvent<HTMLInputElement>;
    changeError: (valueError: string[]) => void;
    setSubmitting: (valueSubmitting: boolean) => void;
    setPhoto: (valuePhoto: string[]) => void;
    validation?: (valueValid: string[]) => boolean;
    selectedOptions: string[];
    setSelectedValue: (value: string) => void;
};
export declare const generalChangeGalleryPhoto: ({ e, changeError, setSubmitting, setPhoto, validation, selectedOptions, setSelectedValue, }: GeneralChangeGalleryPhotoProps) => Promise<void>;
