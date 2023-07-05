import { ProjectService } from './../project.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {

  projectId:string;

  constructor(private route: ActivatedRoute ,private router:Router, private projectService: ProjectService) {
    this.projectId = this.route.snapshot.params["id"]
  }

  ngOnInit(): void {
    this.loadProject();
  }

  project:any;
  url = "https://docs.google.com/presentation/d/e/2PACX-1vS5uUCZg1hhlmqDmETaFKLDYGEDgQyCPP82KzecPSptSQIwV7lS6zinpA7ZShi6RWXhNcxQ-ichGEob/embed?start=false&loop=false&delayms=3000";

  loadProject(){
    this.projectService.getProject(this.projectId).subscribe( (res:any)=>{
      this.project = res;
      this.project.pptLink = this.url;
    })
  }

}
