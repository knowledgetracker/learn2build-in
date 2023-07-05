import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {uniq as _uniq,groupBy as _groupBy} from 'lodash-es';
import { CourseService } from '../course.service';
import { LmsService } from '../lms.service';

@Component({
  selector: 'app-course-section-content',
  templateUrl: './course-section-content.component.html',
  styleUrls: ['./course-section-content.component.css']
})
export class CourseSectionContentComponent implements OnInit {
  category: string;
  sectionName:string;

  course:any;
  id:number;


  constructor(
    private courseService: CourseService,
    private lmsService: LmsService,
    private route: ActivatedRoute
  ) {
    this.category = this.route.snapshot.params['category'];
    this.sectionName = this.route.snapshot.params['sectionName'];
    this.id = this.route.snapshot.fragment != null ? parseInt(this.route.snapshot.fragment):0;
    console.log("Fragment:" + this.route.snapshot.fragment);
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
    this.lmsService.getPendingArticles(this.category).subscribe((res:any) => {
      this.articles = res.filter((obj:any)=> obj.tags==this.sectionName);
      this.sections = _groupBy(this.articles, 'tags');
      console.table(this.articles);

      this.noOfArticles = this.articles.length;

      let sectionNames = Object.keys(this.sections);
      this.sectionNames = sectionNames;
      if(sectionNames.length >0 ){
        let sectionArticles = this.sections[sectionNames[0]] ?? [];
        if(this.id) {
          this.selectedArticle = sectionArticles.find( (obj:any)=>obj.id == this.id);
        }
        else{

          this.selectedArticle = sectionArticles.length > 0 ? sectionArticles[0] : null;
          this.onChange(this.selectedArticle);
        }
      }

    });
  }

  searchArticleId: any;
  onChange(article: any) {
    console.log(article);
    this.selectedArticle = article;
    window.location.hash = article.id;
  }


}
