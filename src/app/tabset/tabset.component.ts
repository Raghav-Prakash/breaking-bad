import { Component, Input } from '@angular/core';
@Component({
  selector: 'tab-set',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.less'],
})
export class TabsetComponent {
  /**
   * The name of the series.
   */
  @Input() show: string;
  /**
   * Receive the tab from the router url from the parent component.
   */
  @Input() tabPath: string;
}
