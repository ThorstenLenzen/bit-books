import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Book } from 'app/shared/book';
import { environment } from 'environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

@Injectable()
export class BookStoreService {

  constructor(private http: Http) { }

  getAll(): Observable<Book[]> {

    return this.http
      .get(`${environment.apiUrl}/books`)
      .map(r => r.json())
      .map(rawBookArray => rawBookArray
        .map(rawBook => new Book(
          rawBook.isbn,
          rawBook.title,
          rawBook.description,
          rawBook.rating)
        )
      )
      .retry(3);
      // retryWhen
  }

  addNew(book: Book): Observable<boolean> {
    const options = new RequestOptions();
    options.headers = new Headers();
    options.headers.append('Content-Type', 'application/json');

    return this.http
      .post(
        `${environment.apiUrl}/books`,
        JSON.stringify(book),
        options
      )
      .map(r => true);
  }

  getDeploymentArea(): Observable<string> {
    return this.http
      .get(`${environment.apiUrl}/appinfo/deployment-area`)
      .map(r => r.json())
      .retry(3);
  }
}
