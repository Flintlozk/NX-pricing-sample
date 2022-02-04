import { gql } from "apollo-angular";
//get
export const GET_TODO_QUERY = gql`
  query getTodo($input: GetTodoInput) {
    getTodo(todo: $input) {
      id
      todo
      createAt
      updatedAt
    }
  }
`;

//ADD
export const ADD_TODO_MUTATE = gql `
    mutation addTodo($Todo:String){
        addTodo(Todo:$Todo){
            status
            message
        }
    }
`

//update
