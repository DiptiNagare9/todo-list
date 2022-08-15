import { Injectable, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FilterEnum } from '../types/filter.enum';
import { TodoInterface } from '../types/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodosService implements OnInit {
  //list = new EventEmitter<TodoInterface[]>();
  
  toDoList:TodoInterface[]=[];
  filter:FilterEnum = FilterEnum.all;

  constructor() { }

  ngOnInit(): void {
  }

  getTodos(){
    return this.toDoList;
  }

  addTodo(text:string): void{
     const newTodo: TodoInterface = {
      text,
      isCompleted: false,
      id: Math.random().toString(16),
     }
     this.toDoList.push(newTodo);
     //this.list.emit(this.toDoList);
  }
}
