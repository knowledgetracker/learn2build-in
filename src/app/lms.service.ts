import { AuthService } from './auth/auth.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LmsService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getArticles(courseId:string){
    let url = environment.API_URL +  'v1/articles/search?category=' + courseId;
    return this.http.get(url);
  }

  getPendingArticles(courseId:string){
    let userId =  this.authService.getUserId();
    let query = `?category=${courseId}&userId=${userId}&status=P`;
    let url = environment.API_URL +  'v1/userarticles/search'+ query;
    return this.http.get(url);
  }
  getArticleContent(url:string){
    const headers: HttpHeaders = new HttpHeaders({'Accept': 'text/html'});
    return this.http.get(url, { headers: headers, responseType: 'text' });
  }


  getCourses(){
    let url = environment.API_URL +  'v1/courses';
    return this.http.get(url);
  }
  getArticleStats(){
    // let url = environment.API_URL +  'v1/userarticles/stats';
    let url = environment.COURSETRACKER_API_URL +  'v1/userarticles/stats';
    return this.http.get(url);
  }

  getArticle(id:any){
    let url = environment.API_URL +  'v1/articles/' + id;
    return this.http.get(url);
  }
  save(article:any){
    let url = environment.API_URL +  'v1/articles';
    return this.http.post(url,article);
  }

  updateStatus(articleId:any){
    let userId =  this.authService.getUserId();
    console.log(userId);
    let obj = { userId: userId, articleId: articleId, status:'C'};
    let url = environment.API_URL +  `v1/userarticles`;
    return this.http.post(url,obj);
  }
}
