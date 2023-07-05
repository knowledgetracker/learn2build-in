import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-stats-widget',
  templateUrl: './course-stats-widget.component.html',
  styleUrls: ['./course-stats-widget.component.css']
})
export class CourseStatsWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  course:any;


  getPercentageStyle(percentage: any) {

    let style = {};
    if (percentage > 70) {
      style = { width: percentage + '%' };
    }
    return style;
  }

  getPercentageClass(percentage: any): string {

    let className = '';

    if (percentage >= 75) {
      className = 'bg-success';
    } else if (percentage >= 50 && percentage < 75) {
      className = 'bg-warning';
    } else if (percentage < 50) {
      className = '';
    }
    return className;
  }





}
