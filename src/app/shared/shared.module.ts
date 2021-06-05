// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

// Components
import { NavigatePagesComponent } from 'app/shared/navigate-pages/navigate-pages.component';
import { SideMenuComponent } from 'app/shared/side-menu/side-menu.component';
@NgModule({
  declarations: [
    NavigatePagesComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    PaginationModule.forRoot(),
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    HttpClientModule,
  ],
  exports: [
    NavigatePagesComponent,
    SideMenuComponent
  ]
})
export class SharedModule { }
