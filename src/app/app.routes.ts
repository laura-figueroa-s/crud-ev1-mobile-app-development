import { Routes } from '@angular/router';
import { SearchMoviesPage } from './pages/search-movies/search-movies.page';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'search-movies',
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
    path: 'search-movies',
    loadComponent: () => import('./pages/search-movies/search-movies.page').then( m => m.SearchMoviesPage)
  },
];