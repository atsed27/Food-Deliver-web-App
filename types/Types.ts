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
  price: string;
  isFeatured: string;
  catID: string;
};
