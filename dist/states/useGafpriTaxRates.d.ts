import { UseErrorReturn } from './useGafpriError';
import { UseGafpriAttributesTaxRatesReturn } from '../Abstract/states/taxes/taxRates/useGafpriAttributesTaxRates';
import { UseGafpriPagesTaxRatesReturn } from '../Abstract/states/taxes/taxRates/useGafpriPagesTaxRates';
import { UseGafpriDataTaxRatesReturn } from '../Abstract/states/taxes/taxRates/useGafpriDataTaxRates';
import { UseGafpriPaginationsTaxRatesReturn } from '../Abstract/states/taxes/taxRates/useGafpriPaginationsTaxRates';
import { UseGafpriApiTaxRatesReturn } from '../Abstract/states/taxes/taxRates/useGafpriApiTaxRates';
export interface UseTaxRatesReturn {
    attributes: UseGafpriAttributesTaxRatesReturn;
    pages: UseGafpriPagesTaxRatesReturn;
    paginations: UseGafpriPaginationsTaxRatesReturn;
    api: UseGafpriApiTaxRatesReturn;
    data: UseGafpriDataTaxRatesReturn;
    error: UseErrorReturn;
}
export declare function useGafpriTaxRates(token: string | null, closeModalPage: () => void): UseTaxRatesReturn;
