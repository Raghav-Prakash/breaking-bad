// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { SharedModule } from 'app/shared/shared.module';

// Components
import { CharactersComponent } from 'app/tabset-components/characters/characters.component';
import { CharacterComponent } from 'app/tabset-components/characters/character/character.component';
import { CharacterDetailsComponent } from 'app/tabset-components/characters/character/details/character-details.component';
import { CharactersSearchComponent } from 'app/tabset-components/characters/search/characters-search.component';

// Services
import { CharactersService } from 'app/services/characters.service';

@NgModule({
  declarations: [
    CharactersComponent,
    CharacterComponent,
    CharacterDetailsComponent,
    CharactersSearchComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    HttpClientModule,
    SharedModule,
  ],
  exports: [
    CharactersComponent,
    CharacterComponent,
    CharacterDetailsComponent,
    CharactersSearchComponent
  ],
  providers: [
    CharactersService,
  ],
})
export class CharactersModule { }
