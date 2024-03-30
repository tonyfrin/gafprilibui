import React, { KeyboardEvent } from 'react';
import {
  ModelForm,
  EntityFormOrderReturnInfoHeader,
  OrderReturnFormInfoHeader,
} from '../Form';
import {
  UseGafpriOrderReturnReturn,
  SiteOptions,
  UseGafpriProductsReturn,
} from '../../states';
import { ModuleHeader } from '../Header';
import { CartOrderReturnSections } from '../Sections';

export type SalesReturnProps = {
  use: UseGafpriOrderReturnReturn;
  sitesOptions: SiteOptions;
};

export const SalesReturn = ({ use, sitesOptions }: SalesReturnProps) => {
  return (
    <>
      <ModelForm
        titles={{
          title1: 'Modulo de devolución de pedido',
          title2: 'elegir productos',
        }}
        handleActions={() => console.log('handleActions')}
        buttonTitles={{
          mainButton: '',
          returnButton: '',
        }}
        error={use.error.states.error}
        boxProps={{
          styles: {
            height: '100%',
            padding: '10px',
          },
        }}
      >
        <>
          <ModuleHeader>
            <EntityFormOrderReturnInfoHeader useOrderReturn={use} />
            <OrderReturnFormInfoHeader
              useOrderReturn={use}
              siteOptions={sitesOptions}
            />
          </ModuleHeader>
        </>
      </ModelForm>
      <CartOrderReturnSections
        useOrderReturn={use}
        sitesOptions={sitesOptions}
      />
    </>
  );
};
