import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
    },

    // { path: '', redirectTo: 'home', pathMatch: 'full', },
    { path: 'home', loadComponent: () => import('./home/home.page').then((m) => m.HomePage), },
    { path: 'login', loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage) },
];
