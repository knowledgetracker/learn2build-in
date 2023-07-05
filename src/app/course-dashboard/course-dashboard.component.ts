import { CourseService } from './../course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-dashboard',
  templateUrl: './course-dashboard.component.html',
  styleUrls: ['./course-dashboard.component.css']
})
export class CourseDashboardComponent implements OnInit {

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.loadArticleStats();
  }

  articles:any;

  getCourseLogo(category:string){
    return this.courseService.courseLogo[category];
  }

  loadArticleStats(){
    this.courseService.getCourseArticleStats().subscribe(res=>{
      this.articles = res;
    })
  }

}
