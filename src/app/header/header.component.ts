import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../main/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
    constructor(private router:Router,private api:ApiService){}

  ngOnInit(): void {
    // if(localStorage.getItem('currentemail'))
    // {
    //   this.user=JSON.parse(localStorage.getItem('currentemail')||'')
    // }

   
  }
  loggedin(){
      return localStorage.getItem('currentemail')
  }

  logout(){
    localStorage.removeItem('currentemail');
    alert('Logout succesfull')
    this.router.navigateByUrl('')
  }
}