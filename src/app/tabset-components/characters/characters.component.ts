import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

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
  pageNumber = 1;
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
    this.queryLoadingState();
    this.queryBreakingBadCharactersForPage(this.pageNumber, this.maxCharactersPerPage);
    this.queryBreakingBadCharacterCount();
    this.listenToCharactersErrorState();

    if (!this.characters.length) {
      this.service.getCharacters().subscribe();
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   * On changing a page, we display the page's characters as a slice from the
   * store.
   * @param pageChangeEvent The object emitted upon changing a page.
   * - "page" is the new page number the user has navigated to.
   * - "itemsPerPage" is the limit on the number of characters a page can have
   * for display.
   */
  onPageChange(pageChangeEvent: { page: number, itemsPerPage: number }) {
    this.pageNumber = pageChangeEvent.page;
    this.queryBreakingBadCharactersForPage(this.pageNumber, this.maxCharactersPerPage);
  }

  /**
   * Subscribe to the store's loading state.
   */
  private queryLoadingState() {
    this.subscription.add(
      this.query.selectLoading().subscribe(isLoading => this.isLoading = isLoading)
    );
  }

  /**
   * Get the number of "Breaking Bad" characters from the store.
   */
  private queryBreakingBadCharacterCount() {
    this.subscription.add(
      this.query.getBreakingBadCharacterCount().subscribe(count => this.totalCharactersBreakingBad = count)
    );
  }

  /**
   * Query a slice of the "Breaking Bad" characters from the store to display in
   * the provided page for "Breaking Bad" characters.
   */
  private queryBreakingBadCharactersForPage(page: number, maxCharactersPerPage: number) {
    this.subscription.add(
      this.query.selectBreakingBadCharacters(page, maxCharactersPerPage)
        .subscribe(characters => this.characters = [...characters])
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
