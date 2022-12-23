import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CustomMaterialModule } from './../material.module';

@NgModule({
  declarations: [
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
  ],
  exports: [
    SidenavComponent,
  ]
})
export class ComponentsModule { }
