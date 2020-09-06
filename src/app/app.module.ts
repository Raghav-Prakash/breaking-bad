// Modules
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from 'app/app.component';
import { TabsetComponent } from 'app/tabset/tabset.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

// Services
import { CharactersService } from 'app/services/characters.service';

// Actions
import * as CharacterActions from 'app/store/actions/characters.actions';

@NgModule({
  declarations: [
    AppComponent,
    TabsetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
  ],
  providers: [
    CharactersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
