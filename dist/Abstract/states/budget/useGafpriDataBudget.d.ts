import { EntityAttributes } from '../entity';
import { PostsAttributes } from '../../../states';
import type { BudgetItemsAttributes } from '../productsItems';
export interface BudgetAttributes {
    postsId: number;
    customerId: number;
    referredId: number;
    note: string;
    subTotal: number;
    subTotalTax: number;
    costTotal: number;
    total: number;
    refundAmount: number;
    posts: PostsAttributes;
    budgetItems: BudgetItemsAttributes[];
    customer: EntityAttributes;
}
interface BudgetData {
    data: {
        items: BudgetAttributes[] | [] | null;
    };
}
export type UseGafpriDataBudgetReturn = {
    states: {
        isReady: boolean;
        items: BudgetData;
    };
    actions: {
        onIsReady: () => void;
        notReady: () => void;
        offItems: () => void;
        handleNewItem: (newItem: BudgetAttributes) => void;
        handleUpdatedItem: (itemUpdate: BudgetAttributes) => void;
        getById: (id: number) => BudgetAttributes | null;
    };
};
export type UseGafpriDataBudgetProps = {
    token: string | null;
};
export declare const useGafpriDataBudget: ({ token, }: UseGafpriDataBudgetProps) => UseGafpriDataBudgetReturn;
export {};
