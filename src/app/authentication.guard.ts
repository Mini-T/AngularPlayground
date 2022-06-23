import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from './components/auth/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
              providedIn: 'root'
            })

// guard: n'autorise pas l'accès a certaine route sans être authentifié
export class AuthenticationGuard implements CanActivate {
  constructor(private readonly userService: UserService, private _snackBar: MatSnackBar) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!!this.userService.user) {
      return true;
    }
    this._snackBar.open('Veuillez vous authentifier pour accéder à nos services', undefined, {duration: 3000,verticalPosition: 'top'});
    this.userService.requireAuthentication();
    return false;
  }
}
