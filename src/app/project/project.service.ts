
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  apiUrl = environment.API_URL;
  constructor(private http: HttpClient) { }

  getProjects(){
    // const url = this.apiUrl + "v1/projects";
    const url = environment.COURSETRACKER_API_URL + "v1/projects/projects.json";
    return this.http.get(url);
  }

  getProject(id:string){
    let url = this.apiUrl + "v1/projects/" + id;
    return this.http.get(url);
  }
}
