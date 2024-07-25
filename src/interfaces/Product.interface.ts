export interface IProduct {
  id: number;
  name: string;
  price: number;
  url: string;
  stockQuantity: number;
  selectedQuantity: number;
}

export interface ISelectedProduct {
  product: IProduct;
  quantity: number;
}