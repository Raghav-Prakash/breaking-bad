import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, ReplaySubject, of } from 'rxjs';
import { switchMap, filter, tap } from 'rxjs/operators';
import { isArray } from 'lodash';

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
  isLoading: boolean;
  /**
   * The maximum number of characters that can be loaded per page.
   */
  private loadLimit = 6;
  /**
   * The current page number.
   */
  private pageNumber = 1;
  /**
   * Holds all subscriptions made.
   */
  private subscription: Subscription = new Subscription();

  constructor(
    private service: CharactersService,
    private query: CharactersQuery
  ) {}

  ngOnInit() {
    this.listenToLoadingState();
    this.service.setStoreLoadingState(true);

    this.subscription.add(
      this.service.setCharacters(this.loadLimit, this.pageNumber)
        .pipe(
          switchMap((state: 'success' | 'error') => {
            if (state === 'success') {
              return this.query.getCharacters();
            }
            return this.query.selectError();
          })
        ).subscribe(result => {
          if (isArray(result)) {
            this.characters.next(result);
          } else {
            console.error(result);
          }
          this.service.setStoreLoadingState(false);
        })
    );

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private listenToLoadingState() {
    this.query.selectLoading().subscribe(isLoading => this.isLoading = isLoading);
  }
}
