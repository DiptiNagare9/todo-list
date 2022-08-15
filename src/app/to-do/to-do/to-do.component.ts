import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // toDo:any;
  // toDoList:any[]=[];
  // count:number=0;
  // checkedBoxes:number=0;
  // isChecked:boolean[]=[];

  // addToDo(todo:any){
  //   this.toDoList.push(todo);
  //   this.count=this.toDoList.length;
  //   this.toDo="";
  // }

  // removeToDo(index:number){
  //   this.toDoList.splice(index, 1)
  //   console.log(this.toDoList.length)
  //   console.log(this.checkedBoxes)
  //   this.count=this.toDoList.length-this.checkedBoxes;
  // }

  // changed(event:any,i:number){
  //   // this.count = 0;
  //   // this.toDoList.forEach(item=>{
  //   //   if(item.checked){
  //   //     console.log('Hi')
  //   //     this.count= this.count+1
  //   //   }  
  //   // } )
  //   if(event.target.checked == true){
  //     this.count-=1
  //     this.checkedBoxes+=1;
  //     console.log(this.checkedBoxes)
  //   }else{
  //     this.count+=1
  //     this.checkedBoxes-=1;
  //     console.log(this.checkedBoxes)
  //   }
  // }


}
