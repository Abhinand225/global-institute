import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../main/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private ds:ApiService,private fb:FormBuilder){}
  ngOnInit(): void {
    
  }

  registerForm=this.fb.group({
    name:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    number:['',[Validators.required,Validators.pattern('[0-9]*')]],
    email:['',[Validators.required,Validators.pattern('[0-9a-z.@]*')]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  register(){
    var name= this.registerForm.value.name;
    var number=this.registerForm.value.number;
    var email=this.registerForm.value.email;
    var password=this.registerForm.value.password;

    if(this.registerForm.valid){
    this.ds.register(name,number,email,password).subscribe(
      (result:any)=>{
        alert(result.message);
        this.router.navigateByUrl('/login')
      },
      result=>{
        alert(result.error.message)
      }
    )
      
    }
    else{
      alert("Register failure");
      console.log(this.registerForm.get('email')?.errors);
      
    }
    
  }
}