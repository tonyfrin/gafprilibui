import React from 'react';
import { css, cx } from '@emotion/css';
import { EntitySearchForm } from '../Form';
import { UseGafpriOrderReturn, UseGafpriEntityReturn } from '../../states';
import { UseGafpriPagesSalesModuleReturn } from '../states';

export type OrderInitStylesContainerProps = {
  maxWidht?: string;
  margin?: string;
  custom?: string;
};

export type OrderInitProps = {
  containerStyles?: OrderInitStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  useOrder: UseGafpriOrderReturn;
  useEntity: UseGafpriEntityReturn;
  usePagesMain: UseGafpriPagesSalesModuleReturn;
};

const orderInitStylesContainer = (
  stayles: OrderInitStylesContainerProps
) => css`
  max-width: ${stayles.maxWidht || '900px'};
  margin: ${stayles.margin || 'auto'};
  ${stayles.custom || ''}
`;

export const OrderInit = ({
  containerStyles = {},
  containerProps = {},
  useOrder,
  useEntity,
  usePagesMain,
}: OrderInitProps): JSX.Element => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  return (
    <>
      <div
        className={cx(
          orderInitStylesContainer(containerStyles),
          containerClassName
        )}
        {...restContainerProps}
      >
        <EntitySearchForm
          useOrder={useOrder}
          useEntity={useEntity}
          usePagesSalesModule={usePagesMain}
        />
      </div>
    </>
  );
};
