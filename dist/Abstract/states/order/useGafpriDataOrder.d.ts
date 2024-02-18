import { EntityAttributes } from '../entity';
import { PostsAttributes } from '../../../states';
import type { OrderItemsAttributes } from '../productsItems/useGafpriAttributesOrderItems';
export interface OrderAttributes {
    postsId: number;
    customerId: number;
    referredId: number;
    paymentPostsId: number;
    note: string;
    subTotal: number;
    subTotalTax: number;
    costTotal: number;
    total: number;
    refundAmount: number;
    posts: PostsAttributes;
    orderItems: OrderItemsAttributes[];
    customer: EntityAttributes;
}
interface EntityData {
    data: {
        items: OrderAttributes[] | [] | null;
    };
}
export type UseGafpriDataOrderReturn = {
    states: {
        isReady: boolean;
        items: EntityData;
    };
    actions: {
        onIsReady: () => void;
        notReady: () => void;
        offItems: () => void;
        handleNewItem: (newItem: OrderAttributes) => void;
        handleUpdatedItem: (itemUpdate: OrderAttributes) => void;
        getById: (id: number) => OrderAttributes | null;
    };
};
export type UseGafpriDataOrderProps = {
    token: string | null;
};
export declare const useGafpriDataOrder: ({ token, }: UseGafpriDataOrderProps) => UseGafpriDataOrderReturn;
export {};
