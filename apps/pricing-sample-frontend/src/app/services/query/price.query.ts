import { gql } from 'apollo-angular';

export const GET_PRICE_QUERY = gql`
  query getPrice($input: GetPriceInput) {
    getPrice(input: $input) {
      price
      normalPrice
      message
    }
  }
`;

export const ADD_PRODUCT_MUTATE = gql`
  mutation addProduct($name:String,$quantity:Int) {
    addProduct(name:$name,quantity:$quantity) {
      status
      message
    }
  }
`;
