import { Injectable } from '@angular/core';
import { EntityStore, EntityState, StoreConfig } from '@datorama/akita';
import { Display } from '../index';

export interface DisplayState extends EntityState<Display> {
  display: Display;
}

export function createInitialState(): DisplayState {
  return {
    display: { series: '', details: '' }
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'display' })
export class DisplayStore extends EntityStore<DisplayState> {

  constructor() {
    super(createInitialState());
  }

  setDisplayState(series: string, details: string) {
    this.update(state => ({
      display: { series, details }
    }));
  }
}
