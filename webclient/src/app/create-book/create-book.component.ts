import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Book } from '../shared/book';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.less']
})
export class CreateBookComponent implements OnInit {
  book: Book;

  @Output() bookCreated = new EventEmitter<Book>();
  @ViewChild(NgForm) myForm: NgForm;

  ngOnInit() {
    this.book = Book.empty();
  }

  add() {
    this.bookCreated.emit(this.book);
    this.book = Book.empty();
    this.myForm.reset(this.book);
  }
}
