// Modules
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

// Components
import { AppComponent } from 'app/app.component';
import { TabsetComponent } from 'app/tabset/tabset.component';
import { CharactersComponent } from 'app/tabset-components/characters/characters.component';
import { DeathsComponent } from 'app/tabset-components/deaths/deaths.component';
import { QuotesComponent } from 'app/tabset-components/quotes/quotes.component';
import { environment } from '../environments/environment';

// Services
import { CharactersService } from 'app/services/characters.service';

// Actions
import * as CharctersActions from 'actions/characters.actions';

// Effects
import { CharactersEffects } from 'effects/characters.effects';

// Reducers
import * as CharactersReducers from 'reducers/characters.reducer';
import { reducers, metaReducers } from 'reducers/index';

// Selectors
import * as CharactersSelectors from 'selectors/characters.selectors';

@NgModule({
  declarations: [
    AppComponent,
    TabsetComponent,
    CharactersComponent,
    DeathsComponent,
    QuotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([
      CharactersEffects,
    ])
  ],
  providers: [
    CharactersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
