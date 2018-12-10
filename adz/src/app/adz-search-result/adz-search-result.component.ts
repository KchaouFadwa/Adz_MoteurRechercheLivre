import { Component, OnInit } from '@angular/core';
import { AdzService } from '../adz-service.service';
import { GoogleResult, BookDtoFront, Item } from '../adz-search/bookDtoFront';
import { element } from '@angular/core/src/render3';
import { DomSanitizer } from '@angular/platform-browser';
import { FilterPipe } from 'ngx-filter-pipe';



@Component({
  selector: 'adz-search-result',
  templateUrl: './adz-search-result.component.html',
  styleUrls: ['./adz-search-result.component.css']
})
export class AdzSearchResultComponent implements OnInit {
  items: Item[] = [];
  books: BookDtoFront[] = [];
  bookFilter: any = { title: '',authors:[],language:'' };


  constructor(public adzService: AdzService, private _sanitizer: DomSanitizer, private filterPipe: FilterPipe) { }

  ngOnInit() {
    if (this.adzService.books) {
      this.items = this.adzService.books.items;
      this.items.forEach(element => {
        this.books.push(element.volumeInfo);
      })
    }

  }
  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`linear-gradient(rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(${image})`);
  }

}
