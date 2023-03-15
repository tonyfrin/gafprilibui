import React from 'react';
import { render } from '@testing-library/react';
import LoginHeader from './LoginHeader';
import LogoWhite from './../../assets/img/logo-blanco.png';

describe('@components/LogoContainer', () => {
  it('Given a normal component call it should render component', () => {
    //arrange
    const { getByRole } = render(<LoginHeader image={LogoWhite.src} />);
    //act
    const logoTest = getByRole('logo');
    //assert
    expect(logoTest).toBeDefined();
  });
});
