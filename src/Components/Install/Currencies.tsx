import React from "react"
import { ContainerForm } from "../../Abstract";
import { Step } from "../../Abstract";
import { GsSelect } from "../../Abstract";
import type { GafpriConfig } from '../../states';


export const Curriencies = ({states, actions}: GafpriConfig): JSX.Element => {

    React.useEffect(() => {
        actions.validationCurrencyValue(states.currenciesDefault.value);
        actions.validationButtonCurrency(states.validationCurrency)
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
       
            <>
                        <Step 
                            step="1"
                            title="Tipo de Moneda Principal"
                            buttonNextTitle = "Siguiente"
                            buttonNextProps = {{
                                onClick: actions.nextCurrency,
                                id: 'nextCurrency'
                            }}
                            
                        />
                        <ContainerForm>
                            <>
                                <GsSelect 
                                    id='currencyName'
                                    onChange={event => (actions.currencyChange(event))}
                                    options={states.currenciesOptions} 
                                    defaultValue={states.currenciesDefault}
                                />
                            </>
                        </ContainerForm>
                    </>
    )
}