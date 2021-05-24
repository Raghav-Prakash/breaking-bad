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
   * Returns a slice of all the characters from the store who have appeared in
   * the show "Breaking Bad" to be displayed on a page.
   * @param pageNumber The current page the user is in when viewing all characters.
   * @param maxItemsPerPage The limit to the number of characters a user can
   * see in any given page.
   */
  selectBreakingBadCharacters(pageNumber: number, maxItemsPerPage: number): Observable<Character[]> {
    return this.select(state => {
      const start = (pageNumber - 1) * maxItemsPerPage;
      const end = (start + maxItemsPerPage) > state.breakingBad.length ?
        state.breakingBad.length :
        (start + maxItemsPerPage);
      return state.breakingBad.slice(start, end);
    });
  }

  /**
   * Returns the total number of characters from the store that have appeared in
   * the show "Breaking Bad".
   */
  getBreakingBadCharacterCount(): Observable<number> {
    return this.select(state => state.breakingBad.length);
  }

  /**
   * Return all characters from the store who have only appeared in the show
   * "Better Caul Saul".
   */
  selectBetterCaulSaulCharacters(): Observable<Character[]> {
    return this.select(state => state.betterCaulSaul);
  }
}

