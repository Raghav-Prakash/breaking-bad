// Modules
import { AppRoutingModule } from 'app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';

// Components
import { SeriesComponent } from 'app/series/series.component';

// Child components
import { SeriesSelectorComponent } from 'app/series/series-selector/series-selector.component';

// Child modules
import { BreakingBadModule  } from 'app/series/breaking-bad/breaking-bad-module';
import { BetterCallSaulModule } from 'app/series/better-call-saul/better-call-saul.module';

// Pipe
import { DisplayPipe } from 'app/pipes/display.pipe';

@NgModule({
  declarations: [
    SeriesComponent,
    SeriesSelectorComponent,
    DisplayPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    ScrollingModule,
    MatIconModule,
    BreakingBadModule,
    BetterCallSaulModule,
  ],
  exports: [
    SeriesComponent,
    SeriesSelectorComponent,
    BreakingBadModule,
    BetterCallSaulModule,
  ],
})
export class SeriesModule { }
