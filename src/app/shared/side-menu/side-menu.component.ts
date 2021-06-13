import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.less']
})
export class SideMenuComponent {

  constructor(
    private router: Router
  ) {}
  
  /**
   * On clicking a menu option, route to the show's page displaying its
   * relevant content.
   * @param show The show whose contents need to be displayed.
   */
  onMenuItemClick(show: 'breaking-bad' | 'better-call-saul') {
    this.router.navigate([show, 'characters']);
  }
}
