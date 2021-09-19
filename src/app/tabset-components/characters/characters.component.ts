import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CharactersService } from 'services/characters.service';
@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.less'],
})
export class CharactersComponent implements OnInit, OnDestroy {
  /**
   * Holds all subscriptions made.
   */
  private subscription: Subscription = new Subscription();

  constructor(
    private service: CharactersService,
  ) {}

  ngOnInit() {
    // this.subscription.add(this.service.getCharacters().subscribe());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
