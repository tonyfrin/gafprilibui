import React from 'react';
import { render } from '@testing-library/react';
import { LogoContainer } from './index';
import LogoWhite from './../../assets/img/logo-blanco.png';

describe('@components/LogoContainer', () => {
  it('Given a normal component call it should render component', () => {
    //arrange
    const { getByRole } = render(<LogoContainer image={LogoWhite.src} />);
    //act
    const logoTest = getByRole('logo');
    //assert
    expect(logoTest).toBeDefined();
  });
});
