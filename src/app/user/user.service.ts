import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  apiUrl:string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.API_URL;
  }

  getUsers(){
    const url = this.apiUrl + "v1/users?role=U"
    return this.http.get(url);
  }

  getUser(id:string){
    const url = this.apiUrl + "v1/users/"+ id;
    return this.http.get(url);
  }

  update(user:any){
    const url = this.apiUrl + "v1/users/"+ user.username;
    return this.http.put(url, user);
  }
}
