import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from './../material.module';
import { RouteCardComponent } from './route-card/route-card.component';

@NgModule({
  declarations: [
    RouteCardComponent,
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
  ],
  exports: [
    RouteCardComponent,
  ]
})
export class ComponentsModule { }
