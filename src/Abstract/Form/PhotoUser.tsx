import React from 'react';
import { PhotoForm } from './PhotoForm';
import type { PhotoFormPropsExtended } from './PhotoForm';
import { PHOTO_USERS_INPUT } from '../../Constans';

export type PhotoUserProps = {
  photo: string | null;
  changePhoto: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitting: boolean;
  changeError: (error: string[]) => void;
  setSubmitting: (submitting: boolean) => void;
  props?: PhotoFormPropsExtended;
};

export const PhotoUser = ({
  photo,
  changePhoto,
  submitting,
  changeError,
  setSubmitting,
  props,
}: PhotoUserProps) => {
  return (
    <>
      <PhotoForm
        formId={PHOTO_USERS_INPUT}
        photo={photo}
        imageFormConatinerStyle={props?.imageFormConatinerStyle}
        changePhoto={changePhoto}
        changePhotoButtonProps={props?.changePhotoButtonProps}
        submitting={submitting}
        loadingContainerStyle={props?.loadingContainerStyle}
        loadingProps={props?.loadingProps}
        imageStyle={props?.imageStyle}
        changeError={changeError}
        setSubmitting={setSubmitting}
      />
    </>
  );
};
