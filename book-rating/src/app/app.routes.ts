import { Routes } from '@angular/router';
import { DashboardComponent } from './books/dashboard/dashboard.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'books' },
  { path: 'books', component: DashboardComponent, title: 'Dashboard' },
  { path: 'books/:isbn', component: BookDetailsComponent, title: 'Book Details' },
  // { path: '**', component: NotFoundComponent }
];
