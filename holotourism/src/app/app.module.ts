import { RutaWebRepository } from './data/repository/ruta-repository/ruta-web.repository';
import { RutaRepository } from 'src/app/base/ruta.repository';
import { HomeWebRepository } from './data/repository/home-repository/home-web.repository';
import { HomeRepository } from 'src/app/base/home.repository';
import { MainModule } from './presentation/main/main.module';
import { CustomMaterialModule } from './tools/material.module';
import { ComponentsModule } from './tools/components/components.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterModule } from './presentation/register/register.module';
import { UserRepository } from './base/user.repository';
import { UserWebRepository } from './data/repository/user-repository/user-web.repository';
import { ProfileRepository } from './base/profile.repository';
import { ProfileWebRepository } from './data/repository/profile-repository/profile-web.repository';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule,
    CustomMaterialModule,
    HttpClientModule,
    MainModule,
    RegisterModule
  ],
  providers: [
    { provide: HomeRepository, useClass: HomeWebRepository },
    { provide: RutaRepository, useClass: RutaWebRepository },
    { provide: UserRepository, useClass: UserWebRepository },
    { provide: ProfileRepository, useClass: ProfileWebRepository }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
