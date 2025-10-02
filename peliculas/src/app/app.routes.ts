import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { MovieList } from './pages/movie-list/movie-list';
import { MovieForm } from './pages/movie-form/movie-form';
import { MovieDetails } from './pages/movie-details/movie-details';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'movie-list', component: MovieList},
    {path:'movie-list/:movieName', component: MovieDetails},
    {path:'movie-form', component: MovieForm}
];

