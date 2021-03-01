import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CharacterState, CharactersStore } from './characters.store';
import { Observable } from 'rxjs';
import { Character } from '../../models/character';

@Injectable({ providedIn: 'root' })
export class CharactersQuery extends QueryEntity<CharacterState> {

  constructor(store: CharactersStore) {
    super(store);
  }

  getCharacters(): Observable<Character> {
    return this.select(state => state.character);
  }
}

