// Modules
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';

// Components
import { CharactersComponent } from 'app/tabset-components/characters/characters.component';
import { CharacterComponent } from 'app/tabset-components/characters/character/character.component';
import { CharacterDetailsComponent } from 'app/tabset-components/characters/character/details/character-details.component';
import { CharactersSearchComponent } from 'app/tabset-components/characters/search/characters-search.component';

// Services
import { CharactersService } from 'app/services/characters.service';

// Set the store with the characters from the API.
export function charactersServiceFactory(charactersService: CharactersService): () => Promise<any> {
  return () => charactersService.getCharacters();
}

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
    HttpClientModule,
  ],
  exports: [
    CharactersComponent,
    CharacterComponent,
    CharacterDetailsComponent,
    CharactersSearchComponent
  ],
  providers: [
    CharactersService,
    {
      // Provider for APP_INITIALIZER
      provide: APP_INITIALIZER,
      useFactory: charactersServiceFactory,
      deps: [CharactersService],
      multi: true
    }
  ],
})
export class CharactersModule { }
