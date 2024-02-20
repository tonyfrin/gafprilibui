import { KeyboardEvent } from 'react';
import { UseGafpriEntityReturn, UseGafpriProductsReturn } from '../../../states';
import { UseGafpriAttributesBudgetReturn } from './useGafpriAttributesBudget';
import { UseGafpriAttributesBudgetItemsReturn } from '../productsItems';
export type UseGafpriPagesBudgetReturn = {
    states: {
        isFetching: boolean;
        isInit: boolean;
        isEntitySearch: boolean;
        isAddEntity: boolean;
        isSales: boolean;
        isProductSearch: boolean;
    };
    actions: {
        onFetching: () => void;
        onInit: () => void;
        onEntitySearch: () => void;
        onAddEntity: () => void;
        onSales: () => void;
        onProductSearch: () => void;
        returnInit: () => void;
        processEntityBydocumentId: (event: KeyboardEvent<HTMLInputElement>) => void;
        processEntityByName: (event: KeyboardEvent<HTMLInputElement>) => void;
        selectEntity: (id: number) => void;
        processEntityByPhone: (event: KeyboardEvent<HTMLInputElement>) => void;
        processEntityByEmail: (event: KeyboardEvent<HTMLInputElement>) => void;
        processProductBySku: (event: KeyboardEvent<HTMLInputElement>) => void;
        selectproduct: (id: number) => void;
        processProductByName: (event: KeyboardEvent<HTMLInputElement>) => void;
    };
};
export type UseGafpriPagesBudgetProps = {
    useAttributes: UseGafpriAttributesBudgetReturn;
    useEntity: UseGafpriEntityReturn;
    useProducts: UseGafpriProductsReturn;
    useProductItems: UseGafpriAttributesBudgetItemsReturn;
};
export declare const useGafpriPagesBudget: ({ useAttributes, useEntity, useProducts, useProductItems, }: UseGafpriPagesBudgetProps) => UseGafpriPagesBudgetReturn;
