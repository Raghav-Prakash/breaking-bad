import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CharacterState, CharactersStore } from './characters.store';
import { Observable } from 'rxjs';
import { Character } from 'app/models/character';

@Injectable({ providedIn: 'root' })
export class CharactersQuery extends QueryEntity<CharacterState, Character> {

  constructor(store: CharactersStore) {
    super(store);
  }

  /**
   * Return all characters from the store who have appeared in the show
   * "Breaking Bad".
   */
  selectBreakingBadCharacters(): Observable<Character[]> {
    return this.select(state => state.breakingBad);
  }

  /**
   * Return all characters from the store who have only appeared in the show
   * "Better Caul Saul".
   */
  selectBetterCaulSaulCharacters(): Observable<Character[]> {
    return this.select(state => state.betterCaulSaul);
  }
}

