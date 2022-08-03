import { gql } from 'apollo-angular';

export const ProductTypeDefs = gql`

  type EditProductResponse {
    status: Int
    message: String
  }

  type AddProductResponse {
      status:Int
      message:String
  }

  type Mutation {
    addProduct(name:String,quantity:Int): AddProductResponse
    editProduct(itemCode: String,price:Int,quantity:Int):EditProductResponse
  }
`;
