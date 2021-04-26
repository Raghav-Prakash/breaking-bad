import { Component, Input } from '@angular/core';

@Component({
  selector: 'entity-details',
  templateUrl: './entity-details.component.html',
  styleUrls: ['./entity-details.component.less']
})
export class EntityDetailsComponent {
  /**
   * The entity whose details will be presented in the view.
   */
  @Input() entity: any;
}
