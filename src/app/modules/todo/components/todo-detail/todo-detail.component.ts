import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {

  todo: Todo;

  constructor(private todoService: TodoService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')
    this.getTodo(id);
  }

  getTodo(id: number): void {
    this.todoService.getTodoById(id).subscribe((todo) => {
      console.log(todo);
      this.todo = todo;
    });
  }

  cancel() {
    this.location.back();
  }
}
