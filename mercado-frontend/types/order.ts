export type Product = {
  id: string;
  name: string;
  price: number;
  stock: number;
};

export type Quantity = {
  product: Product;
  quantity: number;
};

export type Order = {
  id: string;
  personId: string;
  quantities: Quantity[];
};

export type ProductStock = {
  id: string;
  name: string;
  price: number;
  stock: number;
  quantity: number;
};
