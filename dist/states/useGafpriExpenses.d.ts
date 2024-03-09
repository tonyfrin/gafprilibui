import type { UseErrorReturn } from './useGafpriError';
import type { UseGafpriEntityReturn } from './useGafpriEntity';
import { UseGafpriAttributesExpensesReturn, UseGafpriPagesExpensesReturn, UseGafpriPaginationsExpensesReturn, UseGafpriApiExpensesReturn, UseGafpriDataExpensesReturn } from '../Abstract';
export interface UseGafpriExpensesReturn {
    attributes: UseGafpriAttributesExpensesReturn;
    pages: UseGafpriPagesExpensesReturn;
    paginations: UseGafpriPaginationsExpensesReturn;
    api: UseGafpriApiExpensesReturn;
    data: UseGafpriDataExpensesReturn;
    error: UseErrorReturn;
}
export type UseGafpriExpensesProps = {
    token: string | null;
    useEntity: UseGafpriEntityReturn;
};
export declare function useGafpriExpenses({ token, useEntity, }: UseGafpriExpensesProps): UseGafpriExpensesReturn;
