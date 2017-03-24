import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToasterService } from 'angular2-toaster';
import { LoaderService } from '../../services';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

	constructor(private loader:LoaderService,
				public toast: ToasterService ) { }
	
	ngOnInit() {
		this.loader.complete();
	}

	ngOnDestroy() {
		this.loader.start();
	}

	getTimeNow(){
		this.loader.start();
		setTimeout(a=>{
			this.loader.complete();
		} ,2000);

		setTimeout(a=>{
			this.toast.pop("info", this.loader.counter+" : "+(new Date()).toDateString());
		} ,2500);

		this.loader.counter++;
	}

}
