import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },  {
    path: 'reservation',
    loadComponent: () => import('./reservation/reservation.page').then( m => m.ReservationPage)
  },
  {
    path: 'reservation-trajet',
    loadComponent: () => import('./reservation-trajet/reservation-trajet.page').then( m => m.ReservationTrajetPage)
  },

];
