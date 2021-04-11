import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CharacterState, CharactersStore } from './characters.store';
import { Observable } from 'rxjs';
import { Character } from 'app//models/character';

@Injectable({ providedIn: 'root' })
export class CharactersQuery extends QueryEntity<CharacterState> {

  constructor(store: CharactersStore) {
    super(store);
  }

  /**
   * Access the built-in loading state from the store.
   */
  getLoadingState(): Observable<boolean> {
    return this.select(state => state.loading);
  }

  /**
   * Access our defined property in the state called 'characters'.
   */
  getCharacters(): Observable<Character[]> {
    return this.select(state => state.characters);
  }
}

