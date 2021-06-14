import { Component, OnChanges, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { combineQueries } from '@datorama/akita';

import { Character } from 'models/character';
import { CharactersService } from 'services/characters.service';
import { CharactersQuery } from 'store/characters/characters.query';
@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.less'],
})
export class CharactersComponent implements OnChanges, OnInit, OnDestroy {
  /**
   * The name of the show whose characters will be displayed.
   */
  @Input() show: string;
  /**
   * All characters loaded from the store.
   */
  characters: Character[] = [];
  /**
   * Loading indicator flag from the store, when the data is being loaded to the
   * store.
   */
  isLoading: boolean;
  /**
   * The total number of characters to compute the required number of pages.
   */
  totalCharacters: number;
  /**
   * The limit to the number of characters a user can see in any given page.
   */
  readonly maxCharactersPerPage = 6;
  /**
   * Holds all subscriptions made.
   */
  private subscription: Subscription = new Subscription();

  constructor(
    private service: CharactersService,
    private query: CharactersQuery
  ) {}

  ngOnChanges() {
    this.querySeriesCharactersForPage(this.show, 1, this.maxCharactersPerPage);
  }

  ngOnInit() {
    this.subscription.add(this.queryLoadingAndErrorStates());
    if (!this.characters.length) {
      this.subscription.add(this.service.getCharacters().subscribe());
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   * On changing a page, we update the current page number we're at, and trigger
   * the queries to the store to display the page's characters.
   * @param pageChangeEvent The object emitted upon changing a page.
   * - "page" is the new page number the user has navigated to.
   * - "itemsPerPage" is the limit on the number of characters a page can have
   * for display.
   */
  onPageChange(pageChangeEvent: { page: number, itemsPerPage: number }) {
    this.querySeriesCharactersForPage(this.show, pageChangeEvent.page, pageChangeEvent.itemsPerPage);
  }

  /**
   * Combine queries to the store's loading and error states and update their
   * respective UI flags and variables.
   */
  private queryLoadingAndErrorStates(): Subscription {
    return combineQueries([
      this.query.selectLoading(),
      this.query.selectError()
    ]).subscribe(([isLoading, error]) => {
      this.isLoading = isLoading;
      error && console.error(error);
    });
  }

  /**
   * Wrapper method to query characters for the provided show in the provided
   * page number.
   * @param show The show whose characters need to be displayed.
   * @param page The page number the user is currently viewing.
   * @param maxCharactersPerPage The limit on the number of characters a page
   * can have for display.
   */
  private querySeriesCharactersForPage(show: string, page: number, maxCharactersPerPage: number): Subscription {
    switch (show) {
      case 'breaking-bad':
        return this.queryBreakingBadCharactersForPage(page, maxCharactersPerPage);
      case 'better-call-saul':
        return this.queryBetterCallSaulCharactersForPage(page, maxCharactersPerPage);
    }
  }

  /**
   * Combine the queries to the character total count and the characters for the
   * show "Breaking Bad" for the provided page number.
   * @param page The page number the user is currently viewing.
   * @param maxCharactersPerPage The limit on the number of characters a page
   * can have for display.
   */
  private queryBreakingBadCharactersForPage(page: number, maxCharactersPerPage: number): Subscription {
    return combineQueries([
      this.query.getBreakingBadCharacterCount(),
      this.query.selectBreakingBadCharacters(page, maxCharactersPerPage)
    ]).subscribe(([count, characters]) => {
      this.totalCharacters = count;
      this.characters = [...characters];
    });
  }

  /**
   * Combine the queries to the character total count and the characters for the
   * show "Better Call Saul" for the provided page number.
   * @param page The page number the user is currently viewing.
   * @param maxCharactersPerPage The limit on the number of characters a page
   * can have for display.
   */
  private queryBetterCallSaulCharactersForPage(page: number, maxCharactersPerPage: number): Subscription {
    return combineQueries([
      this.query.getBetterCallSaulCharacterCount(),
      this.query.selectBetterCallSaulCharacters(page, maxCharactersPerPage)
    ]).subscribe(([count, characters]) => {
      this.totalCharacters = count;
      this.characters = [...characters];
    });
  }
}
