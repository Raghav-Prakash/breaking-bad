import { Injectable } from '@angular/core';
import { Quote } from 'app/models/quote';
import { EntityStore, EntityState, StoreConfig } from '@datorama/akita';

export interface QuoteState extends EntityState<Quote[]> {
  breakingBad: Quote[];
  betterCaulSaul: Quote[];
}

export function createInitialState(): QuoteState {
  return {
    breakingBad: [],
    betterCaulSaul: []
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'quotes', idKey: 'id' })
export class QuotesStore extends EntityStore<QuoteState, Quote[], string> {

  constructor() {
    super(createInitialState());
  }

  /**
   * Update the state with the provided "Breaking Bad" quotes.
   * @param quotes Quotes mentioned by characters who have appeared in the show
   * "Breaking Bad".
   */
  updateBreakingBadQuotes(quotes: Quote[]) {
    this.update(state => ({
      breakingBad: [...quotes]
    }));
  }

  /**
   * Update the state with the provided "Better Caul Saul" quotes.
   * @param quotes Quotes mentioned by characters who have only appeared in the
   * show "Better Caul
   * Saul"
   */
  updateBetterCaulSaulQuotes(quotes: Quote[]) {
    this.update(state => ({
      betterCaulSaul: [...quotes]
    }));
  }
}
