// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from 'app/shared/shared.module';

// Components
import { CharactersComponent } from 'app/tabset-components/characters/characters.component';
import { CharacterComponent } from 'app/tabset-components/characters/character/character.component';

// Services
import { CharactersService } from 'app/services/characters.service';

@NgModule({
  declarations: [
    CharactersComponent,
    CharacterComponent,
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    HttpClientModule,
    SharedModule
  ],
  exports: [
    CharactersComponent,
    CharacterComponent,
  ],
  providers: [
    CharactersService,
  ],
})
export class CharactersModule { }
