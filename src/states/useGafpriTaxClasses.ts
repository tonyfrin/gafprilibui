import { useGafpriError, UseErrorReturn } from './useGafpriError';
import {
  UseGafpriAttributesTaxClassesReturn,
  useGafpriAttributesTaxClasses,
} from '../Abstract/states/taxes/taxClasses/useGafpriAttributesTaxClasses';
import {
  UseGafpriPagesTaxClassesReturn,
  useGafpriPagesTaxClasses,
} from '../Abstract/states/taxes/taxClasses/useGafpriPagesTaxClasses';
import {
  UseGafpriDataTaxClassesReturn,
  useGafpriDataTaxClasses,
} from '../Abstract/states/taxes/taxClasses/useGafpriDataTaxClasses';
import {
  UseGafpriPaginationsTaxClassesReturn,
  useGafpriPaginationsTaxClasses,
} from '../Abstract/states/taxes/taxClasses/useGafpriPaginationsTaxClasses';
import {
  UseGafpriApiTaxClassesReturn,
  useGafpriApiTaxClasses,
} from '../Abstract/states/taxes/taxClasses/useGafpriApiTaxClasses';
import { useGafpriTaxRates, UseTaxRatesReturn } from './useGafpriTaxRates';

export interface UseTaxClassesReturn {
  attributes: UseGafpriAttributesTaxClassesReturn;
  pages: UseGafpriPagesTaxClassesReturn;
  paginations: UseGafpriPaginationsTaxClassesReturn;
  api: UseGafpriApiTaxClassesReturn;
  data: UseGafpriDataTaxClassesReturn;
  error: UseErrorReturn;
  useTaxRates: UseTaxRatesReturn;
}

export function useGafpriTaxClasses(token: string | null): UseTaxClassesReturn {
  /**
   * States
   *
   *
   */
  const error = useGafpriError();
  const attributes = useGafpriAttributesTaxClasses();
  const pages = useGafpriPagesTaxClasses({ attributes });
  const data = useGafpriDataTaxClasses({ token });
  const paginations = useGafpriPaginationsTaxClasses({ data });
  const api = useGafpriApiTaxClasses({
    token,
    useError: error,
    pages,
    attributes,
  });
  const useTaxRates = useGafpriTaxRates(token, pages.actions.closeModalPage);

  return {
    attributes,
    pages,
    paginations,
    api,
    data,
    error,
    useTaxRates,
  };
}
