import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Book } from '../shared/book';
import { JsonPipe, NgClass, UpperCasePipe } from '@angular/common';
import { BookComponent } from '../book/book.component';
import { BookRatingService } from '../shared/book-rating.service';
import { BookCreateComponent } from '../book-create/book-create.component';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [JsonPipe, UpperCasePipe, BookComponent, NgClass, BookCreateComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  // neue Syntax
  br = inject(BookRatingService);
  bookStore = inject(BookStoreService);

  constructor() {
    this.bookStore.getBooks().subscribe(books => this.books = books);
  }

  // 🦆
  books: Book[] = [];

  doRateUp(book: Book) {
    const ratedBook = this.br.rateUp(book);
    // const ratedBook = {
    //   ...book,
    //   rating: Math.min(book.rating + 1, 5)
    // }
    this.updateAndSortBooks(ratedBook);
  }

  doRateDown(book: Book) {
    const ratedBook = this.br.rateDown(book);
    this.updateAndSortBooks(ratedBook);
  }

  updateAndSortBooks(ratedBook: Book) {
    this.books = this.books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a, b) => b.rating - a.rating);
  }

  addBook(book: Book) {
    this.books = [...this.books, book];
  }
}

