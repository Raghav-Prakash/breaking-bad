import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CHARACTERS_URL } from 'app/constants';
import { ApiCharacter } from 'services/models/character';
import { Character } from 'models/character';

/**
 * Factory method to convert the data structure for the character model from
 * that of an API model to that of our component model.
 */
export const characterFromApi = (character: ApiCharacter): Character => {
  return new Character({
    id: character.char_id,
    name: character.name,
    birthday: new Date(character.birthday),
    occupations: [...character.occupation],
    image: character.img,
    status: character.status,
    nickname: character.nickname,
    seasons: character.appearance && character.appearance.map(season => `${season}`),
    actor: character.portrayed,
    series: character.category
  });
};

@Injectable({
  providedIn: 'root',
})
export class CharactersService {

  constructor(
    private http: HttpClient
  ) {}

  /**
   * Get all characters from the API.
   */
  getAll(): Observable<Character[]> {
    return this.http.get<ApiCharacter[]>(CHARACTERS_URL).pipe(
      map(apiCharacters => {
        return apiCharacters.map(apiCharacter => characterFromApi(apiCharacter));
      })
    );
  }
}
