import { Injectable } from '@angular/core';
import { EntityStore, EntityState, StoreConfig } from '@datorama/akita';
import { Character } from '../index';

export interface CharacterState extends EntityState<Character[]> {
  breakingBad: Character[];
  betterCaulSaul: Character[];
}

export function createInitialState(): CharacterState {
  return {
    breakingBad: [],
    betterCaulSaul: []
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'characters', idKey: 'name' })
export class CharactersStore extends EntityStore<CharacterState, Character[], string> {

  constructor() {
    super(createInitialState());
  }

  /**
   * Update the state with the provided "Breaking Bad" characters.
   * @param characters Characters who have appeared in the show "Breaking Bad".
   */
  updateBreakingBadCharacters(characters: Character[]) {
    this.update(state => ({
      breakingBad: [...characters]
    }));
  }

  /**
   * Update the state with the provided "Better Caul Saul" characters.
   * @param characters Characters who have only appeared in the show "Better Caul
   * Saul"
   */
  updateBetterCaulSaulCharacters(characters: Character[]) {
    this.update(state => ({
      betterCaulSaul: [...characters]
    }));
  }
}
