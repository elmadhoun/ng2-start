import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routing } from './app.routing';
import { SlimLoadingBarModule, SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { ToasterModule, ToasterService} from 'angular2-toaster';

import { AppComponent } from './app.component';
import { HomeGuard, LoginGuard } from './guards';
import { StorageManager } from './helpers';
import { LoaderComponent } from './directives';
import { AuthService, LoaderService } from './services';
import { LoginComponent, HomeComponent, DashboardComponent, AboutComponent } from './features';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    ToasterModule,
    SlimLoadingBarModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    AboutComponent,
    LoaderComponent
  ],
  providers: [
    HomeGuard,
    LoginGuard,
    AuthService,
    LoaderService,
    ToasterService,
    StorageManager
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
