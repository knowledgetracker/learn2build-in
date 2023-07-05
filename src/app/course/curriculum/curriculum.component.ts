import { ToastrService } from 'ngx-toastr';
import { CourseService } from './../../course.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {

  courseId: string;
  userId: string = "";
  constructor(private route: ActivatedRoute, private authService: AuthService, private courseService: CourseService, private toastr: ToastrService) {
    this.courseId = this.route.snapshot.params["id"];
    this.userId = this.authService.getUserId();
  }

  ngOnInit(): void {


    if (this.userId != null) {
      this.loadUserCourse();
    } else {
      this.loadCourse();
    }

  }

  course: any;
  userCourse: any;

  loadCourse() {
    this.courseService.getCourse(this.courseId).subscribe((res: any) => {
      this.course = res;
    })
  }


  enrolled: boolean = false;

  completed = false;




  loadUserCourse() {
    this.courseService.getUserCourse(this.userId, this.courseId).subscribe((res: any) => {
      this.enrolled = res != null;
      if (res != null) {
        this.userCourse = res;
        this.course = this.userCourse.course;
      }
      else {
        this.loadCourse();
      }
    })
  }

  getColor(topic: any) {
    let color = "black";
    if (topic.status == "C") {
      color = "green";
    }
    else if (topic.status == "P") {
      color = "red";
    }

    return color;
  }


  userCourseData: any;

  enroll() {

    this.completed = false;
    this.courseService.enrollCourse(this.userId, this.courseId).subscribe((res: any) => {
      this.toastr.success("Successfully Enrolled");
      this.completed = true;
      this.loadUserCourse();
    }, err => {
      this.completed = true;
      console.log(err);
    })

  }

  isChecked: any;

  updateStatus(topic: any) {
    if (topic.isChecked) {
      topic.status = "C";
    }
    else {
      topic.status = "P";
    }

    //  this.toastr.success("Success");
  }

}
