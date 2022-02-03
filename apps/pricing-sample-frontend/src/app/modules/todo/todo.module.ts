import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoRoutingModule } from './todo-routing';

@NgModule({
  declarations: [TodoComponent],
  imports: [CommonModule, TodoRoutingModule],
})
export class TodoModule {}
