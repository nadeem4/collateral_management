import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransferHomeComponent } from './page/transfer-home/transfer-home.component'

const routes: Routes = [
  {
    path:'home',
    component: TransferHomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferRoutingModule { }
