// Akita DevTools
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';

// Modules
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Custom modules
import { TabsetComponentsModule } from 'app/tabset-components/tabset-components.module';

// Components
import { AppComponent } from 'app/app.component';
import { TabsetComponent } from 'app/tabset/tabset.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TabsetComponent,
  ],
  imports: [
    AkitaNgDevtools.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TabsetComponentsModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
