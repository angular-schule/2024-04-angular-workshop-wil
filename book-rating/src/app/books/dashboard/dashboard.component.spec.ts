import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {

    const bookRatingMock = {
      rateUp: (book: Book) => book
      // Absichtlich kein rateDown ("halbes Entchen")
    }

    await TestBed.configureTestingModule({
      imports: [DashboardComponent], // Integration Test (weil BookComponent als Kind)
      providers: [{
        provide: BookRatingService,
        useValue: bookRatingMock
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('doRateUp() should call the BookRatingService', () => {

    const br = TestBed.inject(BookRatingService);
    spyOn(br, 'rateUp').and.callThrough();

    const book = { } as Book;
    component.doRateUp(book);

    expect(br.rateUp).toHaveBeenCalledOnceWith(book);
  });
});
