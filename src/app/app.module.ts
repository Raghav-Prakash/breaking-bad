// Modules
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'app/shared/shared.module';

// Components
import { AppComponent } from 'app/app.component';
import { TabsetComponent } from 'app/tabset/tabset.component';
import { CharactersComponent } from 'app/tabset-components/characters/characters.component';
import { CharacterComponent } from 'app/tabset-components/characters/character/character.component';
import { DeathsComponent } from 'app/tabset-components/deaths/deaths.component';
import { QuotesComponent } from 'app/tabset-components/quotes/quotes.component';

// Services
import { CharactersService } from 'app/services/characters.service';

@NgModule({
  declarations: [
    AppComponent,
    TabsetComponent,
    CharactersComponent,
    CharacterComponent,
    DeathsComponent,
    QuotesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    CharactersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
