import { IAddTodoInput, IAddTodoResponse } from "@pricing-sample-nx/shared-models";
import { TodoService } from "@pricing-sample-nx/shared-services";
import { graphQLHandler } from '../graphql-handler';
//
import {
    IGraphQLContext,
    ISampleModel,
  } from '@pricing-sample-nx/shared-models';
import { validateGetTodoRequest } from "../../schema/todo/todo.schema";

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
        const validArgs = validateGetTodoRequest(args)
        console.log('validArgs',validArgs)
        return await TodoController.todoService.addTodo(validArgs)
    }

    async getTodoHandler(parent, args, context:IGraphQLContext){
         const todoResponse = await TodoController.todoService.getTodo();
         return todoResponse;
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
    },
    Query:{
        getTodo : graphQLHandler({
            handler: todo.getTodoHandler,
            validator: x=>x,
          }),
    }
};

 