import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  user:any;
  constructor(private authService: AuthService) {
    this.user = this.authService.getLoggedInUser();
  }

  showRegistrationForm  = false;

  ngOnInit(): void {
  }

}
