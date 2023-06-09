
import React from 'react';
import { css } from '@emotion/css';
import { Input, GsSelect } from '../Input';
import type { InputProps } from '../Input';
import { ContainerButton } from '../Containers';
import type { ContainerButtonPropsExtended } from '../Containers';
import { ModelForm } from '../Form';
import type { ModelFormPropsExtended } from '../Form';
import type { UseCategoryProps } from '../../states';
import { List } from '../List';
import { Loading } from '../../Components';
import { Button } from '../Button';

type CategoryFormProps = {
  use: UseCategoryProps;
  formType: 'add' | 'update';
  modelFormProps?: ModelFormPropsExtended;
  infoContainerProps?: ContainerButtonPropsExtended;
  nameInputProps?: InputProps;
  symbolInputProps?: InputProps;
};

const containerButtonOptions = css`
    display: flex;
    justify-content: space-evenly;
`;

const conatinerForm = css`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`

const imageCategory = css`
  transition: all 1s ease 0s; 
  width: 100%;
  max-width: 300px;
  max-height: 300px;
  object-fit: cover;
  border: 1px solid #ebebeb;
  margin: auto;
  border-radius: 10px;
`

const formImage = css`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
`

const containerInfo = css`
  width: 100%;
`

const containerLoading = css`
  transition: all 1s ease 0s;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: auto;
`




export const CategoryForm = ({ use, formType }: CategoryFormProps): JSX.Element => {
  const isAddForm = formType === 'add';
  const isUpdateForm = formType === 'update';
  const [InputParentId, setInputParentId] = React.useState(<></>);
  const [InputStatus, setInputStatus] = React.useState(<></>);
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const currentCategory = isUpdateForm ? use.actions.getById(use.states.currentId) : null;
  const children = currentCategory ? use.actions.getChildren( currentCategory.id ) : [];

  const ButtonUpdate: React.FC<{ id: number }> = ({ id }) => {
    return (
        <div className={css(containerButtonOptions)}>
            <Button title="Eliminar" 
                buttonProps={{
                    onClick: () => use.actions.deleteParentId( id ),
                }}
                styles={{
                    backgroundColor: '#c12429',
                    fontSize: '10px'
                }}
            />
        </div>
    );
  };

  const filtered = use.actions.filterByName( children, use.states.searchTerm );

  const category = use.actions.sortByName(filtered, use.states.orderList) || [];

  const paginated = use.actions.getPaginated(
      category,
      use.states.currentPage,
      use.states.itemsPerPage
  );

  const items = paginated?.map((item) => {
    return [item.name, item.description, <ButtonUpdate id={item.id} />];
  }) ?? [];
  const headers = ['Nombre', 'Descripción', 'Opciones'];

  const options = [
    { value: 'asc', label: 'Ascendente' },
    { value: 'desc', label: 'Descendente' },
];

const valueDefaul = use.states.orderList === 'asc' ? { value: 'asc', label: 'Ascendente'} : { value: 'desc', label: 'Descendente' };

const totalPages = Math.ceil(category.length / use.states.itemsPerPage);


  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  const handleImageLoad = () => {
    use.actions.setSubmitting( false );
  };
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  React.useEffect(() => {
    use.actions.validationName(use.states.name);
    use.actions.validationDescription(use.states.description);
    use.actions.validationParentId(`${use.states.currentId}`);
    use.actions.validationPhoto(use.states.photo);
    use.actions.validationStatus(use.states.status);
  }, [use.states.name, use.states.parentId, use.states.description, use.states.photo, use.states.status]);

  React.useEffect(() => {
    use.actions.validationButtonNext();
  }, [use.states.nameValid, use.states.parentIdValid, use.states.descriptionValid, use.states.photoValid, use.states.statusValid]);

  React.useEffect(() => {
    if (currentCategory) {
      if (currentCategory.name) use.actions.changeName(currentCategory.name);
      if (currentCategory.description) use.actions.changeDescription(currentCategory.description);
      if (currentCategory.parentId !== undefined) {
        if(currentCategory.parentId === null){
          use.actions.changeParentId({label: 'Sin categoría padre', value: `null`});
        } else{
          const categoryParent = use.actions.getById(currentCategory.parentId);
          use.actions.changeParentId({label: `${categoryParent?.name}`, value: `${categoryParent?.id}`});
        }
        
      }
      if (currentCategory.photo) use.actions.setPhoto(currentCategory.photo);
      if (currentCategory.status) {
        const label = currentCategory.status === 'active' ? 'Activo' : currentCategory.status === 'disabled' ? 'Desactivo' : '';
        use.actions.changeStatus({label: label, value: currentCategory.status});
      }
    }

    if(isAddForm){
      setInputParentId((): JSX.Element => {
        return (
          <GsSelect
            id="parentId"
            onChange={(e) => use.actions.changeParentId(e)}
            options={use.states.parentIdOptions}
            defaultValue={use.states.parentIdDefault}
            styles={{
              width: '100%',
            }}
          />
        );
      });

      setInputStatus((): JSX.Element => {
        return (
          <GsSelect
            id="status"
            onChange={(e) => use.actions.changeStatus(e)}
            options={use.states.statusOptions}
            defaultValue={use.states.statusDefault}
            styles={{
              width: '100%',
            }}
          />
        );
      });
    }
  }, []);

  React.useEffect(() => {
    if(isUpdateForm && currentCategory){

      if(use.states.parentIdDefault.value === 'null' && currentCategory.parentId === null || use.states.parentIdDefault.value !== 'null' && currentCategory.parentId !== null){
        setInputParentId((): JSX.Element => {
          return (
            <GsSelect
              id="parentId"
              onChange={(e) => use.actions.changeParentId(e)}
              options={use.states.parentIdOptions}
              defaultValue={use.states.parentIdDefault}
              styles={{
                width: '100%',
              }}
            />
          );
        });
      }
      

      setInputStatus((): JSX.Element => {
        return (
          <GsSelect
            id="status"
            onChange={(e) => use.actions.changeStatus(e)}
            options={use.states.statusOptions}
            defaultValue={use.states.statusDefault}
            styles={{
              width: '100%',
            }}
          />
        );
      });
    }
  }, [use.states.parentIdDefault, use.states.statusDefault]);

  

  const title1Text = isAddForm ? 'Nueva Categoría' : 'Actualizar Categoría';
  const title2Text = isAddForm
    ? 'Agrega un nuevo tipo de Categoría de producto'
    : `Actualiza la información de la categoría #${currentCategory?.id}`;

  const buttonTitle = isAddForm ? 'Agregar' : 'Actualizar';
  const buttonAction = isAddForm ? use.actions.add : use.actions.update;

  const handleActions = (action: string, value: any) => {
    switch (action) {
      case "submit":
        buttonAction();
        break;
      case "return":
        use.actions.returnInit();
        break;
      default:
        console.log("Acción desconocida:", action);
    }
  };

  React.useEffect(() => {
    if (use.states.photo) {
      const img = new Image();
      img.src = use.states.photo;
      img.onload = () => {
        use.actions.setSubmitting(false);
      };
      img.onerror = () => {
        use.actions.changeError([`Error al cargar la imagen: ${use.states.photo}`]);
        use.actions.setSubmitting( true );
      };
    }
  }, [use.states.photo]);


  return (
    <ModelForm
      titles={{
        title1: title1Text,
        title2: title2Text
      }}
      buttonTitles={{
        mainButton: buttonTitle,
        returnButton: 'Volver'
      }}
      handleActions={handleActions}
      error={use.states.error}
    >
      <>
        <div className={css(conatinerForm)}>
            <div className={css(containerInfo)}>
                <form 
                    className={css(formImage)}
                    onSubmit={handleSubmit}
                    id='photoCategory'
                  >
                      <>
                        <input
                            type="file"
                            id="file-input"
                            ref={fileInputRef}
                            hidden
                            onChange={use.actions.changePhoto}
                        />
                        <Button 
                            title='Cambiar Foto'
                            buttonProps={{
                              onClick: handleButtonClick
                            }}
                            styles={{
                              fontSize: '10px',
                              margin: '20px auto 40px auto',
                              backgroundColor: '#439b57'
                            }}
                        />
                      </>
                      {use.states.submitting ? (
                            <div className={css(containerLoading)}>
                              <Loading />
                            </div>
                          ) : (
                            use.states.photo && (
                              <img
                                className={css(imageCategory)}
                                src={use.states.photo}
                                alt="Category"
                              />
                            )
                      )}
                </form>
            </div>
            <div className={css(containerInfo)}>
              <ContainerButton
                styles={{
                  width: '100%',
                  justifyContent: 'end'
                }}
              >
                <>
                  <Input
                    inputProps={{
                      placeholder: 'Nombre',
                      type: 'text',
                      id: `nameCategory`,
                      onKeyUp:(event: React.KeyboardEvent<HTMLInputElement>) =>
                        use.actions.changeName((event.target as HTMLInputElement).value),
                      defaultValue: use.states.name,
                    }}
                    styles={{
                      padding: '10px 19px',
                      width: '100%',
                    }}
                  />
                </>
              </ContainerButton>
              <ContainerButton
                styles={{
                  width: '100%',
                  justifyContent: 'end'
                }}
              >
                <>
                  <Input
                    inputProps={{
                      placeholder: 'Descripción',
                      type: 'text',
                      id: `descriptionCategory`,
                      onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
                        use.actions.changeDescription((event.target as HTMLInputElement).value),
                      defaultValue: use.states.description,
                    }}
                    styles={{
                      padding: '10px 19px',
                      width: '100%',
                    }}
                  />
                </>
              </ContainerButton>
              <ContainerButton
                  styles={{
                    width: '100%',
                    justifyContent: 'end'
                  }}
                >
                  <>
                    {InputParentId}
                  </>
              </ContainerButton>
              <ContainerButton
                  styles={{
                    width: '100%',
                    justifyContent: 'end'
                  }}
                >
                  <>
                    {InputStatus}
                  </>
              </ContainerButton>
            </div>
        </div>
        { children.length > 0 &&
        <div>
            { use.states.childrenFetching ? <Loading /> :
              <List 
                title="Dependientes"
                items={items}
                headers={headers}
                columns={3}
                selectProps={{
                    options: options,
                    onChange: (event) => {
                        if (event?.value) {
                            use.actions.setOrderList(event.value as 'asc' | 'desc');
                        }
                    },
                    defaultValue: valueDefaul,
                    styles: {
                        width: '50%'
                    }
                }}
                inputProps={{
                    value: use.states.searchTerm,
                    onChange: (e) => use.actions.setSearchTerm(e.target.value),
                    placeholder: "Buscar por nombre...",
                }}
                propsPagination={{
                  currentPage: use.states.currentPage,
                  setCurrentPage: use.actions.setCurrentPage, 
                  totalPages: totalPages
                }}
            />
            }
        </div>
        }
        
      </>
    </ModelForm>
        
     
  );
};

