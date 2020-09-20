import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import {
  CharacterActionTypes,
  loadCharactersSuccess,
  CharacterActions,
} from 'actions/characters.actions';
import { CharactersService } from 'services/characters.service';

@Injectable()
export class CharactersEffects {

  loadCharacters = createEffect(() => this.actions.pipe(
      ofType(CharacterActionTypes.LOAD_CHARACTERS),
      switchMap(() => this.getAll())
    )
  );

  constructor(
    private actions: Actions<CharacterActions>,
    private charactersService: CharactersService,
  ) {}

  /**
   * Get all characters from the API.
   *
   * - If successful API response, update the state with the characters by
   * dispatching the action upon successful loading of characters from the API.
   * The reducer upon seeing the action updates the state.
   * - If error API respone, return an observable with the error.
   */
  private getAll() {
    return this.charactersService.getAll().pipe(
      map(characters => loadCharactersSuccess({ characters })),
      catchError(error => of({ type: CharacterActionTypes.LOAD_CHARACTERS_FAILURE, error })),
    );
  }
}
