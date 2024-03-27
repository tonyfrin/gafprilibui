import React from 'react';
import { css, cx } from '@emotion/css';
import {
  ModelForm,
  EntityOrderViewFormInfoHeader,
  OrderViewFormInfoHeader,
} from '../Form';
import { UseGafpriOrderReturn, SiteOptions } from '../../states';
import { ModuleHeader } from '../Header';
import { CartOrderViewSections, PaymentOrderSections } from '../Sections';
import { PaymentAttributesReturn } from '../states/payment';
import { PaymentMethodsAttributes } from '../states/paymentMethods';

export type OrderViewProps = {
  useOrder: UseGafpriOrderReturn;
  sitesOptions: SiteOptions;
  logoPdf: string;
  returnFunction: () => void;
  images?: {
    zelle: string;
    pagoMovil: string;
    transfer: string;
    cash: string;
  };
};

const containerPaymentsStyles = () => css`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const OrderView = ({
  useOrder,
  sitesOptions,
  logoPdf,
  returnFunction,
  images,
}: OrderViewProps) => {
  const order = useOrder.data.actions.getById(
    useOrder.attributes.states.currentId
  );

  if (!order) return null;

  const deposit: PaymentMethodsAttributes[] =
    order.payment?.paymentMethods.filter((item) => item.type === 'deposit') ||
    [];
  const debit: PaymentMethodsAttributes[] =
    order.payment?.paymentMethods.filter((item) => item.type === 'debit') || [];

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
            <div className={cx(containerPaymentsStyles())}>
              <PaymentOrderSections
                payments={deposit}
                siteOptions={sitesOptions}
                images={images}
              />
              <PaymentOrderSections
                payments={debit}
                siteOptions={sitesOptions}
                images={images}
              />
            </div>
          )}
        </>
      )}
    </>
  );
};
