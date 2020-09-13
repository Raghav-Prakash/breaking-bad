import { Action, createReducer, on } from '@ngrx/store';

import { Character } from 'models/character';
import * as CharacterActions from 'actions/characters.actions';

/**
 * Type of the state.
 */
export type CharactersState = Character[];

/**
 * Initial state of the characters.
 */
export const initialState: CharactersState = [];

/**
 * Reducer function.
 */
const charactersReducer = createReducer(initialState,
  on(CharacterActions.loadCharactersSuccess, (state: Character[], { characters }) => [...characters])
);

/**
 * Export the above reducer function passing in the current state and the action
 * dispatched.
 */
export function reducer(state: Character[], action: Action) {
  return charactersReducer(state, action);
}
