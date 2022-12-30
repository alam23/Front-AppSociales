import { HomeComponent } from './home/home.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: 'busqueda', component: BusquedaComponent },
      { path: 'home', component: HomeComponent},
      { path: 'profile', component: ProfileComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
