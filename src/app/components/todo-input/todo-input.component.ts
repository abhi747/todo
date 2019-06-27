import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

import { TodoService } from './../../shared/todo.service'

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {
  todoForm: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _todoService: TodoService) { 
    this.todoForm = this._fb.group({
      todo: ['', Validators.required]  
    })
  }

  ngOnInit() {
  }
  
  addTodo() {
    if(this.todoForm.valid) {
      this._todoService.addTodo(this.todoForm.get('todo').value);
      this.todoForm.reset();
    }
  }

}
