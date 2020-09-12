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

@NgModule({
  declarations: [
    TransferHomeComponent,
    TransferDataCardComponent,
    TransferDataCardHeaderComponent,
    TransferDataTableComponent,
    TransferContentHeaderComponent,
  ],
  imports: [CommonModule, TransferRoutingModule, SharedModule],
})
export class TransferModule {}
