import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

import { DisplayStore } from 'store/display/display.store';
@Component({
  selector: "series",
  templateUrl: "./series.component.html",
  styleUrls: ["./series.component.less"],
})
export class SeriesComponent implements OnInit, OnDestroy {
  /**
   * The name of the series as seen in the path.
   */
  series: string;
  /**
   * The details for a series. These details are one of 'characters' and 'quotes'.
   */
  details: string;
  /**
   * Reference to any subcriptions.
   */
  private subscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private displayStore: DisplayStore
  ) {}

  ngOnInit() {
    this.subscription.add(
      this.route.params.subscribe((params : { series: string, details: string }) => {
        const { series, details } = params;
        this.series = series ? series : 'unknown';
        this.details = details;
        this.displayStore.setDisplayState(series, details);
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
