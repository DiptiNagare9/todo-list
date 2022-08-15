import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodosService } from 'src/app/services/todos.service';
import { TodoInterface } from 'src/app/types/todo.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  list!:TodoInterface[];
  noTodoClass!: boolean;

  constructor(private todosService:TodosService) { 
    //this.noTodoClass = this.todosService.toDoList.values.length === 0 ? true : false
                      
  }

  ngOnInit(): void {
    this.list =this.todosService.getTodos();
    // this.todosService.list.subscribe(
    //   (todo:TodoInterface[]) => {
    //     console.log(todo)
    //   }
    // )
  }

}
