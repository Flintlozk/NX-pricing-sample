import { IAddProductInput, IAddProductResponse, IEditProductInput, IEditProductResponse, IProduct } from "@pricing-sample-nx/shared-models";
import { randomNumber } from "@pricing-sample-nx/shared-helpers";
import { addItem, editItem } from '../data/product/set-product.data'

export class ProductService {

  async addProduct(params: IAddProductInput): Promise<IAddProductResponse> {
    const binding: IProduct = {
      code: randomNumber().toString(),
      price: 100,
      quantity: params.quantity,
      title: params.name
    }

    await addItem(binding)
    // const item = this.getProductFromAPI(123)
    return {
      status: 200, message: 'OK'
    }
  }

  async editProduct(params: IEditProductInput): Promise<IEditProductResponse> {

    const query = { code: params.itemCode }

    if (params.price === null && params.quantity === null) {
      throw new Error('Price and Quantity is not defined')
      // return {
      //   status: 304,
      //   message: 'Not modified'
      // }
    }

    const updateParams: { price: number, quantity: number } = {} as { price: number, quantity: number }
    if (params.price !== null) updateParams.price = params.price
    if (params.quantity !== null) updateParams.quantity = params.quantity

    console.log('//[LOG:29]: query', query);
    console.log('//[LOG:30]: updateParams', updateParams);

    const result = await editItem(query, updateParams)
    console.log('//[LOG:33]: result', result);

    if (result) {
      return {
        status: 200,
        message: 'OK'
      }
    } else {
      return {
        status: 404,
        message: 'Not found'
      }
    }
  }
}
