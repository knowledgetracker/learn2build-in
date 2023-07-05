import { ProjectService } from './../project.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css']
})
export class ListProjectsComponent implements OnInit {

  constructor(private projectService: ProjectService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.loadProjects();
  }

  searchProject: string = "";

  projects: any;

  loadProjects() {

    this.spinner.show();
    this.projectService.getProjects().subscribe((res: any) => {
      this.projects = res.filter((obj: any) => obj.enableLeaderboard);
      this.spinner.hide();
    }, err => {
      console.log(err);
      this.spinner.hide();
    });
  }

  getFeatures(project: any) {
    let count = 0;
    let completed = 0;
    for (let module of project.modules) {
      count += module.features.length;
    }
    return count;

  }

}
