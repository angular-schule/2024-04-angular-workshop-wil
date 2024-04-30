import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'app-book-create',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './book-create.component.html',
  styleUrl: './book-create.component.scss'
})
export class BookCreateComponent {

  bookForm = new FormGroup({

    isbn: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)]
    }),

    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),

    description: new FormControl('', {
      nonNullable: true
    })
  });

  c = this.bookForm.controls;

  isInvalid(control: FormControl) {
    return control.touched && control.invalid;
  }

  // TODO: hasError(control: FormControl, errorCode: string)
  // zB. hasError(hasError, 'required')

  submitForm() {

    const newBook: Book = {
      ...this.bookForm.getRawValue(),
      rating: 1
    };

    // Hands On:
    // 1. Erstelle ein Event mit dem Namen `create`
    // 2. Versende das neue Buch über das Event
    // 3. Subscribe dich auf das Event im Dashboard
    // 4. Füge das neue Buch zum Buch-Array hinzu (Immutability berücksichtigen)

    this.bookForm.reset();

  }

}
