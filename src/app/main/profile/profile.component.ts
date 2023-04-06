import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  useremail: any;
  user: any;
  userno: any;
  constructor(){
    if(localStorage.getItem('currentemail')){
      this.useremail=JSON.parse(localStorage.getItem('currentemail')||'')
    }
    
    // if(localStorage.getItem('number')){
    //   this.userno=JSON.parse(localStorage.getItem('nummber')||'')
    // }
  }
  ngOnInit(): void {

    if(localStorage.getItem('currentname')){
      this.user=JSON.parse(localStorage.getItem('currentname')||'')
    }
  }

}
