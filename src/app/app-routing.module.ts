import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'transfer',
    loadChildren: () => import('./modules/transfer/transfer.module').then(mod => mod.TransferModule)
  },
  {
    path:'request',
    loadChildren: () => import('./modules/request/request.module').then(mod => mod.RequestModule)
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
