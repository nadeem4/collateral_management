import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'transfer',
    loadChildren: () => import('./modules/transfer/transfer.module').then(mod => mod.TransferModule),
    data: {index: 5}
  },
  {
    path:'request',
    loadChildren: () => import('./modules/request/request.module').then(mod => mod.RequestModule),
    data: {index: 3}
  },
  {
    path: '',
    redirectTo: 'transfer',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
