import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  id:any;
  courses:any=[];

constructor(private route:ActivatedRoute, private api:ApiService,private fb:FormBuilder){

}



  ngOnInit(): void {

    
    // this.api.getCourse(id).subscribe(
    //   (data:any)=>{
    //     this.courses = data.courses;
    //   }
    // )

    // this.route.paramMap.subscribe((params)=>{
    //   this.id=params.get('id')
    // })

    let id = this.route.snapshot.paramMap.get('id')
    console.warn(id)
    id && this.api.viewCourse(id).subscribe(
      (result:any)=>{
        console.warn(result)
        this.courses=result.courses
    }
    )



  }

  applyForm=this.fb.group({
    name:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    place:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    email:['',[Validators.required,Validators.pattern('[0-9a-z.@]*')]],
    number:['',[Validators.required,Validators.pattern('[0-9]*')]],
    qualification:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    collegename:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    year:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

  
  apply(){
    var name= this.applyForm.value.name;
    var place= this.applyForm.value.place;
    var email= this.applyForm.value.email;
    var number= this.applyForm.value.number;
    var qualification= this.applyForm.value.qualification;
    var collegename= this.applyForm.value.collegename;
    var year= this.applyForm.value.year;
    if(this.applyForm.valid){
    this.api.apply(name,place,email,number,qualification,collegename,year).subscribe(
      (result:any)=>{
        alert(result.message);
      },
      result=>{
        alert(result.error.message)
      }
    )
  }else{
    alert("apply failure");
    console.log(this.applyForm.get('email')?.errors);
  }
}





addcourse(course:any){
  alert('payment successfull')
  let user=localStorage.getItem('currentemail')
  this.api.addcourse(course).subscribe(
    (result:any)=>{
      console.log(result);
      
      alert(result.message)
    },
    (result:any)=>{
      alert(result.error.message)
    }
  )
}
}
