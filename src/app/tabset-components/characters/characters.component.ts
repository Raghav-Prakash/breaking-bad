import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Character } from 'models/character';

@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.less'],
})
export class CharactersComponent implements OnInit, OnDestroy {
  /**
   * All characters loaded from the store.
   */
  characters: Character[];
  /**
   * Holds all subscriptions made.
   */
  private subscription: Subscription = new Subscription();

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}
}
