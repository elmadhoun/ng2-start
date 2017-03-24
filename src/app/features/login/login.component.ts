import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { StorageManager } from '../../helpers';
import { LoaderService, AuthService } from '../../services';
import { ToasterService } from 'angular2-toaster';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
	public checked: boolean	= false;
	public currentUser: string;

	constructor(public router: Router,
				public loader: LoaderService,
				public toast: ToasterService,
				public auth: AuthService) { 
	}

	ngOnInit() {
		this.loader.complete();
	}

	ngOnDestroy() {
		this.loader.start();
	}

	isLoggedIn(){
		return this.auth.isAuthenticated();
	}

	login(){
		if(!this.checked) 
			this.toast.pop("warning", "Please check the box to let us know that you are a human!")
		else if(!this.currentUser)
			this.toast.pop("warning", "Please enter a user name!")
		else{
			this.auth.login(this.currentUser).then(
				good=>{
					if(good){
						this.router.navigate(['/dashboard']);
						this.toast.pop("success", "Logged in")
					}
				},
				bad=>{
					this.toast.pop("success", "Can not log in")
				});
		}
	}

	logout(){
		this.auth.logout().then(
			good=>{
				if(good){
					this.router.navigate(['/login']);
					this.toast.pop("success", "Logged out")
				}
			},
			bad=>{
				alert("Can't log out")
				this.toast.pop("success", "Can not log out")
			});
	}

}
