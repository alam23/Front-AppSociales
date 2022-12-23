import { NgModule } from '@angular/core';
import { CustomMaterialModule } from 'src/app/tools/material.module';
import { ComponentsModule } from 'src/app/tools/components/components.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    ComponentsModule,
    CustomMaterialModule
  ],
})
export class HomeModule {}
