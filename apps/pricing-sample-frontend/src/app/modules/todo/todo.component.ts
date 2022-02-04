import { Component,OnDestroy, OnInit } from '@angular/core';
import { IGetTodoResponse, ITodo } from '@pricing-sample-nx/shared-models';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TodoService } from '../../services/todo.service';
@Component({
  selector: 'pricing-sample-nx-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit, OnDestroy{

  todo = ''
  tododes: IGetTodoResponse = {} as IGetTodoResponse;

  errorMessage = '';
  destroy$: Subject<void> = new Subject<void>();
  value: ITodo = {} as ITodo;

  constructor(
    public todoService:TodoService
  ) { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {}

  addTodo(){
    console.log(this.todo);
    this.todoService.addProduct(this.todo).subscribe((response)=>{
      console.log('response:',response)
    })
  }

  getTodo(){
    
  }
}
