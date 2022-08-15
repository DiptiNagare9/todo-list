import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  text:string = '';
  constructor(private todoService:TodosService) {}

  ngOnInit(): void {
    
  }

  addTodo():void{
    this.todoService.addTodo(this.text);
    this.text = ''
  }

}
