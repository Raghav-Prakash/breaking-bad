// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from 'app/shared/shared.module';

// Components
import { DeathsComponent } from 'app/tabset-components/deaths/deaths.component';

@NgModule({
  declarations: [
    DeathsComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    HttpClientModule,
    SharedModule
  ],
  exports: [
    DeathsComponent
  ],
})
export class DeathsModule { }
