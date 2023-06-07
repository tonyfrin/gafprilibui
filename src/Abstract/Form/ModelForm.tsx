import React from 'react';
import { Box1 } from '../Box';
import { ContainerForm } from '../Containers';
import type { ContainerFormProps } from '../Containers';
import { Title1, Title2 } from '../Title';
import type { Title1Props, Title2Props } from '../Title';
import { Button } from '../Button';
import type { ButtonProps } from '../Button';
import { Error } from '../Error';
import type { ErrorProps } from '../Error';
import type { Box1Props } from '../Box';
import { css } from '@emotion/css';

const defaultTitleContainerStyle = css`
  margin-top: 22px;
  padding-left: 38px;
  margin-bottom: 30px;
`;

const defaultActionButtonContainerStyle = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 0px;
  justify-content: flex-end;
  margin-top: 22px;
  width: 85%;
`;

const defaultReturnButtonConatinerStyle = css`
  border-top: 0.1rem solid rgb(227, 223, 218);
  padding: 1rem;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 100px;
`;

const defaultReturnButtonStyle = {
  backgroundColor: '#c12429',
};

interface BoxProps {
  styles?: Box1Props['styles'];
  Class?: Box1Props['Class'];
}

export type ModelFormProps = {
  boxProps?: BoxProps;
  titles: {
    title1: string;
    title2: string;
  };
  title1Props?: Title1Props;
  title2Props?: Title2Props;
  handleActions: (action: string, value: any) => void;
  buttonTitles: {
    mainButton?: string;
    returnButton: string;
  };
  mainButtonProps?: ButtonProps;
  returnButtonStyle?: ButtonProps['styles'];
  returnButtonProps?: ButtonProps;
  children: React.ReactElement;
  error: string[] | null;
  errorProps?: ErrorProps;
  childrenContainerProps?: ContainerFormProps;
  titleContainerStyle?: string;
  actionButtonContainerStyle?: string;
  returnButtonConatinerStyle?: string;
};

export const ModelForm = ({
  boxProps,
  titles,
  title1Props,
  title2Props,
  handleActions,
  buttonTitles,
  mainButtonProps,
  returnButtonStyle = defaultReturnButtonStyle,
  returnButtonProps,
  children,
  error,
  errorProps,
  childrenContainerProps,
  titleContainerStyle = defaultTitleContainerStyle,
  actionButtonContainerStyle = defaultActionButtonContainerStyle,
  returnButtonConatinerStyle = defaultReturnButtonConatinerStyle,
}: ModelFormProps): JSX.Element => {
  return (
    <Box1 {...boxProps}>
      <>
        <div className={css(titleContainerStyle)}>
          <Title1 title={titles.title1} {...title1Props} />
          <Title2 title={titles.title2} {...title2Props} />
        </div>
        <Error error={error} {...errorProps} />
        <ContainerForm {...childrenContainerProps}>{children}</ContainerForm>
        {buttonTitles?.mainButton && (
          <div className={css(actionButtonContainerStyle)}>
            <Button
              title={buttonTitles.mainButton}
              buttonProps={{
                onClick: () => handleActions('submit', {}),
                id: 'buttonNext',
              }}
              {...mainButtonProps}
            />
          </div>
        )}
        <div className={css(returnButtonConatinerStyle)}>
          <Button
            title={buttonTitles.returnButton}
            styles={returnButtonStyle}
            buttonProps={{
              onClick: () => handleActions('return', {}),
            }}
            {...returnButtonProps}
          />
        </div>
      </>
    </Box1>
  );
};