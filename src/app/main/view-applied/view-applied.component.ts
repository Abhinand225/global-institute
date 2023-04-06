import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-applied',
  templateUrl: './view-applied.component.html',
  styleUrls: ['./view-applied.component.css']
})
export class ViewAppliedComponent implements OnInit{
  eMsg: any;
  course: any=[]

  constructor(private api:ApiService){

  }
  ngOnInit(): void {


  this.api.getcourse().subscribe(
      (data:any)=>{
        this.course= data.courses;
        if(this.course.length==0)
        {
          this.eMsg='Empty'
        }
      },
      (data:any)=>{
        this.eMsg=data.error.message;
      }
    )
  }

}
