import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlidesService {

  constructor(private http:HttpClient) { }

  slides = [
    {course_title:"Maven", slides: [
      { title:"Maven Installation" , link:"https://docs.google.com/presentation/d/e/2PACX-1vRG0f_8h1iySMeMoQAOZrJ-dIUA6IHq8dgBBFd-A_V6b-Wnp5cF56snE19FwO2mJR83dPT9mrwaoqgu/embed?start=false&loop=false&delayms=3000"},
      { title:"Maven Lifecycle" , link:"https://docs.google.com/presentation/d/e/2PACX-1vQ7Zd5ME0KtzoQPs2uHUIABxZXoVVabV5PzsWDpNuHyRU_jlf7X9LQihFEaetWzSrcghbEI9_B5QrW9/embed?start=false&loop=false&delayms=60000"}
    ]}
  ]

  getAllSlides(){
    return this.slides;
  }

  getSlides(courseId:string){
    let slides =  this.slides.filter( (obj:any)=> obj.course_title == courseId);
    return slides.length > 0 ? slides[0]:null;
  }

}
