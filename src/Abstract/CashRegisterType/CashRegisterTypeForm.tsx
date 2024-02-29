import React from 'react';
import { ContainerButton } from '../Containers';
import { ModelForm } from '../Form';
import { UseGafpriCashRegisterTypeReturn, UseSitesReturn } from '../../states';
import { GsSelect, InputName, SelectSite } from '../Input';
import { UseUserReturn } from '../../states';
import { BoxCashRegisterTypeUser } from '../Box/BoxCashRegisterTypeUser';

export type CashRegisterTypeFormProps = {
  use: UseGafpriCashRegisterTypeReturn;
  useSites: UseSitesReturn;
  formType: 'add' | 'update';
  useUser: UseUserReturn;
};

export const CashRegisterTypeForm = ({
  use,
  useSites,
  formType,
  useUser,
}: CashRegisterTypeFormProps): JSX.Element => {
  const isAddForm = formType === 'add';
  const isUpdateForm = formType === 'update';
  const [InputSite, setInputSite] = React.useState(<></>);

  const current = isUpdateForm
    ? use.data.actions.getById(use.attributes.states.currentId)
    : null;

  React.useEffect(() => {
    use.attributes.actions.validationName(use.attributes.states.name);
    use.attributes.actions.validationSite(use.attributes.states.site);
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.name, use.attributes.states.site, InputSite]);

  React.useEffect(() => {
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.nameValid, use.attributes.states.siteValid]);

  React.useEffect(() => {
    if (current) {
      if (current.name) use.attributes.actions.changeName(current.name);

      if (current.sitesId) {
        const currentSite = useSites.actions.getById(current.sitesId);
        if (currentSite) {
          const sitesValue = {
            label: currentSite.name,
            value: `${current.sitesId}`,
          };

          use.attributes.actions.changeSite(sitesValue);

          setInputSite((): JSX.Element => {
            return (
              <SelectSite
                changeSite={(event) => use.attributes.actions.changeSite(event)}
                props={{
                  defaultValue: sitesValue,
                  styles: {
                    width: '90%',
                  },
                  options: use.attributes.states.siteOptions,
                }}
              />
            );
          });
        }
      }
    }

    if (isAddForm) {
      setInputSite((): JSX.Element => {
        return (
          <SelectSite
            changeSite={(event) => use.attributes.actions.changeSite(event)}
            props={{
              defaultValue: use.attributes.states.siteDefault,
              styles: {
                width: '90%',
              },
              options: use.attributes.states.siteOptions,
            }}
          />
        );
      });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const title1Text = isAddForm ? 'Nueva Caja' : 'Actualizar Caja';
  const title2Text = isAddForm
    ? 'Agrega una nueva Caja'
    : `Actualiza la información de la caja #${current?.postsId}`;

  const buttonTitle = isAddForm ? 'Agregar' : 'Actualizar';
  const buttonAction = isAddForm ? use.api.actions.add : use.api.actions.update;

  const handleActions = (action: string, value: any) => {
    switch (action) {
      case 'submit':
        buttonAction();
        break;
      case 'return':
        use.pages.actions.returnInit();
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
      error={use.error.states.error}
    >
      <>
        <ContainerButton
          styles={{
            width: '96.5%',
          }}
        >
          <>
            <InputName
              changeName={use.attributes.actions.changeName}
              props={{
                inputProps: {
                  defaultValue: use.attributes.states.name,
                },
                styles: {
                  width: '90%',
                  padding: '10px 19px',
                },
                containerStyles: {
                  custom: `
                    display: flex;
                    justify-content: center;
                  `,
                },
              }}
            />
            {InputSite}
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
          }}
        >
          <>
            <ContainerButton
              styles={{
                width: '48%',
                display: 'block',
              }}
            >
              <>
                <ContainerButton
                  styles={{
                    width: '96.5%',
                  }}
                >
                  <GsSelect
                    styles={{
                      width: '100%',
                    }}
                    options={use.crtu.states.authorizedOptions}
                    onChange={(event) => {
                      if (event) {
                        use.crtu.actions.addAuthorized(event.value);
                      }
                    }}
                    defaultValue={use.crtu.states.authorizedDefault}
                    title={'Autorizados'}
                    containerStyles={{
                      custom: `
                        display: flex;
                        justify-content: center;
                      `,
                    }}
                  />
                </ContainerButton>
                <ContainerButton
                  styles={{
                    width: '96.5%',
                  }}
                >
                  <BoxCashRegisterTypeUser
                    items={use.crtu.states.authorized}
                    useUser={useUser}
                    removeItem={use.crtu.actions.removeAuthorized}
                    containerStyles={{
                      width: '100%',
                    }}
                  />
                </ContainerButton>
              </>
            </ContainerButton>
            <ContainerButton
              styles={{
                width: '48%',
                display: 'block',
              }}
            >
              <>
                <ContainerButton
                  styles={{
                    width: '96.5%',
                  }}
                >
                  <GsSelect
                    styles={{
                      width: '100%',
                    }}
                    options={use.crtu.states.supervisorOptions}
                    onChange={(event) => {
                      if (event) {
                        use.crtu.actions.addSupervisor(event.value);
                      }
                    }}
                    defaultValue={use.crtu.states.supervisorDefault}
                    title={'Supervisores'}
                  />
                </ContainerButton>
                <ContainerButton
                  styles={{
                    width: '96.5%',
                  }}
                >
                  <BoxCashRegisterTypeUser
                    items={use.crtu.states.supervisor}
                    useUser={useUser}
                    removeItem={use.crtu.actions.removeSupervisor}
                    containerStyles={{
                      width: '100%',
                    }}
                  />
                </ContainerButton>
              </>
            </ContainerButton>
          </>
        </ContainerButton>
      </>
    </ModelForm>
  );
};