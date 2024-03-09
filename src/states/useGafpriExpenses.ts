import { useGafpriError } from './useGafpriError';
import type { UseErrorReturn } from './useGafpriError';
import type { UseGafpriEntityReturn } from './useGafpriEntity';
import {
  UseGafpriAttributesExpensesReturn,
  useGafpriAttributesExpenses,
  UseGafpriPagesExpensesReturn,
  useGafpriPagesExpenses,
  UseGafpriPaginationsExpensesReturn,
  useGafpriPaginationsExpenses,
  UseGafpriApiExpensesReturn,
  useGafpriApiExpenses,
  UseGafpriDataExpensesReturn,
  useGafpriDataExpenses,
} from '../Abstract';

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

export function useGafpriExpenses({
  token,
  useEntity,
}: UseGafpriExpensesProps): UseGafpriExpensesReturn {
  /**
   * States
   *
   *
   */

  const error = useGafpriError();
  const attributes = useGafpriAttributesExpenses();
  const data = useGafpriDataExpenses({ token });
  const paginations = useGafpriPaginationsExpenses({ useData: data });
  const pages = useGafpriPagesExpenses({
    useAttributes: attributes,
    useEntity,
  });
  const api = useGafpriApiExpenses({
    token,
    useError: error,
    useAttributes: attributes,
    usePages: pages,
  });

  return {
    attributes,
    pages,
    paginations,
    api,
    data,
    error,
  };
}
