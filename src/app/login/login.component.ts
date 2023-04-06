import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../main/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private fb:FormBuilder,private ds:ApiService,private http:HttpClient){

  }
  ngOnInit(): void {
  }

  loginForm=this.fb.group({
    email:['',[Validators.required,Validators.pattern('[0-9a-z@.]*')]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

login(){
  var email=this.loginForm.value.email;
  var pswd=this.loginForm.value.password;
  if(this.loginForm.valid){
    this.ds.login(email,pswd).subscribe(
    (result:any)=>{
      localStorage.setItem('currentemail',JSON.stringify(result.currentemail))  
      localStorage.setItem('currentuser',JSON.stringify(result.currentuser))
      localStorage.setItem('number',JSON.stringify(result.number))
      localStorage.setItem('Token',JSON.stringify(result.token))
      alert(result.message);
      this.router.navigateByUrl('/main')
  },
  result=>{
    alert(result.error.message);
  }
    )
}
}


}

