import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1ModuleModule } from './component1/component1-module.module';
import {  HttpClientModule } from '@angular/common/http';
import { HttpComponentComponent } from './http-component/http-component.component';
@NgModule({
  declarations: [
    AppComponent,
    HttpComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Component1ModuleModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports : []
})
export class AppModule { }
