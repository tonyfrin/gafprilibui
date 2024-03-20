import React from 'react';
import { css } from '@emotion/css';
import type { UseGafpriAccountsReceivableReturn } from '../../states';
import {
  Box1,
  Title1,
  Title2,
  InputPassword,
  InputUserName,
  ButtonNext,
} from '../../Abstract';

const defaultTitleContainerStyle = css`
  margin-top: 22px;
  margin-bottom: 30px;
`;

const defaultNameContainerStyle = css`
  width: 95%;
  margin: 0 auto;
`;

const defaultActionButtonContainerStyle = css`
  display: flex;
  flex-direction: row;
  width: 95%;
  margin-bottom: 0px;
  justify-content: flex-end;
  margin-top: 22px;
  width: 85%;
`;

export type AccountsReceivableLoginUpdateFormProps = {
  use: UseGafpriAccountsReceivableReturn;
  titleContainerStyle?: string;
  nameContainerStyle?: string;
  actionButtonContainerStyle?: string;
};

export const AccountsReceivableLoginUpdateForm = ({
  use,
  titleContainerStyle = defaultTitleContainerStyle,
  nameContainerStyle = defaultNameContainerStyle,
  actionButtonContainerStyle = defaultActionButtonContainerStyle,
}: AccountsReceivableLoginUpdateFormProps): JSX.Element => {
  React.useEffect(() => {
    use.attributes.actions.validationButtonNextLogin();
    use.attributes.actions.validationAuthorizedLogin(
      use.attributes.states.authorizedLogin
    );
    use.attributes.actions.validationAuthorizedPassword(
      use.attributes.states.authorizedPassword
    );
  }, [
    use.attributes.states.authorizedLogin,
    use.attributes.states.authorizedPassword,
  ]);

  return (
    <Box1
      styles={{
        width: 'auto',
        height: 'auto',
      }}
    >
      <>
        <div className={css(titleContainerStyle)}>
          <Title1 title="Autorización" />
          <Title2
            title="Use sus credenciales para autorizar esta operación."
            styles={{
              textTransform: 'none',
            }}
          />
        </div>
        <div>
          <div className={css(nameContainerStyle)}>
            <>
              <InputUserName
                changeUserName={use.attributes.actions.changeAuthorizedLogin}
                props={{
                  styles: {
                    width: '100%',
                  },
                }}
              />
            </>
          </div>
          <div className={css(nameContainerStyle)}>
            <>
              <InputPassword
                changePassword={use.attributes.actions.changeAuthorizedPassword}
                props={{
                  styles: {
                    width: '100%',
                  },
                }}
              />
            </>
          </div>
          <div className={css(actionButtonContainerStyle)}>
            <ButtonNext
              title="Autorizar"
              props={{
                buttonProps: {
                  onClick: () => use.api.actions.update(),
                },
                title: 'Autorizar',
              }}
            />
          </div>
        </div>
      </>
    </Box1>
  );
};
