import { Component, Input } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less'],
})
export class SearchBarComponent {
  /**
   * Based on the component using the search bar, the placeholder in the input
   * field will say so.
   */
  @Input() placeHolder: string;

}
