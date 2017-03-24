export class StorageManager {
	
	public prefix:string = 'MyApp-Storage';

	get(name:string){
		return JSON.parse(localStorage.getItem(this.prefix+"-"+name));
	}

	set(name:string, value:any){
		localStorage.setItem(this.prefix+"-"+name, JSON.stringify(value));
	}

	remove(name:string){
		localStorage.removeItem(this.prefix+"-"+name);
	}

	has(name:string){
		return localStorage.getItem(this.prefix+"-"+name)?true:false
	}
}
