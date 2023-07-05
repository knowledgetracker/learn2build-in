import { LmsService } from './../lms.service';
import { CourseService } from './../course.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {uniq as _uniq,groupBy as _groupBy} from 'lodash-es';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
})
export class CourseDetailComponent implements OnInit {
  category: string;

  course:any;


  constructor(
    private courseService: CourseService,
    private lmsService: LmsService,
    private route: ActivatedRoute
  ) {
    this.category = this.route.snapshot.params['category'];
    this.course = this.courseService.selectedCourse;
  }

  ngOnInit(): void {
    this.loadCourseContents();
  }

  articles: any;
  selectedArticle: any;
  noOfArticles: number = 0;

  sectionNames:any;
  getArticles(section: any) {
    return this.sections[section];
  }

  sections: any;


  loadCourseContents() {
    this.lmsService.getPendingArticles(this.category).subscribe((res) => {
      this.articles = res;
      this.sections = _groupBy(res, 'tags');
      console.table(this.articles);

      this.noOfArticles = this.articles.length;

      let sectionNames = Object.keys(this.sections);
      this.sectionNames = sectionNames;
      if(sectionNames.length >0 ){
        let sectionArticles = this.sections[sectionNames[0]];
        this.selectedArticle = sectionArticles.length > 0 ? sectionArticles[0] : null;
      }

    });
  }

  searchArticleId: any;
  onChange(article: any) {
    console.log(article);
    this.selectedArticle = article;
  }


}
