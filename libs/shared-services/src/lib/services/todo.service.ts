import { IAddTodoInput, IAddTodoResponse, ITodo } from "@pricing-sample-nx/shared-models";
import { addTodo } from '../data/todo/set-todo.data';

export class TodoService {
//kam
   async addTodo(params:IAddTodoInput):Promise<IAddTodoResponse>{      
        const binding:ITodo = {
            todo:params.Todo
        }

        await addTodo(binding)


        return {
            status:200,message:'OK'
        }
        
    }
}