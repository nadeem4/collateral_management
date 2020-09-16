// angular module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// shared module
import { SharedModule } from 'src/app/shared/shared.module';

// routing module
import { TransferRoutingModule } from './transfer-routing.module';

// pages
import { TransferHomeComponent } from './page/transfer-home/transfer-home.component';

// components
import { TransferDataCardComponent } from './components/transfer-data-card/transfer-data-card.component';
import { TransferDataCardHeaderComponent } from './components/transfer-data-card-header/transfer-data-card-header.component';
import { TransferDataTableComponent } from './components/transfer-data-table/transfer-data-table.component';
import { TransferContentHeaderComponent } from './components/transfer-content-header/transfer-content-header.component';

// ngrx modules
import { StoreModule } from '@ngrx/store';
import * as fromTransfer from './store/reducers/transfer.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TransferEffects } from './store/effects/transfer.effects';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TransferHomeComponent,
    TransferDataCardComponent,
    TransferDataCardHeaderComponent,
    TransferDataTableComponent,
    TransferContentHeaderComponent,
  ],
  imports: [
    CommonModule,
    TransferRoutingModule,
    SharedModule,
    StoreModule.forFeature(
      fromTransfer.transferFeatureKey,
      fromTransfer.reducer
    ),
    EffectsModule.forFeature([TransferEffects]),
    HttpClientModule,
    
  ],
})
export class TransferModule {}
