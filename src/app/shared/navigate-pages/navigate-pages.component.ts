import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Structure to hold the contents of a page-change event.
 */
interface PageChange {
  page: number;
  itemsPerPage: number;
}

@Component({
  selector: 'navigate-pages',
  templateUrl: './navigate-pages.component.html',
  styleUrls: ['./navigate-pages.component.less']
})
export class NavigatePagesComponent{
  /**
   * The total number of items to determine the number of pages.
   */
  @Input() totalItemsCount: number;
  /**
   * The number of items to be displayed per page.
   */
  @Input() itemsPerPageCount: number;
  /**
   * Emit the event when changing the page number.
   */
  @Output() pageChange: EventEmitter<PageChange> = new EventEmitter();

  /**
   * Emit the page-change event when the user has changed the page.
   */
   onPageChange(event: PageChange) {
     this.pageChange.emit(event);
   }
}
