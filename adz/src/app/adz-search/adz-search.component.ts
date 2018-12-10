import { Component, OnInit } from '@angular/core';
import { AdzService } from '../adz-service.service';
import { Router } from '@angular/router';
import { BookDtoFront } from './bookDtoFront';

@Component({
  selector: 'adz-search',
  templateUrl: './adz-search.component.html',
  styleUrls: ['./adz-search.component.css']
})
export class AdzSearchComponent implements OnInit {

  bookTitle: string;
  constructor(private adzService: AdzService, private router: Router) { }

  ngOnInit() {
  }
  searchBooks() {
    if (this.bookTitle !== "" && this.bookTitle !== undefined) {
      this.adzService.getGoogleBooksByTitle(this.bookTitle).then((result) => {
        if (result) {
          this.adzService.books = result;
          this.router.navigate(["result"]);
        }
      });
    }

  }

}
