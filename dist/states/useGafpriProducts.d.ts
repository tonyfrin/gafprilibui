import type { UseGafpriTaxClassesReturn } from './useGafpriTaxClasses';
import type { UseCategoryReturn } from './useGafpriCategory';
import type { UseErrorReturn } from './useGafpriError';
import { UseGafpriAttributesProductsReturn, UseGafpriApiProductsReturn, UseGafpriPagesProductsReturn, UseGafpriSubPagesProductsReturn, UseGafpriDataProductsReturn, UseGafpriPaginationsProductsReturn } from '../Abstract';
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
export declare function useGafpriProducts({ token, useTaxClasses, useCategory, }: UseGafpriProductsProps): UseGafpriProductsReturn;
