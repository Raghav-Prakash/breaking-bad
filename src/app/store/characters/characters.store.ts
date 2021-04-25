import { Injectable } from '@angular/core';
import { Character } from 'app/models/character';
import { EntityStore, EntityState, StoreConfig } from '@datorama/akita';

export interface CharacterState extends EntityState<Character> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'characters', idKey: 'name' })
export class CharactersStore extends EntityStore<CharacterState, Character, string> {

  constructor() {
    super();
  }

  /**
   * Add the provided characters as entities to the "characters" store.
   * @param characters The list of characters from the API converted to a
   * presentation model.
   */
  addCharacters(characters: Character[]) {
    this.add(characters);
  }
}
