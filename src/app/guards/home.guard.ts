import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../services';

@Injectable()
export class HomeGuard implements CanActivate {

	constructor(private auth: AuthService, private router: Router){}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		if (!this.auth.isAuthenticated()) {
			alert("You should log in first");
			this.router.navigate(['/login']);
  			return false;
		}
  		return true;
	}
}
