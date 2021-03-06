import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, ReplaySubject } from 'rxjs';
import { switchMap, filter, tap } from 'rxjs/operators';

import { Character } from 'models/character';
import { CharactersService } from 'services/characters.service';
import { CharactersQuery } from 'store/characters/characters.query';

@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.less'],
})
export class CharactersComponent implements OnInit, OnDestroy {
  /**
   * All characters loaded from the store.
   */
  characters: ReplaySubject<Character[]> = new ReplaySubject();
  /**
   * Loading indicator flag from the store, when the data is being loaded to the
   * store.
   */
  isLoading: ReplaySubject<boolean> = new ReplaySubject();
  /**
   * Holds all subscriptions made.
   */
  private subscription: Subscription = new Subscription();

  constructor(
    private service: CharactersService,
    private query: CharactersQuery
  ) {}

  ngOnInit() {
    this.subscription.add(
      this.query.getLoadingState()
        .pipe(
          tap(isLoading => this.isLoading.next(isLoading)),
          filter(isLoading => isLoading),
          switchMap(__ => this.service.getCharacters()),
          switchMap(__ => this.query.getCharacters())
        ).subscribe(characters => {
          this.characters.next(characters);
        }
      )
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
