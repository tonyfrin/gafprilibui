import React, { HTMLAttributes } from 'react';
import { css, cx } from '@emotion/css';
import { MainMenu } from '../../Abstract';
import type { MainMenuProps } from '../../Abstract';

export type InitMainMenuStylesContainerProps = {
  padding?: string;
  custom?: string;
  backgroundImage?: string;
  height?: string;
  backgroundRepeat?: string;
};

export type InitMainMenuProps = {
  stylesContainer?: InitMainMenuStylesContainerProps;
  containerProps?: HTMLAttributes<HTMLDivElement>;
  contentProps: MainMenuProps;
};

const initMainMenuStylesContainer = (
  styles: InitMainMenuStylesContainerProps
) => css`
  padding: ${styles.padding || '28px 0'};
  background-image: ${styles.backgroundImage ||
  'url(https://tiendasgafpri.com/wp-content/themes/gafpristore/assets/img/fondo-admin.png)'};
  background-repeat: ${styles.backgroundRepeat || 'no-repeat'};
  height: ${styles.height || '100vh'};
  ${styles.custom ? styles.custom : ''}
`;

export const InitMainMenu = ({
  stylesContainer = {},
  containerProps = {},
  contentProps,
}: InitMainMenuProps) => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  return (
    <>
      <div
        className={cx(
          initMainMenuStylesContainer(stylesContainer),
          containerClassName
        )}
        {...restContainerProps}
      >
        <MainMenu {...contentProps} />
      </div>
    </>
  );
};
