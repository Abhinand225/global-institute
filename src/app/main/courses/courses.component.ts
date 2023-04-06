import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: any=[]

  constructor(private route:ActivatedRoute,private api:ApiService){
    
  }
  
  ngOnInit(): void {

    this.api.getCourse().subscribe(
        (data:any)=>{
          this.courses = data.courses;
        }
      )

    this.route.paramMap.subscribe(
      params=>{
        this.courses=params.get('id')
      }
    )
  }

  
}
