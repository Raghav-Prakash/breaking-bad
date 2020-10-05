import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Character } from 'models/character';
import { loadCharacters, CharacterActionTypes } from 'actions/characters.actions';

@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.less'],
})
export class CharactersComponent implements OnInit, OnDestroy {
  /**
   * All characters loaded from the store.
   */
  characters: Character[];
  /**
   * Holds all subscriptions made.
   */
  private subscription: Subscription = new Subscription();

  constructor(
    private actions: Actions,
    private store: Store<any>,
  ) {
    this.onLoadSuccess();
    this.onLoadFailure();
  }

  ngOnInit() {
    this.store.dispatch(loadCharacters());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   * Listen to the action stream for a successful loading of characters into
   * the store.
   */
  private onLoadSuccess() {
    this.subscription.add(
      this.actions.pipe(
        ofType(CharacterActionTypes.LOAD_CHARACTERS_SUCCESS),
        tap<{characters: Character[]}>(({characters}) => this.characters = [...characters]),
      ).subscribe(() => console.log(this.characters, `CHARACTERS`))
    );
  }

  /**
   * Listen to the action stream for a failure to load characters into the store.
   */
  private onLoadFailure() {
    this.subscription.add(
      this.actions.pipe(
        ofType(CharacterActionTypes.LOAD_CHARACTERS_FAILURE),
        tap<{ type: CharacterActionTypes.LOAD_CHARACTERS_FAILURE, error: any }>(({error}) => {
          console.error(error);
        })
      ).subscribe()
    );
  }
}
