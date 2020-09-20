import { createSelector, createFeatureSelector } from '@ngrx/store';

import { AppState } from 'reducers/index';
import { CharactersState } from 'reducers/characters.reducer';
import { Character } from 'models/character';

export const selectAll = createFeatureSelector<AppState, CharactersState>('characters');

export const getCharacterById = (state: CharactersState, id: string): Character => {
  return state.find(character => character.id === id);
};

export const selectCharactersById = createSelector(
  selectAll,
  (state: CharactersState, props: { id: string }) => getCharacterById(state, props.id)
);
