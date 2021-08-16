import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'series',
  templateUrl: 'series.component.html',
  styleUrls: ['series.component.less']
})
export class SeriesComponent implements OnInit {
  /**
   * The name of the show as seen in the path.
   */
  show: BehaviorSubject<string> = new BehaviorSubject('breaking-bad');
  /**
   * Tab from the url to let the tabset component know which tab to highlight.
   * By default, the 'Characters' tab is selected when the app is loaded.
   */
  tabPath: string;
  /**
   * Reference to any subcriptions.
   */
  private subscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit() {
    this.tabPath = this.computeActiveTab(this.location.path());
    this.getActiveTabFromCurrentUrl();
    this.subscription.add(
      this.route.data.subscribe(data => this.show.next(data.show))
    );
  }

  /**
   * Listen to changes in the current url to set the active tab.
   */
  private getActiveTabFromCurrentUrl() {
    this.location.onUrlChange((url) => {
      this.tabPath = this.computeActiveTab(url);
    })
  }

  /**
   * Get the active tab from the path in the current url. If the path is not one
   * of 'characters', 'quotes' and 'deaths', the default active tab is set to
   * 'characters'.
   */
  private computeActiveTab(url: string): string {
    const path = url.split('/').slice(-1).pop();
    if (!['characters', 'quotes', 'deaths'].includes(path)) {
      return 'characters';
    }
    return path;
  }
}