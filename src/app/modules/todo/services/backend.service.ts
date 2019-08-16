import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class BackendService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const todos = [
      { id: 1, description: 'Create Authentication module', isCompleted: false },
      { id: 2, description: 'Create db model', isCompleted: false },
      { id: 3, description: 'Create UI', isCompleted: false }
    ];
    return { todos };
  }
}
