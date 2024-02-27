import { useState } from 'react';
import {
  generalValidationDescription,
  generalValidationButtonNext,
  generalValidationName,
} from '../../../Validations';
import { generalChangeName, generalChangeDescription } from '../../../Changes';

type State = {
  name: string;
  nameValid: boolean;

  description: string;
  descriptionValid: boolean;

  currentId: number;
};

type Actions = {
  changeName: (value: string) => void;
  validationName: (value: string) => void;

  changeDescription: (value: string) => void;
  validationDescription: (value: string) => void;

  validationButtonNext: () => void;

  infoReset: () => void;

  setCurrentId: (value: number) => void;
};

export type UseGafpriAttributesProjectsReturn = {
  states: State;
  actions: Actions;
};

export function useGafpriAttributesProjects(): UseGafpriAttributesProjectsReturn {
  const [name, setName] = useState('');
  const [nameValid, setNameValid] = useState(false);
  const [description, setDescription] = useState('');
  const [descriptionValid, setDescriptionValid] = useState(false);
  const [currentId, setCurrentId] = useState(0);

  const infoReset = (): void => {
    setName('');
    setDescription('');
    setNameValid(false);
    setDescriptionValid(false);
    setCurrentId(0);
  };

  // Funciones de Validacion
  const validationName = (value: string): boolean => {
    return generalValidationName({
      value,
      setValid: setNameValid,
      currentValid: nameValid,
    });
  };

  const validationDescription = (value: string): boolean => {
    return generalValidationDescription({
      value,
      setValid: setDescriptionValid,
      currentValid: descriptionValid,
      required: false,
    });
  };

  const validationButtonNext = (): void => {
    generalValidationButtonNext({
      validations: [nameValid, descriptionValid],
    });
  };

  // Funciones de cambios
  const changeName = (value: string): void => {
    generalChangeName({
      value,
      validation: validationName,
      setValue: setName,
    });
  };

  const changeDescription = (value: string): void => {
    generalChangeDescription({
      value,
      validation: validationDescription,
      setValue: setDescription,
    });
  };

  /**
   * Export
   *
   *
   */
  const states = {
    name,
    nameValid,

    description,
    descriptionValid,

    currentId,
  };

  const actions = {
    changeName,
    validationName,

    changeDescription,
    validationDescription,

    validationButtonNext,

    infoReset,

    setCurrentId,
  };

  return {
    states,
    actions,
  };
}
