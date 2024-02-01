import { CartType, ActionType } from './../types/Types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const InitialState = {
  products: [],
  totalItems: 0,
  totalPrice: 0,
};

export const cartStore = create(
  persist<CartType & ActionType>(
    (set, get) => ({
      products: InitialState.products,
      totalItems: InitialState.totalItems,
      totalPrice: InitialState.totalPrice,

      addToCart(item) {
        const products = get().products;
        const productInState = products.find(
          (product) => product.id === item.id
        );

        if (productInState) {
          const updatedProducts = products.map((product) =>
            product.id === productInState.id
              ? {
                  ...item,
                  quantity: item.quantity + product.quantity,
                  price: item.price + product.price,
                }
              : item
          );
          set((state) => ({
            products: updatedProducts,
            totalItems: state.totalItems + item.quantity,
            totalPrice: state.totalPrice + item.price,
          }));
        } else {
          set((state) => ({
            products: [...state.products, item],
            totalItems: state.totalItems + item.quantity,
            totalPrice: state.totalPrice + item.price,
          }));
        }
      },
      removeFromCart(item) {
        set((state) => ({
          products: state.products.filter((product) => product.id !== item.id),
          totalItems: state.totalItems - item.quantity,
          totalPrice: state.totalPrice - item.price,
        }));
      },
    }),
    {
      name: 'cart',
      skipHydration: true,
    }
  )
);
