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
  /**
   * Flag indicating whether the card is expanded to view the character's details.
   */
  isInDetailsView = false;

  /**
   * Toggle the flag indicating that the details of a character can being viewed
   * based on the value provided.
   * @param isDisplay Whether the details are to be displayed.
   */
  toggleDetailsDisplay(isDisplay: boolean) {
    this.isInDetailsView = isDisplay;
  }
}
