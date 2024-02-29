import { PostsAttributes } from '../../../states';
import { CashRegisterTypeUserAttributes } from './cashRegisterTypeUser';
export interface CashRegisterTypeAttributes {
    postsId: number;
    name: string;
    sitesId: number;
    posts: PostsAttributes;
    cashRegisterTypeUser: CashRegisterTypeUserAttributes[];
}
type DeletedCashRegisterType = {
    itemId: number;
};
interface CashRegisterTypeData {
    data: {
        items: CashRegisterTypeAttributes[] | [] | null;
    };
}
type State = {
    isReady: boolean;
    items: CashRegisterTypeData;
};
type Actions = {
    setIsReady: (value: boolean) => void;
    offItems: () => void;
    getById: (id: number) => CashRegisterTypeAttributes | null;
    handleNewItem: (newStorage: CashRegisterTypeAttributes) => void;
    handleUpdatedItem: (updatedStorage: CashRegisterTypeAttributes) => void;
    handleDeletedItem: ({ itemId }: DeletedCashRegisterType) => void;
};
export type UseGafpriDataCashRegisterTypeReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriDataCashRegisterTypeProps = {
    token: string | null;
};
export declare function useGafpriDataCashRegisterType({ token, }: UseGafpriDataCashRegisterTypeProps): UseGafpriDataCashRegisterTypeReturn;
export {};
