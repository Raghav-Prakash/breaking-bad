import { createAction, props, union } from '@ngrx/store';

import { Character } from 'models/character';

/**
 * All action types associated with characters.
 */
export enum CharacterActionTypes {
  LOAD_CHARACTERS = '[Characters] Load all characters',
  LOAD_CHARACTERS_SUCCESS = '[Characters] Successfully loaded all characters',
  LOAD_CHARACTERS_FAILURE = '[Characters] Failed to load all characters',
}

/**
 * Action creators.
 */
export const loadCharacters = createAction(CharacterActionTypes.LOAD_CHARACTERS);
export const loadCharactersSuccess = createAction(
  CharacterActionTypes.LOAD_CHARACTERS_SUCCESS,
  props<{ characters: Character[] }>()
);

/**
 * Union of all actions created.
 */
const all = union({
  loadCharacters,
  loadCharactersSuccess
});

/**
 * Export all actions created.
 */
export type CharacterActions = typeof all;
