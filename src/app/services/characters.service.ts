import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { withTransaction } from '@datorama/akita';
import { CharactersStore } from 'store/characters/characters.store';
import { isArray } from 'lodash';

import { baseUrl } from 'app/constants';
import { Character } from 'models/character';
import { ApiCharacter } from 'services/models/character';

/**
 * Factory method to return the the UI model of a character.
 */
function apiCharacterToUiCharacter(apiCharacter: ApiCharacter): Character {
  return {
    id: apiCharacter.char_id,
    name: apiCharacter.name,
    birthday: apiCharacter.birthday === 'Unknown' ? null : new Date(apiCharacter.birthday),
    occupations: [...apiCharacter.occupation],
    image: apiCharacter.img,
    status: apiCharacter.status,
    nickname: apiCharacter.nickname,
    seasons: [...apiCharacter.appearance],
    betterCallSaulSeasons: [...apiCharacter.better_call_saul_appearance],
    actor: apiCharacter.portrayed,
    series: apiCharacter.category
  };
}

@Injectable({ providedIn: 'root' })
export class CharactersService {

  constructor(
    private http: HttpClient,
    private store: CharactersStore
  ) {}

  /**
   * Set the characters in the store. If there was an error in the API, set the
   * error state in the store.
   */
  getCharacters(): Observable<Character[]> {
    this.store.setLoading(true);

    return this.http.get<ApiCharacter[]>(`${baseUrl}/characters`)
      .pipe(
        map(apiCharacters => apiCharacters
          .map(character => apiCharacterToUiCharacter(character))
        ),
        catchError(err => of(err)),
        withTransaction(charactersOrError => {
          if (isArray(charactersOrError)) {
            this.onUpdateCharacterStates(charactersOrError);
          } else {
            this.store.setError(charactersOrError);
          }
          this.store.setLoading(false);
        })
      );
  }

  /**
   * If the API call to load the characters was successful, update the
   * states in the store for the characters who have appeared in both the shows
   * as well as the loading state.
   * @param characters The characters in both the shows combined.
   */
  private onUpdateCharacterStates(characters: Character[]) {
    this.updateStoreWithBreakingBadCharacters(characters);
    this.updateStoreWithBetterCaulSaulCharacters(characters);
  }

  /**
   * Update the store with the characters from the API that have appeared in the
   * show "Breaking Bad".
   * @param characters Characters returned by the API that includes all
   * characters that have appeared in both shows "Breaking Bad" and "Better Caul
   * Saul".
   */
  private updateStoreWithBreakingBadCharacters(characters: Character[]) {
    const storeCharacters = characters.filter(character => character.seasons.length > 0);
    this.store.updateBreakingBadCharacters(storeCharacters);
  }

  /**
   * Update the store with the characters from the API that have appeared in the
   * show "Better Caul Saul".
   * @param characters Characters returned by the API that includes all
   * characters that have appeared in both shows "Breaking Bad" and "Better Caul
   * Saul".
   */
  private updateStoreWithBetterCaulSaulCharacters(characters: Character[]) {
    const storeCharacters = characters.filter(character => character.betterCallSaulSeasons.length > 0);
    this.store.updateBetterCaulSaulCharacters(storeCharacters);
  }
}
