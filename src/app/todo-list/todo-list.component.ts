import { Component, OnInit } from '@angular/core';

import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoList: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodoList();
  }

  getTodoList(): void {
    this.todoService.getTodos().subscribe((todoList) => {
      console.log(todoList);
      this.todoList = todoList;
    });
  }

}
