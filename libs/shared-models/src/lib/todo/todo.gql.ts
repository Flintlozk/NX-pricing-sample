import { gql } from 'apollo-angular';

export const TodoTypeDefs = gql`
  type AddTodoResponse {
      status:Int
      message:String
  }

  extend type Mutation {
    addTodo(Todo:String): AddTodoResponse
  }
`;
