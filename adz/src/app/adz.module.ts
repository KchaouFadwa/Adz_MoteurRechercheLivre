import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AdzRoutingModule } from './adz-routing.module';
import { AdzComponent } from './adz.component';
import { AdzSearchResultComponent } from './adz-search-result/adz-search-result.component';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatButtonToggle,
  MatButtonToggleModule,
} from '@angular/material';
import { AdzSearchComponent } from './adz-search/adz-search.component';
import { FormsModule } from '@angular/forms';
import { AdzService } from './adz-service.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FilterPipeModule } from 'ngx-filter-pipe';

@NgModule({
  declarations: [
    AdzComponent,
    AdzSearchResultComponent,
    AdzSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    MatButtonToggleModule,
    AdzRoutingModule,
    FilterPipeModule
  ],
  providers: [AdzService, HttpClient],
  bootstrap: [AdzComponent]
})
export class AdzModule { }
