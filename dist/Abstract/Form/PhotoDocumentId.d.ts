import React from 'react';
import type { PhotoFormPropsExtended } from './PhotoForm';
export type PhotoDocumentIdProps = {
    photo: string | null;
    changePhoto: (e: React.ChangeEvent<HTMLInputElement>) => void;
    submitting: boolean;
    changeError: (error: string[]) => void;
    setSubmitting: (submitting: boolean) => void;
    props?: PhotoFormPropsExtended;
};
export declare const PhotoDocumentId: ({ photo, changePhoto, submitting, changeError, setSubmitting, props, }: PhotoDocumentIdProps) => JSX.Element;
