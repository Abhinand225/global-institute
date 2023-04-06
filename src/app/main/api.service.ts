import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


const options={
  headers:new HttpHeaders()
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;
  user: any;
  username: any;
  userno:any;
  currentname: any;
  userdetails:any=[]

  constructor(private http:HttpClient) { }


  
getCourse(){
  return this.http.get('http://localhost:3000/view-course')
}
viewCourse(id:any){
  return this.http.get('http://localhost:3000/view-all/'+id)
}
  register(name:any,number:any,email:any,password:any){

    const body={
      name,
      number,
      email,
      password
    }
    return this.http.post('http://localhost:3000/register',body)


}

login(email:any,password:any){
  const body={
    email,
    password
  }
  return this.http.post('http://localhost:3000/login',body)
}


getToken(){
  // Fetch the token from local storage
  const token =JSON.parse(localStorage.getItem('Token')||'')
  // Generate header
  let headers=new HttpHeaders()
  if(token){
    options.headers=headers.append('x-token',token)
  }
  return options
}

saveDetails(){
  if(this.userdetails){
    localStorage.setItem('currentname',JSON.stringify(this.currentname))
  }
   
    

}

getUseremail(){
  const user =JSON.parse(localStorage.getItem('currentemail')||'')

  if(user){
    this.user=JSON.parse(localStorage.getItem('currentemail')||'')
  }
  return user
  
}
// getUsername(){
//   const user =JSON.parse(localStorage.getItem('currentuser')||'')
//   if(user){
//     this.user=JSON.parse(localStorage.getItem('currentuser')||'')
//   }
//   return user
// }
// getUserno(){
//   const user =JSON.parse(localStorage.getItem('number')||'')
//   if(user){
//     this.user=JSON.parse(localStorage.getItem('number')||'')
//   }
//   return user
// }


apply(name:any,place:any,email:any,number:any,qualification:any,collegename:any,year:any){

  const body={
    name,
    place,
    email,
    number,
    qualification,
    collegename,
    year
  }
  return this.http.post('http://localhost:3000/apply',body)


}



addcourse(course:any){
  const body={
    id:course.id,
    title:course.title,
    image:course.image,
    description:course.description,
    user:localStorage.getItem('currentemail')
  }
  return this.http.post('http://localhost:3000/addcourse',body)
 }


 getcourse(){
  return this.http.get('http://localhost:3000/getcourse')
}

}
