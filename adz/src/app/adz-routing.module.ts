import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdzSearchResultComponent } from './adz-search-result/adz-search-result.component';
import { AdzSearchComponent } from './adz-search/adz-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AdzSearchComponent },
  { path: 'result', component: AdzSearchResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdzRoutingModule { }
