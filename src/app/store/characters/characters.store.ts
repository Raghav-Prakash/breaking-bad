import { Injectable } from '@angular/core';
import { Character } from 'app/models/character';
import { EntityStore, EntityState, StoreConfig } from '@datorama/akita';

export interface CharacterState extends EntityState<Character[]> {
  characters: Character[];
}

export function createInitialState(): CharacterState {
  return {
    characters: [],
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'characters' })
export class CharactersStore extends EntityStore<CharacterState> {

  constructor() {
    super(createInitialState());
  }

  updateCharacters(characters: Character[]) {
    this.update(state => ({
      ...state,
      characters,
    }));
  }
}
