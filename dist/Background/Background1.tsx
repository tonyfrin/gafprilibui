import React from 'react'
import { css } from '@emotion/css';

type style = {
  image: string;
  children: JSX.Element;
};

const Background1Styles = (image: string) => css`
    background-image: url(${image});
    background-size: 190vh;
    background-repeat: no-repeat;
    min-height: 100vh;
`;

export const Background1 =  ({ children, image }: style) => {
  return (
    <div className={Background1Styles(image)}>
      {children}
    </div>
  )
}
