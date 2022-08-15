import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ToDoComponent } from './to-do/to-do.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { TodosService } from '../services/todos.service';
import { MainComponent } from './main/main.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';

const routes: Routes = [
  { path: '', component: ToDoComponent }
];

@NgModule({
  declarations: [ToDoComponent, HeaderComponent, MainComponent, SingleTodoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  providers:[TodosService]
})
export class ToDoModule { }
