import { Component, OnInit, OnDestroy } from '@angular/core';
import { combineQueries } from '@datorama/akita';
import { CharactersQuery } from 'app/store/characters/characters.query';
import { Subscription, BehaviorSubject } from 'rxjs';

import { Character } from 'app/models/character';
@Component({
  selector: 'bb-characters',
  templateUrl: 'bb-characters.component.html',
  styleUrls: ['bb-characters.component.less']
})
export class BBCharactersComponent implements OnInit, OnDestroy {
  /**
   * Flag indicating whether the show's characters are being loaded from the
   * store.
   */
  isLoading: boolean;
  /**
   * The up-to-date list of characters from the store.
   */
  characters: BehaviorSubject<Character[]> = new BehaviorSubject([]);
  /**
   * The number of characters who've appeared on the series.
   */
  count: BehaviorSubject<number> = new BehaviorSubject(0);
  /**
   *  The current page number in the pagination.
   */
  page = 1;
  /**
   * The maximum number of characters that can be displayed in a single page.
   * This is a fixed value.
   */
  readonly maxPerPage = 6;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private query: CharactersQuery,
  ) {}

  ngOnInit() {
    this.queryLoadingState();
    this.queryCharacters(this.page, this.maxPerPage);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
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
    this.queryCharacters(pageChangeEvent.page, pageChangeEvent.itemsPerPage);
  }

  /**
   * Query the loading state to load the characters.
   */
  private queryLoadingState() {
    this.subscriptions.add(
      this.query.selectLoading().subscribe(isLoading => this.isLoading = isLoading)
    );
  }
  
  /**
   * Query a slice of the Breaking Bad characters from the store to be displayed
   * for a particular page.
   * @param page The current page number.
   * @param maxPerPage The maximum number of characters that can be displayed
   * in a single page.
   */
  private queryCharacters(page: number, maxPerPage: number) {
    this.subscriptions.add(
      combineQueries([
        this.query.selectBreakingBadCharacters(page, maxPerPage),
        this.query.getBreakingBadCharacterCount()
      ]).subscribe(([characters, count]) => {
        this.characters.next(characters);
        this.count.next(count);
      })
    );
  }
}
