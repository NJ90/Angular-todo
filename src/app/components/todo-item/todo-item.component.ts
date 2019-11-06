import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/interfaces/Todo';
// import { EventEmitter } from 'events';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo; //todo-list(parent)로부터 input 을 rendering / todo-list.component.html 의 [todo]="todo"와 연결
  @Output() checkedItem = new EventEmitter();
  @Output() dblclickedItem = new EventEmitter();
  // @Output() bluredItem = new EventEmitter();
  // @Output() enteredItem = new EventEmitter();
  @Output() canceledItem = new EventEmitter();
  @Output() deletedItem = new EventEmitter();
  
 
 constructor() { }

  ngOnInit() {
  }

  doneEdit(todo : Todo) : void {
    this.checkedItem.emit(todo);
  }

  editTodo(todo : Todo) : void{
    this.dblclickedItem.emit(todo);
  }

  cancelEdit(todo : Todo) : void{
    this.canceledItem.emit(todo);
  }

  deleteTodo(todo : Todo) : void{
    this.deletedItem.emit(todo);
  }
//parent(todo-list.component.html에서 전달한 event를 받음)
}
