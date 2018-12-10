import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookDtoFront, GoogleResult } from './adz-search/bookDtoFront';

@Injectable({
  providedIn: 'root'
})
export class AdzService {
  URL = "https://www.googleapis.com/books/v1/volumes?q="
  books: GoogleResult;
  constructor(public http: HttpClient) { }
  getGoogleBooksByTitle(title: string) {
    return this.http.get<GoogleResult>(this.URL + title).toPromise();
  }
}
