import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
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
   * Get the characters from the base URL with a limit to the number of characters
   * to be retrieved from the API as well.
   * @param limit The number of characters to be retrieved.
   * @param offset The starting index from which the limited number of
   * characters are retrieved.
   */
  getCharacters(limit: number, offset: number) {
    this.store.updateLoadingState(true);

    return this.http.get<ApiCharacter[]>(`${charactersBaseUrl}?limit=${limit}&offset=${offset}`)
    .pipe(
      tap(characters => {
        this.store.updateCharacters(characters
          .map(character => apiCharacterToUiCharacter(character))
        );
        this.store.updateLoadingState(false);
      })
    );
  }
}
