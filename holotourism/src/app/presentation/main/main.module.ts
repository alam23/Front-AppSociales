import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomMaterialModule } from 'src/app/tools/material.module';
import { ComponentsModule } from 'src/app/tools/components/components.module';
import { MainComponent } from './main.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { RouterModule } from '@angular/router';
import { MainRoutingModule } from './main-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MisRutasComponent } from './mis-rutas/mis-rutas.component';
import { CrearRutaComponent } from './crear-ruta/crear-ruta.component';

@NgModule({
  declarations: [
    MainComponent,
    BusquedaComponent,
    HomeComponent,
    MisRutasComponent,
    CrearRutaComponent
  ],
  imports: [
    ComponentsModule,
    CustomMaterialModule,
    RouterModule,
    MainRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class MainModule {}
