import { Component, Input } from '@angular/core';

@Component({
  selector: 'series-selector',
  templateUrl: './series-selector.component.html',
  styleUrls: ['./series-selector.component.less']
})
export class SeriesSelectorComponent {
  /**
   * The series being currently displayed.
   */
  @Input() series: string;
  /**
   * The part of the series being currently displayed.
   */
  @Input() details: string;
  /**
   * All possible menu items to select from.
   */
   readonly allSeries = ['Breaking Bad', 'Better Call Saul'];
}
