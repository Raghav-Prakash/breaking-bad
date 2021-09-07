import { cloneDeep } from 'lodash';

/**
 * Holds the view structure of a quote.
 */
export class Quote {
  /**
   * Quote ID.
   */
  id: string;
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

  constructor(obj?: { [P in keyof Quote]?: Quote[P] }) {
    obj && Object.assign(this, cloneDeep(obj));
  }
}