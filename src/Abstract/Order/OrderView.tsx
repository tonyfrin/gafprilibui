import React from 'react';
import {
  ModelForm,
  EntityOrderViewFormInfoHeader,
  OrderViewFormInfoHeader,
} from '../Form';
import { UseGafpriOrderReturn, SiteOptions } from '../../states';
import { ModuleHeader } from '../Header';
import { CartOrderViewSections, PaymentOrderSections } from '../Sections';
import { PaymentAttributesReturn } from '../states/payment';

export type OrderViewProps = {
  useOrder: UseGafpriOrderReturn;
  sitesOptions: SiteOptions;
  logoPdf: string;
  returnFunction: () => void;
};

export const OrderView = ({
  useOrder,
  sitesOptions,
  logoPdf,
  returnFunction,
}: OrderViewProps) => {
  const order = useOrder.data.actions.getById(
    useOrder.attributes.states.currentId
  );

  return (
    <>
      {order && (
        <>
          <ModelForm
            titles={{
              title1: 'Modulo de Ventas',
              title2: 'Vista de pedido',
            }}
            handleActions={() => console.log('handleActions')}
            buttonTitles={{
              mainButton: '',
              returnButton: '',
            }}
            error={useOrder.error.states.error}
            boxProps={{
              styles: {
                height: '100%',
                padding: '10px',
              },
            }}
          >
            <>
              <ModuleHeader>
                <EntityOrderViewFormInfoHeader
                  order={order}
                  returnFunction={returnFunction}
                />
                <OrderViewFormInfoHeader
                  order={order}
                  siteOptions={sitesOptions}
                  logoPdf={logoPdf}
                />
              </ModuleHeader>
            </>
          </ModelForm>
          <CartOrderViewSections order={order} sitesOptions={sitesOptions} />
          {order.payment && (
            <PaymentOrderSections
              payments={order.payment}
              siteOptions={sitesOptions}
            />
          )}
        </>
      )}
    </>
  );
};
