import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/course.service';
import { SlidesService } from 'src/app/slides.service';

@Component({
  selector: 'app-slides-list',
  templateUrl: './slides-list.component.html',
  styleUrls: ['./slides-list.component.css']
})
export class SlidesListComponent implements OnInit {

  constructor(private courseService: CourseService, private slideService: SlidesService) { }

  ngOnInit(): void {
   // this.loadArticleStats();
    this.loadSlides();
  }

  articles:any;
  slides:any;

  getCourseLogo(category:string){
    return this.courseService.courseLogo[category];
  }

  loadSlides(){
    this.slides = this.slideService.getAllSlides();
  }

  loadArticleStats(){
    this.courseService.getCourseArticleStats().subscribe(res=>{
      this.articles = res;
    })
  }

  getSlides(category:any){
    
    return this.slides.filter((obj:any)=>obj.course_title == category);
  }

}
