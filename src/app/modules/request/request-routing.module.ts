import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestHomeComponent } from './pages/request-home/request-home.component'

const routes: Routes = [
  {
    path:'home',
    component: RequestHomeComponent
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
export class RequestRoutingModule { }
