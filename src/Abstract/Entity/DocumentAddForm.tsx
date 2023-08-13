import React from 'react';
import { css } from '@emotion/css';
import { Input, GsSelect } from '../Input';
import type { InputProps, GsSelectPropsExtended } from '../Input';
import { Button } from '../Button';
import { ButtonPropsExtended } from '../Button';
import { Loading } from '../../Components';
import { LoadingProps } from '../../Components';
import { ModelForm } from '../Form';
import type { ModelFormPropsExtended } from '../Form';
import type { UseEntityReturn } from '../../states';

export type DocumentAddFormProps = {
  use: UseEntityReturn;
  photoMainContainerStyle?: string;
  photoInfoContainerStyle?: string;
  photoFormStyle?: string;
  loadingContainerStyle?: string;
  imageStyle?: string;
  nameLastNameContainerStyle?: string;
  inputTypeDocumentIdIdProps?: GsSelectPropsExtended;
  inputIndexProps?: GsSelectPropsExtended;
  mainTitle?: string;
  subTitle?: string;
  modelFormProps?: ModelFormPropsExtended;
  photoButtonProps?: ButtonPropsExtended;
  loadingProps?: LoadingProps;
  inputDigitProps?: InputProps;
};

export type DocumentAddFormPropsExtended = {
  use: UseEntityReturn;
  photoMainContainerStyle?: string;
  photoInfoContainerStyle?: string;
  photoFormStyle?: string;
  loadingContainerStyle?: string;
  imageStyle?: string;
  nameLastNameContainerStyle?: string;
  inputTypeDocumentIdIdProps?: GsSelectPropsExtended;
  inputIndexProps?: GsSelectPropsExtended;
  mainTitle?: string;
  subTitle?: string;
  modelFormProps?: ModelFormPropsExtended;
  photoButtonProps?: ButtonPropsExtended;
  loadingProps?: LoadingProps;
  inputDigitProps?: InputProps;
};

const photoInfoContainerStyleDefault = css`
  width: 100%;
`;

const photoFormStyleDefault = css`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
`;

const loadingContainerStyleDefault = css`
  transition: all 1s ease 0s;
  width: 100%;
  max-width: 120px;
  max-height: 120px;
  object-fit: cover;
  border: 1px solid #ebebeb;
  margin: auto;
  border-radius: 100%;
`;

const imageStyleDefault = css`
  transition: all 1s ease 0s;
  width: 100%;
  max-width: 120px;
  max-height: 120px;
  object-fit: cover;
  border: 1px solid #ebebeb;
  margin: auto;
  border-radius: 100%;
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
  photoFormStyle = photoFormStyleDefault,
  loadingContainerStyle = loadingContainerStyleDefault,
  imageStyle = imageStyleDefault,
  nameLastNameContainerStyle = nameLastNameContainerStyleDefault,
  inputTypeDocumentIdIdProps,
  inputIndexProps,
  mainTitle = 'Nuevo documento',
  subTitle = 'Agrega un nuevo documento de identificación',
  modelFormProps,
  photoButtonProps,
  loadingProps,
  inputDigitProps,
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
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
        <GsSelect
          id="entityTypeDocumentIdId"
          onChange={(e) => use.actions.changeTypeDocumentIdId(e)}
          options={use.states.typeDocumentIdIdOptions}
          defaultValue={use.states.typeDocumentIdIdDefault}
          styles={{
            width: '92%',
          }}
          {...inputTypeDocumentIdIdProps}
        />
      );
    });

    setInputIndex((): JSX.Element => {
      return (
        <GsSelect
          id="entityDocumentIndex"
          onChange={(e) => use.actions.changeIndex(e)}
          options={use.states.indexOptions}
          defaultValue={use.states.indexDefault}
          styles={{
            width: '92%',
          }}
          {...inputIndexProps}
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
            <form
              className={css(photoFormStyle)}
              onSubmit={handleSubmit}
              id="entityDocumentPhoto"
            >
              <>
                <input
                  type="file"
                  id="file-input"
                  ref={fileInputRef}
                  hidden
                  onChange={use.actions.changeDocumentPhoto}
                />
                <Button
                  title="Cambiar Foto"
                  buttonProps={{
                    onClick: handleButtonClick,
                  }}
                  styles={{
                    fontSize: '6px',
                    margin: '20px auto 40px auto',
                    backgroundColor: '#439b57',
                  }}
                  {...photoButtonProps}
                />
              </>
              {use.states.documentSubmitting ? (
                <div className={css(loadingContainerStyle)}>
                  <Loading
                    mainStyles={{
                      padding: '38px',
                    }}
                    divStyle={{
                      width: '35px',
                      height: '35px',
                      border: '4px solid #eee',
                      borderTop: '4px solid #077bb4',
                    }}
                    {...loadingProps}
                  />
                </div>
              ) : (
                use.states.documentPhoto && (
                  <img
                    className={css(imageStyle)}
                    src={use.states.documentPhoto}
                    alt="Document Id"
                  />
                )
              )}
            </form>
          </div>
          <div className={css(nameLastNameContainerStyle)}>
            <>
              {InputTypeDocumentIdId}
              {InputIndex}
              <Input
                inputProps={{
                  placeholder: 'Número de identificación',
                  type: 'number',
                  min: '0',
                  step: '1',
                  id: 'entityDocumentDigit',
                  title: 'Solo números, ejemplo: 181234678',
                  onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
                    use.actions.changeDigit(
                      (event.target as HTMLInputElement).value
                    ),
                  defaultValue: use.states.digit,
                }}
                styles={{
                  width: '92%',
                  padding: '09px 19px',
                }}
                {...inputDigitProps}
              />
            </>
          </div>
        </div>
      </>
    </ModelForm>
  );
};
