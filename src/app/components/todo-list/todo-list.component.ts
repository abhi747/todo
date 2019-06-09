import { Component, OnInit } from '@angular/core';

import { TodoService } from './../../shared/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoList =  [];
  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this._todoService.addTodoSouce.subscribe( todo => {
      this.todoList.push(todo);
    })
  }

}
