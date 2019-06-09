import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  addTodoSouce = new Subject<string>();
  
  constructor() { }
  
  addTodo(todo) {
    this.addTodoSouce.next(todo);
  }
}
