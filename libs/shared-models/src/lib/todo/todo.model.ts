export interface IAddTodoInput { 
   Todo:string
}

export interface IAddTodoResponse {
  status:number,
  message:string
}

export interface ITodo {
  todo: string;
}


export interface IGetTodoResponse {
  todos: ITodo[];
}