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
  ],
  providers: [
    { provide: HomeRepository, useClass: HomeWebRepository },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
