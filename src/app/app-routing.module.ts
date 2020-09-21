import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { AppComponent } from 'app/app.component';
import { CharactersComponent } from 'app/tabset-components/characters/characters.component';
import { QuotesComponent } from 'app/tabset-components/quotes/quotes.component';
import { DeathsComponent } from 'app/tabset-components/deaths/deaths.component';

const routes: Routes = [
  {
    path: 'breaking-bad',
    component: AppComponent,
    children: [
      { path: 'characters', component: CharactersComponent },
      { path: 'quotes', component: QuotesComponent },
      { path: 'deaths', component: DeathsComponent },
    ]
  },
  { path: '', redirectTo: '/breaking-bad', pathMatch: 'full' },
  { path: '**', redirectTo: '/breaking-bad' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
