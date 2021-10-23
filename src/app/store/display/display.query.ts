import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { DisplayState, DisplayStore, Display } from '../index';

@Injectable({ providedIn: 'root' })
export class DisplayQuery extends QueryEntity<DisplayState, Display> {

  constructor(store: DisplayStore) {
    super(store);
  }

  /**
   * Returns the display state.
   */
  getDisplayState(): Observable<Display> {
    return this.select(state => state.display)
  }
}
