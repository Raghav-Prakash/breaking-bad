// Modules
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AppRoutingModule } from 'app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';

// Components
import { AppComponent } from 'app.component';
import { TabsetComponent } from 'tabset/tabset.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
