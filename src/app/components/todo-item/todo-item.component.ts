import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/interfaces/Todo';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
 @Input() todo: Todo; //todo-list(parent)로부터 input 을 rendering / todo-list.component.html 의 [todo]=""와 연결
  
 
 constructor() { }

  ngOnInit() {
  }

}
