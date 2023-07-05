import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SlidesService } from 'src/app/slides.service';

@Component({
  selector: 'app-view-slide',
  templateUrl: './view-slide.component.html',
  styleUrls: ['./view-slide.component.css']
})
export class ViewSlideComponent implements OnInit {

  courseTitle:string;
  constructor(private router:Router, private route:ActivatedRoute, private slideService:SlidesService) { 
    this.courseTitle = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.loadSlides();
  }

  slide:any;

  course:any;

  loadSlides(){
    this.course = this.slideService.getSlides(this.courseTitle);
    this.slide = this.course.slides[0];
  }

  selectSlide(index:number){
    this.slide = this.course.slides[index];
  }

}
