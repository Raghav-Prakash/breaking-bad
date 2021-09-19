// Modules
import { AppRoutingModule } from 'app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// Components
import { SeriesComponent } from 'app/series/series.component';

// Child modules
import { BreakingBadModule  } from 'app/series/breaking-bad/breaking-bad-module';
import { BetterCallSaulModule } from 'app/series/better-call-saul/better-call-saul.module';

@NgModule({
  declarations: [
    SeriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BreakingBadModule,
    BetterCallSaulModule,
  ],
  exports: [
    SeriesComponent,
    BreakingBadModule,
    BetterCallSaulModule,
  ],
})
export class SeriesModule { }
