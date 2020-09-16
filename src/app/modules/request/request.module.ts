// angular module
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

// shared module
import { SharedModule } from 'src/app/shared/shared.module';

// routing module
import { RequestRoutingModule } from './request-routing.module';

// pages
import { RequestHomeComponent } from './pages/request-home/request-home.component';

// components
import { RequestContentHeaderComponent } from './components/request-content-header/request-content-header.component';
import { RequestDataCardComponent } from './components/request-data-card/request-data-card.component';
import { RequestDataCardHeaderComponent } from './components/request-data-card-header/request-data-card-header.component';
import { RequestDataTableComponent } from './components/request-data-table/request-data-table.component';

// ngrx modules
import { StoreModule } from '@ngrx/store';
import * as fromRequest from './store/reducers/request.reducer';
import { EffectsModule } from '@ngrx/effects';
import { RequestEffects } from './store/effects/request.effects';

@NgModule({
  declarations: [
    RequestHomeComponent,
    RequestContentHeaderComponent,
    RequestDataCardComponent,
    RequestDataCardHeaderComponent,
    RequestDataTableComponent,
  ],
  imports: [
    CommonModule,
    RequestRoutingModule,
    SharedModule,
    StoreModule.forFeature(fromRequest.requestFeatureKey, fromRequest.reducer),
    EffectsModule.forFeature([RequestEffects]),
    HttpClientModule
  ],
  providers: [DatePipe, TitleCasePipe]
})
export class RequestModule {}
