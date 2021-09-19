import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeriesComponent } from 'app/series/series.component';

const routes: Routes = [
  { path: '', redirectTo: '/series/breaking-bad/characters', pathMatch: 'full' },
  {
    path: 'series',
    children: [
      { path: '', redirectTo: 'breaking-bad/characters', pathMatch: 'full' },
      {
        path: ':series',
        children: [
          { path: '', redirectTo: 'characters', pathMatch: 'full' },
          { path: ':details', component: SeriesComponent }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
