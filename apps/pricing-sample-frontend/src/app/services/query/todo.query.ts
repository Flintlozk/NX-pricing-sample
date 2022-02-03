import { gql } from "apollo-angular";

//ADD
export const ADD_TODOLIST_MUTATE = gql `
    mutation addTodolist($todo:String){
        addTodolist(todo:$todo){
            status
            message
        }
    }
`