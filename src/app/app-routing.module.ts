import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { SeriesComponent } from 'app/series.component';
import {
  BBCharactersComponent
} from 'app/tabset-components/characters/breaking-bad/bb-characters.component';
import {
  BCSCharactersComponent
} from 'app/tabset-components/characters/better-call-saul/bcs-characters.component';
import { QuotesComponent } from 'app/tabset-components/quotes/quotes.component';
import { DeathsComponent } from 'app/tabset-components/deaths/deaths.component';

const routes: Routes = [
  {
    path: 'breaking-bad',
    component: SeriesComponent,
    data: { show: 'breaking-bad' },
    children: [
      { path: 'characters', component: BBCharactersComponent },
      { path: 'quotes', component: QuotesComponent },
      { path: 'deaths', component: DeathsComponent },
      { path: '', redirectTo: '/breaking-bad/characters', pathMatch: 'full' },
      { path: '**', redirectTo: '/breaking-bad/characters' },
    ]
  },
  {
    path: 'better-call-saul',
    component: SeriesComponent,
    data: { show: 'better-call-saul' },
    children: [
      { path: 'characters', component: BCSCharactersComponent },
      { path: 'quotes', component: QuotesComponent },
      { path: 'deaths', component: DeathsComponent },
      { path: '', redirectTo: '/better-call-saul/characters', pathMatch: 'full' },
      { path: '**', redirectTo: '/better-call-saul/characters' },
    ]
  },
  { path: '', redirectTo: '/breaking-bad/characters', pathMatch: 'full' },
  { path: '**', redirectTo: '/breaking-bad/characters' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
