import { SpecializationService } from './../../specialization.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { CourseService } from 'src/app/course.service';
import { filter } from 'lodash';

@Component({
  selector: 'app-specialization-list',
  templateUrl: './specialization-list.component.html',
  styleUrls: ['./specialization-list.component.css'],
})
export class SpecializationListComponent implements OnInit {
  user: any;
  constructor(
    private specializationService: SpecializationService,
    private authService: AuthService,
    private courseService: CourseService
  ) {
    this.user = this.authService.getLoggedInUser();
  }

  courses: any;

  specializations: any;

  ngOnInit(): void {
    this.loadSpecializations();

  }

  courseList: any;

  loadSpecializations() {
    this.specializationService.getAllSpecializations()

      .subscribe((res: any) => {
        this.courseList = [];
        this.specializations = res;
        this.specializations.forEach((s: any) => {
          let courses = s.courses;
          if (courses) {
            this.courseList.push(...s.courses);
          }
        })

        if (this.user && this.user.careerTrack && this.user.careerTrack != 'ALL') {
          this.specializations = this.specializations.filter((obj: any) => obj.category == this.user.careerTrack);
        }
      });
  }

  courseMap: any = {};

  getPercentageClass(specialization: any): string {
    const percentage = specialization.percentage;

    let className = '';

    if (percentage >= 90) {
      className = 'bg-success';
    } else if (percentage >= 50 && percentage < 90) {
      className = 'bg-warning';
    } else if (percentage < 50) {
      className = '';
    }
    return className;
  }
}
