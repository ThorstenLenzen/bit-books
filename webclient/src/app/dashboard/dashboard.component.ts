import { CounterActions } from './../actions/counter.action';
import { Counter } from '../reducers/types';
import { BookStoreService } from './../shared/book-store.service';
import { Component, OnInit } from '@angular/core';
import { BookComponent } from './../book/book.component';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { Book } from './../shared/book';
import { Observable } from 'rxjs/Observable';
import { select } from '@angular-redux/store';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  books: Book[] = [];

  @select(['counter', 'current'])
  public current$: Observable<number>;

  constructor(private bs: BookStoreService,
    private ca: CounterActions) {
  }

  increment() {
    this.ca.increment();
  }

  add(book: Book) {
    this.bs.addNew(book).subscribe(r => {
      this.books.push(book);
      this.reorderBooks();
    });
  }

  ngOnInit() {
    this.bs.getAll()
      .subscribe(books => {
        this.books = books;
        this.reorderBooks();
      }, e => { console.log('FEHLER', e); });
  }

  reorderBooks() {
    this.books.sort((a, b) => b.rating - a.rating);
  }
}

