import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private authService: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {

  }


    email:string= "";
    password:string ="";


  login(){
    console.log(this.email, this.password);
    this.authService.login(this.email, this.password).subscribe( (res:any)=>{
      let user = res;
      localStorage.setItem("LOGGED_IN_USER", JSON.stringify(user));
      this.toastr.success("Successfully Loggedin");
      window.location.href="/blog";
    },(err:any)=>{
      console.log(err.error);
      let errorMessage = err.error.errorMessage;
      this.toastr.error(errorMessage);
    })

  }

}
