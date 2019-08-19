import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class BackendService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const todos = [
      { id: 1, description: 'Create Authentication module', isCompleted: false, deadline: new Date(2019, 10, 30) },
      { id: 2, description: 'Create db model', isCompleted: false, deadline: new Date(2019, 12, 30)},
      { id: 3, description: 'Create UI', isCompleted: false, deadline: new Date(2019, 12, 30) }
    ];
    return { todos };
  }
}
