import { IAddTodoInput, IAddTodoResponse, ITodo, ITodoInput } from "@pricing-sample-nx/shared-models";
import { getTodo } from "../data/todo/get-todo.data";
import { addTodo } from '../data/todo/set-todo.data';


export class TodoService {
//kam
   async addTodo(params:IAddTodoInput):Promise<IAddTodoResponse>{      
        const binding:ITodoInput = {
            todo:params.Todo,
        }
        await addTodo(binding)
        return {
            status:200,message:'OK'
        }
        
    }

    async getTodo():Promise<ITodo[]>{
        const todos =  await getTodo()
        console.log('GET TODO RESULT : ', todos)

        const result = todos.map(todo=>{
            // console.log(todo);
            // const obj1 = Object.assign(todo,{id:todo._id})
  
            // const obj2 = {...todo, { id:todo._id }}
            // {
            //     _id:'id',
            //     id:"newid",
            //     todo:"name",
            //     createdAt:'Date',
            //     updatedAt:'Date'
            // }

            // console.log('obj1',obj1)

            const obj:ITodo = {
                id:todo._id,
                todo:todo.todo,
                createAt:todo.createdAt,
                updatedAt:todo.updatedAt
            }

            return obj
        })
        return result  
        //await getTodo()
    }
}