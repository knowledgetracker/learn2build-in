import { CourseService } from './../course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses:any = [];
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courses =this.courseService.getCourses();
  }



}
