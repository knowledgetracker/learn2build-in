import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInUser: any;

  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.API_URL;
  }

  getLoggedInUser() {
    let userStr = localStorage.getItem("LOGGED_IN_USER");
    let user = userStr != null ? JSON.parse(userStr) : null;
    return user;
  }

  getUserId() {
    let userStr = localStorage.getItem("LOGGED_IN_USER");
    let user = userStr != null ? JSON.parse(userStr) : null;
    return user != null ? user.username : null;
  }


  login(email: string, password: string) {
    let url = this.apiUrl + "v1/auth/login";
    const formData = {
      email: email,
      password: password,
      org: environment.org,
      role: 'U'
    }
    return this.http.post(url, formData);

  }

  register(user: any) {
    let url = this.apiUrl + "v1/auth/register";
    return this.http.post(url, user);

  }

  hasRole(role: any) {
    let user = this.getLoggedInUser();
    return user != null && user.roles.includes(role);
  }
}
