import { Component, Input } from '@angular/core';

import { Character } from 'models/character';

@Component({
  selector: 'character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.less'],
})
export class CharacterComponent {
  /**
   * Reference to a character from the characters component to display as a card.
   */
  @Input() character: Character;
}
