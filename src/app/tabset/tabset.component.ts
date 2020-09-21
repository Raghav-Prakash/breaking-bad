import {
  Component,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'tab-set',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.less'],
})
export class TabsetComponent implements OnChanges {
  /**
   * Receive the tab from the router url from the parent component.
   */
  @Input() tabPath: string;
  /**
   * Emit the selected tab to route to.
   */
  @Output() selectedTab: EventEmitter<string> = new EventEmitter();
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

  ngOnChanges() {
    this.setSelectedTab(this.tabPath);
  }

  /**
   * Set the selected tab to be active and all other previously active tabs
   * to be inactive and emit the selected tab to route to.
   * @param tab The tab selected.
   */
  onTabsSelect(tab: ElementRef) {
    const tabSelected: string = (tab as any).innerText;
    this.setSelectedTab(tabSelected);
    this.emitSelectedTab(tabSelected);
  }

  /**
   * Set the selected tab to be active and all other previously active tabs
   * to be inactive.
   */
  private setSelectedTab(tab: string) {
    this.tabsSelect = _.mapValues(this.tabsSelect, () => false);
    this.tabsSelect[tab] = true;
  }

  /**
   * Emit the selected tab to route to.
   */
  private emitSelectedTab(tab: string) {
    this.selectedTab.emit(Object.keys(this.tabsSelect).find(key => key === tab));
  }
}
