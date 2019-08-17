import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { BackendService } from './services/backend.service';

import { TodoRoutingModule } from './todo-routing.module';

import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoDetailComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    InMemoryWebApiModule.forRoot(BackendService)
  ]
})
export class TodoModule { }
