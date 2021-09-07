import { Component, Input, OnInit } from '@angular/core';

import { QuotesService } from 'app/services/quotes.service';
@Component({
  selector: 'quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.less'],
})
export class QuotesComponent implements OnInit {
  /**
   * The name of the show whose quotes will be displayed.
   */
  @Input() show: string;

  constructor(
    private service: QuotesService
  ) {}

  ngOnInit() {
    this.service.getQuotes().subscribe(quotes => console.log(quotes))
  }
}
