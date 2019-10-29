import { Injectable } from '@angular/core';

import { Todo } from './todo';

@Injectable()
export class TodoDataService{

  lastId = 0;
  todos: Todo[] = [];

  constructor(){

  }

  // POST
  addTodo(todo: Todo): TodoDataService{
    if(!todo.id){
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

// Delete
deleteTodoById(id:number): TodoDataService{
  this.todos = this.todos
  .filter(todo => todo.id !== id);
  return this; 
}

// Put
updateTodoById(id: number, values: Object = {}): Todo {
  let todo = this.getTodoById(id);
  if(!todo) {
    return null;
  }
  Object.assign(todo, values);
  return todo;
}

//Get
getAllTodos(): Todo[] {
  return this.todos;
}

//Get /:id
getTodobyId(id: number): Todo {
  return this.todos
  .filter(todo => todo.id === id)
  .pop();
}


//toggle todo complete
toggleTodoComplete(todo: Todo){
  let updatedTodo = this.updateTodoById(todo.id, {
    complete: !todo.complete
  });
  return updatedTodo;
}

}
