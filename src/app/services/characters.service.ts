import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { CharactersStore } from 'store/characters/characters.store';

import { charactersBaseUrl } from 'app/constants';
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
  /**
   * Reference to perform HTTP requests.
   */
  private http: HttpClient;
  /**
   * Reference to the store.
   */
  private store: CharactersStore;

  constructor(http: HttpClient, store: CharactersStore) {
    this.http = http;
    this.store = store;
  }

  /**
   * Set the characters in the store. If there was an error in the API, set the
   * error state in the store.
   * @param limit The number of characters to be retrieved.
   * @param offset The starting index from which the limited number of
   * characters are retrieved.
   */
  setCharacters(limit: number, offset: number): Observable<string> {
    this.store.setLoading(true);

    return this.http.get<ApiCharacter[]>(`${charactersBaseUrl}?limit=${limit}&offset=${offset}`)
      .pipe(
        switchMap(characters => {
          const presentationModel = characters
            .map(character => apiCharacterToUiCharacter(character));
          this.store.updateCharacters(presentationModel);
          this.store.setLoading(false);
          return of('success');
        }),
        catchError(err => {
          this.store.setError(err);
          this.store.setLoading(false);
          return of('error');
        })
      );
  }
}
