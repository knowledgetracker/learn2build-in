import { SpecializationService } from './../../specialization.service';
import { CourseService } from './../../course.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { groupBy, sortBy, uniq } from 'lodash-es';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-specialization-course-list',
  templateUrl: './specialization-course-list.component.html',
  styleUrls: ['./specialization-course-list.component.css'],
})
export class SpecializationCourseListComponent implements OnInit {
  specializationId: number;
  userId: string;
  specialization: any;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private specializationService: SpecializationService,
    private authService: AuthService
  ) {
    this.specializationId = this.route.snapshot.params['id'];
    this.userId = this.authService.getUserId();
  }

  ngOnInit(): void {
    this.loadCourses();
  }

  courses: any;

  categories: any;

  totalTopics: number = 0;

  loadCourses() {
    this.specializationService
      .getSpecializationCourses(this.specializationId)
      .subscribe((res: any) => {
        this.specialization = res;
        let courses = this.specialization.courses;
        for (let c of courses) {
          this.totalTopics += c.noOfTopics;
        }
        console.table(courses);
        this.courses = groupBy(courses, 'category');
        console.table(courses);
        this.categories = uniq(courses.map((obj: any) => obj.category));

        const { topicsCompleted, total_topics } = this.specialization;
        if (topicsCompleted) {
          this.specialization.percentage = 0;

          if (total_topics > 0) {
            this.specialization.percentage = Math.round(100 * topicsCompleted / total_topics);
          }
        }
      });


  }

  uCourses: any;
  courseReport: any = {};


  getCourses(category: any) {
    return this.courses[category];
  }

  getSpecializationTopicsCnt() {
    if (!this.specialization) return '';
    const { topicsCompleted, percentage } = this.specialization;
    if (topicsCompleted) {

      return topicsCompleted + " / " + this.totalTopics + " ( " + percentage + " %)";

    }
    else {
      return this.totalTopics;
    }
  }
}
