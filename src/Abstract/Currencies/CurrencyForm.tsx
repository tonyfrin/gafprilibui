import React from 'react';
import { Input } from '../Input';
import type { InputProps } from '../Input';
import { ContainerButton } from '../Containers';
import type { ContainerButtonPropsExtended } from '../Containers';
import { ModelForm } from '../Form';
import type { ModelFormPropsExtended } from '../Form';
import type { UseCurrenciesProps } from '../../states';

export type CurrencyFormProps = {
  use: UseCurrenciesProps;
  formType: 'add' | 'update';
  modelFormProps?: ModelFormPropsExtended;
  infoContainerProps?: ContainerButtonPropsExtended;
  nameInputProps?: InputProps;
  symbolInputProps?: InputProps;
};

export type CurrencyFormPropsExtended = {
  use?: UseCurrenciesProps;
  formType?: 'add' | 'update';
  modelFormProps?: ModelFormPropsExtended;
  infoContainerProps?: ContainerButtonPropsExtended;
  nameInputProps?: InputProps;
  symbolInputProps?: InputProps;
};

export const CurrencyForm = ({
  use,
  formType,
  modelFormProps,
  infoContainerProps,
  nameInputProps,
  symbolInputProps,
}: CurrencyFormProps): JSX.Element => {
  const isAddForm = formType === 'add';
  const isUpdateForm = formType === 'update';

  const currentCurrency = isUpdateForm
    ? use.actions.getById(use.states.currentId)
    : null;

  React.useEffect(() => {
    use.actions.validationName(use.states.name);
    use.actions.validationSymbol(use.states.symbol);
    use.actions.validationButtonNext();
  }, [use.states.name, use.states.symbol]);

  React.useEffect(() => {
    use.actions.validationButtonNext();
  }, [use.states.nameValid, use.states.symbolValid]);

  React.useEffect(() => {
    if (currentCurrency) {
      use.actions.changeName(currentCurrency.name);
      use.actions.changeSymbol(currentCurrency.symbol);
    }
  }, []);

  const title1Text = isAddForm ? 'Nueva Moneda' : 'Actualizar Moneda';
  const title2Text = isAddForm
    ? 'Agrega un nuevo tipo de Moneda'
    : `Actualiza la información de la moneda #${currentCurrency?.id}`;

  const buttonTitle = isAddForm ? 'Agregar' : 'Actualizar';
  const buttonAction = isAddForm
    ? use.actions.addCurrencies
    : use.actions.updateCurrency;

  const handleActions = (action: string, value: any) => {
    switch (action) {
      case 'submit':
        buttonAction();
        break;
      case 'return':
        use.actions.returnInit();
        break;
      default:
        console.log('Acción desconocida:', action);
    }
  };

  return (
    <ModelForm
      titles={{
        title1: title1Text,
        title2: title2Text,
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
        <ContainerButton
          styles={{
            width: '96.5%',
          }}
          {...infoContainerProps}
        >
          <>
            <Input
              inputProps={{
                placeholder: 'Nombre',
                type: 'text',
                id: `nameCurrencies`,
                onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
                  use.actions.changeName(
                    (event.target as HTMLInputElement).value
                  ),
                defaultValue: use.states.name,
              }}
              styles={{
                width: '85%',
              }}
              {...nameInputProps}
            />
            <Input
              inputProps={{
                placeholder: 'Símbolo',
                type: 'text',
                id: `symbolCurrencies`,
                onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
                  use.actions.changeSymbol(
                    (event.target as HTMLInputElement).value
                  ),
                defaultValue: use.states.symbol,
              }}
              styles={{
                width: '85%',
              }}
              {...symbolInputProps}
            />
          </>
        </ContainerButton>
      </>
    </ModelForm>
  );
};
