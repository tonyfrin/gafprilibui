import React, { useState } from 'react';
import { UseErrorReturn } from '../../../states';
import { ProductsAttributes } from '../products/useGafpriDataProducts';

export type BudgetItemsAttributes = {
  id?: number;
  budgetPostsId?: number;
  productsPostsId: number;
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
  shoppingCart: BudgetItemsAttributes[];
};

type Actions = {
  changeShoppingCart: (value: BudgetItemsAttributes) => void;
  voidShoppingCart: () => void;
  updateShoppingCartItem: (
    index: number,
    updatedItem: BudgetItemsAttributes
  ) => void;
  removeShoppingCartItem: (index: number) => void;
  infoReset: () => void;
  calculateSubTotal: () => number;
  calculateSubTotalTax: () => number;
  calculateTotal: () => number;
  addItemToCart: (product: ProductsAttributes) => void;
  updateQtyItemCart: (index: number, value: string) => void;
  updatePriceItemCart: (index: number, value: string) => void;
};

export type UseGafpriAttributesBudgetItemsReturn = {
  states: State;
  actions: Actions;
};

export type UseGafpriAttributesBudgetItemsProps = {
  useError: UseErrorReturn;
};

export function useGafpriAttributesBudgetItems({
  useError,
}: UseGafpriAttributesBudgetItemsProps): UseGafpriAttributesBudgetItemsReturn {
  const [subTotal, setSubTotal] = useState('');
  const [subTotalTax, setSubTotalTax] = useState('');
  const [total, setTotal] = useState('');
  const [type, setType] = useState('');
  const [taxClass, setTaxClass] = useState('');

  const [shoppingCart, setShoppingCart] = useState<BudgetItemsAttributes[]>([]);

  const infoReset = (): void => {
    setSubTotal('');
    setSubTotalTax('');
    setTotal('');
    setType('');
    setTaxClass('');
    setShoppingCart([]);
  };

  // Validation Functions
  const validationShoppingCart = (value: BudgetItemsAttributes[]): boolean => {
    return value.length <= 20;
  };

  // Funciones de Change

  const changeShoppingCart = (value: BudgetItemsAttributes): void => {
    const valid = validationShoppingCart([...shoppingCart, value]);
    if (valid) {
      setShoppingCart((prevCart) => [...prevCart, value]);
    } else {
      useError.actions.changeError([
        'No se pueden agregar más de 20 productos al carrito',
      ]);
    }
  };

  const voidShoppingCart = (): void => {
    setShoppingCart([]);
  };

  const updateShoppingCartItem = (
    index: number,
    updatedItem: BudgetItemsAttributes
  ): void => {
    setShoppingCart((prevCart) => {
      const updatedCart = [...prevCart];
      if (index >= 0 && index < updatedCart.length) {
        updatedCart[index] = updatedItem;
      }
      return updatedCart;
    });
  };

  const removeShoppingCartItem = (index: number): void => {
    setShoppingCart((prevCart) => {
      const updatedCart = [...prevCart];
      if (index >= 0 && index < updatedCart.length) {
        updatedCart.splice(index, 1);
      }
      return updatedCart;
    });
  };

  const calculateSubTotal = (): number => {
    return shoppingCart.reduce((acc, item) => {
      const newSubTotal = item.qty * item.price;
      return acc + newSubTotal;
    }, 0);
  };

  const calculateSubTotalTax = (): number => {
    return shoppingCart.reduce((acc, item) => {
      const newSubTotalTax = item.qty * item.price * 0;
      return acc + newSubTotalTax;
    }, 0);
  };

  const calculateTotal = (): number => {
    const newSubTotal = calculateSubTotal();
    setSubTotal(`${newSubTotal}`);
    const newSubTotalTax = calculateSubTotalTax();
    setSubTotalTax(`${newSubTotalTax}`);
    const newTotal = newSubTotal + newSubTotalTax;
    setTotal(`${newTotal}`);
    return newTotal;
  };

  const addItemToCart = (product: ProductsAttributes): void => {
    const item: BudgetItemsAttributes = {
      productsPostsId: product.postsId,
      sku: product.sku,
      name: product.name,
      cost: parseFloat(`${product.cost}`) ?? 0,
      qty: 1,
      price: parseFloat(`${product.salesPrice}`),
      type: product.type,
      taxClass: product.taxClass || '',
    };
    const valid = validationShoppingCart([...shoppingCart, item]);
    if (valid) {
      setShoppingCart((prevCart) => [...prevCart, item]);
    } else {
      useError.actions.changeError([
        'No se pueden agregar más de 20 productos al carrito',
      ]);
    }
  };

  const updateQtyItemCart = (index: number, value: string): void => {
    setShoppingCart((prevCartItems) => {
      return prevCartItems.map((product, i) => {
        if (index === i) {
          const newValue = value === '' ? 0 : parseFloat(value);
          if (newValue >= 0) {
            return {
              ...product,
              qty: newValue,
            };
          }
          return product;
        }
        return product;
      });
    });
  };

  const updatePriceItemCart = (index: number, value: string): void => {
    setShoppingCart((prevCartItems) => {
      return prevCartItems.map((product, i) => {
        if (index === i) {
          const newValue = value === '' ? 0 : parseFloat(value);
          if (newValue >= 0) {
            return {
              ...product,
              price: newValue,
            };
          }
          return product;
        }
        return product;
      });
    });
  };

  React.useEffect(() => {
    calculateTotal();
  }, [shoppingCart]); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * Export
   *
   *
   */
  const states = {
    subTotal,
    subTotalTax,
    total,
    type,
    taxClass,
    shoppingCart,
  };

  const actions = {
    validationShoppingCart,
    changeShoppingCart,
    voidShoppingCart,
    updateShoppingCartItem,
    removeShoppingCartItem,
    infoReset,
    calculateSubTotal,
    calculateSubTotalTax,
    calculateTotal,
    addItemToCart,
    updateQtyItemCart,
    updatePriceItemCart,
  };

  return {
    states,
    actions,
  };
}
