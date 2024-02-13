import { gafpriFetch } from '../../../helpers';
import type {
  ErrorResponseProps,
  CustomErrorResponseProps,
} from '../../../helpers';
import { ENTITY_ROUTE } from '../../../constants';
import type { UseErrorReturn } from '../../../states';
import type { UseGafpriPagesEntityReturn } from './useGafpriPagesEntity';
import type {
  UseGafpriAttributesEntityReturn,
  DocumentIdAttributes,
  AddressAttributes,
} from './useGafpriAttributesEntity';

export type UseGafpriApiEntityReturn = {
  actions: {
    addAddress: () => void;
    changeAddress: (id: number) => void;

    newError: (
      newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
    ) => void;

    newErrorUpdate: (
      newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
    ) => void;

    add: () => void;
    addDocument: () => void;
    deleteAddress: (id: number) => void;

    deleteDocument: (id: number) => void;
    update: () => void;
  };
};

export type UseGafpriApiEntityProps = {
  usePages: UseGafpriPagesEntityReturn;
  useAttributes: UseGafpriAttributesEntityReturn;
  useError: UseErrorReturn;
  token: string | null;
};

export const useGafpriApiEntity = ({
  usePages,
  useAttributes,
  useError,
  token,
}: UseGafpriApiEntityProps): UseGafpriApiEntityReturn => {
  const newError = (
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
  ): void => {
    useError.actions.newError({
      newErrorValue,
      functionAction: usePages.actions.onAdd,
    });
  };

  const newErrorUpdate = (
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
  ): void => {
    useError.actions.newError({
      newErrorValue,
      functionAction: usePages.actions.onUpdate,
    });
  };

  const add = (): void => {
    if (
      useAttributes.states.nameValid &&
      useAttributes.states.lastNameValid &&
      useAttributes.states.typeDocumentIdIdValid &&
      useAttributes.states.indexValid &&
      useAttributes.states.digitValid &&
      useAttributes.states.addressTypeValid &&
      useAttributes.states.address1Valid &&
      useAttributes.states.address2Valid &&
      useAttributes.states.cityValid &&
      useAttributes.states.stateCountryValid &&
      useAttributes.states.countryValid &&
      useAttributes.states.postCodeValid &&
      useAttributes.states.emailValid &&
      useAttributes.states.phoneValid &&
      useAttributes.states.typeValid &&
      useAttributes.states.photoValid &&
      useAttributes.states.statusValid &&
      token
    ) {
      const payload = {
        name: useAttributes.states.name,
        type: useAttributes.states.type,
        status: useAttributes.states.status,
        ...(useAttributes.states.lastName
          ? { lastName: useAttributes.states.lastName }
          : {}),
        ...(useAttributes.states.email
          ? { email: useAttributes.states.email }
          : {}),
        ...(useAttributes.states.phone
          ? { phone: useAttributes.states.phone }
          : {}),
        ...(useAttributes.states.photo
          ? { photo: useAttributes.states.photo }
          : {}),
        documentId: {
          typeDocumentIdId: useAttributes.states.typeDocumentIdId,
          ...(useAttributes.states.index !== 'null'
            ? { index: useAttributes.states.index }
            : {}),
          digit: useAttributes.states.digit,
        },
        address: {
          type: useAttributes.states.addressType,
          address1: useAttributes.states.address1,
          ...(useAttributes.states.address2
            ? { address2: useAttributes.states.address2 }
            : {}),
          city: useAttributes.states.city,
          state: useAttributes.states.state,
          country: useAttributes.states.country,
          ...(useAttributes.states.postCode
            ? { postCode: useAttributes.states.postCode }
            : {}),
        },
      };

      gafpriFetch({
        initMethod: 'POST',
        initRoute: ENTITY_ROUTE,
        initCredentials: payload,
        initToken: { token },
        functionFetching: usePages.actions.onFetching,
        functionSuccess: usePages.actions.returnInit,
        functionError: newError,
      });
    }
  };

  const update = (): void => {
    if (
      useAttributes.states.nameValid &&
      useAttributes.states.lastNameValid &&
      useAttributes.states.typeValid &&
      useAttributes.states.photoValid &&
      useAttributes.states.statusValid &&
      useAttributes.states.phoneValid &&
      useAttributes.states.emailValid &&
      token
    ) {
      const payload = {
        ...(useAttributes.states.name
          ? { name: useAttributes.states.name }
          : {}),
        ...(useAttributes.states.type
          ? { type: useAttributes.states.type }
          : {}),
        ...(useAttributes.states.status
          ? { status: useAttributes.states.status }
          : {}),
        ...(useAttributes.states.lastName
          ? { lastName: useAttributes.states.lastName }
          : {}),
        ...(useAttributes.states.email
          ? { email: useAttributes.states.email }
          : {}),
        ...(useAttributes.states.phone
          ? { phone: useAttributes.states.phone }
          : {}),
        ...(useAttributes.states.photo
          ? { photo: useAttributes.states.photo }
          : {}),
      };

      gafpriFetch({
        initMethod: 'PATCH',
        initRoute: `${ENTITY_ROUTE}/${useAttributes.states.currentId}`,
        initCredentials: payload,
        initToken: { token },
        functionFetching: usePages.actions.onFetching,
        functionSuccess: usePages.actions.returnInit,
        functionError: newErrorUpdate,
      });
    }
  };

  const updateAddress = (newAddress: AddressAttributes[]): void => {
    if (token) {
      const payload = {
        address: newAddress,
      };

      gafpriFetch({
        initMethod: 'PATCH',
        initRoute: `${ENTITY_ROUTE}/${useAttributes.states.currentId}`,
        initCredentials: payload,
        initToken: { token },
        functionFetching: usePages.actions.onFetching,
        functionSuccess: () =>
          usePages.actions.goUpdate(useAttributes.states.currentId),
        functionError: newErrorUpdate,
      });
    }
  };

  const updateDocument = (newDocument: DocumentIdAttributes[]): void => {
    if (token) {
      const payload = {
        documentId: newDocument,
      };

      gafpriFetch({
        initMethod: 'PATCH',
        initRoute: `${ENTITY_ROUTE}/${useAttributes.states.currentId}`,
        initCredentials: payload,
        initToken: { token },
        functionFetching: usePages.actions.onFetching,
        functionSuccess: () =>
          usePages.actions.goUpdate(useAttributes.states.currentId),
        functionError: newErrorUpdate,
      });
    }
  };

  const addAddress = (): void => {
    if (
      useAttributes.states.addressTypeValid &&
      useAttributes.states.address1Valid &&
      useAttributes.states.address2Valid &&
      useAttributes.states.cityValid &&
      useAttributes.states.stateCountryValid &&
      useAttributes.states.countryValid &&
      useAttributes.states.postCodeValid
    ) {
      let updateNewAddress = useAttributes.states.address;
      if (useAttributes.states.addressType === 'bill') {
        updateNewAddress = useAttributes.actions.changeTypeInAllAddresses(
          useAttributes.states.address,
          'shipping'
        );
      }
      const newAddress = {
        type: useAttributes.states.addressType,
        address1: useAttributes.states.address1,
        ...(useAttributes.states.address2
          ? { address2: useAttributes.states.address2 }
          : {}),
        city: useAttributes.states.city,
        state: useAttributes.states.state,
        country: useAttributes.states.country,
        ...(useAttributes.states.postCode
          ? { postCode: useAttributes.states.postCode }
          : {}),
        entityId: useAttributes.states.currentId,
      };
      updateNewAddress.push(newAddress);

      updateAddress(updateNewAddress);
    }
  };

  const addDocument = (): void => {
    if (
      useAttributes.states.typeDocumentIdIdValid &&
      useAttributes.states.indexValid &&
      useAttributes.states.digitValid &&
      useAttributes.states.documentPhotoValid
    ) {
      const newDocument = [
        {
          typeDocumentIdId: useAttributes.states.typeDocumentIdId,
          ...(useAttributes.states.index !== 'null'
            ? { index: useAttributes.states.index }
            : {}),
          digit: useAttributes.states.digit,
          photo: useAttributes.states.documentPhoto,
        },
      ];
      updateDocument(newDocument);
    }
  };

  const changeAddress = (id: number): void => {
    const newAddress = useAttributes.actions.changeTypeInAllAddresses(
      useAttributes.states.address,
      'shipping'
    );
    const updateNewAddress = useAttributes.actions.updateAddressTypeById(
      newAddress,
      id,
      'bill'
    );
    useAttributes.actions.setAddress(updateNewAddress);
    updateAddress(updateNewAddress);
  };

  const deleteAddress = (id: number): void => {
    if (token) {
      const payload = {
        address: [
          {
            id,
          },
        ],
      };

      gafpriFetch({
        initMethod: 'DELETE',
        initRoute: `${ENTITY_ROUTE}/${useAttributes.states.currentId}`,
        initCredentials: payload,
        initToken: { token },
        functionFetching: usePages.actions.onFetching,
        functionSuccess: () =>
          usePages.actions.goUpdate(useAttributes.states.currentId),
        functionError: newErrorUpdate,
      });
    }
  };

  const deleteDocument = (id: number): void => {
    if (useAttributes.states.documentId.length > 1 && token) {
      const payload = {
        documentId: [
          {
            id,
          },
        ],
      };

      gafpriFetch({
        initMethod: 'DELETE',
        initRoute: `${ENTITY_ROUTE}/${useAttributes.states.currentId}`,
        initCredentials: payload,
        initToken: { token },
        functionFetching: usePages.actions.onFetching,
        functionSuccess: () =>
          usePages.actions.goUpdate(useAttributes.states.currentId),
        functionError: newErrorUpdate,
      });
    } else {
      // eslint-disable-next-line no-alert
      alert('No se puede borrar el documento principal');
    }
  };

  // Define las acciones necesarias para los atributos de Site
  const actions = {
    addAddress,
    changeAddress,

    newError,
    newErrorUpdate,
    add,
    addDocument,
    deleteAddress,
    deleteDocument,
    update,
  };

  return {
    actions,
  };
};
