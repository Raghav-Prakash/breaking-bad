import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { withTransaction } from '@datorama/akita';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { isArray } from 'lodash';

import { baseUrl } from 'app/constants';
import { ApiQuote } from 'services/models/quote';
import { Quote } from 'app/models/quote';
import { QuotesStore } from 'app/store/quotes/quotes.store'

/**
 * Factory method that converts an API definition of a quote to its equivalent
 * view definition and returns it.
 */
 export function apiQuoteToUiQuote(apiQuote: ApiQuote): Quote {
  return {
    id: apiQuote.quote_id,
    author: apiQuote.author,
    quote: apiQuote.quote,
    series: apiQuote.series
  };
}

@Injectable({ providedIn: 'root'})
export class QuotesService {

  constructor(
    private http: HttpClient,
    private store: QuotesStore,
  ) {}

  /**
   * Make the API call to get quotes for both the shows.
   */
  getQuotes(): Observable<Quote[]> {
    this.store.setLoading(true);

    return this.http.get<ApiQuote[]>(`${baseUrl}/quotes`).pipe(
      map(apiQuotes => apiQuotes.map(apiQuote => apiQuoteToUiQuote(apiQuote))),
      catchError(err => of(err)),
      withTransaction((quotesOrError: Quote[] | any) => {
        if (isArray(quotesOrError)) {
          this.updateStoreWithQuotes(quotesOrError);
        } else {
          this.store.setError(quotesOrError);
        }
        this.store.setLoading(false);
      })
    );
  }

 /**
  * Store the quotes in the Akita store that correspond to both the shows.
  * @param quotes The view model of the quotes as returned from the API.
  */
  private updateStoreWithQuotes(quotes: Quote[]) {
    this.updateStoreWithBreakingBadQuotes(quotes);
    this.updateStoreWithBetterCallSaulQuotes(quotes);
  }

 /**
  * Store the "Breaking Bad" quotes in the Akits store.
  */
  private updateStoreWithBreakingBadQuotes(quotes: Quote[]) {
    const breakingBadQuotes = quotes.filter(quote => quote.series === 'Breaking Bad');
    this.store.updateBreakingBadQuotes(breakingBadQuotes);
  }

 /**
  * Store the "Breaking Bad" quotes in the Akits store.
  */
  private updateStoreWithBetterCallSaulQuotes(quotes: Quote[]) {
    const betterCallSaulQuotes = quotes.filter(quote => quote.series === 'Better Call Saul');
    this.store.updateBetterCaulSaulQuotes(betterCallSaulQuotes);
  }
}