import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, ReplaySubject } from 'rxjs';

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
    this.listenToCharactersSuccessState();
    this.listenToCharactersErrorState();
    this.service.getCharacters().subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   * Subscribe to the store's loading state.
   */
  private listenToLoadingState() {
    this.subscription.add(
      this.query.selectLoading().subscribe(isLoading => this.isLoading = isLoading)
    );
  }

  /**
   * If the API call to get the characters were successful, query the characters
   * from the store to display in the view.
   */
  private listenToCharactersSuccessState() {
    this.subscription.add(
      this.query.selectCharacters().subscribe(characters => this.characters.next(characters))
    );
  }

  /**
   * If the API call to get the characters had an error, query the error in the
   * store.
   */
  private listenToCharactersErrorState() {
    this.subscription.add(
      this.query.selectError().subscribe(error => error && console.error(error))
    );
  }
}
