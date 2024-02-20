import React from 'react';
import { css, cx } from '@emotion/css';
import { Loading } from '../Loading';
import {
  UseGafpriProductsReturn,
  UseGafpriBudgetReturn,
  UseGafpriEntityReturn,
  SiteOptions,
} from '../../states';
import {
  FadeIn,
  HeaderMenu,
  HeaderMenuItem,
  MainMenuItems,
  UseGafpriPagesSalesModuleReturn,
  BudgetInit,
  EntityBudgetSearch,
  BudgetModule,
  BudgetPrint,
} from '../../Abstract';
import { EntityBudget } from '../Entity';
import { ProductBudget } from '../Products';
import { InitMainMenu } from '../Main';

export type BudgetStylesContainerProps = {
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundRepeat?: string;
  height?: string;
  custom?: string;
};

const budgetStylesContainer = (stayles: BudgetStylesContainerProps) => css`
  padding-top: 60px;
  padding-bottom: 50px;
  ${stayles.backgroundImage &&
  `background-image: url(${stayles.backgroundImage});`}
  background-repeat: ${stayles.backgroundRepeat || 'no-repeat'};
  background-size: ${stayles.backgroundSize || '345vh'};
  ${stayles.custom || ''}
`;

export type BudgetProps = {
  use: UseGafpriBudgetReturn;
  useEntity: UseGafpriEntityReturn;
  usePagesMain: UseGafpriPagesSalesModuleReturn;
  sitesOptions: SiteOptions;
  menu: MainMenuItems[];
  containerStyles?: BudgetStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  itemsMenu: HeaderMenuItem[];
  useProducts: UseGafpriProductsReturn;
  menuEntity: MainMenuItems[];
};

export const Budget = ({
  use,
  useEntity,
  containerStyles = {},
  containerProps = {},
  itemsMenu,
  usePagesMain,
  sitesOptions,
  menu,
  useProducts,
  menuEntity,
}: BudgetProps): JSX.Element => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  return (
    <>
      <div
        className={cx(
          budgetStylesContainer(containerStyles),
          containerClassName
        )}
        {...restContainerProps}
      >
        <HeaderMenu items={itemsMenu} />
        {use.pages.states.isFetching && <Loading />}

        {use.pages.states.isInit && (
          <FadeIn keyName="init" isVisible={use.pages.states.isInit}>
            <InitMainMenu
              contentProps={{
                items: menu,
              }}
            />
          </FadeIn>
        )}

        {use.pages.states.isEntityForm && (
          <FadeIn
            keyName="entityForm"
            isVisible={use.pages.states.isEntityForm}
          >
            <BudgetInit
              useEntity={useEntity}
              useBudget={use}
              usePagesMain={usePagesMain}
            />
          </FadeIn>
        )}
        {use.pages.states.isAddEntity && (
          <FadeIn keyName="addEntity" isVisible={use.pages.states.isAddEntity}>
            <EntityBudget use={useEntity} useBudget={use} menu={menuEntity} />
          </FadeIn>
        )}
        {use.pages.states.isSales && (
          <FadeIn keyName="sales" isVisible={use.pages.states.isSales}>
            <BudgetModule
              useBudget={use}
              sitesOptions={sitesOptions}
              useProducts={useProducts}
            />
          </FadeIn>
        )}
        {use.pages.states.isEntitySearch && (
          <FadeIn
            keyName="entitySearch"
            isVisible={use.pages.states.isEntitySearch}
          >
            <EntityBudgetSearch use={useEntity} useBudget={use} />
          </FadeIn>
        )}
        {use.pages.states.isProductSearch && (
          <FadeIn
            keyName="productySearch"
            isVisible={use.pages.states.isProductSearch}
          >
            <ProductBudget
              useProduct={useProducts}
              useBudget={use}
              sitesOptions={sitesOptions}
            />
          </FadeIn>
        )}

        {use.pages.states.isPrint && (
          <FadeIn keyName="print" isVisible={use.pages.states.isPrint}>
            <BudgetPrint useBudget={use} sitesOptions={sitesOptions} />
          </FadeIn>
        )}
      </div>
    </>
  );
};
