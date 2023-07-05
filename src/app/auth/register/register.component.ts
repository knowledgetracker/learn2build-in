import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {

  }


  name: string = "";
  username: string = "";
  email: string = "";
  password: string = "";


  register() {
    console.log(this.email, this.password);
    let user = { name: this.name, username: this.username.toLowerCase(), email: this.email, password: this.password, role: "U", organization: environment.org };
    this.authService.register(user).subscribe((res: any) => {

      this.toastr.success("Successfully Registered");
      this.router.navigate(['auth/login']);
    }, (err: any) => {
      console.log(err.error);
      let errorMessage = err.error.errorMessage;
      this.toastr.error(errorMessage);
    })

  }


}
