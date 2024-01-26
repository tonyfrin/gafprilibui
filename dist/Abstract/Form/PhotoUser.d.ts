import React from 'react';
import type { PhotoFormPropsExtended } from './PhotoForm';
export type PhotoUserProps = {
    photo: string | null;
    changePhoto: (e: React.ChangeEvent<HTMLInputElement>) => void;
    submitting: boolean;
    changeError: (error: string[]) => void;
    setSubmitting: (submitting: boolean) => void;
    props?: PhotoFormPropsExtended;
};
export declare const PhotoUser: ({ photo, changePhoto, submitting, changeError, setSubmitting, props, }: PhotoUserProps) => JSX.Element;
