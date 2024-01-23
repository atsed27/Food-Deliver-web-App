type Product = {
  id: number;
  title: String;
  des?: string;
  img?: string;
  price: number;
  options?: {
    title: string;
    additionalPrice: number;
  }[];
};

type Products = Product[];

export const featureProducts: Products = [
  {
    id: 1,
    title: 'Slic',
    des: 'i njfnkdn lkdmeol kd;k lvmeod dvoe joed okfo elkmg kfmkdfmoes mlt food',
    img: '/images/home/dani.jpg',
    price: 34,
    options: [
      {
        title: 'lam',
        additionalPrice: 33,
      },
    ],
  },
  {
    id: 2,
    title: 'Slic',
    des: 'it food',
    img: '/images/home/fano.jpg',
    price: 34,
    options: [
      {
        title: 'lam',
        additionalPrice: 33,
      },
    ],
  },
  {
    id: 3,
    title: 'Slic',
    des: 'it food',
    img: '/images/home/dani.jpg',
    price: 34,
    options: [
      {
        title: 'lam',
        additionalPrice: 33,
      },
    ],
  },
  {
    id: 4,
    title: 'Slic',
    des: 'it food',
    img: '/images/home/fano.jpg',
    price: 34,
    options: [
      {
        title: 'lam',
        additionalPrice: 33,
      },
    ],
  },
  {
    id: 5,
    title: 'Slic',
    des: 'it food',
    img: '/images/home/dani.jpg',
    price: 34,
    options: [
      {
        title: 'lam',
        additionalPrice: 33,
      },
    ],
  },
];

export const pizzas: Products = [
  {
    id: 1,
    title: 'Slic',
    des: 'i njfnkdn lkdmeol kd;k lvmeod dvoe joed okfo elkmg kfmkdfmoes mlt food',
    img: '/images/home/dani.jpg',
    price: 34,
    options: [
      {
        title: 'lam',
        additionalPrice: 33,
      },
    ],
  },
  {
    id: 2,
    title: 'Slic',
    des: 'it food',
    img: '/images/home/fano.jpg',
    price: 34,
    options: [
      {
        title: 'lam',
        additionalPrice: 33,
      },
    ],
  },
  {
    id: 3,
    title: 'Slic',
    des: 'it food',
    img: '/images/home/dani.jpg',
    price: 34,
    options: [
      {
        title: 'lam',
        additionalPrice: 33,
      },
    ],
  },
  {
    id: 4,
    title: 'Slic',
    des: 'it food',
    img: '/images/home/fano.jpg',
    price: 34,
    options: [
      {
        title: 'lam',
        additionalPrice: 33,
      },
    ],
  },
];

export const singleProduct: Product = {
  id: 1,
  title: 'Slic',
  des: 'i njfnkdn lkdmeol kd;k lvmeod dvoe joed okfo elkmg kfmkdfmoes mlt food',
  img: '/images/home/dani.jpg',
  price: 34,
  options: [
    {
      title: 'small',
      additionalPrice: 0,
    },
    {
      title: 'medium',
      additionalPrice: 3,
    },
    {
      title: 'large',
      additionalPrice: 6,
    },
  ],
};

type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: 'pastas',
    title: 'Italian Pastas',
    desc: 'Savor the taste of perfection with our exquisite Italian handmade pasta menu.',
    img: '/temporary/m1.png',
    color: 'white',
  },
  {
    id: 2,
    slug: 'burgers',
    title: 'Juicy Burgers',
    desc: 'Burger Bliss: Juicy patties, bold flavors, and gourmet toppings galore.',
    img: '/temporary/m2.png',
    color: 'black',
  },
  {
    id: 3,
    slug: 'pizzas',
    title: 'Cheesy Pizzas',
    desc: 'Pizza Paradise: Irresistible slices, mouthwatering toppings, and cheesy perfection.',
    img: '/temporary/m3.png',
    color: 'white',
  },
];
