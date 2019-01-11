import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PruebaComponent } from './component/prueba/prueba.component';

const routes: Routes = [
  {
    path: 'prueba',
    component: PruebaComponent,
    outlet: 'layout'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalViewRoutingModule {}
