import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'home',
                loadComponent: () =>
                    import('./home/home.page').then((m) => m.HomePage),
            },
            {
                path: 'beer-list',
                loadComponent: () =>
                    import('./beer-list/beer-list.page').then((m) => m.BeerListPage),
            },
            {
                path: 'location-list',
                loadComponent: () =>
                    import('./location-list/location-list.page').then((m) => m.LocationListPage),
            },
            {
                path: 'user',
                loadComponent: () =>
                    import('./user/user.page').then((m) => m.UserPage),
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full',
            },
        ],
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
    },
];
