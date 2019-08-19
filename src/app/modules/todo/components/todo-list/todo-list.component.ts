import { Component, OnInit } from '@angular/core';

import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

import { ColumnSetting } from '../../../shared/models/table-layout.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoList: Todo[];

  todoTableColumnSetting: ColumnSetting[] = [
    {
      key: 'id',
      header: 'Id',
      style: { width: '10%', 'font-weight': 'lighter' }
    },
    {
      key: 'description',
      header: 'Description',
      style: { width: '40%' }
    },
    {
      key: 'isCompleted',
      header: 'Status',
      style: { width: '25%' }
    },
    {
      key: 'deadline',
      header: 'Deadline',
      style: { width: '25%' }
    }
  ];

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
