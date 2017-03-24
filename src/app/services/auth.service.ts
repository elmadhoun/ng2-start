import { Injectable } from '@angular/core';
import { StorageManager } from '../helpers'

@Injectable()
export class AuthService {

	constructor(public storage: StorageManager) { }

	isAuthenticated(){
		return this.storage.has("currentUser") && this.storage.get("currentUser");
	}  

	login(username:string){
		this.storage.set('currentUser', username);
		return new Promise((resolve, reject) => {
		    resolve(true);
		});
	}

	logout(){
		this.storage.remove('currentUser');
		return new Promise((resolve, reject) => {
		    resolve(true);
		});
	}
}