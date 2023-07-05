import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userId:string="";

  user:any;

  constructor(private toastr:ToastrService ,private route:ActivatedRoute, private userService:UserService, private authService: AuthService) {
    this.userId =  this.route.snapshot.params["id"];
    this.user = this.authService.getLoggedInUser();
   }

   profileForm!: FormGroup;

  ngOnInit(): void {

    this.profileForm = new FormGroup({
      name: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl(''),
      githubUsername: new FormControl(''),
      careerTrack: new FormControl(''),
      academic: new FormGroup({
        degree: new FormControl(''),
        department: new FormControl(''),
        cgpa: new FormControl(''),
        yearOfPassing: new FormControl('')
      })
    });
    this.loadUserDetail();
  }

  loadUserDetail(){
    this.userService.getUser(this.userId).subscribe((res:any)=>{
      this.user = res;
      this.profileForm.patchValue(this.user);
    })
  }

  updateProfile(){
    const profile = this.profileForm.value;
    this.userService.update(profile).subscribe((res:any)=>{
      this.toastr.success("Successfully Updated");
      Object.keys(profile).every(field=> this.user[field]= profile[field]);
      localStorage.setItem("LOGGED_IN_USER", JSON.stringify(this.user));
    });
  }

  specializations = [
    {
      name:"ALL",
      courses:[]
    },
    {
      name:"Java",
      courses:[]
    },
    {
      name:"JavaScript",
      courses:[]
    },

    {
      name:"UX",
      courses:[]
    },
    {
      name:"Python",
      courses:[]
    },
  ]


}
