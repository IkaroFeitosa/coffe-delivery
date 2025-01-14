import { createContext, useEffect, useReducer } from "react";
import {
  CartReducer,
  Coffee,
  IAddress,
  paymentMethods,
} from "../reducers/cart/reducers";
import {
  addProductAction,
  insertAddressAction,
  insertPaymentMethodAction,
  removeProductAction,
  updateQuantityProductAction,
} from "../reducers/cart/actions";

interface ICart {
  productsSelected: Coffee[];
  totalItem: number;
  delivery: number;
  total: number;
  address?: IAddress;
  paymentMethod?: paymentMethods;
  addProduct: (product: Coffee) => void;
  removeProduct: (productId: number) => void;
  updateQuantityProduct: (id: number, quantity: number) => void;
  insertAddress: (address: IAddress) => void;
  insertPaymentMethod: (paymentMethod: paymentMethods) => void;
}

interface CartContextProps {
  children: React.ReactNode;
}
export const CartContext = createContext({} as ICart);

export function CartProvider({ children }: CartContextProps) {
  const [cartState, dispatch] = useReducer(
    CartReducer,
    {
      productsSelected: [],
      delivery: 3,
    },
    (initialState) => {
      const stateJSON = localStorage.getItem(
        "@coffee-delivery:cart-state-1.0.0"
      );
      if (stateJSON) {
        return JSON.parse(stateJSON);
      }
      return initialState;
    }
  );
  const { productsSelected, delivery, address, paymentMethod } = cartState;
  const totalItem = productsSelected.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );
  const total = totalItem + delivery;

  function addProduct(product: Coffee) {
    dispatch(addProductAction(product));
  }
  function removeProduct(id: number) {
    dispatch(removeProductAction(id));
  }
  function updateQuantityProduct(id: number, quantity: number) {
    dispatch(updateQuantityProductAction(id, quantity));
  }
  function insertAddress(address: IAddress) {
    dispatch(insertAddressAction(address));
  }
  function insertPaymentMethod(paymentMethod: paymentMethods) {
    dispatch(insertPaymentMethodAction(paymentMethod));
  }

  useEffect(
    () => {
      localStorage.setItem(
        "@coffee-delivery:cart-state-1.0.0",
        JSON.stringify(cartState)
      );
    },
    [cartState]
  )

  return (
    <CartContext.Provider
      value={{
        productsSelected,
        totalItem,
        total,
        delivery,
        addProduct,
        removeProduct,
        updateQuantityProduct,
        address,
        paymentMethod,
        insertAddress,
        insertPaymentMethod,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
