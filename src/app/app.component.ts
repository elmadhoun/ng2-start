import { Component } from '@angular/core';
import { ToasterConfig } from 'angular2-toaster';
import { LoaderService } from './services';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	public toasterconfig : ToasterConfig = new ToasterConfig({
            showCloseButton: true, 
            tapToDismiss: false, 
            timeout: 0
        });

	constructor(public loader:LoaderService){
	}
	
}
