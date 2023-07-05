
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SpecializationService {

  apiUrl = environment.API_URL;
  userId: string;
  constructor(private http: HttpClient, private authService: AuthService) {
    this.userId = this.authService.getUserId();
  }

  specializationCourses: any = {
    "UI Developer": ["C301", "C302", "C303", "C307"],
    "Full Stack NodeJS Developer": ["C301", "C302", "C303", "C307"],
    "Full Stack UI Developer": ["C301", "C302", "C303", "C307"],
    "NodeJS Developer": ["C301", "C302", "C303", "C307"],
    "Core Java Developer": ["CU201", "CU202", "CU203", "CU204", "C103", "CU101", "CU102"],
    "Full Stack Java Developer": ["C301", "C302", "C303", "C307", "CU201", "CU202", "CU203", "CU204", "C103", "CU101", "CU102"]
  }

  getAllSpecializations() {
    let url = this.apiUrl + "v1/specializations?orgId=" + environment.org;
    if (this.userId) {
      url = url + "?userId=" + this.userId;
    }
    return this.http.get(url);
  }

  getSpecializationCourses(id: number) {
    let url = this.apiUrl + "v1/specializations/" + id;
    if (this.userId) {
      url = url + "?userId=" + this.userId;
    }
    return this.http.get(url);
  }
}
