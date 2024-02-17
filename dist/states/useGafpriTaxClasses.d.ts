import { UseErrorReturn } from './useGafpriError';
import { UseGafpriAttributesTaxClassesReturn } from '../Abstract/states/taxes/taxClasses/useGafpriAttributesTaxClasses';
import { UseGafpriPagesTaxClassesReturn } from '../Abstract/states/taxes/taxClasses/useGafpriPagesTaxClasses';
import { UseGafpriDataTaxClassesReturn } from '../Abstract/states/taxes/taxClasses/useGafpriDataTaxClasses';
import { UseGafpriPaginationsTaxClassesReturn } from '../Abstract/states/taxes/taxClasses/useGafpriPaginationsTaxClasses';
import { UseGafpriApiTaxClassesReturn } from '../Abstract/states/taxes/taxClasses/useGafpriApiTaxClasses';
import { UseTaxRatesReturn } from './useGafpriTaxRates';
export interface UseTaxClassesReturn {
    attributes: UseGafpriAttributesTaxClassesReturn;
    pages: UseGafpriPagesTaxClassesReturn;
    paginations: UseGafpriPaginationsTaxClassesReturn;
    api: UseGafpriApiTaxClassesReturn;
    data: UseGafpriDataTaxClassesReturn;
    error: UseErrorReturn;
    useTaxRates: UseTaxRatesReturn;
}
export declare function useGafpriTaxClasses(token: string | null): UseTaxClassesReturn;
