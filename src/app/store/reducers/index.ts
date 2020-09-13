import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import * as CharactersReducer from 'reducers/characters.reducer';

/**
 * All states for the application as one app state.
 */
interface AppState {
  characters: CharactersReducer.CharactersState;
}

/**
 * All reducers for the application combined.
 */
export const reducers: ActionReducerMap<AppState> = {
  characters: CharactersReducer.reducer
};

/**
 * Meta-reducer.
 */
export const metaReducers: MetaReducer<AppState>[] = [];
