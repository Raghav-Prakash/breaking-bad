import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharactersStore } from 'store/characters/characters.store';

import { Character } from 'models/character';

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
  /**
   * The base url for the API endpoints.
   */
  private readonly base = 'https://www.breakingbadapi.com/api';

  constructor(http: HttpClient, store: CharactersStore) {
    this.http = http;
    this.store = store;
  }

  /**
   * Get the characters from the base URL.
   */
  getCharacters() {
    this.http.get<Character[]>(`${this.base}/characters`).subscribe(characters => {
      console.log(characters, `characters in service from API`);
      this.store.loadCharacters(characters);
    });
  }
}
