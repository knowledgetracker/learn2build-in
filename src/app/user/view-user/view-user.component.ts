import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  userId:string;

  constructor(private route:ActivatedRoute, private userService : UserService) {
    this.userId = this.route.snapshot.params["id"];
  }

  searchUser:string = "";

  ngOnInit(): void {
    this.loadUsers();
  }

  user:any;

  loadUsers(){
    this.userService.getUser(this.userId).subscribe((res:any)=>{
      this.user = res;
    })
  }

}



