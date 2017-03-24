import { Injectable } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Injectable()
export class LoaderService {

	public counter:number = 0;

	constructor(private loader: SlimLoadingBarService) { }

	start() {
		this.loader.start();
	}

	stop() {
		this.loader.stop();
	}

	complete() {
		this.loader.complete();
	}

}
