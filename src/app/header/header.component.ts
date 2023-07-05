import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: any;

  appName = environment.org;

  constructor(private toastr: ToastrService, private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.getLoggedInUser();
  }

  logoUrl: string = 'https://coursetracker-courses.s3.ap-south-1.amazonaws.com/' + environment.org + "/" + environment.logoUrl;

  logout() {
    localStorage.clear();
    this.toastr.success("Logged Out");
    window.location.href = "/auth/login";

  }



}
