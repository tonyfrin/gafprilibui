import React from 'react';
import { css } from '@emotion/css';
import {
  SelectTypeDocumentIdId,
  SelectDocumentIdIndex,
  InputDocumentiIdDigit,
} from '../Input';
import type { InputProps, GsSelectPropsExtended } from '../Input';
import { ModelForm, PhotoDocumentId } from '../Form';
import type { ModelFormPropsExtended, PhotoDocumentIdProps } from '../Form';
import type { UseEntityReturn } from '../../states';

export type DocumentAddFormProps = {
  use: UseEntityReturn;
  photoMainContainerStyle?: string;
  photoInfoContainerStyle?: string;
  nameLastNameContainerStyle?: string;
  inputTypeDocumentIdIdProps?: GsSelectPropsExtended;
  inputIndexProps?: GsSelectPropsExtended;
  mainTitle?: string;
  subTitle?: string;
  modelFormProps?: ModelFormPropsExtended;
  inputDigitProps?: InputProps;
  propsPhoto?: PhotoDocumentIdProps['props'];
};

export type DocumentAddFormPropsExtended = {
  use: UseEntityReturn;
  photoMainContainerStyle?: string;
  photoInfoContainerStyle?: string;
  nameLastNameContainerStyle?: string;
  inputTypeDocumentIdIdProps?: GsSelectPropsExtended;
  inputIndexProps?: GsSelectPropsExtended;
  mainTitle?: string;
  subTitle?: string;
  modelFormProps?: ModelFormPropsExtended;
  inputDigitProps?: InputProps;
  propsPhoto?: PhotoDocumentIdProps['props'];
};

const photoInfoContainerStyleDefault = css`
  width: 100%;
`;

const photoMainContainerStyleDefault = css`
  display: flex;
  justify-content: space-between;
`;

const nameLastNameContainerStyleDefault = css`
  width: 100%;
`;

export const DocumentAddForm = ({
  use,
  photoMainContainerStyle = photoMainContainerStyleDefault,
  photoInfoContainerStyle = photoInfoContainerStyleDefault,
  nameLastNameContainerStyle = nameLastNameContainerStyleDefault,
  inputTypeDocumentIdIdProps,
  inputIndexProps,
  mainTitle = 'Nuevo documento',
  subTitle = 'Agrega un nuevo documento de identificación',
  modelFormProps,
  inputDigitProps,
  propsPhoto,
}: DocumentAddFormProps): JSX.Element => {
  const [InputTypeDocumentIdId, setInputTypeDocumentIdId] = React.useState(
    <></>
  );
  const [InputIndex, setInputIndex] = React.useState(<></>);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    use.actions.validationDocumentPhoto(use.states.documentPhoto);
    const typeDocumentIdId =
      use.states.typeDocumentIdId === null
        ? ''
        : `${use.states.typeDocumentIdId}`;
    use.actions.validationTypeDocumentIdId(typeDocumentIdId);
    use.actions.validationIndex(use.states.index);
    use.actions.validationDigit(use.states.digit);
  }, [
    use.states.documentPhoto,
    use.states.typeDocumentIdId,
    InputTypeDocumentIdId,
    use.states.index,
    InputIndex,
    use.states.digit,
  ]);

  React.useEffect(() => {
    use.actions.validationButtonNextDocument();
  }, [
    use.states.documentPhotoValid,
    use.states.typeDocumentIdIdValid,
    use.states.indexValid,
    use.states.digitValid,
  ]);

  const buttonTitle = 'Agregar';

  const handleActions = (action: string, value: any) => {
    switch (action) {
      case 'submit':
        use.actions.addDocument();
        break;
      case 'return':
        use.actions.goUpdate(use.states.entityId);
        break;
      default:
        console.log('Acción desconocida:', action);
    }
  };

  React.useEffect(() => {
    if (use.states.documentPhoto) {
      const img = new Image();
      img.src = use.states.documentPhoto;
      img.onload = () => {
        use.actions.setDocumentSubmitting(false);
      };
      img.onerror = () => {
        use.actions.changeError([
          `Error al cargar la imagen: ${use.states.photo}`,
        ]);
        use.actions.setDocumentSubmitting(true);
      };
    }
  }, [use.states.documentPhoto]);

  React.useEffect(() => {
    setInputTypeDocumentIdId((): JSX.Element => {
      return (
        <SelectTypeDocumentIdId
          changeTypeDocumentIdId={use.actions.changeTypeDocumentIdId}
          props={{
            options: use.states.typeDocumentIdIdOptions,
            defaultValue: use.states.typeDocumentIdIdDefault,
            styles: {
              width: '92%',
            },
            ...inputTypeDocumentIdIdProps,
          }}
        />
      );
    });

    setInputIndex((): JSX.Element => {
      return (
        <SelectDocumentIdIndex
          changeIndex={use.actions.changeIndex}
          props={{
            options: use.states.indexOptions,
            defaultValue: use.states.indexDefault,
            styles: {
              width: '92%',
            },
            ...inputIndexProps,
          }}
        />
      );
    });
  }, []);

  return (
    <ModelForm
      titles={{
        title1: mainTitle,
        title2: subTitle,
      }}
      buttonTitles={{
        mainButton: buttonTitle,
        returnButton: 'Volver',
      }}
      handleActions={handleActions}
      error={use.states.error}
      {...modelFormProps}
    >
      <>
        <div className={css(photoMainContainerStyle)}>
          <div className={css(photoInfoContainerStyle)}>
            <PhotoDocumentId
              photo={use.states.documentPhoto}
              changePhoto={use.actions.changeDocumentPhoto}
              submitting={use.states.submitting}
              changeError={use.actions.changeError}
              setSubmitting={use.actions.setSubmitting}
              props={propsPhoto}
            />
          </div>
          <div className={css(nameLastNameContainerStyle)}>
            <>
              {InputTypeDocumentIdId}
              {InputIndex}
              <InputDocumentiIdDigit
                changeDocumentiIdDigit={(event) =>
                  use.actions.changeDigit(event)
                }
                props={{
                  inputProps: {
                    defaultValue: use.states.digit,
                  },
                  styles: {
                    width: '92%',
                    padding: '09px 19px',
                  },
                  ...inputDigitProps,
                }}
              />
            </>
          </div>
        </div>
      </>
    </ModelForm>
  );
};
