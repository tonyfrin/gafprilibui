import { UseErrorReturn, SiteOptions } from '../../../states';
import { ProductsAttributes } from '../products/useGafpriDataProducts';
export type OrderItemsAttributes = {
    id?: number;
    orderPostsId?: number;
    productsPostsId: number;
    storagePostsId: number;
    sku: string;
    name: string;
    cost: number;
    totalCost?: number;
    qty: number;
    price: number;
    subTotal?: number;
    subTotalTax?: number;
    total?: number;
    type: string;
    taxClass?: string;
};
type State = {
    subTotal: string;
    subTotalTax: string;
    total: string;
    shoppingCart: OrderItemsAttributes[];
};
type Actions = {
    changeShoppingCart: (value: OrderItemsAttributes) => void;
    voidShoppingCart: () => void;
    updateShoppingCartItem: (index: number, updatedItem: OrderItemsAttributes) => void;
    removeShoppingCartItem: (index: number) => void;
    infoReset: () => void;
    calculateSubTotal: () => number;
    calculateSubTotalTax: () => number;
    calculateTotal: () => number;
    addItemToCart: (product: ProductsAttributes) => void;
    updateQtyItemCart: (index: number, value: string) => void;
    updatePriceItemCart: (index: number, value: string) => void;
    uploadOrderItems: (orderItems: OrderItemsAttributes[]) => void;
};
export type UseGafpriAttributesOrderItemsReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriAttributesOrderItemsProps = {
    useError: UseErrorReturn;
    siteOptions: SiteOptions;
};
export declare function useGafpriAttributesOrderItems({ useError, siteOptions, }: UseGafpriAttributesOrderItemsProps): UseGafpriAttributesOrderItemsReturn;
export {};
