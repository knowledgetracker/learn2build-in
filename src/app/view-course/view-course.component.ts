import { Component, OnInit } from '@angular/core';
import { SlidesService } from '../slides.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

  constructor(private slideService: SlidesService) { }

  ngOnInit(): void {
  }

}
