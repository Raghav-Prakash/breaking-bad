// Akita DevTools
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';

// Modules
import { AppRoutingModule } from 'app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from 'app/app.component';

// Child modules
import { SeriesModule } from 'app/series/series.module';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AkitaNgDevtools.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    SeriesModule,
    SharedModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
