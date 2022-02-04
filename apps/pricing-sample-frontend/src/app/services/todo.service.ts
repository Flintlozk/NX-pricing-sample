import { Injectable} from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
    IAddTodoResponse,
    IGetTodoResponse,
}from '@pricing-sample-nx/shared-models';
import { ADD_TODO_MUTATE, GET_TODO_QUERY } from './query/todo.query';

@Injectable()
export class TodoService{
  getTodo(mockInput: { itemCode: string; }) {
    throw new Error('Method not implemented.');
  }
    constructor(public apollo: Apollo) {}

    getPrice(): Observable<IGetTodoResponse> {
        return this.apollo
          .query({
            query: GET_TODO_QUERY,
            fetchPolicy: 'no-cache',
            variables: '',
          })
          .pipe(map((x) => (<{ getTodo: IGetTodoResponse }>x.data)['getTodo']));
      }

      addProduct(todo: string): Observable<IAddTodoResponse> {
        return this.apollo
          .mutate({
            mutation: ADD_TODO_MUTATE,
            fetchPolicy: 'no-cache',
            variables: { Todo : todo},
          })
          .pipe(
            map((x) => (<{ addTodo: IAddTodoResponse }>x.data)['addTodo'])
          );
      }

}

