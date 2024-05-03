import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { concatMap, map, mergeMap, switchMap } from 'rxjs';
import { BookStoreService } from '../shared/book-store.service';
import { JsonPipe } from '@angular/common';


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
      switchMap(isbn => this.bookStore.getSingleBook(isbn))
    )
  )

}
