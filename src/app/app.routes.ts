import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'listar-peliculas',
    loadComponent: () => import('./pages/listar-peliculas/listar-peliculas.page').then( m => m.ListarPeliculasPage)
  },
  {
    path: 'agregar-peliculas',
    loadComponent: () => import('./pages/agregar-peliculas/agregar-peliculas.page').then( m => m.AgregarPeliculasPage)
  },
  {
    path: 'editar-peliculas',
    loadComponent: () => import('./pages/editar-peliculas/editar-peliculas.page').then( m => m.EditarPeliculasPage)
  },
  {
    path: 'detallar-peliculas',
    loadComponent: () => import('./pages/detallar-peliculas/detallar-peliculas.page').then( m => m.DetallarPeliculasPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },


];
