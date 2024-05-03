import { JsonPipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { catchError, map, of, retry, switchMap } from 'rxjs';

import { BookStoreService } from '../shared/book-store.service';


@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [RouterLink, JsonPipe],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {

  bookStore = inject(BookStoreService);

  book$ = toSignal(
    inject(ActivatedRoute).paramMap.pipe(
      map(paramMap => paramMap.get('isbn') || ''),
      switchMap(isbn => this.bookStore.getSingleBook(isbn).pipe(
        retry({
          count: 3,
          delay: 200
        }),
        catchError((err: HttpErrorResponse) => of({
          title: 'ERROR',
          description: err.message
        }))
      ))
    )
  );
}
