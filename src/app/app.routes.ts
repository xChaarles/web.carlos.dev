import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'page',
        loadComponent: () => import('./page/page.component'),
        children: [
            {
                path: 'inicio',
                title: 'Inicio',
                loadComponent: () => import("./page/inicio/inicio.component"),
            },
            {
                path: 'proyectos',
                title: 'Proyectos',
                loadComponent: () => import("./page/proyectos/proyectos.component"),
            },
            {
                path: 'info',
                title: 'Informacion',
                loadComponent: () => import("./page/info/info.component"),
            },
            {
                path: 'contacto',
                title: 'Contacto',
                loadComponent: () => import("./page/contacto/contacto.component"),
            },
            {
                path: '',
                redirectTo: 'inicio',
                pathMatch: 'full',
            }
        ]
    },
    {
        path: '',
        redirectTo: '/page',
        pathMatch: 'full'
    }
];
