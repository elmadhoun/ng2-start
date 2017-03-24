import { Routes, RouterModule } from '@angular/router';

import { HomeGuard, LoginGuard} from './guards';

import { LoginComponent, HomeComponent, DashboardComponent, AboutComponent } from './features';

const APP_ROUTES: Routes = [{   
        path: '',
        pathMatch: 'full',
        redirectTo: '/dashboard',
    },
    {
        path: 'login',
        pathMatch: 'full',
        canActivate: [LoginGuard],
        component: LoginComponent,
    },
    { 
        path: '', 
        component: HomeComponent,
        canActivate: [HomeGuard],
        children: [{ 
            path: '', 
            redirectTo: 'dashboard', 
            pathMatch: 'full' 
        },{ 
            path: 'dashboard', 
            component: DashboardComponent
        },{ 
            path: 'about', 
            component: AboutComponent
        }]
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/login',
    }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
