import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {uniq as _uniq,groupBy as _groupBy} from 'lodash-es';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.css']
})
export class TaskBoardComponent implements OnInit {


  projectId:string;

  constructor(private route: ActivatedRoute ,private router:Router, private projectService: ProjectService) {
    this.projectId = this.route.snapshot.params["id"]
  }

  ngOnInit(): void {
    this.loadProject();
  }

  project:any;
  url = "https://docs.google.com/presentation/d/e/2PACX-1vS5uUCZg1hhlmqDmETaFKLDYGEDgQyCPP82KzecPSptSQIwV7lS6zinpA7ZShi6RWXhNcxQ-ichGEob/embed?start=false&loop=false&delayms=3000";

  statusList= ["PENDING", "IN_PROGRESS", "COMPLETED","APPROVED"];

  features:any = [];
  totalFeatures = 0;

  loadProject(){
    let features:any=[];
    this.projectService.getProject(this.projectId).subscribe( (res:any)=>{
      this.project = res;
      this.project.modules.map( (obj:any)=> features.push(... obj.features));
      this.totalFeatures = features.length;
      this.features = _groupBy(features,'status');
      this.project.pptLink = this.url;
    })
  }

}
