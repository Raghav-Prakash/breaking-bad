// Modules
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { SharedModule } from 'app/shared/shared.module';

// Components
import { CharactersComponent } from 'app/tabset-components/characters/characters.component';
import { CharactersSearchComponent } from 'app/tabset-components/characters/search/characters-search.component';
import { BBCharactersComponent } from 'app/tabset-components/characters/breaking-bad/bb-characters.component';
import { BCSCharactersComponent } from 'app/tabset-components/characters/better-call-saul/bcs-characters.component';
import { CharacterComponent } from 'app/tabset-components/characters/character/character.component';
import { CharacterDetailsComponent } from 'app/tabset-components/characters/character/details/character-details.component';

// Services
import { CharactersService } from 'app/services/characters.service';

@NgModule({
  declarations: [
    CharactersComponent,
    CharactersSearchComponent,
    BBCharactersComponent,
    BCSCharactersComponent,
    CharacterComponent,
    CharacterDetailsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    HttpClientModule,
    SharedModule,
  ],
  exports: [
    CharactersComponent,
    CharactersSearchComponent,
    BBCharactersComponent,
    BCSCharactersComponent,
    CharacterComponent,
    CharacterDetailsComponent,
  ],
  providers: [
    CharactersService,
  ],
})
export class CharactersModule { }
