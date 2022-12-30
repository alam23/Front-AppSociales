import { RutaComponent } from './ruta/ruta.component';
import { HomeComponent } from './home/home.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { MisRutasComponent } from './mis-rutas/mis-rutas.component';
import { CrearRutaComponent } from './crear-ruta/crear-ruta.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';


const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: 'busqueda', component: BusquedaComponent },
      { path: 'home', component: HomeComponent},
      { path: 'mis_rutas', component: MisRutasComponent},
      { path: 'crear_ruta', component: CrearRutaComponent},
      { path: 'ruta', component: RutaComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
