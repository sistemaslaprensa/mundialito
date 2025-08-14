import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../login/login.service';

@Injectable({
  providedIn: 'root',
})
export class estudianteGuard implements CanActivate {
  constructor(private _servicioLogin: LoginService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let identity = JSON.parse(this._servicioLogin.GetIdentity())
    if (identity) {
      if (identity.idRol == "1") {
        return true;
      }
    }

    this.router.navigate(['./login']);
    return false;

  }
}