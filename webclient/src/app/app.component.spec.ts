import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let fixture, app;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      app = fixture.debugElement.componentInstance;
    });
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Book Rating'`, () => {
    expect(app.title).toEqual('Book Rating');
  });

  it('should render title in a h1 tag', () => {
    const nativeEl = fixture.debugElement.nativeElement;
    expect(nativeEl.querySelector('h1').textContent).toContain('Book Rating');
  });
});
