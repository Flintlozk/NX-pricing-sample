export interface IProductCode {
  type: string;
  index: boolean;
}

export interface IProduct {
  title: string;
  code: IProductCode;
  quantity: number;
  price: number;
}
