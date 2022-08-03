// export enum EnumProductStatus {
//   ENABLED,
//   DISABLED
// }

export interface IAddProductInput {
  name: string
  quantity: number
}

export interface IAddProductResponse {
  status: number,
  message: string
}

export interface IProductCode {
  type: string;
  index: boolean;
}

export interface IProduct {
  title: string;
  code: string;
  quantity: number;
  price: number;
}

export interface IEditProductInput {
  itemCode: string
  price: number
  quantity: number
}

export interface IEditProductResponse {
  status: number,
  message: string
}
