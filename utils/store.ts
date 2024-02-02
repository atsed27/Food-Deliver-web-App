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
        let x = 0;
        console.log(item);
        const getProducts = get().products;
        console.log(getProducts);
        const findProduct = getProducts.find((each) => each.id === item.id);
        console.log(findProduct);
        if (findProduct) {
          console.log('ale');
          set((state) => ({
            products: state.products.map((product) =>
              product.id === findProduct.id
                ? {
                    ...item,
                    id: item.id,
                    title: item.title,
                    img: item.img,
                    quantity: product.quantity + item.quantity,
                    price: item.price + product.price,
                  }
                : item
            ),
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
