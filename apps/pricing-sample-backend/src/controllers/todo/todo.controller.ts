import { IAddTodoInput, IAddTodoResponse } from "@pricing-sample-nx/shared-models";
import { TodoService } from "@pricing-sample-nx/shared-services";
import { graphQLHandler } from '../graphql-handler';
//
import {
    IGraphQLContext,
    ISampleModel,
  } from '@pricing-sample-nx/shared-models';

class TodoController{
    public static todoService: TodoService
    public static instance: TodoController;
    public static getInstance(): TodoController {
        if (!TodoController.instance)
        TodoController.instance = new TodoController();
        return TodoController.instance;
    }

    constructor() {
        TodoController.todoService = new TodoService();
    }

    async addTodoHandler(parent, args:IAddTodoInput, context):Promise<IAddTodoResponse> {
        console.log(args);
        
        return await TodoController.todoService.addTodo(args)
    }

    //
    getSampleHandler(
        parent,
        args: { id: string },
        context: IGraphQLContext
      ): ISampleModel {
        console.log('args [LOG]:--> ', args);
        return {name: 'Name', no: 1123 } as ISampleModel;
      }
}

const todo: TodoController = new TodoController();
export const todoResolver = {
    Mutation: {
        addTodo:
            graphQLHandler({
                handler: todo.addTodoHandler,
                validator: x => x,
            })
    }
};

 