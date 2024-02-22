import React, { useState, useEffect } from 'react';
import { css, cx } from '@emotion/css';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Button } from '../Button';
import { BudgetPdf } from '../Pdf';
import { UseGafpriBudgetReturn, SiteOptions } from '../../states';
import { Loading } from '../../Components';

const printButtonStylesContainer = css`
  display: flex;
  justify-content: space-evenly;
`;

export type PrintButtonBudgetProps = {
  id: number;
  useBudget: UseGafpriBudgetReturn;
  siteOptions: SiteOptions;
  logoPdf: string;
};

export const PrintButtonBudget = ({
  id,
  useBudget,
  siteOptions,
  logoPdf,
}: PrintButtonBudgetProps) => {
  const [RenderButton, setRenderButton] = useState(<></>);
  const budget = useBudget.data.actions.getById(id);

  useEffect(() => {
    setRenderButton((): JSX.Element => {
      return (
        <div className={css(printButtonStylesContainer)}>
          {budget && (
            <PDFDownloadLink
              document={
                <BudgetPdf
                  budget={budget}
                  logo={logoPdf}
                  siteOptions={siteOptions}
                />
              }
              fileName={`presupuesto${budget.postsId}.pdf`}
            >
              {({ blob, url, loading, error }) => {
                return loading ? (
                  <Loading
                    mainStyles={{
                      padding: '0px',
                    }}
                    divStyle={{
                      border: '3px solid #eee',
                      borderTop: '3px solid #077bb4',
                      width: '20px',
                      height: '20px',
                    }}
                  />
                ) : (
                  <Button
                    title="Imprimir"
                    styles={{
                      fontSize: '10px',
                    }}
                  />
                );
              }}
            </PDFDownloadLink>
          )}
        </div>
      );
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return RenderButton;
};
