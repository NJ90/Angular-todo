import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/Todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];//todo-list 배열 생성해줌
  todoTitle: string;
  idForTodo: number;
  beforeEditCache: string;//todo list 수정할 때 before이 어떤글이었는지 확인할 수 있도록

  constructor() { }

  ngOnInit() {
    this.beforeEditCache='';
    this.idForTodo = 4;
    this.todoTitle = '';
    this.todos = [
      {
        'id':1,
        'title':'todo-1',
        'completed': false,
        'editing': false,//더블클릭했을 때 todo list를 수정할 수 있도록 
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
      id: this.idForTodo,//this에서 id값을 찾도록
      title: this.todoTitle,
      completed:false,
      editing:false
    })

   this.todoTitle='';//입력후에 빈칸으로 
   this.idForTodo++;//아이디 값이 ++되도록
  }

  editTodo(todo: Todo) : void {
    this.beforeEditCache = todo.title;
    todo.editing = true;
  }

  doneEdit(todo: Todo) : void{
    if(todo.title.trim().length === 0){
      todo.title = this.beforeEditCache;
    }
     todo.editing = false;
  }//아무것도 쓰지 않았을때 이전 title로 보여짐

  cancelEdit(todo: Todo) : void{
      todo.title = this.beforeEditCache;
      todo.editing = false;
    }

  //delet
  deleteTodo(id: Number) : oid{
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  remaining() : number{
  return this.todos.filter(todo => !todo.completed).length;
  }

  atleastOneCompleted() : boolean {
    return this.todos.filter(todo => todo.completed).length > 0;
  }//최소 한개가 completed일 때 clear completed 버튼이 생겨남

  clearCompleted() : void{
    this.todos = this.todos.filter(todo => !todo.completed);
  }
}

