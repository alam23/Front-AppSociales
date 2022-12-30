import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './presentation/register/register.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  {
    path: 'main',
    loadChildren: () => import('./presentation/main/main.module').then(m => m.MainModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
