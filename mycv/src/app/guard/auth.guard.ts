import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable <boolean> | Promise<boolean> | boolean {


    if (!this.auth.loggedIn) {
      this.router.navigate(['']);
      return false;
    }

    return true;
  }

}




/*canActivate() {
  if (this.authService.loggedIn()) {
    return true;
  } else {
    this.router.navigate(['/login']);
    return false;
  }
}*/
