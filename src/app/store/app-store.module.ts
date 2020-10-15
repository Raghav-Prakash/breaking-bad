import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from './../../environments/environment';

import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from 'app/store/entity-metdata';

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    EntityDataModule.forRoot(entityConfig),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ]
})
export class AppStoreModule {}
