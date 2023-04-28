import { Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

export const routes: Routes = [

    {
        path: '',
        redirectTo: '/splash',
        pathMatch: 'full',
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
    },
    {
        path: 'splash',
        loadComponent: () => import('./pages/splash/splash.page').then(m => m.SplashPage)
    },
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'home',
                loadComponent: () =>
                    import('./tabs/home/home.page').then((m) => m.HomePage),
            },
            {
                path: 'my-beers',
                loadComponent: () =>
                    import('./tabs/my-beers/my-beers.page').then((m) => m.MyBeersPage),
            },
            {
                path: 'venue-list',
                loadComponent: () =>
                    import('./tabs/venue-list/venue-list.page').then((m) => m.VenueListPage),
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full',
            },
        ],
    },

];
