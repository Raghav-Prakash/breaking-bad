import { Component, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';
@Component({
  selector: 'series-selector',
  templateUrl: './series-selector.component.html',
  styleUrls: ['./series-selector.component.less']
})
export class SeriesSelectorComponent {
  /**
   * Reference to the series select dropdown.
   */
  @ViewChild('seriesSelect', { static: false }) seriesSelect: MatSelect;
  /**
   * Reference to the details select dropdown.
   */
  @ViewChild('detailsSelect', { static: false }) detailsSelect: MatSelect;
  /**
   * The series selected from the dropdown.
   */
  selectedSeries: string;
  /**
   * The details for a series selected from the dropdown.
   */
  selectedDetails: string;
  /**
   * Flag indicating whether a series was selected to select one of its details
   * to view.
   */
  isSeriesSelected: boolean;
  /**
   * All possible menu items to select a series to view.
   */
  readonly allSeries = ['Breaking Bad', 'Better Call Saul'];
   /**
    * All possible menu items to select details for a selected series to view.
    */
  readonly allDetails = ['Characters', 'Quotes'];

  onSelectSeries() {
    this.isSeriesSelected = true;
    setTimeout(() => {
      this.detailsSelect.open();
    }, 0);
  }

  onGoingBack() {
    this.isSeriesSelected = false;
    setTimeout(() => {
      this.seriesSelect.open();
    }, 0);
  }
}
