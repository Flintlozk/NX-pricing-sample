import { IAddProductInput, IAddProductResponse, IEditProductInput, IEditProductResponse, IGraphQLContext } from '@pricing-sample-nx/shared-models';
import { ProductService } from '@pricing-sample-nx/shared-services';
import { validateEditProductRequest, validateEditProductResponse } from '../../schema/product/product.schema';
import { graphQLHandler } from '../graphql-handler';

// import {
//   IGetPriceInput,
//   IGraphQLContext,
// } from '@pricing-sample-nx/shared-models';

class ProductController {
  public static productService: ProductService
  public static instance: ProductController;
  public static getInstance(): ProductController {
    if (!ProductController.instance)
      ProductController.instance = new ProductController();
    return ProductController.instance;
  }

  constructor() {
    ProductController.productService = new ProductService();
  }


  async addProductHandler(parent, args: IAddProductInput, context): Promise<IAddProductResponse> {
    return await ProductController.productService.addProduct(args)
  }

  async editProductHandler(parent, args: IEditProductInput, context: IGraphQLContext): Promise<IEditProductResponse> {
    console.log('//[LOG:30]: args', args);
    const validateInput = validateEditProductRequest(args)
    console.log('//[LOG:29]: contexxt.accessToken', context.accessToken);

    const result = await ProductController.productService.editProduct({
      itemCode: validateInput.itemCode,
      price: validateInput.price,
      quantity: validateInput.quantity
    })

    console.log('//[LOG:40]: result', result);

    return result


  }
}

const product: ProductController = new ProductController();
export const productResolver = {
  Mutation: {
    addProduct:
      graphQLHandler({
        handler: product.addProductHandler,
        validator: x => x,
      }),
    editProduct: graphQLHandler({
      handler: product.editProductHandler,
      validator: validateEditProductResponse,
    })
  }
};
