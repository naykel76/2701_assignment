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
                path: 'my-beers',
                loadComponent: () =>
                    import('./my-beers/my-beers.page').then((m) => m.MyBeersPage),
            },
            {
                path: 'venue-list',
                loadComponent: () =>
                    import('./venue-list/venue-list.page').then((m) => m.VenueListPage),
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
