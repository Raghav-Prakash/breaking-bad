/**
 * Holds the structure of a quote as returned by the API.
 */
export class ApiQuote {
  /**
   * Quote ID.
   */
  quote_id: string;
  /**
   * The character who said the quote.
   */
  author: string;
  /**
   * The quote.
   */
  quote: string;
  /**
   * The show the quote was said.
   */
  series: string;
}
