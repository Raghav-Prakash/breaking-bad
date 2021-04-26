// Akita DevTools
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';

// Modules
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TabsetComponentsModule } from 'app/tabset-components/tabset-components.module';

// Components
import { AppComponent } from 'app/app.component';
import { TabsetComponent } from 'app/tabset/tabset.component';

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
    TabsetComponentsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
