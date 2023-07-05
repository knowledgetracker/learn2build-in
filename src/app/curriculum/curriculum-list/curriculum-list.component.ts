import { CurriculumService } from './../curriculum.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-curriculum-list',
  templateUrl: './curriculum-list.component.html',
  styleUrls: ['./curriculum-list.component.css']
})
export class CurriculumListComponent implements OnInit {

  constructor(private curriculumService: CurriculumService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.loadCourses();
  }

  courses: any;
  categories: string[] = [];

  loadCourses() {
    this.spinner.show();
    this.curriculumService.list().subscribe(res => {
      this.spinner.hide();
      this.courses = res;

      for (let course of this.courses) {
        if (this.categories.indexOf(course.category) == -1) {
          this.categories.push(course.category);
        }
      }


    }, err => {
      console.log(err);
      this.spinner.hide();
    })
  }

  getCourses(category: string) {
    return this.courses.filter((obj: any) => obj.category == category);
  }
}
