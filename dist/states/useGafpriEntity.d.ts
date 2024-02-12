import type { UseErrorReturn } from './useGafpriError';
import type { UseTypeDocumentIdReturn } from './useGafpriTypeDocumentId';
import type { UseGafpriDataEntityReturn, UseGafpriAttributesEntityReturn, UseGafpriPagesEntityReturn, UseGafpriPaginationsEntityReturn, UseGafpriApiEntityReturn } from '../Abstract';
export interface UseGafpriEntityReturn {
    attributes: UseGafpriAttributesEntityReturn;
    pages: UseGafpriPagesEntityReturn;
    paginations: UseGafpriPaginationsEntityReturn;
    api: UseGafpriApiEntityReturn;
    data: UseGafpriDataEntityReturn;
    error: UseErrorReturn;
}
export type UseGafpriEntityProps = {
    token: string | null;
    useTypeDocumentId: UseTypeDocumentIdReturn;
};
export declare function useGafpriEntity({ token, useTypeDocumentId, }: UseGafpriEntityProps): UseGafpriEntityReturn;
