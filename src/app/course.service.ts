
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  API_URL = environment.API_URL;
  constructor(private http: HttpClient) { }

  courses = [
    //     {id:1,title:"How to easily create a website with React", imageUrl:"course-react.jpg",
    //   duration:"3h 56m",level:"Beginner", rating:4.5, reviews:7700,
    // authorName:"Naresh Kumar"},
    // {id:2,title:"GraphQL:introduction to graphQL for beginners", imageUrl:"course-graphql.jpg",
    // duration:"3h 56m",level:"Beginner", rating:4.5, reviews:7700,
    // authorName:"Naresh Kumar"},
    {
      id: 1, title: "HTML5", imageUrl: "course-html.jpg",
      duration: "3h 56m", level: "Beginner", rating: 4.5, reviews: 7700,
      authorName: "Naresh Kumar"
    },
    {
      id: 2, title: "JavaScript", imageUrl: "course-javascript.jpg",
      duration: "3h 56m", level: "Beginner", rating: 4.5, reviews: 7700,
      authorName: "Naresh Kumar"
    },
    {
      id: 3, title: "Angular", imageUrl: "course-angular.jpg",
      duration: "3h 56m", level: "Beginner", rating: 4.5, reviews: 7700,
      authorName: "Naresh Kumar"
    },
    {
      id: 4, title: "CSS3", imageUrl: "course-css.jpg",
      duration: "3h 56m", level: "Beginner", rating: 4.5, reviews: 7700,
      authorName: "Naresh Kumar"
    },
    {
      id: 5, title: "Bootstrap", imageUrl: "course-bootstrap.jpg",
      duration: "3h 56m", level: "Beginner", rating: 4.5, reviews: 7700,
      authorName: "Naresh Kumar"
    },
    {
      id: 6, title: "NodeJS", imageUrl: "course-node.jpg",
      duration: "3h 56m", level: "Beginner", rating: 4.5, reviews: 7700,
      authorName: "Naresh Kumar"
    }

  ]

  selectedCourse: any;

  setSelectedCourse(course: any) {
    this.selectedCourse = course;
  }

  getCourses() {
    return this.courses;
  }

  getAllCourses() {
    const url = this.API_URL + "v1/courses";
    return this.http.get(url);
  }

  getSpecializations() {
    const url = this.API_URL + "v1/specializations";
    return this.http.get(url);
  }



  getCourse(id: any) {
    //return this.courses.find(obj=>obj.id ==id);
    let url = this.API_URL + "v1/courses/" + id;
    return this.http.get(url);
  }

  getCourseArticleStats() {
    // let url = this.API_URL + "v1/userarticles/stats";
    let url = environment.COURSETRACKER_API_URL + "v1/userarticles/stats";
    return this.http.get(url);
  }

  courseLogo: any = {
    "JavaScript": "path-javascript.jpg",
    "Bootstrap": "path-bootstrap.jpg",
    "MySQL": "mysql2.svg",
    "css": "path-css.jpg",
    "python": "path-python.jpg",
    "react": "path-react.jpg",
    "HTML": "path-html.jpg",
    "Angular": "path-angular.jpg",
    "NodeJS": "path-nodejs.jpg",
    "Maven":"maven2.png",
    "Java":"java.jpg"
  }

  enrollCourse(userId: string, courseId: string) {
    let data = { userId: userId, courseId: courseId };
    let url = this.API_URL + "v1/usercourses";
    return this.http.post(url, data);
  }

  getUserCourses(userId: string) {
    let url = this.API_URL + "v1/usercourses/users/" + userId;
    return this.http.get(url);
  }
  getUserCoursesPercentage(userId: string) {
    let url = this.API_URL + "v1/usercourses/users/" + userId + "/percentage";
    return this.http.get(url);
  }

  getUserCourse(userId: string, courseId: string) {
    let url = this.API_URL + "v1/usercourses?userId=" + userId + "&courseId=" + courseId;
    return this.http.get(url);
  }
}
