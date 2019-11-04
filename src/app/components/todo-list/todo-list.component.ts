import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];//todo-list 배열 생성해줌
  todoTitle: string;
  idForTodo: number;

  constructor() { }

  ngOnInit() {
    this.idForTodo = 4;
    this.todoTitle = '';
    this.todos = [
      {
        'id':1,
        'title':'todo-1',
        'completed': false,
        'editing': false,
      },
      {
        'id':2,
        'title':'todo-2',
        'completed': false,
        'editing': false,
      },
      {
        'id':3,
        'title':'todo-3',
        'completed': false,
        'editing': false,
      },
    ];
  }

  addTodo():void{
    if (this.todoTitle.trim().length === 0){
      return; //빈칸일때 입력 안되도록
    }

    this.todos.push({
      id: this.idForTodo,//id값을 this에서 찾도록
      title: this.todoTitle,
      completed:false,
      editing:false
    })

   this.todoTitle='';//입력후에 빈칸으로 
   this.idForTodo++;//아이디 값이 ++되도록
  }


  //delet
  deleteTodo(id: Number):void{
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}


interface Todo{
  id: number,
  title: string,
  completed: boolean,
  editing: boolean
}