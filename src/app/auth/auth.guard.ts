import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let userStr = localStorage.getItem("LOGGED_IN_USER");
      if (userStr != null){
        let user = JSON.parse(userStr);
        if(user != null){
          return true;
        }
        else{
          this.router.navigateByUrl("auth/login");
        }
      }
      else{
        this.router.navigateByUrl("auth/login");
      }
      return false;
    }

  }

