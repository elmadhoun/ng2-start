import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../services';

@Injectable()
export class LoginGuard implements CanActivate {

	constructor(private auth: AuthService, private router: Router){}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		if (this.auth.isAuthenticated()) {
			debugger;
			alert("You should log out first");
			this.router.navigate(['/dashboard']);
  			return false;
		}
  		return true;
	}
}
