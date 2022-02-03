import { gql } from 'apollo-angular';

export const ProductTypeDefs = gql`
  type AddTodolistResponse {
      status:Int
      message:String
  }

  type Mutation {
    addTodolist(Todo:String): AddTodoResponse
  }
`;
