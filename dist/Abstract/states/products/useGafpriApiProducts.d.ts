import { UseErrorReturn } from '../../../states';
import { UseGafpriPagesProductsReturn } from './useGafpriPagesProducts';
import { UseGafpriAttributesProductsReturn } from './useGafpriAttributesProducts';
type Actions = {
    add: () => void;
    update: () => void;
    erase: (id: number) => void;
};
export type UseGafpriApiProductsReturn = {
    actions: Actions;
};
export type UseGafpriApiProductsProps = {
    token: string | null;
    useError: UseErrorReturn;
    pages: UseGafpriPagesProductsReturn;
    attributes: UseGafpriAttributesProductsReturn;
};
export declare function useGafpriApiProducts({ token, useError, pages, attributes, }: UseGafpriApiProductsProps): UseGafpriApiProductsReturn;
export {};
