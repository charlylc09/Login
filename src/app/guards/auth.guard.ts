import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';
//
import {AngularFireAuth} from 'angularfire2/auth';
import {AuthService} from '../servicios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router : Router,
    private afAuth : AngularFireAuth,
    private authService : AuthService
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      this.authService.getAuth().subscribe(auth =>{
        if(auth){
          return true;
        } else{
          this.router.navigate(['']);
        return false;
        }
      })
        return true;
  }
}
