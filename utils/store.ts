import { CartType, ActionType } from './../types/Types';
import { create } from 'zustand';

const InitialState = {
  products: [],
  totalItems: 0,
  totalPrice: 0,
};

export const cartStore = create<CartType & ActionType>((set, get) => ({
  products: InitialState.products,
  totalItems: InitialState.totalItems,
  totalPrice: InitialState.totalPrice,

  addToCart(item) {
    set((state) => ({
      products: [...state.products, item],
      totalItems: state.totalItems + item.quantity,
      totalPrice: state.totalPrice + item.price,
    }));
  },
  removeFromCart(item) {
    set((state) => ({
      products: state.products.filter((product) => product.id !== item.id),
      totalItems: state.totalItems - item.quantity,
      totalPrice: state.totalPrice - item.price,
    }));
  },
}));
