import { Injectable } from '@angular/core';
import { Character } from '../../models/character';
import { EntityStore, EntityState, StoreConfig } from '@datorama/akita';

export interface CharacterState extends EntityState<Character[]> {
  characters: Character[];
  isLoading: boolean;
}

export function createInitialState(): CharacterState {
  return {
    characters: [],
    isLoading: true
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'characters' })
export class CharactersStore extends EntityStore<CharacterState> {

  constructor() {
    super(createInitialState());
  }

  updateLoadingState(isLoading: boolean) {
    this.update(state => ({
      ...state,
      isLoading,
    }));
  }

  updateCharacters(characters: Character[]) {
    this.update(state => ({
      ...state,
      characters,
    }));
  }
}
