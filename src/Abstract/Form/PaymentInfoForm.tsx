import React from 'react';
import { ContainerHeaderInfo } from '../Containers';
import { LineInfoTwo } from '../Li';

export type PaymentInfoFormProps = {
  type: string;
  postsId: string;
  total: string;
};

export const PaymentInfoForm = ({
  type,
  postsId,
  total,
}: PaymentInfoFormProps) => {
  return (
    <>
      <ContainerHeaderInfo>
        <LineInfoTwo title="tipo: " info={type} />
        <LineInfoTwo title="Numero: " info={postsId} />
        <LineInfoTwo title="Pago Total: " info={total} />
      </ContainerHeaderInfo>
    </>
  );
};
