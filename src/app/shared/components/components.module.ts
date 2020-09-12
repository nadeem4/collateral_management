import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TableHeaderComponent } from './table-header/table-header.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { TableSearchComponent } from './table-search/table-search.component';
import { RouterModule } from '@angular/router';

const components = [
  HeaderComponent,
  SideNavComponent,
  TableHeaderComponent,
  CheckBoxComponent,
  TableSearchComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, RouterModule],
  exports: [...components],
})
export class ComponentsModule {}
