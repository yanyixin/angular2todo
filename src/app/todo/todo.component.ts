import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  forwardRef,
  Renderer,
  OnInit,
  HostListener
} from "@angular/core";
import { FormControl } from '@angular/forms';
import { Todo } from "./todo.types";

@Component({
  selector   : 'todoList',
  templateUrl: './todo.component.html',
  styleUrls  : ['./todo.component.css']
})
export class TodoComponent {
  todos: Array<Todo> = [];
  private content: string;
  private completed: boolean;

  constructor() {
    this.todos = [{
      id       : 1,
      content  : '大王叫我去巡山',
      completed: false,
      disabled : true
    }, {
      id       : 2,
      content  : '大王叫我去吃饭',
      completed: false,
      disabled : true
    }, {
      id       : 3,
      content  : '大王叫我去写作业',
      completed: true,
      disabled : true
    }]
  }

  addTodo() {
    this.todos.push({
      id       : this.todos.length + 1,
      content  : this.content,
      completed: false,
      disabled : true
    });
    this.content = '';
  }

  reviseStatus(todo) {
    todo.completed = !todo.completed;
    console.log(todo.completed);
  }

  removeTodo(index) {
    console.log(index + 1);
    this.todos.splice(index, 1);
  }

  modifyTodo(todo) {
    if (todo.completed && !todo.completed) {
      todo.disabled = false;
    }
  }

  finishTodo(todo) {
    todo.disabled = true;
    todo.content = todo.content;
  }
}
