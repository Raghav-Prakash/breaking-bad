import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd } from '@angular/router';

import { breakingBadUrlRegex, betterCallSaulUrlRegex } from 'app/constants';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  /**
   * The name of the show as seen in the path.
   */
  show: string;
  /**
   * Tab from the url to let the tabset component know which tab to highlight.
   * By default, the 'Characters' tab is selected when the app is loaded.
   */
  tabPath = 'Characters';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.router.events
      .subscribe(event => {
        if (
          event instanceof NavigationEnd || (
            event instanceof NavigationStart &&
            event.navigationTrigger === 'popstate'
            )
          ) {
            const matchesBreakingBad = event.url.match(breakingBadUrlRegex);
            const matchesBetterCallSaul = event.url.match(betterCallSaulUrlRegex);
            const matches = matchesBreakingBad ? matchesBreakingBad : matchesBetterCallSaul;
            this.show = matches ? matches[2] : 'breaking-bad';
            
            if ( matches && matches.filter(match => !!match).length === 4 ) {
              if (
                !this.tabPath ||
                this.tabPath.toLowerCase() !== matches[3].toLowerCase()
              ) {
                this.tabPath = matches[3].replace(matches[3][0], matches[3][0].toUpperCase());
                this.routeToSelectedTab(this.tabPath);
              }
            } else {
              this.tabPath = 'Characters';
              this.routeToSelectedTab(this.tabPath);
            }
        }
      });
  }

  /**
   * Upon clicking a tab, update the url with the path containing the show
   * followed by the provided tab. The path is in the form of /\<show\>/\<tab\>.
   */
  routeToSelectedTab(tab: string) {
    this.tabPath = tab;
    this.router.navigate([this.show, `${tab.toLowerCase()}`], {
      relativeTo: this.route,
    });
  }
}
