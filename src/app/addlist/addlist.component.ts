import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addlist',
  templateUrl: './addlist.component.html',
  styleUrls: ['./addlist.component.css']
})
export class AddlistComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    
    this.fetchData()
  }


  fetchData=()=>{
    this.myapi.viewTodolist().subscribe(
      (data)=>{
        this.todoData=data
      }
    )


  }

  todoData:any=[]
  

  ngOnInit(): void {
  }

}
