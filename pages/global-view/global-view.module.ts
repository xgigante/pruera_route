import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PruebaComponent } from './component/prueba/prueba.component';
import { GlobalViewRoutingModule } from './global-view-routing.module';

@NgModule({
  declarations: [PruebaComponent],
  imports: [CommonModule, GlobalViewRoutingModule]
})
export class GlobalViewModule {}
