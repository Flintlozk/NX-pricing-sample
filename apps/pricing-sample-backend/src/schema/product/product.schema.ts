import { validate } from '@pricing-sample-nx/shared-helpers';
import { EditProductRequestValidate, EditProductResponseValidate } from '@pricing-sample-nx/shared-models';
// import { EditProductRequestValidate } from '../../../../../libs/shared-models/src/lib/product/product.joi'
// import {
//   GetPriceRequestValidate,
//   GetPriceResponseValidate,
// } from '@pricing-sample-nx/shared-models';

export function validateEditProductRequest<T>(data: T): T {
  return validate(EditProductRequestValidate, data);
}
export function validateEditProductResponse<T>(data: T): T {
  return validate(EditProductResponseValidate, data);
}
