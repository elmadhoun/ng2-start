import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services';
import { ToasterService } from 'angular2-toaster';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent {

	constructor(private router: Router,
				private toast: ToasterService,
				private auth: AuthService) { }

	logout(){
		this.auth.logout().then(
			good=>{
				if(good) {
					this.toast.pop("success", "Logged out");
					this.router.navigate(['/login']);
				}
			},
			bad=>{
				this.toast.pop("error", "can not log out");
			});
	}

}
    
    
