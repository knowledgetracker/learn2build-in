import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService : UserService) { }

  searchUser:string = "";

  ngOnInit(): void {
    this.loadUsers();
  }

  users:any;

  loadUsers(){
    this.userService.getUsers().subscribe((res:any)=>{
      this.users = res;
    })
  }

}
