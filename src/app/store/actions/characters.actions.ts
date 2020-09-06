import { Action } from '@ngrx/store';

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
 * Action class to load all characters.
 */
export class LoadCharacters implements Action {
  readonly type = CharacterActionTypes.LOAD_CHARACTERS;
}

/**
 * Action class that returns the characters loaded as payload when the
 * characters successfully loaded from the API.
 */
export class LoadCharactersSuccess implements Action {
  readonly type = CharacterActionTypes.LOAD_CHARACTERS_SUCCESS;

  constructor(payload: Character[]) { }
}

/**
 * Action class to load all characters.
 */
export class LoadCharactersFailure implements Action {
  readonly type = CharacterActionTypes.LOAD_CHARACTERS_FAILURE;

  constructor(payload: Error) { }
}

/**
 * Keep track of all actions associated with characters.
 */
export type CharacterAction = LoadCharacters |
  LoadCharactersSuccess |
  LoadCharactersFailure;
