import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  API_URL = environment.API_URL;
  constructor(private http: HttpClient) { }

  list() {
    const url = `${this.API_URL}v1/courses?orgId=${environment.org}`
    return this.http.get(url);
  }

}
