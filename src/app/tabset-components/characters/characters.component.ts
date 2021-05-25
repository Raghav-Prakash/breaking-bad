import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { combineQueries } from '@datorama/akita';

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
  characters: Character[] = [];
  /**
   * Loading indicator flag from the store, when the data is being loaded to the
   * store.
   */
  isLoading: boolean;
  /**
   * The current page number.
   */
  private pageNumber: BehaviorSubject<number> = new BehaviorSubject(1);
  /**
   * The total number of characters who have appeared in the show "Breaking Bad".
   */
  totalCharactersBreakingBad: number;
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

  ngOnInit() {
    this.subscription.add(this.queryLoadingAndErrorStates());
    this.subscription.add(this.queryCharactersAndCountForPage(this.maxCharactersPerPage));

    if (!this.characters.length) {
      this.service.getCharacters().subscribe();
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
    this.pageNumber.next(pageChangeEvent.page);
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
   * Combine the queries to the character count and the characters per page
   * for the show "Breaking Bad".
   * @param page The page number the user is currently viewing.
   * @param maxCharactersPerPage The limit on the number of characters a page
   * can have for display.
   */
  private queryCharactersAndCountForPage(maxCharactersPerPage: number): Subscription {
    return this.pageNumber
    .pipe(
      switchMap(page => combineQueries([
        this.query.getBreakingBadCharacterCount(),
        this.query.selectBreakingBadCharacters(page, maxCharactersPerPage)
      ]))
    ).subscribe(([count, characters]) => {
      this.totalCharactersBreakingBad = count;
      this.characters = [...characters];
    });
  }
}
