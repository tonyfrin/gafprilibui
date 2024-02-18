import { useGafpriError } from './useGafpriError';
import type { UseGafpriTaxClassesReturn } from './useGafpriTaxClasses';
import type { UseCategoryReturn } from './useGafpriCategory';
import type { UseErrorReturn } from './useGafpriError';
import {
  UseGafpriAttributesProductsReturn,
  useGafpriAttributesProducts,
  UseGafpriApiProductsReturn,
  useGafpriApiProducts,
  UseGafpriPagesProductsReturn,
  useGafpriPagesProducts,
  UseGafpriSubPagesProductsReturn,
  useGafpriSubPagesProducts,
  UseGafpriDataProductsReturn,
  useGafpriDataProducts,
  UseGafpriPaginationsProductsReturn,
  useGafpriPaginationsProducts,
} from '../Abstract';

export interface UseGafpriProductsReturn {
  attributes: UseGafpriAttributesProductsReturn;
  pages: UseGafpriPagesProductsReturn;
  subPages: UseGafpriSubPagesProductsReturn;
  paginations: UseGafpriPaginationsProductsReturn;
  api: UseGafpriApiProductsReturn;
  data: UseGafpriDataProductsReturn;
  error: UseErrorReturn;
}

export type UseGafpriProductsProps = {
  token: string | null;
  useTaxClasses: UseGafpriTaxClassesReturn;
  useCategory: UseCategoryReturn;
};

export function useGafpriProducts({
  token,
  useTaxClasses,
  useCategory,
}: UseGafpriProductsProps): UseGafpriProductsReturn {
  /**
   * States
   *
   *
   */

  const optionsTaxClasses = useTaxClasses.data.actions.getOptions();
  const error = useGafpriError();
  const attributes = useGafpriAttributesProducts({
    optionsTaxClasses,
    useError: error,
    useCategory,
  });
  const subPages = useGafpriSubPagesProducts();
  const pages = useGafpriPagesProducts({ attributes, subPages });
  const data = useGafpriDataProducts({ token });
  const paginations = useGafpriPaginationsProducts({ data });
  const api = useGafpriApiProducts({
    token,
    useError: error,
    pages,
    attributes,
  });

  return {
    attributes,
    pages,
    subPages,
    paginations,
    api,
    data,
    error,
  };
}
