export type category = {
  id: string;
  title: string;
  desc?: string;
  img?: string;
  createdAt: string;
}[];

export type product = {
  id: string;
  createdAt: string;
  title: string;
  img?: string;
  price: string;
  isFeatured: string;
  catID: string;
}[];

export type productType = {
  id: string;
  createdAt: string;
  title: string;
  img?: string;
  price: number;
  isFeatured: string;
  catID: string;
};

export type CartItemType = {
  id: string;
  title: string;
  img?: string;
  price: number;
  quantity: number;
};

export type CartType = {
  products: CartItemType[];
  totalItems: number;
  totalPrice: number;
};

export type ActionType = {
  addToCart: (item: CartItemType) => void;
  removeFromCart: (item: CartItemType) => void;
};
