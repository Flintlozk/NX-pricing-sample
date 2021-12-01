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
