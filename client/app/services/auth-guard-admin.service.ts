import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuardAdminService implements CanActivate {

  constructor(public auth: AuthService, private router: Router) {}

  canActivate() {
    return this.auth.isAdmin;
  }

}
