import { Component, ElementRef } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.less'],
})
export class TabsetComponent {
  /**
   * Map containing active flags for each tab. Only one tab can be active at
   * a time, to indicate selection. By default, the "Characters" tab is
   * selected.
   */
  tabsSelect: { [tab: string]: boolean } = {
    Characters: true,
    Quotes: false,
    Deaths: false,
  };

  /**
   * Set the selected tab to be active and all other previously active tabs
   * to be inactive.
   * @param tab The tab selected.
   */
  onTabsSelect(tab: ElementRef) {
    this.tabsSelect = _.mapValues(this.tabsSelect, () => false);
    this.tabsSelect[(tab as any).innerText] = true;
  }
}
