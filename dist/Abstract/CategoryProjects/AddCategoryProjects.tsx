import React from 'react';
import type { UseInstall } from './../../states';
import { ContainerForm, Input } from './../index';

type Use = {
  use: UseInstall['useCategory'];
  type: string;
};

export const AddCategoryProjects = ({ use, type }: Use): JSX.Element => {
  React.useEffect(() => {
    use.actions.validationName(use.states.name);
    use.actions.validationDescription(use.states.description);
  }, [use.states.name, use.states.description]);

  React.useEffect(() => {
    use.actions.validationButtonNext();
  }, [use.states.nameValid, use.states.descriptionValid]);

  return (
    <ContainerForm>
      <>
        <Input
          inputProps={{
            placeholder: 'Nombre',
            type: 'text',
            id: `name${type}`,
            onKeyUp: (event) =>
              use.actions.changeName((event.target as HTMLInputElement).value),
            defaultValue: use.states.name,
          }}
        />
        <Input
          inputProps={{
            placeholder: 'Descripción',
            type: 'text',
            id: `description${type}`,
            onKeyUp: (event) =>
              use.actions.changeDescription(
                (event.target as HTMLInputElement).value
              ),
            defaultValue: use.states.description,
          }}
        />
      </>
    </ContainerForm>
  );
};
