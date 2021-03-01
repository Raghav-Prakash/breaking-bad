import { Injectable } from '@angular/core';
import { Character } from '../../models/character';
import { EntityStore, EntityState, StoreConfig } from '@datorama/akita';

export interface CharacterState extends EntityState<Character> {
  character: Character;
}

export function createInitialState(): CharacterState {
  return {
    character: null
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'characters' })
export class CharactersStore extends EntityStore<CharacterState> {

  constructor() {
    super(createInitialState());
  }

  loadCharacters(characters: Character[]) {
    this.set(characters);
  }
}
