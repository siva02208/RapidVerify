import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }
  apiUrl="https://localhost:44369/api/Users";

  verify(userdata:any){
    return this.http.post(this.apiUrl+'/authenticate/',userdata);
  }
  //https://localhost:44369/api/Users/1

  getuserbyemail(useremail:string):any{
    return this.http.get(this.apiUrl+'/by-email/'+useremail)
  }
}
