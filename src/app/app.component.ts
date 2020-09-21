import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  /**
   * Regex to check the url for the path.
   */
  readonly urlRegex: RegExp = /(breaking\-bad)(\/(.+))?/;
  /**
   * Tab from the url to let the tabset component know which tab to highlight.
   */
  tabPath: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.router.events.subscribe(event => {
      if (
        event instanceof NavigationEnd || (
          event instanceof NavigationStart &&
          event.navigationTrigger === 'popstate'
          )
        ) {
          const matches = event.url.match(this.urlRegex);
          if ( matches && matches.length === 4 ) {
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
   * Upon clicking a tab, update the url with the provided tab as the path.
   */
  routeToSelectedTab(tab: string) {
    this.tabPath = tab;
    this.router.navigate(['breaking-bad', `${tab.toLowerCase()}`], {
      relativeTo: this.route,
    });
  }
}
