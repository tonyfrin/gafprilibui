import React from 'react'
import { css, cx } from '@emotion/css';

const Title1Styles = (styles: Title1Styles) => css`
    text-align: ${styles.textAlign || 'left'};
    font-size: ${styles.fontSize || '28px'};
    font-weight: ${styles.fontWeight || '600'};
    margin-bottom: ${styles.marginBottom || '5px'};
    margin-top: ${styles.marginTop || '0px'};

    @media (max-width: 750px) {
        font-size: ${styles.media750Style?.fontSize || '20px'};
    }

    @media (max-width: 400px) {
        font-size: ${styles.media400Style?.fontSize || '18px'};
    }

    @media (max-width: 300px) {
        font-size: ${styles.media300Style?.fontSize || '16px'};
    }
`;

type TitleMedia = {
    fontSize?: string | number;
}


type Title1Styles = {
    textAlign?: string;
    fontSize?: string | number;
    fontWeight?: string | number;
    marginBottom?: string | number;
    marginTop?: string | number;
    media750Style?: TitleMedia | undefined;
    media400Style?: TitleMedia | undefined;
    media300Style?: TitleMedia | undefined;
};

type Title1 = {
    styles?: Title1Styles | undefined;
    title: string;
}

export const Title1 =  ({ styles = {}, title }: Title1) => {
  return (
    <h1 className={Title1Styles(styles)}>{title}</h1>
  )
}

const Title2Styles = (styles: Title2Styles) => css`
    font-size: ${styles.fontSize || '18px'};
    text-transform: ${styles.textTransform || 'capitalize'};
    font-weight: ${styles.fontWeight || '400'};
    margin: ${styles.margin || '0px 0px 10px 0px'};
    

    @media (max-width: 750px) {
        font-size: ${styles.media750Style?.fontSize || '14px'};
    }

    @media (max-width: 400px) {
        font-size: ${styles.media400Style?.fontSize || '12px'};
    }

    @media (max-width: 300px) {
        font-size: ${styles.media300Style?.fontSize || '10px'};
    }
`;

type Title2Styles = {
    fontSize?: string | number;
    textTransform?: string;
    fontWeight?: string | number;
    margin?: string | number;
    media750Style?: TitleMedia | undefined;
    media400Style?: TitleMedia | undefined;
    media300Style?: TitleMedia | undefined;
};

type Title2 = {
    styles?: Title2Styles | undefined;
    title: string;
}

export const Title2 =  ({ styles = {}, title }: Title2) => {
    return (
      <h1 className={Title2Styles(styles)}>{title}</h1>
    )
}

const GloboTitleStyles = (styles: GloboTitleStyle) => css`
    margin: ${styles.margin || 'auto 0px'};
    font-size: ${styles.fontSize || '20px'};
    font-weight: ${styles.fontWeight || '800'};
`;

export type GloboTitleStyle = {
    fontWeight?: string;
    margin?: string;
    fontSize?: string;
}

type GloboTitle = {
    styles?: GloboTitleStyle | undefined;
    title: string;
    globoTitleClass?: string | undefined;
}

export const GloboTitle =  (
    { 
        styles = {},
        title, 
        globoTitleClass = ''}: GloboTitle) => {
  return (
    <>
        <span className={cx(GloboTitleStyles(styles), globoTitleClass)}>{title}</span>
    </>
  )
}

