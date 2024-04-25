import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component, Input } from '@angular/core';
import { Book } from './books/shared/book';
import { DashboardComponent } from './books/dashboard/dashboard.component';

@Component({
  selector: 'app-dashboard',
  template: '😃',
  standalone: true
})
export class DummyDashboardComponent {
}


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    })
    // Shallow Component Test
    // .overrideComponent(AppComponent, {
    //   set: { imports: [], schemas: [NO_ERRORS_SCHEMA] }
    // })
    .overrideComponent(AppComponent, {
      remove: { imports: [DashboardComponent] },
      add: { imports: [DummyDashboardComponent] }
    })
    .compileComponents();
  });

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  it(`should have the 'Book Rating title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Book Rating');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Book Rating');
  });
});
