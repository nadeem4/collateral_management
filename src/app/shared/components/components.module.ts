import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TableHeaderComponent } from './table-header/table-header.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { TableSearchComponent } from './table-search/table-search.component';
import { RouterModule } from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RangeDateFilterComponent } from './range-date-filter/range-date-filter.component';
import { RangeTimeFilterComponent } from './range-time-filter/range-time-filter.component';
import { DataFilterComponent } from './data-filter/data-filter.component';

import { AgGridModule } from 'ag-grid-angular';
import { SetFilterComponent } from './set-filter/set-filter.component';
import { FormsModule } from '@angular/forms';
import { LayoutMenuComponent } from './layout-menu/layout-menu.component';
import { ChangeLayoutComponent } from './change-layout/change-layout.component';
import { ChangeLayoutHeaderComponent } from './change-layout-header/change-layout-header.component';


import { DragDropModule} from '@angular/cdk/drag-drop';

const components = [
  HeaderComponent,
  SideNavComponent,
  TableHeaderComponent,
  CheckBoxComponent,
  TableSearchComponent,
  RangeDateFilterComponent,
  RangeTimeFilterComponent,
  DataFilterComponent,
  DataTableComponent,
  SetFilterComponent,
  LayoutMenuComponent,
  ChangeLayoutComponent,
  ChangeLayoutHeaderComponent
];

@NgModule({
  declarations: [...components,  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    AgGridModule.withComponents([
      SetFilterComponent,
      RangeDateFilterComponent,
      RangeTimeFilterComponent,
      TableSearchComponent,
    ]),
    FormsModule,
    DragDropModule
  ],
  exports: [...components],
})
export class ComponentsModule {}
