import { CourseService } from './../course.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courseId:number;
  course:any;
  constructor(private courseService: CourseService, private route:ActivatedRoute) {
    this.courseId = this.route.snapshot.params["id"];

  }

  ngOnInit(): void {
    this.course = this.courseService.getCourse(this.courseId);
  }

}
