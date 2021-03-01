import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { Character } from 'models/character';
import { CharactersService } from 'services/characters.service';

@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.less'],
})
export class CharactersComponent implements OnInit, OnDestroy {
  /**
   * All characters loaded from the store.
   */
  characters: Observable<Character[]>;
  /**
   * Loading indicator flag from the store, when the data is being loaded to the
   * store.
   */
  loading: Observable<boolean>;
  /**
   * Holds all subscriptions made.
   */
  private subscription: Subscription = new Subscription();

  constructor(
    private charactersService: CharactersService
  ) {}

  ngOnInit() {
    this.charactersService.getCharacters();
  }

  ngOnDestroy() {}
}
